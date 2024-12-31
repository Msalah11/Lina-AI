import ButtonHandler from "@/components/forms/register/button-handlers";
import SignUpFormProvider from "@/components/forms/register/form-provider";
import HighLightBar from "@/components/forms/register/highlight-bar";
import RegisterFormStep from "@/components/forms/register/registration-step";

import React from "react";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegisterFormStep />
            <ButtonHandler />
          </div>
          <HighLightBar />
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
