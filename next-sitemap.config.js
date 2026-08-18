/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://servanisafetynets.com', // 🔗 Replace with your real domain
  generateRobotsTxt: true, // Generates robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*', '/private/*'], // Optional: exclude pages
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/private'] },
    ],
  },
  outDir: './out', 
};
