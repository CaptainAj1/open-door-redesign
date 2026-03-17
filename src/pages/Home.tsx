import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, ArrowRight, ArrowDown, Baby, Handshake, RefreshCw, User } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import WaveDivider from "@/components/WaveDivider";
import BookingBanner from "@/components/BookingBanner";

const services = [
  { icon: Baby, title: "Pregnancy & Breastfeeding Coaching", desc: "Support for new and expecting mothers through every stage of the journey." },
  { icon: Handshake, title: "Marriage Coaching & Counseling", desc: "Strengthen your relationship with expert guidance and compassionate support." },
  { icon: RefreshCw, title: "Transition Coaching", desc: "Navigating life changes with clarity, confidence, and purpose." },
  { icon: User, title: "Individual Life & Mentor Coaching", desc: "Discover who you are and who you want to become." },
  { icon: Users, title: "Group Coaching Sessions", desc: "Community-based growth and shared healing in a safe environment." },
  { icon: Globe, title: "International Living Support", desc: "For expat families navigating cross-cultural life with grace." },
];

const Home = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-card/80 mb-6">
          Coaching · Counseling · Community
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-card leading-tight mb-6">
          You Are Not Alone on This Journey
        </h1>
        <p className="font-display text-lg md:text-xl italic text-card/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          A donation-based coaching and counseling center in Tbilisi, Georgia - for expats, families, and individuals ready to thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/team">
            <Button variant="outline" size="lg" className="rounded-full px-8 font-body border-card text-card bg-transparent hover:bg-card/10 hover:text-card">
              Meet Our Team
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="default" size="lg" className="rounded-full px-8 font-body">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ArrowDown className="text-card/60 animate-bounce-gentle" size={28} />
      </div>
    </section>

    <WaveDivider />

    {/* Services */}
    <section className="section-padding bg-surface">
      <div className="container-narrow mx-auto">
        <FadeInSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            How We Can Help
          </h2>
        </FadeInSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeInSection key={s.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 h-full">
                <s.icon className="text-primary mb-5" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-medium text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>

    <WaveDivider flip />

    {/* About Preview */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80"
              alt="Woman in natural light"
              className="rounded-2xl shadow-card w-full object-cover aspect-[4/5]"
              loading="lazy"
            />
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <blockquote className="font-display text-2xl md:text-3xl italic text-primary leading-snug mb-6">
              "Everyone who wants coaching or counseling should have access to it."
            </blockquote>
            <p className="font-body text-foreground leading-relaxed mb-4">
              The Open Door Center operates on a donation-based model so that cost is never a barrier to care. Founded by an international team with deep roots in cross-cultural living, we serve expats, families, and individuals in Tbilisi and beyond.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Whether you're navigating a major life transition, strengthening your marriage, or simply seeking clarity - we walk beside you every step of the way.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-secondary transition-colors">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </div>
    </section>

    <BookingBanner />
  </main>
);

export default Home;