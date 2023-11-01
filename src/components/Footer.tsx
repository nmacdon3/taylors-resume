import classNames from "classnames";
import { IconType } from "react-icons";
import { AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

import { contactInfo } from "~/content/contact_info";

const FooterItem = ({
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

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <i className="text-xs text-gray-700 pb-10">
        References available upon request
      </i>
      {/* <footer className=" w-full h-10 text-xs print:text-sm  text-gray-500 space-y-2 relative print:px-16 ">
        <div className="sm:flex print:flex border-t border-[#cf8b67] pt-4 items-center sm:space-x-3 print:space-x-3 mb-4 space-y-1 sm:space-y-0 print:space-y-0">
          <FooterItem
            icon={{ value: HiOutlineMail }}
            text={contactInfo?.email}
            link={`mailto:${contactInfo?.email}`}
          />
          <FooterItem
            icon={{ value: AiOutlinePhone }}
            text={contactInfo?.phone}
          />
          <FooterItem
            icon={{ value: AiFillLinkedin }}
            text={contactInfo?.linkedin}
            link={`https://${contactInfo?.linkedin}`}
          />
        </div>
      </footer> */}
    </div>
  );
};

export default Footer;
