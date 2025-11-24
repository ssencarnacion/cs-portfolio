export default function Intro() {
  const name = "STEPHEN ENCARNACION";
  const email = "stphencarnacion@gmail.com";
  const institution = "University of the Philippines Diliman";
  const degree = "BS Computer Science";

  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-32 pb-0">
        {/* SHORTER HEIGHT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] border border-black/20 rounded-none mb-0">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-8 border-r border-black/20">
            <header className="space-y-4">
              <p className="text-sm font-mono font-semibold tracking-widest text-black">
                [00]
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-none tracking-tighter uppercase">
                {name}
              </h1>

              <p className="text-sm text-black font-medium tracking-wide">
                {email}
              </p>
            </header>

            <section className="pt-4 border-t border-gray-200">
              <p className="text-lg leading-relaxed text-black">
                Hi! I am Steph, a fresh graduate from the{" "}
                <span className="font-bold">{institution}</span> with a degree
                in <span className="font-bold">{degree}.</span>
              </p>
            </section>

            <footer className="space-y-4 pt-4">
              <p className="text-base font-medium text-black">Let's connect!</p>

              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/ssencarnacion/"
                  className="px-6 py-2 border border-black text-black font-medium text-sm rounded-none
                  transition duration-150 hover:bg-black hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ssencarnacion"
                  className="px-6 py-2 border border-black text-black font-medium text-sm rounded-none
                  transition duration-150 hover:bg-black hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </footer>
          </div>

          {}
          <div className="relative w-full h-[600px] bg-white overflow-hidden">
            <img
              src="/sablay2.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute right-0 top-0 h-full w-[2px] bg-black opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
