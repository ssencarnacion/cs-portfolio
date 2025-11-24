export default function Intro() {
  const name = "STEPHEN ENCARNACION";
  const email = "stphencarnacion@gmail.com";
  const institution = "University of the Philippines Diliman";
  const degree = "BS Computer Science";

  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-screen-xl mx-auto border border-black/20 overflow-hidden shadow-lg">
        <div className="px-8 py-8 md:px-12 md:py-12 lg:px-16 lg:py-12 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] items-stretch">
            <div className="flex flex-col justify-center space-y-8 pr-0 lg:pr-12">
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

              <section className="pt-4 border-t border-gray-300">
                <p className="text-lg leading-relaxed text-black">
                  Hi! I am Steph, a fresh graduate from{" "}
                  <span className="font-bold">{institution}</span> with a degree
                  in <span className="font-bold">{degree}</span>.
                </p>
              </section>

              <footer className="space-y-4 pt-4">
                <p className="text-base font-medium text-black">
                  Let's connect!
                </p>

                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/ssencarnacion/"
                    className="px-6 py-2 border border-black text-black font-medium text-sm 
                     transition duration-150 hover:bg-black hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/ssencarnacion"
                    className="px-6 py-2 border border-black text-black font-medium text-sm 
                     transition duration-150 hover:bg-black hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </footer>
            </div>

            <div className="relative w-full h-[600px] bg-white border-l border-black/20">
              <img
                src="/sablay2.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
