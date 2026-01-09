import React from 'react'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'

const categories = ['All', 'Industry Insights', 'Retail Trends', 'Case Studies', 'Company News', 'Expert Tips']

const blogPosts = [
  {
    id: 1,
    slug: 'future-of-fmcg-retail-south-africa',
    title: 'The Future of FMCG Retail in South Africa: Trends to Watch in 2025',
    excerpt: 'As we look ahead to 2025, several key trends are reshaping the FMCG retail landscape in South Africa. From digital transformation to changing consumer behaviors, here\'s what brands need to know.',
    category: 'Industry Insights',
    author: 'Johan van Rensburg',
    authorRole: 'CEO',
    date: 'January 5, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    id: 2,
    slug: 'merchandising-best-practices-2024',
    title: 'Merchandising Best Practices: Maximizing Shelf Impact',
    excerpt: 'Effective merchandising is crucial for driving sales in competitive retail environments. Learn the strategies that top-performing brands use to stand out on shelf.',
    category: 'Expert Tips',
    author: 'Nomvula Dlamini',
    authorRole: 'COO',
    date: 'December 28, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 3,
    slug: 'case-study-premium-foods-growth',
    title: 'Case Study: How Premium Foods SA Achieved 40% Growth',
    excerpt: 'A deep dive into our partnership with Premium Foods SA and the strategies that drove their remarkable market expansion across all major retailers.',
    category: 'Case Studies',
    author: 'David Botha',
    authorRole: 'Commercial Director',
    date: 'December 20, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    id: 4,
    slug: 'private-label-opportunity-south-africa',
    title: 'The Private Label Opportunity in South Africa',
    excerpt: 'Private label products are growing faster than branded goods in South Africa. Understand the opportunity and how retailers can capitalize on this trend.',
    category: 'Retail Trends',
    author: 'Priya Naidoo',
    authorRole: 'Finance Director',
    date: 'December 15, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 5,
    slug: 'rajaton-expands-western-cape',
    title: 'Rajaton Expands Western Cape Operations',
    excerpt: 'We\'re excited to announce the expansion of our Cape Town operations, bringing enhanced service capabilities to the Western Cape region.',
    category: 'Company News',
    author: 'Johan van Rensburg',
    authorRole: 'CEO',
    date: 'December 10, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 6,
    slug: 'data-driven-distribution-strategies',
    title: 'Data-Driven Distribution: Optimizing Your Supply Chain',
    excerpt: 'How modern analytics and technology are transforming FMCG distribution, enabling smarter decisions and more efficient operations.',
    category: 'Industry Insights',
    author: 'Nomvula Dlamini',
    authorRole: 'COO',
    date: 'December 5, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 7,
    slug: 'key-account-negotiation-tips',
    title: '5 Key Account Negotiation Tips for FMCG Brands',
    excerpt: 'Master the art of retail negotiation with these proven strategies for securing better shelf space, pricing, and promotional support.',
    category: 'Expert Tips',
    author: 'David Botha',
    authorRole: 'Commercial Director',
    date: 'November 28, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 8,
    slug: 'consumer-trends-post-pandemic',
    title: 'Consumer Trends: What\'s Changed Post-Pandemic',
    excerpt: 'An analysis of how South African consumer behavior has evolved and what it means for FMCG brands and retailers.',
    category: 'Retail Trends',
    author: 'Priya Naidoo',
    authorRole: 'Finance Director',
    date: 'November 20, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
]

function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const featuredPosts = blogPosts.filter(post => post.featured)
  
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <PageTransition>
      <SEO
        title="Blog"
        description="Insights, trends, and expert perspectives on the FMCG industry in South Africa from the Rajaton Brand Solutions team."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-rajaton-off-white via-white to-rajaton-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-rajaton-red/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-rajaton-cream rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-rajaton-red/10 text-rajaton-red font-semibold rounded-full text-sm mb-6">
              Our Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-rajaton-charcoal mb-6">
              Insights & <span className="text-rajaton-red">Industry News</span>
            </h1>
            <p className="text-lg text-rajaton-slate leading-relaxed">
              Stay informed with the latest trends, expert perspectives, and success stories 
              from the FMCG industry in South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-rajaton-charcoal">Featured Articles</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rajaton-charcoal/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-rajaton-red text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="font-display text-2xl font-bold text-rajaton-charcoal mb-3 group-hover:text-rajaton-red transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-rajaton-slate mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-rajaton-cream rounded-full flex items-center justify-center">
                            <User size={18} className="text-rajaton-charcoal" />
                          </div>
                          <div>
                            <p className="font-semibold text-rajaton-charcoal text-sm">{post.author}</p>
                            <p className="text-rajaton-slate text-xs">{post.authorRole}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-rajaton-slate text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} /> {post.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding bg-rajaton-off-white">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-rajaton-slate" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-transparent focus:border-rajaton-red focus:outline-none transition-colors shadow-sm"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-rajaton-red text-white'
                      : 'bg-white text-rajaton-charcoal hover:bg-rajaton-cream'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-center text-rajaton-slate mb-8">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </p>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-rajaton-charcoal text-xs font-medium rounded-full flex items-center gap-1">
                          <Tag size={12} /> {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold text-rajaton-charcoal mb-2 group-hover:text-rajaton-red transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-rajaton-slate text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-rajaton-slate">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} /> {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {post.readTime}
                          </span>
                        </div>
                        <span className="text-rajaton-red font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-rajaton-slate" />
                </div>
                <h3 className="font-display text-xl font-bold text-rajaton-charcoal mb-2">
                  No articles found
                </h3>
                <p className="text-rajaton-slate mb-4">
                  Try adjusting your search or filter
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}
                  className="text-rajaton-red font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-rajaton-charcoal to-rajaton-charcoal/90 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Subscribe to our newsletter for the latest industry insights, 
                trends, and Rajaton news delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-rajaton-red"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-rajaton-red text-white font-semibold rounded-full hover:bg-rajaton-red/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-white/50 text-sm mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Blog
