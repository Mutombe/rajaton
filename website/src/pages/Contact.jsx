import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  Users,
  Briefcase,
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { toast } from "sonner";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+27 11 123 4567", "+27 82 123 4567"],
    action: "tel:+27111234567",
    actionText: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@rajaton.co.za", "sales@rajaton.co.za"],
    action: "mailto:info@rajaton.co.za",
    actionText: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Business Park Drive", "Sandton, Johannesburg 2196"],
    action: "https://maps.google.com",
    actionText: "Get Directions",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat - Sun: Closed"],
    action: null,
    actionText: null,
  },
];

const inquiryTypes = [
  { value: "general", label: "General Inquiry", icon: MessageSquare },
  { value: "partnership", label: "Brand Partnership", icon: Building2 },
  { value: "distribution", label: "Distribution Services", icon: Users },
  { value: "careers", label: "Career Opportunities", icon: Briefcase },
];

const faqs = [
  {
    question: "What areas of South Africa do you cover?",
    answer:
      "We provide nationwide coverage across all 9 provinces in South Africa, with dedicated teams in major metropolitan areas including Johannesburg, Cape Town, Durban, Pretoria, and Port Elizabeth.",
  },
  {
    question: "How long does it typically take to onboard a new brand?",
    answer:
      "Our standard onboarding process takes 4-6 weeks, which includes retailer introductions, planogram development, and initial store rollouts. However, timeline varies based on complexity and scope.",
  },
  {
    question: "Do you work with international brands looking to enter SA?",
    answer:
      "Absolutely! We specialize in helping international brands navigate the South African retail landscape, from regulatory compliance to retailer negotiations and market entry strategy.",
  },
  {
    question: "What retailers do you have relationships with?",
    answer:
      "We have established relationships with all major South African retailers including Shoprite/Checkers, Pick n Pay, Woolworths, Spar, Clicks, Dis-Chem, and numerous regional chains.",
  },
  {
    question: "Can you help with private label development?",
    answer:
      "Yes, we offer comprehensive private label services including product development, supplier sourcing, quality control, packaging design, and retail placement strategies.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll be in touch soon.");

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        inquiryType: "general",
        message: "",
      });
    }, 3000);
  };

  return (
    <PageTransition>
      <SEO
        title="Contact Us"
        description="Get in touch with Rajaton Brand Solutions. We're here to help your brand succeed in the South African FMCG market."
        keywords="contact rajaton, fmcg partner south africa, brand solutions contact, distribution services inquiry"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-rajaton-charcoal overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rajaton-red/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rajaton-red/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-rajaton-red/10 text-rajaton-red rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Start a{" "}
              <span className="text-rajaton-red">Conversation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're looking to expand your brand's presence, explore
              distribution opportunities, or simply learn more about our
              services, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-10 z-20 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-rajaton-red/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={28} className="text-rajaton-red" />
                </div>
                <h3 className="font-display font-bold text-rajaton-charcoal text-lg mb-3">
                  {item.title}
                </h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-rajaton-slate text-sm">
                    {detail}
                  </p>
                ))}
                {item.action && (
                  <a
                    href={item.action}
                    target={
                      item.action.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.action.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-rajaton-red font-semibold text-sm mt-4 hover:underline"
                  >
                    {item.actionText}
                    <Send size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-rajaton-off-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-rajaton-charcoal mb-4">
                Send Us a Message
              </h2>
              <p className="text-rajaton-slate mb-8">
                Fill out the form below and one of our team members will get
                back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-rajaton-charcoal font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-rajaton-red focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-rajaton-charcoal font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-rajaton-red focus:outline-none transition-colors"
                      placeholder="john@company.co.za"
                    />
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-rajaton-charcoal font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-rajaton-red focus:outline-none transition-colors"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-rajaton-charcoal font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-rajaton-red focus:outline-none transition-colors"
                      placeholder="+27 82 123 4567"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-rajaton-charcoal font-semibold mb-2">
                    Inquiry Type *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            inquiryType: type.value,
                          }))
                        }
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                          formData.inquiryType === type.value
                            ? "border-rajaton-red bg-rajaton-red/5 text-rajaton-red"
                            : "border-gray-200 bg-white text-rajaton-slate hover:border-rajaton-red/50"
                        }`}
                      >
                        <type.icon size={18} />
                        <span className="text-sm font-medium">
                          {type.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-rajaton-charcoal font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-rajaton-red focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your brand and how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  loading={isSubmitting}
                  icon={isSubmitted ? CheckCircle2 : Send} // Pass components, not JSX
                >
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="relative h-80 bg-rajaton-cream rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rajaton-red/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin
                      size={48}
                      className="text-rajaton-red mx-auto mb-4"
                    />
                    <p className="font-display font-bold text-rajaton-charcoal text-lg">
                      Sandton, Johannesburg
                    </p>
                    <p className="text-rajaton-slate">
                      123 Business Park Drive
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-rajaton-red font-semibold mt-4 hover:underline"
                    >
                      Open in Google Maps
                      <Send size={14} />
                    </a>
                  </div>
                </div>
                {/* Decorative Grid */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Office Info */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="font-display font-bold text-rajaton-charcoal text-xl mb-6">
                  Head Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Building2
                      className="text-rajaton-red flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-rajaton-charcoal">
                        Rajaton Brand Solutions (Pty) Ltd
                      </p>
                      <p className="text-rajaton-slate text-sm">
                        Registration: 2015/123456/07
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin
                      className="text-rajaton-red flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <p className="text-rajaton-slate">
                        123 Business Park Drive
                      </p>
                      <p className="text-rajaton-slate">
                        Sandton, Johannesburg 2196
                      </p>
                      <p className="text-rajaton-slate">South Africa</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="font-semibold text-rajaton-charcoal mb-4">
                    Connect With Us
                  </p>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                      { icon: Facebook, href: "#", label: "Facebook" },
                      { icon: Instagram, href: "#", label: "Instagram" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-rajaton-off-white rounded-lg flex items-center justify-center hover:bg-rajaton-red hover:text-white transition-colors text-rajaton-slate"
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-rajaton-red rounded-2xl p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg">
                      Quick Response Promise
                    </p>
                    <p className="text-white/80 text-sm">
                      We aim to respond to all inquiries within 24 business
                      hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-rajaton-red/10 text-rajaton-red rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-rajaton-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-rajaton-slate text-lg">
              Find quick answers to common questions about our services and
              partnership process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-rajaton-off-white rounded-xl hover:bg-rajaton-cream transition-colors"
                >
                  <span className="font-display font-bold text-rajaton-charcoal text-left pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      size={24}
                      className="text-rajaton-red flex-shrink-0"
                    />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-2 text-rajaton-slate">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-rajaton-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rajaton-red/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rajaton-red/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Brand in South Africa?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how Rajaton can help you achieve your distribution
              and market expansion goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                as="a"
                href="tel:+27111234567"
                icon={Phone} // Pass component, not JSX
              >
                Call Us Now
              </Button>
              <Button
                variant="secondary"
                size="lg"
                as="a"
                href="mailto:info@rajaton.co.za"
                icon={Mail} // Pass component, not JSX
                className="border-white/30 text-white hover:bg-white hover:text-rajaton-charcoal"
              >
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Contact;
