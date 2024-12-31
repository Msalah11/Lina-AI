import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./user-type-card";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Create an account</h2>
      <p className="text-iridium md:text-sm">
        Tell us a bit about yourself! We will make sure your experience is
        tailored just for you.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="I'm a company owner"
        text="Setting up my account for my company."
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="developer"
        title="I'm a developer"
        text="Improve my workflow and productivity."
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="entrepreneur"
        title="I'm an entrepreneur"
        text="Seeking resources and tools to grow my business."
      />
    </>
  );
};

export default TypeSelectionForm;
