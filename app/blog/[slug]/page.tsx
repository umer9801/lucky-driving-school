import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-data'
import { BlogPostClient } from './blog-post-client'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.luckydrivingschool.net/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.luckydrivingschool.net/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `https://www.luckydrivingschool.net${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://www.luckydrivingschool.net${post.image}`],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.luckydrivingschool.net${post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://www.luckydrivingschool.net/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lucky Driving School Edmonton',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.luckydrivingschool.net/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.luckydrivingschool.net/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={post} related={related} />
    </>
  )
}
