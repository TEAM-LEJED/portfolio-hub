import React from "react";
import { FaArrowRight } from "react-icons/fa";


const Contact = () => {
  return (
    <main className="bg-darkGray text-white">
      <div className="container py-24 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left side section */}
          <section className="space-y-7">
            <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
              Contact
            </p>
            <h1 className="text-3xl">Any Type of Query & Discussion</h1>
            <p className="text-sm leading-6 opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group">
              thecodingjourney.com
              <FaArrowRight className="text-sm hover:translate-x-2 transition duration-200" />
            </button>
          </section>
          {/* right side section */}
          <div className="space-y-7">
            <p className="text-3xl">
              You can't use up creativity, the more you use, more you have in
              your significant mind.
            </p>
            <p className="text-sm leading-6 opacity-60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus excepturi inventore temporibus aut odio dignissimos,
              quia impedit neque et, ipsa reiciendis harum culpa. Voluptatem a
              provident ut! Ratione, corporis perferendis!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-3 items-center">
                <p className="text-6xl text-primary font-bold">14</p>
                <p className="font-semibold max-w-[90px]">
                  Years of Experience in the Industry
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-6xl text-primary font-bold">12</p>
                <p className="font-semibold max-w-[90px]">
                  People's Profiles on Our Site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
