"use client";
import { CheckFeature } from "@/components/global/check-feature";
import { SignupFormDemo } from "@/components/global/sign-up-form";

function SignupPage() {

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex pt-8 max-w-4xl justify-center items-center">
          <div className="flex-1 pt-20 px-4">
            <div className="font-semibold text-3xl pb-4">
              Join millions worldwide who automate their work using Zapier.
            </div>
            <div className="pb-6 pt-4">
              <CheckFeature label={"Easy setup, no coding required"} />
            </div>
            <div className="pb-6">
              <CheckFeature label={"Free forever for core features"} />
            </div>
            <CheckFeature label={"14-day trial of premium features & apps"} />
          </div>
          <div className="flex-1 pt-6 pb-6 mt-12 px-4 gap-4">
            <SignupFormDemo />

            </div>
          </div>
        </div>
      </div>
  );
}

SignupPage.displayName = "SignupPage";

export default SignupPage;
