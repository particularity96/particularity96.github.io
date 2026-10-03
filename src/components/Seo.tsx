import React from "react";
import { Helmet } from "react-helmet";
import seo from "../seo/pages.json";

interface SeoProps {
    path: string; // Must match a "path" in src/seo/pages.json
}

// Sets title, description, canonical URL and link preview tags for a page.
// The same values are written into the static HTML files by scripts/postbuild.js,
// so crawlers without JavaScript see them too. Edit them in src/seo/pages.json.
const Seo: React.FC<SeoProps> = ({ path }) => {
    const page = seo.pages.find((p) => p.path === path);
    if (!page) return null;

    const url = seo.siteUrl + page.path;

    return (
        <Helmet>
            <title>{page.title}</title>
            <meta name="description" content={page.description} />
            <link rel="canonical" href={url} />
            <meta property="og:title" content={page.title} />
            <meta property="og:description" content={page.description} />
            <meta property="og:url" content={url} />
        </Helmet>
    );
};

export default Seo;
