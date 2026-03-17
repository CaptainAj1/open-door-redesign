import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo_white.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-card shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container-narrow mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={solid ? logo : logoWhite}
            alt="The Open Door Center"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                solid ? "text-foreground" : "text-card"
              } ${location.pathname === l.to ? "text-primary" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-primary ${solid ? "text-muted-foreground" : "text-card/70"}`}>
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`transition-colors hover:text-primary ${solid ? "text-muted-foreground" : "text-card/70"}`}>
              <Instagram size={16} />
            </a>
          </div>
          <Link to="/contact">
            <Button variant="default" className="rounded-full px-6 font-body text-sm">
              Book a Session
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden transition-colors ${solid ? "text-foreground" : "text-card"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-6 animate-fade-in-up">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="default" className="rounded-full w-full mt-2 font-body">
                Book a Session
              </Button>
            </Link>
            <div className="flex gap-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Facebook size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;