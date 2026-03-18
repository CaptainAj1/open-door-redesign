import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import FadeInSection from "@/components/FadeInSection";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 px-4">
        <div className="container-narrow mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-light text-primary-foreground mb-4">
            Get in Touch
          </h1>
          <p className="font-display text-lg italic text-primary-foreground/80 max-w-xl mx-auto">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <FadeInSection>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">First Name</label>
                    <Input required placeholder="Jane" className="rounded-xl font-body" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">Last Name</label>
                    <Input required placeholder="Doe" className="rounded-xl font-body" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1 block">Email</label>
                  <Input required type="email" placeholder="jane@example.com" className="rounded-xl font-body" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1 block">Message</label>
                  <Textarea required placeholder="How can we help you?" rows={5} className="rounded-xl font-body" />
                </div>
                <Button type="submit" disabled={sending} className="rounded-full px-10 font-body w-full md:w-auto">
                  {sending ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </FadeInSection>

            {/* Info */}
            <FadeInSection delay={0.15}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Address</h4>
                    <p className="font-body text-muted-foreground text-sm">4 Simon Chikovani, Tbilisi, Georgia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Phone</h4>
                    <a href="tel:+995593489014" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
                      +995 593 48 90 14
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Email</h4>
                    <a href="mailto:theopendoorcenter.tbs@gmail.com" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
                      theopendoorcenter.tbs@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Facebook className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/theopendoorcenter" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">Facebook</a>
                    <a href="https://www.instagram.com/hendrix.coaching" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">Instagram</a>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-card mt-6">
                  <iframe
                    title="The Open Door Center Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5!2d44.78!3d41.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4+Simon+Chikovani%2C+Tbilisi%2C+Georgia!5e0!3m2!1sen!2s!4v1"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
