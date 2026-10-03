// Runs automatically after `npm run build` (see "postbuild" in package.json).
//
// GitHub Pages only serves files that exist. With real URLs like /musical
// (instead of /#/musical) there is no such file, so GitHub would answer 404.
// This script copies build/index.html to one file per route (e.g. build/musical.html),
// which GitHub Pages serves for /musical with status 200. React Router then
// renders the right page.
//
// build/404.html is a copy as well, so unknown or mistyped URLs still load the app
// (the catch-all route in App.tsx then redirects to the home page).

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const buildDir = path.join(root, "build");
const indexHtml = fs.readFileSync(path.join(buildDir, "index.html"));

// Read all routes from App.tsx, e.g. <Route path="/musical" ...>
const appSource = fs.readFileSync(path.join(root, "src", "App.tsx"), "utf8");
const routes = [...appSource.matchAll(/<Route\s+path="\/([\w-]+)"/g)].map((m) => m[1]);

for (const route of routes) {
    fs.writeFileSync(path.join(buildDir, `${route}.html`), indexHtml);
}
fs.writeFileSync(path.join(buildDir, "404.html"), indexHtml);

console.log(`postbuild: created ${routes.length} route pages (${routes.join(", ")}) and 404.html`);
