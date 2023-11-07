import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section
      // style={{
      //   backgroundImage: "url(/images/bg.png)",
      // }}
      id="Home"
      className="min-h-screen grid grid-cols-12 px-4 lg:px-32 bg-no-repeat bg-cover bg-center"
    >
      <div className="col-span-12 pt-24 lg:pt-0 lg:col-span-4 flex items-center justify-center lg:justify-start">
        <img
          src="/images/me.JPG"
          className="w-[250px] lg:w-[380px] object-cover rounded-lg"
          alt="Picture"
        />
      </div>
      <div className="col-span-12 lg:col-span-8 flex flex-col text-center lg:text-start lg:items-start justify-center pt-6 lg:pt-0 lg:pl-12">
        <h2 className="flex flex-col lg:flex-row lg:gap-3 text-3xl lg:text-4xl font-bold">
          <span>Hello, I am </span>
          <span className="text-main">Romwel R. Feliciano</span>
        </h2>
        <h2 className="flex flex-col lg:flex-row lg:gap-3 text-3xl lg:text-4xl font-bold">
          <span className="text-main">I work as </span>
          <TypeAnimation
            sequence={[
              "a Web Developer",
              2000,
              "a College Instructor",
              2000,
              "a UI/UX Designer",
              2000,
            ]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
          />
        </h2>
        <p className="text-md lg:text-lg py-4 lg:py-3 leading-7">
          A fresh graduate who has a hands-on-experience as a front-end
          developer intern. My objective is to utilize my passion in creating a
          user-friendly website and application that can contribute to the needs
          of a business. I committed to contribute my technical skills while
          expanding my knowledge in my chosen field.
        </p>
        <div>
          <button
            type="button"
            className="bg-main text-center text-xl text-white px-10 py-1 rounded-lg"
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
