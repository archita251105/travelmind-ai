const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">TravelMind AI ✈️</h2>
            <p className="mt-3 max-w-md text-slate-400">
              Your AI-powered smart travel companion for personalized itineraries.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-bold">Product</h3>
              <p className="mt-3 text-slate-400">Planner</p>
              <p className="mt-2 text-slate-400">Destinations</p>
            </div>

            <div>
              <h3 className="font-bold">Company</h3>
              <p className="mt-3 text-slate-400">About</p>
              <p className="mt-2 text-slate-400">Contact</p>
            </div>

            <div>
              <h3 className="font-bold">Support</h3>
              <p className="mt-3 text-slate-400">Help Center</p>
              <p className="mt-2 text-slate-400">Privacy</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-500">
          © 2026 TravelMind AI. Built with React, Flask and Gemini AI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;