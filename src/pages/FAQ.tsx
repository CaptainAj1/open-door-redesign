import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeInSection from "@/components/FadeInSection";
import BookingBanner from "@/components/BookingBanner";

const faqs = [
  {
    q: "What does a session look like?",
    a: "Your first session is a get-to-know-you meeting where we learn about you, your goals, and how we can best support you. After that, each session is tailored to your unique journey. Sessions can be in-person at our Tbilisi center or online — whatever works best for you.",
  },
  {
    q: "How do you set goals in coaching?",
    a: "Goals are set intrinsically — meaning they come from you, not us. We believe this creates the most momentum for lasting change. Our coaches walk beside you, helping you discover your path. You change your life; we guide the way.",
  },
  {
    q: "Is this a church or a coaching center?",
    a: "Both! The Open Door Center is a professional coaching and counseling center where a Church of the Nazarene meets on Sundays. Faith integration in coaching is always your choice — we serve people of all backgrounds and beliefs.",
  },
];

const FAQ = () => (
  <main>
    {/* Hero */}
    <section className="bg-primary pt-32 pb-20 px-4">
      <div className="container-narrow mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl font-light text-primary-foreground mb-4">
          Thriving Internationally
        </h1>
        <p className="font-display text-xl italic text-primary-foreground/80 max-w-xl mx-auto mb-2">
          You moved. Now what? You're not alone.
        </p>
        <p className="font-body text-sm text-primary-foreground/60 max-w-md mx-auto">
          Come to The Open Door where every door is open for you.
        </p>
      </div>
    </section>

    {/* FAQ Accordion */}
    <section className="section-padding">
      <div className="container-narrow mx-auto max-w-2xl">
        <FadeInSection>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-2xl shadow-card border-none px-6"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl font-medium text-foreground hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInSection>

        {/* Payment info */}
        <FadeInSection delay={0.2} className="mt-12">
          <div className="bg-surface rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-light text-foreground mb-3">
              About Payment
            </h3>
            <p className="font-body text-foreground leading-relaxed">
              The Open Door Center operates on a <strong>donation-based model</strong>. We do not accept insurance, but we believe that financial limitations should never prevent someone from receiving the help they need. All are welcome.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>

    <BookingBanner />
  </main>
);

export default FAQ;
