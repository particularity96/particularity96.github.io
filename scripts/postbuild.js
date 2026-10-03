// Runs automatically after `npm run build` (see "postbuild" in package.json).
//
// 1. One HTML file per page
//    GitHub Pages only serves files that exist. With real URLs like /musical
//    (instead of /#/musical) there is no such file, so GitHub would answer 404.
//    This script writes build/index.html once per page (e.g. build/musical.html),
//    which GitHub Pages serves for /musical with status 200.
//
// 2. Page specific tags without JavaScript
//    Each file gets its own title, description, canonical URL and link preview
//    tags from src/seo/pages.json. Link previews (WhatsApp, LinkedIn, ...) and
//    crawlers that don't run JavaScript see the right values. The tags are marked
//    with data-react-helmet so React Helmet replaces them instead of adding duplicates.
//
// 3. Structured data (JSON-LD) from src/seo/structured-data.json on the home page.
//
// 4. build/sitemap.xml generated from src/seo/pages.json.
//
// build/404.html is a plain copy, so unknown URLs still load the app
// (the catch-all route in App.tsx then redirects, e.g. /archive -> /entdecken).

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const buildDir = path.join(root, "build");
const seo = JSON.parse(fs.readFileSync(path.join(root, "src", "seo", "pages.json"), "utf8"));
const structuredData = JSON.parse(fs.readFileSync(path.join(root, "src", "seo", "structured-data.json"), "utf8"));
const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

const escapeHtml = (value) =>
    String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Remove help texts (keys starting with "_") and empty values ("", [], {})
const clean = (value) => {
    if (Array.isArray(value)) {
        const items = value.map(clean).filter((v) => v !== undefined);
        return items.length ? items : undefined;
    }
    if (value && typeof value === "object") {
        const entries = Object.entries(value)
            .filter(([key]) => !key.startsWith("_"))
            .map(([key, v]) => [key, clean(v)])
            .filter(([, v]) => v !== undefined);
        return entries.length ? Object.fromEntries(entries) : undefined;
    }
    return value === "" || value === null ? undefined : value;
};

const jsonLd = clean(structuredData);
const jsonLdTag = jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`
    : "";

// Warn if a page exists in App.tsx but is missing in pages.json (it would get no HTML file)
const appSource = fs.readFileSync(path.join(root, "src", "App.tsx"), "utf8");
const appRoutes = [...appSource.matchAll(/<Route\s+path="(\/[\w-]*)"\s+element=\{\s*(<Navigate)?/g)]
    .filter((m) => !m[2]) // skip redirects like /archive
    .map((m) => m[1]);
for (const route of appRoutes) {
    if (!seo.pages.some((p) => p.path === route)) {
        console.warn(`postbuild: WARNING – route ${route} is missing in src/seo/pages.json`);
    }
}

for (const page of seo.pages) {
    const url = seo.siteUrl + page.path;
    const tags = [
        `<meta name="description" content="${escapeHtml(page.description)}" data-react-helmet="true">`,
        `<link rel="canonical" href="${escapeHtml(url)}" data-react-helmet="true">`,
        `<meta property="og:title" content="${escapeHtml(page.title)}" data-react-helmet="true">`,
        `<meta property="og:description" content="${escapeHtml(page.description)}" data-react-helmet="true">`,
        `<meta property="og:url" content="${escapeHtml(url)}" data-react-helmet="true">`,
        page.path === "/" ? jsonLdTag : "",
    ].join("");

    const html = template
        .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
        .replace("</head>", `${tags}</head>`);

    const file = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
    fs.writeFileSync(path.join(buildDir, file), html);
}
fs.writeFileSync(path.join(buildDir, "404.html"), template);

// Sitemap
const today = new Date().toISOString().slice(0, 10);
const sitemap = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...seo.pages.map((page) =>
        [
            "\t<url>",
            `\t\t<loc>${escapeHtml(seo.siteUrl + page.path)}</loc>`,
            `\t\t<lastmod>${today}</lastmod>`,
            `\t\t<priority>${Number(page.priority ?? 0.5).toFixed(1)}</priority>`,
            "\t</url>",
        ].join("\n")
    ),
    "</urlset>",
    "",
].join("\n");
fs.writeFileSync(path.join(buildDir, "sitemap.xml"), sitemap);

console.log(
    `postbuild: wrote ${seo.pages.length} pages (${seo.pages.map((p) => p.path).join(", ")}), 404.html, ` +
    `sitemap.xml${jsonLdTag ? " and structured data" : ""}`
);
