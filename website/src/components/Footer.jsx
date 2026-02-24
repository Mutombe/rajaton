import React from 'react';
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { GradientLine } from "@/components/backgrounds";

export default function Footer({ openPolicy }) {
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { label: "Key Account Management", path: "/services/key-account-management" },
        { label: "Merchandising & Execution", path: "/services/merchandising-execution" },
        { label: "Distribution & Logistics", path: "/services/distribution-logistics" },
        { label: "Private Label Development", path: "/services/private-label" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Transport & Logistics", path: "/industries" },
        { label: "Finance & Fintechs", path: "/industries" },
        { label: "Mining", path: "/industries" },
      ],
    },
  ];

  return (
    <footer className="relative bg-surface border-t border-border">
      <GradientLine />
      <div className="container-main pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <div className="bg-[#DC2626] px-3 py-1.5 rounded-md inline-block">
                <img src="/logo.png" alt="Rajaton Logo" className="w-auto h-6" />
              </div>
            </Link>
            <p className="text-fg-muted mt-6 leading-relaxed max-w-sm">
              The world's premier brand distribution company. Driving growth through strategic partnerships, flawless execution, and supply chain excellence across 47+ countries.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-fg/5 flex items-center justify-center hover:bg-[#DC2626]/20 hover:text-[#DC2626] transition-all text-fg-muted"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group, i) => (
            <div key={i}>
              <h4 className="text-fg font-semibold mb-5 text-sm tracking-wider uppercase">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, li) => (
                  <li key={li}>
                    <Link to={link.path} className="text-fg-muted hover:text-fg transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-fg-muted text-sm">&copy; {new Date().getFullYear()} Rajaton Global Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => openPolicy("privacy")} className="text-fg-muted hover:text-fg text-sm transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => openPolicy("cookie")} className="text-fg-muted hover:text-fg text-sm transition-colors">
              Cookie Policy
            </button>
            <button className="text-fg-muted hover:text-fg text-sm transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
