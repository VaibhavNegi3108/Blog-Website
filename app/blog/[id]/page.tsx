import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import blogPosts from '@/data/blog-posts.json'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id.toString() === params.id)

  if (!post) {
    notFound()
  }

  // Format the content with proper line breaks
  const formattedContent = post.content.split('\n').map((paragraph, index) => {
    if (paragraph.trim() === '') {
      return <br key={index} />
    }
    
    if (paragraph.startsWith('## ')) {
      return (
        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {paragraph.replace('## ', '')}
        </h2>
      )
    }
    
    if (paragraph.startsWith('### ')) {
      return (
        <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          {paragraph.replace('### ', '')}
        </h3>
      )
    }
    
    if (paragraph.startsWith('- ')) {
      return (
        <li key={index} className="text-gray-700 mb-2">
          {paragraph.replace('- ', '')}
        </li>
      )
    }
    
    if (paragraph.startsWith('```')) {
      return null // Skip code block markers for now
    }
    
    return (
      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
        {paragraph}
      </p>
    )
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>

          <div className="p-8">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-lg font-medium text-gray-600">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {formattedContent}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">Published on {post.date}</p>
                  </div>
                </div>
                
                <Link 
                  href="/"
                  className="btn-secondary"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <article key={relatedPost.id} className="card card-hover">
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="text-sm text-gray-500">{relatedPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
