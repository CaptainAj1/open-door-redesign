import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import BookingBanner from "@/components/BookingBanner";
import kelseyPhoto from "@/assets/team/Kelsey.avif";

const About = () => (
  <main>
    {/* Hero banner */}
    <section className="bg-primary pt-32 pb-20 px-4">
      <div className="container-narrow mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl font-light text-primary-foreground mb-4">
          About Us
        </h1>
        <p className="font-display text-lg italic text-primary-foreground/80 max-w-xl mx-auto">
          Coaching, counseling, and community - all under one roof.
        </p>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding">
      <div className="container-narrow mx-auto grid md:grid-cols-2 gap-12 items-center">
        <FadeInSection>
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
            alt="Community gathering"
            className="rounded-2xl shadow-card w-full object-cover aspect-[4/5]"
            loading="lazy"
          />
        </FadeInSection>
        <FadeInSection delay={0.15}>
          <blockquote className="font-display text-2xl md:text-3xl italic text-primary leading-snug mb-6">
            "Everyone who wants coaching or counseling should have access to it."
          </blockquote>
          <p className="font-body text-foreground leading-relaxed mb-4">
            The Open Door Center is a donation-based coaching and counseling center in Tbilisi, Georgia. Our mission is to make professional coaching and counseling accessible to everyone - regardless of financial means.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Founded by a team of international coaches and counselors, we serve expats, local families, and individuals navigating life's biggest transitions. From marriage coaching to cross-cultural support, we walk beside you.
          </p>
        </FadeInSection>
      </div>
    </section>

    {/* Founder */}
    <section className="section-padding bg-surface">
      <div className="container-narrow mx-auto">
        <FadeInSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">Our Founder</h2>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src={kelseyPhoto}
                alt="Kelsey Hendrix"
                className="w-40 h-40 rounded-full object-cover shadow-card flex-shrink-0"
                loading="lazy"
              />
              <div>
                <h3 className="font-display text-2xl font-medium text-foreground mb-1">Kelsey Hendrix, PCC</h3>
                <span className="inline-block bg-primary text-primary-foreground font-body text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Director & Founder
                </span>
                <p className="font-body text-foreground leading-relaxed mb-3">
                  With 15 years of experience living in China and a background in pediatric nursing, Kelsey brings a unique global perspective to coaching. She is a certified PCC life and leadership coach, a La Leche League leader, and a passionate advocate for international families.
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Specialties: International family life, marriage, parenting, cross-cultural identity, and leadership development.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>

    {/* Mission statement */}
    <section className="bg-primary py-20 px-4">
      <FadeInSection className="container-narrow mx-auto text-center">
        <blockquote className="font-display text-2xl md:text-4xl font-light italic text-primary-foreground leading-relaxed max-w-3xl mx-auto">
          "Whether you are working on your family, your business, or self-development - you are not alone. We are here for you."
        </blockquote>
      </FadeInSection>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <FadeInSection className="container-narrow mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
          Meet the Team
        </h2>
        <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
          Our coaches and counselors come from diverse backgrounds, united by a passion for helping others flourish.
        </p>
        <Link to="/team" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-secondary transition-colors">
          View Our Team <ArrowRight size={16} />
        </Link>
      </FadeInSection>
    </section>

    <BookingBanner />
  </main>
);

export default About;