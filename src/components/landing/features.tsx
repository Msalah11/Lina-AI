import Image from "next/image";

function Features() {
  return (
    <div id="otherFeatures" className="relative z-20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="my-6 text-4xl font-bold">Tailored for Every Need</h2>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl py-12 px-10 lg:py-24 lg:px-16 overflow-hidden mb-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4">
            <div>
              <h3 className="text-3xl font-bold">Responsive Design</h3>
              <p className="mt-3 max-w-[550px] text-lg">
                Your app will look stunning on all devices, from desktops to
                tablets to mobile phones. No need to worry about scaling—it's
                built to work flawlessly on every screen size.
              </p>
              <div className="mt-5 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                  <span>
                    Automatically adjusts layouts for different screen
                    resolutions.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                  <span>
                    Optimized media queries for performance on smaller devices.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                  <span>
                    Smooth transitions and fluid design for touch interactions.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div
                className="p-2 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 rounded-[32px] max-w-[300px] lg:absolute lg:top-[-50px]"
                style={{ willChange: "auto", transform: "none" }}
              >
                <div className="absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-b from-transparent via-gray-100 to-gray-100 dark:via-zinc-800/70 dark:to-gray-800 scale-[1.1] pointer-events-none"></div>
                <div className="bg-white dark:bg-black dark:border-gray-700 border border-gray-200 rounded-[24px] overflow-hidden max-h-[450px]">
                  <Image
                    alt="Lina AI"
                    loading="lazy"
                    className="rounded-2xl lg:rounded-[24px]"
                    src="/images/mobile.png"
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    width={1920}
                    height={1040}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
