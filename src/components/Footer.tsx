import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/logo_white.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow mx-auto px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img src={logoWhite} alt="The Open Door Center" className="h-10 w-auto mb-3" />
          <p className="font-body text-sm opacity-80 leading-relaxed">
            A place where every door is open.
          </p>
          <p className="font-body text-xs opacity-60 mt-4">
            Donation-based coaching and counseling. All are welcome.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Navigate</h4>
          <nav className="flex flex-col gap-2">
            {["Home", "About", "Our Team", "FAQ", "Contact"].map((label) => (
              <Link
                key={label}
                to={label === "Home" ? "/" : label === "Our Team" ? "/team" : `/${label.toLowerCase()}`}
                className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/theopendoorcenter" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/hendrix.coaching" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <Instagram size={20} />
            </a>
          </div>
          <p className="font-body text-sm opacity-60 mt-6">
            4 Simon Chikovani, Tbilisi, Georgia
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center">
        <p className="font-body text-xs opacity-60">
          © 2026 The Open Door Center · Tbilisi, Georgia
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;