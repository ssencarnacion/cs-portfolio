import React, { SyntheticEvent } from "react";

export default function App() {
  const name = "STEPHEN ENCARNACION";
  const email = "stphencarnacion@gmail.com";
  const institution = "University of the Philippines Diliman";
  const degree = "BS Computer Science";

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-screen-2xl mx-auto h-80 px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] h-full min-h-[70vh] border border-black rounded-lg">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-8 border-r border-black">
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
                  className="px-6 py-2 border-2 border-black text-black font-medium text-sm rounded-none hover:bg-gray-100 transition duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ssencarnacion"
                  className="px-6 py-2 border-2 border-black text-black font-medium text-sm rounded-none hover:bg-gray-100 transition duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </footer>
          </div>

          <div className="relative w-full h-[300px] lg:h-auto bg-white flex items-center justify-center overflow-hidden">
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
