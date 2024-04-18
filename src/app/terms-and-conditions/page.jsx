"use client";

import Image from "next/image";

const page = () => {
  return (
    <main>
      {/* Hero section */}
      <div className="hero">
        <div className="max-w-6xl mx-auto px-6 pt-44 pb-24">
          <h1 className="text-2xl font-semibold text-white text-center">
            Terms and Conditions
          </h1>
          <Image
            src={"/assets/divider.svg"}
            className="hidden md:block mt-5"
            height={1100}
            width={1100}
            alt="image"
          />
          <p className="text-center text-[14px] leading-7 text-gray-300 mt-6">
            <span className="font-bold">SAFEAUTH®</span> provides a platform for
            managing cryptographic token (cryptocurrency) accounts, and allowing
            decentralised application (dApp) websites to interact with
            blockchains, while keeping the user in control over what
            transactions they approve, through our website and web application -
            which includes text, images, audio, code and other materials
            (collectively, the “Content”) and all of the features, and services
            provided. The Site, and any other features, tools, materials, or
            other services offered from time to time by{" "}
            <span className="font-bold">SAFEAUTH®</span> are referred to here as
            the “Service”. Please read these Terms and Conditions (the “Terms”
            or “Terms of Use”) carefully before using the Service. By using or
            otherwise accessing the Services, or clicking to accept or agree to
            these Terms where that option is made available, you (1) accept and
            agree to these Terms (2) consent to the collection, use, disclosure
            and other handling of information as described in our Privacy Policy
            and Cookie Policy and (3) any additional terms, rules and conditions
            of participation issued by{" "}
            <span className="font-bold">SAFEAUTH®</span> from time to time. If
            you do not agree to the Terms, then you many not access or use the
            Content of Services.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
