import React from "react";
import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";
import { currentUser } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const user = await currentUser();
  const userId=user?.id;
  if (!userId) redirect("/sign-in");

  const transformation = transformationTypes[type];
  const myUser = await getUserById(userId);
  // console.log(user);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={myUser._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={myUser.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
