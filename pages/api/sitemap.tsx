import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import postService from '@/services/postService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      // cacheTime: 600000,
    });

    const response = await postService.getPosts({ url: '/posts' });
    const links = response?.data?.data || [];

    // Create each URL row
    if (links.length) {
      links.forEach((link: any) => {
        smStream.write({
          url: `/posts/${link.slug ? `${link.slug}-${link._id}` : link._id}`,
          changefreq: 'daily',
          priority: 0.9,
        });
      });

      smStream.write({
        url: '/about-me',
        changefreq: 'daily',
        priority: 0.9,
      });
    } else {
      smStream.write({
        url: '/',
        changefreq: 'daily',
        priority: 0.9,
      });
    }

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
