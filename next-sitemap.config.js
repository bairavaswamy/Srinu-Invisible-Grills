/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://srinuinvisiblegrills.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/admin/*',
    '/private/*',
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/private'] },
    ],
  },
  outDir: './out', 
};
