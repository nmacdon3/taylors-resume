import Education from "./Education";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Footer from "./Footer";
import Certificates from "./Certificates";

const Resume = () => {
  return (
    <div className=" print:w-full transition-all ease-in-out duration-1000 shadow h-auto sm:h-[1056px] w-[818px] sm:overflow-hidden overflow-scroll overflow-x-hidden flex flex-col bg-white relative sm:px-12 px-6 sm:rounded-lg  ">
      <Header />
      <div className="flex sm:space-x-8  mt-12 sm:mt-10   flex-grow flex-wrap ">
        <section className="w-[32rem]">
          <About />
          <Experience />
        </section>
        <aside className=" sm:mt-8  space-x-12 sm:space-x-0  sm:w-40 flex sm:flex-col px-2 sm:px-0 ">
          <Skills />
          <div className="flex flex-col">
            <Certificates />
            <Education />
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
