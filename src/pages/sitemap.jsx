// import { SitemapStream, streamToPromise } from "sitemap";
import { getAllPostSlugs } from "../../lib/posts";
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  try {
    // An array with your links
    const links = [];
    getAllPostSlugs().map((post) => {
      links.push({
        url: `/${post.params.slug}`,
        changefreq: "daily",
        priority: 0.3,
      });
    });

    // Add other pages
    const pages = [
      "/Product",
      "/ProductList",
      "/ProductList1",
      "/ProductList2",
      "/ProductList3",
      "/ProductList4",
      "/Cart",
    ];
    pages.map((url) => {
      links.push({
        url,
        changefreq: "daily",
        priority: 0.3,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
