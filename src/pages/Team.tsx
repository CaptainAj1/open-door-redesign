import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import BookingBanner from "@/components/BookingBanner";

const team = [
  {
    name: "Kelsey Hendrix, PCC",
    role: "Director",
    specialty: "Brain/Marriage/Transitions Coach",
    phone: "595 013 614",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=344&q=80",
    bio: "ICF-certified PCC coach with 15 years of international experience. Specializes in marriage, transitions, and brain-based coaching.",
  },
  {
    name: "Erica Steinfort",
    role: "Head of Counseling",
    specialty: "Marriage/Family/Women/Trauma",
    phone: "595 05 62 96",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=344&q=80",
    bio: "Licensed counselor specializing in marriage, family dynamics, women's issues, and trauma recovery.",
  },
  {
    name: "Luke Duggins",
    role: "Biblical Counselor",
    specialty: "EN, RU, AZ",
    phone: "599 13 79 96",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=344&q=80",
    bio: "Multilingual biblical counselor offering sessions in English, Russian, and Azerbaijani.",
  },
  {
    name: "Hollie Moyer",
    role: "Midwife & Lactation Support",
    specialty: "Home-based Birth Support",
    phone: "599 058 024",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=344&q=80",
    bio: "Experienced home-based midwife providing compassionate birth and breastfeeding support.",
  },
  {
    name: "Keti Kvaratskhelia",
    role: "Georgian Communications",
    specialty: "Local Outreach",
    phone: "593 489 014",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=344&q=80",
    bio: "Manages Georgian-language communications and community outreach for the center.",
  },
  {
    name: "Bianca Vermeulen",
    role: "Marketing Manager",
    specialty: "Brand & Digital",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=344&q=80",
    bio: "Leads marketing strategy and digital presence for The Open Door Center.",
  },
];

const Team = () => (
  <main>
    {/* Hero */}
    <section className="bg-primary pt-32 pb-20 px-4">
      <div className="container-narrow mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl font-light text-primary-foreground mb-4">
          Meet Our Coaches & Counselors
        </h1>
        <p className="font-display text-lg italic text-primary-foreground/80 max-w-2xl mx-auto">
          Counselors and Coaches, Here for You
        </p>
      </div>
    </section>

    {/* Scripture banner */}
    <section className="bg-surface py-10 px-4">
      <FadeInSection className="container-narrow mx-auto text-center">
        <blockquote className="font-display text-xl md:text-2xl italic text-accent-foreground leading-relaxed max-w-2xl mx-auto">
          "I will ask the Father, and he will give you another advocate to help you and be with you forever."
        </blockquote>
        <cite className="font-body text-sm text-muted-foreground mt-2 block">— John 14:16</cite>
      </FadeInSection>
    </section>

    {/* Team grid */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <FadeInSection key={member.name} delay={i * 0.08}>
              <div className="bg-card rounded-2xl shadow-card p-6 text-center h-full flex flex-col items-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover shadow-card mb-5"
                  loading="lazy"
                />
                <h3 className="font-body text-lg font-bold text-foreground">{member.name}</h3>
                <span className="inline-block bg-primary text-primary-foreground font-body text-xs font-semibold px-3 py-1 rounded-full mt-2 mb-3">
                  {member.role}
                </span>
                <p className="font-body text-xs text-muted-foreground mb-2">{member.specialty}</p>
                <p className="font-body text-sm text-foreground leading-relaxed mb-4 flex-1">{member.bio}</p>
                <div className="flex items-center gap-3 text-muted-foreground">
                  {member.phone && (
                    <a href={`tel:+995${member.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors" title="Call">
                      <Phone size={16} />
                    </a>
                  )}
                  <a href="mailto:theopendoorcenter.tbs@gmail.com" className="hover:text-primary transition-colors" title="Email">
                    <Mail size={16} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>

    <BookingBanner />
  </main>
);

export default Team;
