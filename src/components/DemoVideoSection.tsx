export default function DemoVideoSection() {
  return (
    <section className="py-20 bg-[#f8f8fb]" id="demo-video">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">Demo</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Watch NodeHub in action</h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <button className="rounded-full border-2 border-white/80 bg-white/20 px-5 py-3 text-white font-semibold">Play video</button>
          </div>
          <div className="aspect-video bg-gradient-to-r from-black to-gray-800 opacity-80" />
        </div>

        <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
          3-minute overview: 1) risk detection 2) incident triage 3) incident-free recommendations, integrated with the command centre.
        </p>
      </div>
    </section>
  );
}
