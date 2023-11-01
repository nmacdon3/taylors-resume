import { IconType } from "react-icons";
import classNames from "classnames";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

import PROFILE_PIC from "/headshot.webp";
import COVER_PIC from "/cover.webp";

import { contactInfo } from "~/content/contact_info";

const HeaderItem = ({
  icon,
  text,
  link,
  className,
}: {
  icon: { value: IconType };
  text?: string;
  link?: string;
  className?: string;
}) => {
  return (
    <span className={classNames("flex items-center ", className)}>
      <icon.value className="h-4 w-4 mr-1" />
      {link ? (
        <a className="hover:underline" href={link}>
          {text}
        </a>
      ) : (
        text
      )}
    </span>
  );
};

const Header = () => {
  return (
    <header className="flex  sm:flex-row flex-col items-center justify-between w-full shrink-0 pt-4 text-white ">
      <img
        src={COVER_PIC}
        className=" object-cover opacity-90 absolute top-0 left-0  w-full sm:h-24 h-32 "
      />
      <div className="flex items-center shrink-0  w-full sm:w-auto z-20">
        <img
          className="rounded-full  ring-2 ring-white h-12 w-12 sm:h-14 sm:w-14  z-20 relative object-cover sm:mr-8 mr-4"
          src={PROFILE_PIC}
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-thin  relative tracking-wide  font-serif  ">
            Taylor MacDonald
          </h1>
          <div className="flex items-center sm:font-thin flex-wrap text-sm sm:text-lg print:text-lg relative ">
            Chemical Engineer (EIT)
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col items-end z-20 mt-4 sm:mt-0 gap-3 sm:gap-0 w-full ">
        <HeaderItem
          icon={{ value: HiOutlineMail }}
          text={contactInfo.email}
          link={`mailto:${contactInfo?.email}`}
        />
        <HeaderItem icon={{ value: AiOutlinePhone }} text={contactInfo.phone} />
      </div>
    </header>
  );
};

export default Header;
