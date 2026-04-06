import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-[#f5f5f7] text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-2">Careers</p>
          <h1 className="text-4xl md:text-6xl font-semibold">Join Praxis GB.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            We're a small team building edge AI products in Greater Manchester. If you're interested in working with us, get in touch.
          </p>
        </div>
      </section>

      <section className="max-w-[980px] mx-auto px-6 py-20 text-center">
        <div className="rounded-3xl border border-black/10 p-12">
          <h2 className="text-2xl font-semibold mb-3">No open positions right now</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            We don't have any vacancies at the moment, but we're always interested in hearing
            from talented people. Send us your CV and we'll keep it on file.
          </p>
          <a href="mailto:careers@praxisgb.com" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-black/80 transition">
            Send your CV
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
