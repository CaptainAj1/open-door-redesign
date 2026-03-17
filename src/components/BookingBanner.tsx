import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeInSection from "./FadeInSection";

const BookingBanner = () => (
  <section className="bg-surface py-16 px-4">
    <FadeInSection className="container-narrow mx-auto text-center">
      <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
        Ready to take the first step?
      </h3>
      <Link to="/contact">
        <Button variant="default" size="lg" className="rounded-full px-10 mt-2 font-body">
          Book a Free Consultation
        </Button>
      </Link>
    </FadeInSection>
  </section>
);

export default BookingBanner;
