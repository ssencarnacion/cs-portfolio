export default function Projects() {
  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-screen-xl mx-auto border border-black/20  overflow-hidden shadow-lg">
        <div className="px-8 py-8 md:px-12 md:py-12 lg:px-16 lg:py-12 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-5 items-center">
            <div className="md:col-span-2">
              <p className="text-sm font-mono font-semibold tracking-widest mb-1 text-black">
                [01]
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase text-black">
                PROJECTS
              </h2>
            </div>

            <div className="md:col-span-3 flex justify-start md:justify-end mt-4 md:mt-0">
              <p className="text-xl font-medium text-black md:text-right leading-snug">
                During my stay in the university, I’ve developed a knack for{" "}
                <span className="font-extrabold">
                  solving problems through scalable and efficient solutions.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Carparks */}

        <div className="border-t border-black/20 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-5xl sm:text-5xl font-extrabold tracking-tight text-black">
                carparks.io (2025)
              </h3>

              <p className="leading-relaxed text-base text-gray-700">
                With the rising number of cars in the city, more and more time
                is being spent looking for available parking spots. This
                IoT-powered embedded system project aims to provide users with
                agency to make{" "}
                <span className="font-semibold text-black">
                  informed decisions
                </span>{" "}
                by giving them
                <span className="font-semibold text-black">
                  {" "}
                  real-time parking occupancy status
                </span>{" "}
                of an establishment.
              </p>

              <p className="leading-relaxed text-base text-gray-700">
                By placing a microcontroller with two ultrasonic sensors in each
                bollard, a{" "}
                <span className="font-semibold text-black">single unit</span>{" "}
                can monitor up to{" "}
                <span className="font-semibold text-black">
                  two parking spots
                </span>{" "}
                at once and send data to the cloud. The mobile app retrieves
                this periodically so users can see real-time occupancy.
              </p>

              <p className="text-base font-medium text-black pt-2">
                <span className="font-bold">Tech Stack:</span> Flutter, Firebase
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/ssencarnacion/carparks.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-black text-black font-medium text-sm 
                  transition duration-150 hover:bg-black hover:text-white"
                >
                  <span>Source Code</span>
                </a>

                <a
                  href="https://drive.google.com/file/d/1kW6u0urJKb4fRRZZMcSdAK2j4g6wLSDa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-black text-black font-medium text-sm 
                  transition duration-150 hover:bg-black hover:text-white"
                >
                  <span>Documentation</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-10">
                <div className="flex flex-col items-center">
                  <img
                    src="/phone1.png"
                    alt="phone mockup 1"
                    className="w-60"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/phone2.png"
                    alt="phone mockup 2"
                    className="w-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Access Granted */}
        <div className="border-t border-black/20 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-5xl sm:text-5xl font-extrabold tracking-tight text-black">
                Access Granted (2024)
              </h3>

              <p className="leading-relaxed text-base text-gray-700">
                A data science project analyzing the Philippines’ educational
                landscape using PSA’s Functional Literacy, Education, and Mass
                Media Survey (FLEMMS).
              </p>

              <p className="leading-relaxed text-base text-gray-700">
                It aims to{" "}
                <span className="font-semibold text-black">
                  provide clear, evidence-based insights
                </span>{" "}
                to help educators, researchers, and policymakers{" "}
                <span className="font-semibold text-black">
                  design better policies and opportunities for improving
                  education
                </span>{" "}
                across all regions.
              </p>

              <p className="leading-relaxed text-base text-gray-700">
                Using our selected criteria, we created a new feature indicating
                each respondent’s access to education. This allowed us to
                identify the regions with the{" "}
                <span className="font-semibold text-black">
                  highest and lowest access
                </span>
                , as well as the{" "}
                <span className="font-semibold text-black">
                  top three factors most strongly associated
                </span>{" "}
                with it.
              </p>

              <p className="text-base font-medium text-black pt-2">
                <span className="font-bold">Tech Stack:</span> Python, Numpy,
                Pandas
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://access-granted-mu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-16 py-2 border border-black text-black font-medium text-sm 
          transition duration-150 hover:bg-black hover:text-white"
                >
                  <span>Website</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center space-y-12">
              <div>
                <p className="text-9xl font-extrabold tracking-tight text-black">
                  2019
                </p>
                <p className="text-2xl font-medium text-gray-700">
                  FLEMMS Edition
                </p>
              </div>

              <div>
                <p className="text-9xl font-extrabold tracking-tight text-black">
                  16,900
                </p>
                <p className="text-2xl font-medium text-gray-700">
                  Entries Utilized
                </p>
              </div>
            </div>
          </div>

          <div className="block lg:flex mt-12 gap-4">
            <div
              className="relative flex-2 my-2 w-full lg:w-1/2"
              style={{
                height: "500px",
                borderRadius: "15px",
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img
                src="/bar graph.png"
                alt="Bar Graph showing access to education by region in the Philippines"
                className="w-full h-full object-contain"
              />
            </div>

            <div
              className="relative flex-1 my-2 w-full lg:w-1/2"
              style={{
                height: "500px",
                borderRadius: "15px",
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img
                src="/choropleth.png"
                alt="Choropleth Map of the Philippines showing access to education"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* IsKainan */}
        <div className="border-t border-black/20 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-5xl sm:text-5xl font-extrabold tracking-tight text-black">
                IsKainan (2023)
              </h3>

              <p className="leading-relaxed text-base text-gray-700">
                As classes are shifting once again into an in-person setup, most
                students are{" "}
                <span className="font-semibold text-black">
                  still unfamiliar about the various food spots
                </span>{" "}
                within the campus.
              </p>

              <p className="leading-relaxed text-base text-gray-700">
                Enter IsKainan, a mobile app that allows users to{" "}
                <span className="font-semibold text-black">
                  know where to eat!
                </span>{" "}
                You can even see the menu items at the convenience of your
                phone!
              </p>

              <p className="leading-relaxed text-base text-gray-700">
                The app also features a{" "}
                <span className="font-semibold text-black">login system</span>{" "}
                for vendors, so that they can manage their establishment and how
                their offerings are presented in the app.
              </p>

              <p className="text-base font-medium text-black pt-2">
                <span className="font-bold">Tech Stack:</span> Flutter, Firebase
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/SmurfNiZed/IsKainan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-black text-black font-medium text-sm 
                  transition duration-150 hover:bg-black hover:text-white"
                >
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-10">
                <div className="flex flex-col items-center">
                  <img src="/iskainan.png" className="w-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
