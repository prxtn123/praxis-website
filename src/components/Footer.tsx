import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "/praxis-website/#features" },
    { name: "Safety", href: "/praxis-website/#compliance" },
    { name: "Analytics", href: "/praxis-website/#industrial-future" },
  ],
  company: [
    { name: "About", href: "/praxis-website/#/" },
    { name: "Careers", href: "/praxis-website/#/" },
    { name: "Contact", href: "/praxis-website/#contact" },
  ],
  legal: [
    { name: "Privacy", href: "/praxis-website/#/" },
    { name: "Terms", href: "/praxis-website/#/" },
    { name: "GDPR", href: "/praxis-website/#/" },
  ],
};

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#f5f5f7]">
      {/* CTA Section */}
      <div className="max-w-[980px] mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Ready to transform
            <br />
            your safety operations?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the industry leaders pioneering the future of logistics safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:tom.noble@praxisgb.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-colors"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/praxis-website/#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground rounded-full font-medium hover:bg-gray-100 transition-colors border border-black/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-black/10">
        <div className="max-w-[980px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand & Contact */}
            <div className="col-span-2">
              <span className="font-semibold text-lg text-foreground">node</span>
              <p className="text-sm text-muted-foreground mt-3 mb-6 max-w-xs">
                AI-powered safety platform for logistics and supply chain.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="mailto:tom.noble@praxisgb.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  tom.noble@praxisgb.com
                </a>
                <a href="tel:+447542315784" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  +44 7542 315784
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Manchester, England
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-medium text-foreground text-sm mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground text-sm mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground text-sm mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10">
          <div className="max-w-[980px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              © 2026 node. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              A <span className="text-foreground font-medium">Praxis GB</span> product
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
