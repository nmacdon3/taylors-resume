import Education from "./Education";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Footer from "./Footer";
import Certificates from "./Certificates";

const Resume = () => {
  return (
    <div className=" print:w-full transition-all ease-in-out duration-1000 shadow h-auto sm:h-[1056px] w-[768px] sm:overflow-hidden overflow-scroll flex flex-col bg-white relative px-10  sm:rounded-lg">
      <Header />
      <div className="flex sm:space-x-8  mt-12 sm:mt-10   flex-grow flex-wrap ">
        <section className="w-[30rem]">
          <About />
          <Experience />
        </section>
        <aside className=" sm:mt-8  space-x-12 sm:space-x-0  sm:w-40 flex sm:flex-col px-2 sm:px-0 ">
          <Skills />
          <Certificates />
          <Education />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
