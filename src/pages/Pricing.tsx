import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Wifi,
  Coffee,
  CookingPot,
  Armchair,
  Check,
  Star,
  Droplets,
  ArrowRight,
  ArrowLeft,
  X,
  Calendar,
  Clock,
  Building2,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

interface Room {
  name: string;
  price: number;
  badge: string | null;
  bestFor: string[];
  cta: string;
}

const rooms: Room[] = [
  {
    name: "Small Room",
    price: 20,
    badge: null,
    bestFor: ["Meetings", "Study sessions", "7-10 people"],
    cta: "Book Small Room",
  },
  {
    name: "Game Room",
    price: 35,
    badge: null,
    bestFor: ["Gaming sessions", "Small groups"],
    cta: "Book Game Room",
  },
  {
    name: "Big Room",
    price: 45,
    badge: "Most Popular",
    bestFor: ["Workshops", "Events", "Larger groups"],
    cta: "Book Big Room",
  },
];

const addOns = [
  {
    id: "tea-coffee",
    icon: Coffee,
    label: "Tea / Coffee",
    prices: { "Small Room": 10, "Game Room": 15, "Big Room": 15 } as Record<string, number>,
    unit: "per booking",
  },
  {
    id: "kitchen",
    icon: CookingPot,
    label: "Kitchen Access",
    prices: { "Small Room": 10, "Game Room": 15, "Big Room": 15 } as Record<string, number>,
    unit: "per hour",
  },
];

const included = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Armchair, label: "Tables & chairs" },
  { icon: Coffee, label: "Shared caf\u00e9 seating" },
  { icon: CookingPot, label: "Limited kitchen access" },
];

