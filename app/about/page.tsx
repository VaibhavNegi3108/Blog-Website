import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Blog
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We're passionate about sharing knowledge and insights in web development, 
              technology, and design.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Mission */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our mission is to provide high-quality, practical content that helps developers, 
                  designers, and tech enthusiasts stay current with the latest trends and best practices 
                  in web development and technology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe in the power of knowledge sharing and community building. Through our 
                  blog posts, tutorials, and insights, we aim to make complex topics accessible and 
                  help our readers grow in their careers.
                </p>
              </div>

              {/* What We Cover */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Cover</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Development</h3>
                    <p className="text-gray-700">
                      Modern frameworks, best practices, performance optimization, and 
                      cutting-edge technologies in web development.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & UX</h3>
                    <p className="text-gray-700">
                      User experience design, responsive design principles, accessibility, 
                      and design trends that matter.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Trends</h3>
                    <p className="text-gray-700">
                      Emerging technologies, industry insights, and future predictions 
                      in the tech world.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Tutorials & Guides</h3>
                    <p className="text-gray-700">
                      Step-by-step tutorials, practical guides, and hands-on projects 
                      to help you learn and grow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Values */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                      <p className="text-gray-700">
                        We prioritize quality over quantity. Every article is carefully researched, 
                        well-written, and provides real value to our readers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                      <p className="text-gray-700">
                        We believe technology should be accessible to everyone. Our content 
                        is designed to be inclusive and helpful for developers of all skill levels.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                      <p className="text-gray-700">
                        We foster a supportive community where developers can learn, share, 
                        and grow together. Your feedback and engagement make us better.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-primary-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-700 mb-6">
                  Have questions, suggestions, or want to collaborate? We'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:hello@blogwebsite.com"
                    className="btn-primary"
                  >
                    Send us an email
                  </a>
                  <a 
                    href="https://twitter.com/blogwebsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Follow us on Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind our blog content and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-primary-600 mb-3">Lead Developer</p>
              <p className="text-gray-600">
                Passionate about modern web technologies and sharing knowledge with the community.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-primary-600 mb-3">Design Lead</p>
              <p className="text-gray-600">
                UX designer focused on creating beautiful, accessible, and user-friendly experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">MJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-primary-600 mb-3">Content Writer</p>
              <p className="text-gray-600">
                Technical writer who loves breaking down complex topics into digestible content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
