import Image from "next/image";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between">
      <div className="flex flex-col pt-20 relative overflow-hidden">
        <div>
          <div className="font-bold">
            <div className="mt-4">
              <div className="text-2xl md:text-4xl lg:text-8xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-10">
                <span>Unlock Ultimate Control with </span>
                <span className="bg-gradient-to-r from-indigo-600 to-[#be598a] bg-clip-text text-transparent">
                  Lina{" "}
                </span>
                <span className="bg-gradient-to-r from-[#be598a] to-[#ff6a55] bg-clip-text text-transparent">
                  AI{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-base md:text-xl text-muted-foreground dark:text-muted-foreground max-w-5xl mx-auto relative z-10 font-normal">
            Lina AI is a friendly and approachable Arabic name that means
            tender. It's simple, easy to pronounce, and carries a positive
            meaning, making it perfect for an AI that acts like a sales rep or
            personal assistant.
          </p>
        </div>
        <div className="p-2 lg:p-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 rounded-2xl lg:rounded-[32px] mt-20 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
          <div className="bg-white dark:bg-black dark:border-gray-700 border border-gray-200 rounded-[24px]">
            <Image
              alt="Lina AI"
              loading="lazy"
              className="rounded-2xl lg:rounded-[24px]"
              src="/images/hero.webp"
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
  );
}

export default Hero;
