import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect("/");

  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: "20%",
            height: "auto",
          }}
          width={0}
          height={0}
        />
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, I'm your AI powered sales assistant, <span className="bg-gradient-to-r from-indigo-600 to-[#be598a] bg-clip-text text-transparent">
            Lina AI</span>  
        </h2>
        <p className="text-iridium md:text-lg mb-15">
          Lina AI is capable of capturing lead information without a form...{" "}
          <br />
          something never done before 😉
        </p>

        <Image
          src="/images/hero.webp"
          alt="app hero"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48 p-2 lg:p-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 rounded-2xl lg:rounded-[32px]"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default Layout;
