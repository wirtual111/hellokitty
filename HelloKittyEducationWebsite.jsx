export default function HelloKittyEducationWebsite() {
  const subjects = [
    {
      name: "Mathematics",
      icon: "📐",
      description: "Fun lessons, quizzes, and practice sheets.",
    },
    {
      name: "Science",
      icon: "🧪",
      description: "Interactive experiments and concept videos.",
    },
    {
      name: "English",
      icon: "📚",
      description: "Grammar games, stories, and vocabulary practice.",
    },
    {
      name: "Computer Skills",
      icon: "💻",
      description: "Coding basics and digital learning activities.",
    },
  ];

  const features = [
    "Cute kawaii-themed learning experience",
    "Daily study planner",
    "Mini quizzes and rewards",
    "Mobile-friendly design",
    "Progress tracking dashboard",
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 font-sans">
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-2xl shadow">
            🎀
          </div>
          <div>
            <h1 className="text-2xl font-bold">KittyLearn</h1>
            <p className="text-sm text-pink-500">Cute Learning for Everyone</p>
          </div>
        </div>
      </nav>

      <section className="px-8 py-20 md:px-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-block bg-pink-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
            ✨ Welcome to the cutest classroom online ✨
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Learn Smarter <br />
            With a <span className="text-pink-500">Kawaii</span> Touch 🎀
          </h2>

          <p className="text-lg text-pink-700 mb-8 max-w-xl leading-relaxed">
            A fun education website inspired by cute pastel aesthetics.
          </p>
        </div>
      </section>
    </div>
  );
}
