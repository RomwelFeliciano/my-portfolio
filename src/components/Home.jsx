import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen grid grid-cols-12 px-32">
      <div className="col-span-4 flex items-center justify-start">
        <img
          src="../../public/images/me.JPG"
          className="w-[380px] object-cover rounded-lg"
          alt="Picture"
        />
      </div>
      <div className="col-span-8 flex flex-col items-start justify-center pl-12">
        <h2 className="text-4xl font-bold">
          Hello, I am <span className="text-main">Romwel R. Feliciano</span>
        </h2>
        <h2 className="text-4xl font-bold">
          <span className="text-main">I work as a </span>Web Developer
        </h2>
        <p className="text-lg py-3 leading-7">
          A fresh graduate who has a hands-on-experience as a front-end
          developer intern. My objective is to utilize my passion in creating a
          user-friendly website and application that can contribute to the needs
          of a business. I committed to contribute my technical skills while
          expanding my knowledge in my chosen field.
        </p>
        <button type="button" className="bg-main text-xl px-10 py-1 rounded-lg">
          Resume
        </button>
      </div>
    </section>
  );
};

export default Home;