const Pricing = () => {
  const { toast } = useToast();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [step, setStep] = useState<"cards" | "addons" | "form">("cards");
  const [sending, setSending] = useState(false);

  const handleBookClick = (room: Room) => {
    setSelectedRoom(room);
    setSelectedAddOns([]);
    setStep("addons");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleContinueToForm = () => {
    setStep("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    if (step === "form") setStep("addons");
    else if (step === "addons") {
      setStep("cards");
      setSelectedRoom(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClose = () => {
    setStep("cards");
    setSelectedRoom(null);
    setSelectedAddOns([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Booking request sent!",
        description: `We'll confirm your ${selectedRoom?.name} booking soon.`,
      });
      (e.target as HTMLFormElement).reset();
      handleClose();
    }, 1000);
  };

  // Booking flow overlay
  if (step !== "cards" && selectedRoom) {
    return (
      <main>
        <section className="bg-primary pt-32 pb-12 px-4">
          <div className="container-narrow mx-auto">
            <button
              onClick={handleClose}
              className="absolute top-24 right-8 text-card/70 hover:text-card transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <p className="font-body text-sm text-card/70 mb-2">
                Booking: {selectedRoom.name} - {selectedRoom.price}₾ / hour
              </p>
              <div className="flex justify-center gap-4 mt-4">
                {["addons", "form"].map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-semibold ${
                        step === s
                          ? "bg-card text-primary"
                          : i === 0
                          ? "bg-card/30 text-card"
                          : "bg-card/10 text-card/50"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <span className={`font-body text-sm ${step === s ? "text-card" : "text-card/50"}`}>
                      {i === 0 ? "Add-ons" : "Contact"}
                    </span>
                    {i === 0 && <ArrowRight size={14} className="text-card/30 mx-2" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {step === "addons" && (
          <section className="section-padding">
            <div className="container-narrow mx-auto max-w-2xl">
              <FadeInSection>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-2 text-center">
                  Booking Details & Add-ons
                </h2>
                <p className="font-body text-muted-foreground text-center mb-8">
                  Select your date, time, and optional extras for your {selectedRoom.name} booking
                </p>

                {/* Date & Time */}
                <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
                  <h3 className="font-body font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Calendar size={18} className="text-primary" /> When do you want to book?
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1 block">
                        Date
                      </label>
                      <Input required type="date" className="rounded-xl font-body" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm font-medium text-foreground mb-1 block">
                          <Clock size={14} className="inline mr-1 -mt-0.5 text-primary" />
                          Start Time
                        </label>
                        <Input required type="time" className="rounded-xl font-body" />
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium text-foreground mb-1 block">
                          <Clock size={14} className="inline mr-1 -mt-0.5 text-primary" />
                          End Time
                        </label>
                        <Input required type="time" className="rounded-xl font-body" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                <h3 className="font-body font-semibold text-foreground mb-4">Optional Add-ons</h3>
                <div className="space-y-4">
                  {addOns.map((addon) => {
                    const price = addon.prices[selectedRoom.name];
                    const isSelected = selectedAddOns.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-card"
                            : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isSelected ? "bg-primary text-card" : "bg-surface text-primary"
                          }`}
                        >
                          <addon.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-body font-semibold text-foreground">{addon.label}</p>
                          <p className="font-body text-sm text-muted-foreground">
                            +{price}₾ {addon.unit}
                          </p>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                            isSelected ? "bg-primary border-primary" : "border-muted-foreground/30"
                          }`}
                        >
                          {isSelected && <Check size={14} className="text-card" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-4 mt-10">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    className="rounded-full px-6 font-body"
                  >
                    <ArrowLeft size={16} className="mr-1" /> Back
                  </Button>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={handleContinueToForm}
                    className="rounded-full px-8 font-body flex-1"
                  >
                    Continue to Booking <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </FadeInSection>
            </div>
          </section>
        )}

        {step === "form" && (
          <section className="section-padding">
            <div className="container-narrow mx-auto max-w-2xl">
              <FadeInSection>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-2 text-center">
                  Complete Your Booking
                </h2>
                <p className="font-body text-muted-foreground text-center mb-8">
                  Fill in your details and we'll confirm your reservation
                </p>

                {/* Summary */}
                <div className="bg-surface rounded-2xl p-6 mb-8">
                  <h3 className="font-body font-semibold text-foreground mb-3">Booking Summary</h3>
                  <div className="space-y-2 font-body text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Room</span>
                      <span className="text-foreground font-medium">{selectedRoom.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rate</span>
                      <span className="text-foreground font-medium">{selectedRoom.price}{"₾"} / hour</span>
                    </div>
                    {selectedAddOns.length > 0 && (
                      <>
                        <div className="border-t border-border my-2" />
                        <p className="text-muted-foreground font-medium">Add-ons:</p>
                        {selectedAddOns.map((id) => {
                          const addon = addOns.find((a) => a.id === id)!;
                          const price = addon.prices[selectedRoom.name];
                          return (
                            <div key={id} className="flex justify-between">
                              <span className="text-muted-foreground">{addon.label}</span>
                              <span className="text-foreground font-medium">
                                +{price}{"₾"} {addon.unit}
                              </span>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1 block">
                        First Name
                      </label>
                      <Input required placeholder="Jane" className="rounded-xl font-body" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1 block">
                        Last Name
                      </label>
                      <Input required placeholder="Doe" className="rounded-xl font-body" />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">
                      Email
                    </label>
                    <Input required type="email" placeholder="jane@example.com" className="rounded-xl font-body" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">
                      Message (optional)
                    </label>
                    <Textarea placeholder="Any special requests?" rows={3} className="rounded-xl font-body" />
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={handleBack}
                      className="rounded-full px-6 font-body"
                    >
                      <ArrowLeft size={16} className="mr-1" /> Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={sending}
                      size="lg"
                      className="rounded-full px-8 font-body flex-1"
                    >
                      {sending ? "Sending..." : "Submit Booking Request"}
                    </Button>
                  </div>
                </form>
              </FadeInSection>
            </div>
          </section>
        )}
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 px-4">
        <div className="container-narrow mx-auto text-center">
          <FadeInSection>
            <h1 className="font-display text-4xl md:text-6xl font-light text-card mb-4">
              Room &amp; Space Pricing
            </h1>
            <p className="font-body text-base md:text-lg text-card/80 max-w-2xl mx-auto">
              Flexible spaces for meetings, gaming, and events. Pay by the hour.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-surface">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {rooms.map((room, i) => (
              <FadeInSection key={room.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    room.badge
                      ? "bg-primary text-card shadow-elevated ring-2 ring-primary"
                      : "bg-card text-foreground shadow-card"
                  }`}
                >
                  {room.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-body font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                      <Star size={12} /> {room.badge}
                    </span>
                  )}

                  <h3 className="font-display text-2xl font-medium mb-2">{room.name}</h3>

                  <div className="mb-6">
                    <span className="font-display text-4xl md:text-5xl font-light">
                      {room.price}
                    </span>
                    <span className={`font-body text-sm ml-1 ${room.badge ? "text-card/70" : "text-muted-foreground"}`}>
                      {"₾"} / hour
                    </span>
                  </div>

                  {/* Best for */}
                  <div className="mb-6">
                    <p className={`font-body text-xs uppercase tracking-wider mb-2 ${room.badge ? "text-card/60" : "text-muted-foreground"}`}>
                      Best for
                    </p>
                    <ul className="space-y-1.5">
                      {room.bestFor.map((item) => (
                        <li key={item} className="flex items-center gap-2 font-body text-sm">
                          <Check size={14} className={room.badge ? "text-card/70" : "text-primary"} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Includes */}
                  <div className="mb-8">
                    <p className={`font-body text-xs uppercase tracking-wider mb-2 ${room.badge ? "text-card/60" : "text-muted-foreground"}`}>
                      Includes
                    </p>
                    <ul className="space-y-1.5">
                      {included.map((item) => (
                        <li key={item.label} className="flex items-center gap-2 font-body text-sm">
                          <item.icon size={14} className={room.badge ? "text-card/70" : "text-primary"} />
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant={room.badge ? "secondary" : "default"}
                      size="lg"
                      className="rounded-full w-full font-body"
                      onClick={() => handleBookClick(room)}
                    >
                      {room.cta}
                    </Button>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeInSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-3">
              Add-ons
            </h2>
            <p className="font-body text-muted-foreground">Customize your booking with optional extras.</p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Kitchen Access */}
            <FadeInSection delay={0}>
              <div className="bg-card rounded-2xl p-8 shadow-card h-full">
                <CookingPot className="text-primary mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  Kitchen Access
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Unlock full cooking access.
                </p>
                <ul className="font-body text-sm space-y-1.5 mb-4">
                  <li className="text-foreground">Small Room: <span className="font-semibold">+10{"₾"} / hour</span></li>
                  <li className="text-foreground">Game Room: <span className="font-semibold">+15{"₾"} / hour</span></li>
                  <li className="text-foreground">Big Room: <span className="font-semibold">+15{"₾"} / hour</span></li>
                </ul>
                <ul className="font-body text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Full kitchen usage</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Cooking allowed</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Equipment access</li>
                </ul>
                <p className="font-body text-xs text-muted-foreground mt-4 italic">
                  Guests must clean dishes and leave the kitchen as they found it.
                </p>
              </div>
            </FadeInSection>

            {/* Tea/Coffee */}
            <FadeInSection delay={0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-card h-full">
                <Coffee className="text-primary mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  Tea / Coffee Service
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Flat one-time charge per booking.
                </p>
                <ul className="font-body text-sm space-y-1.5 mb-4">
                  <li className="text-foreground">Small Room: <span className="font-semibold">+10{"₾"}</span></li>
                  <li className="text-foreground">Game Room: <span className="font-semibold">+15{"₾"}</span></li>
                  <li className="text-foreground">Big Room: <span className="font-semibold">+15{"₾"}</span></li>
                </ul>
                <p className="font-body text-xs text-muted-foreground italic">
                  This is a one-time fee added to the total bill (not charged per hour).
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* What's Included + Limited Kitchen */}
      <section className="section-padding bg-surface">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeInSection>
              <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">
                What's Included
              </h2>
              <p className="font-body text-muted-foreground mb-4">All bookings include:</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 font-body text-foreground">
                    <item.icon size={20} className="text-primary" strokeWidth={1.5} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">
                Limited Kitchen Access
              </h2>
              <p className="font-body text-muted-foreground mb-4">
                Limited kitchen access includes:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 font-body text-foreground">
                  <Droplets size={20} className="text-primary" strokeWidth={1.5} /> Water usage
                </li>
                <li className="flex items-center gap-3 font-body text-foreground">
                  <Coffee size={20} className="text-primary" strokeWidth={1.5} /> Kettle
                </li>
              </ul>
              <p className="font-body text-sm text-muted-foreground italic">
                Cooking is only allowed with the Kitchen Access add-on.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-2xl">
          <FadeInSection className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
              Booking Policies
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <ul className="space-y-4 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-0.5 shrink-0" />
                All bookings are charged based on total time reserved.
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-0.5 shrink-0" />
                Add-ons are optional unless selected.
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-0.5 shrink-0" />
                Tea/Coffee is charged per booking, not per hour.
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-0.5 shrink-0" />
                Kitchen users must clean after use unless cleaning service is added.
              </li>
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* Exclusive Buyout */}
      <section className="section-padding bg-surface">
        <div className="container-narrow mx-auto">
          <FadeInSection>
            <div className="relative rounded-2xl bg-primary overflow-hidden p-10 md:p-16 text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 left-8 w-32 h-32 border-2 border-card rounded-full" />
                <div className="absolute bottom-8 right-12 w-48 h-48 border-2 border-card rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-card rounded-full" />
              </div>
              <div className="relative z-10">
                <Building2 className="text-card/60 mx-auto mb-4" size={40} strokeWidth={1.5} />
                <h2 className="font-display text-3xl md:text-4xl font-light text-card mb-3">
                  The Whole Place, All Yours
                </h2>
                <p className="font-body text-card/80 max-w-xl mx-auto mb-3 leading-relaxed">
                  Host a private event, team offsite, or celebration with exclusive access to the entire Open Door Center. Every room, the kitchen, the cafe space - all reserved just for you and your guests.
                </p>
                <p className="font-body text-sm text-card/60 mb-8">
                  Custom pricing based on duration and requirements
                </p>
                <Link to="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full px-10 font-body"
                  >
                    Contact Us for Exclusive Buyout
                  </Button>
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-4">
        <FadeInSection className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-card mb-8">
            Ready to book your space?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-8 font-body"
              >
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-body border-card text-card bg-transparent hover:bg-card/10 hover:text-card"
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-body border-card text-card bg-transparent hover:bg-card/10 hover:text-card"
              >
                Check Availability <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
};

export default Pricing;
