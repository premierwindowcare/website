/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cleanwithpremier.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/doorhanger', '/hard-water-stain-removal'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/doorhanger'],
      },
    ],
  },
  additionalPaths: async (config) => {
    const homepageSections = [
      '/#services',
      '/#why-us',
      '/#reviews',
      '/#service-area',
      '/#contact',
    ]

    return homepageSections.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    }))
  },
}
