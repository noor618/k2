// src/pages/ThankYou.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            🎉 Thank You!
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Your expedition inquiry has been received. Our team will contact you within 24 hours.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
