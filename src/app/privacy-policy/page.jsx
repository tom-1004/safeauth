import Image from "next/image";

const page = () => {
  return (
    <main>
      {/* Hero section */}
      <div className="hero">
        <div className="max-w-6xl mx-auto px-6 pt-44 pb-24">
          <h1 className="text-2xl font-semibold text-white text-center">
            Privacy Policy
          </h1>
          <Image
            src={"/assets/divider.svg"}
            className="hidden md:block mt-5"
            height={1100}
            width={1100}
            alt="image"
          />
          <p className="text-center text-[14px] leading-7 text-gray-300 mt-6">
            This privacy policy describes how{" "}
            <span className="font-bold">SAFEAUTH®</span> collects, uses, and
            protects the information you provide when you use our platform or
            services. We do not require users to create accounts or provide any
            personal details to access our platform or services. When you use
            our platform or services, we may collect non-personal information
            such as device information, browser type, language preference, and
            other technical details. This information is used solely for the
            purpose of improving our platform and providing a better user
            experience. <span className="font-bold">SAFEAUTH®</span> does not
            store or have access to your private keys or public keys. All
            cryptographic operations are performed locally on your device,
            ensuring that your keys remain secure and private. We take
            reasonable measures to protect the information collected through our
            platform from unauthorized access, disclosure, alteration, or
            destruction. However, please be aware that no method of transmission
            over the internet or electronic storage is 100% secure. By using our
            platform or services, you agree to the terms of this Privacy Policy.
            If you do not agree with any aspect of this policy, please do not
            use our platform or services.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
