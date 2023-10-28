import Education from "./Education";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Footer from "./Footer";
import Certificates from "./Certificates";

const Resume = () => {
  return (
    <div className=" print:h-full print:w-full transition-all ease-in-out duration-1000 shadow h-auto sm:h-[1056px] w-[768px] sm:overflow-hidden overflow-scroll flex flex-col bg-white relative px-10 print:px-0  sm:rounded-lg">
      <Header />
      <div className="flex sm:space-x-8 print:space-x-10 mt-12 sm:mt-10 print:mt-12  flex-grow flex-wrap print:pl-16 ">
        <section className="w-full sm:w-[28rem] print:w-[28.5rem]">
          <About />
          <Experience />
        </section>
        <aside className=" sm:mt-8  space-x-12 sm:space-x-0 print:space-x-0 sm:w-52 print:w-56  flex sm:flex-col px-2 sm:px-0 print:flex-col">
          <Skills />
          <Certificates />
          <Education />
          <i className="text-xs text-gray-500">
            References available upon request
          </i>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
