/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cleanwithpremier.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => {
    const homepageSections = [
      '/#services',
      '/#why-us',
      '/#testimonials',
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
