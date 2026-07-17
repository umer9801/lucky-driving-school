import { MetadataRoute } from 'next'

const blogSlugs = [
  'how-to-pass-class-5-road-test-edmonton',
  'tips-for-nervous-drivers-edmonton',
  'class-7-gdl-guide-alberta',
  'best-driving-school-edmonton-how-to-choose',
  'winter-driving-tips-edmonton-alberta',
  'parallel-parking-tips-edmonton-road-test',
  'road-test-mistakes-to-avoid-edmonton',
  'female-driving-instructor-edmonton-benefits',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.luckydrivingschool.net'

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: '2025-07-15',
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: '2025-07-15',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2025-07-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: '2025-07-15',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2025-07-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: '2025-07-15',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: '2025-07-15',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogEntries,
  ]
}
