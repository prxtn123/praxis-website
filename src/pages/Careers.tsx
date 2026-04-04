import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const openings = [
  { role: "AI Safety Engineer", location: "Hybrid - Manchester", type: "Full-time" },
  { role: "Product Growth Manager", location: "Remote - EMEA", type: "Full-time" },
  { role: "Site Reliability Engineer", location: "London", type: "Full-time" },
];

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

      <section className="max-w-[980px] mx-auto px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {openings.map((job) => (
            <article key={job.role} className="rounded-3xl border border-black/10 p-6 hover:shadow-md transition">
              <h2 className="font-semibold text-lg mb-2">{job.role}</h2>
              <p className="text-sm text-muted-foreground">{job.location}</p>
              <p className="text-sm text-muted-foreground mb-4">{job.type}</p>
              <a href="mailto:careers@praxisgb.com" className="text-blue-500 hover:underline text-sm">
                Apply now
              </a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
