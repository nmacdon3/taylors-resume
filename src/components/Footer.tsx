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
    <footer className=" w-full h-20 text-xs print:text-sm  text-gray-500 space-y-2 relative print:px-16 ">
      <div className="sm:flex print:flex border-t  border-orange-800/60 pt-4 items-center sm:space-x-3 print:space-x-3 mb-4 space-y-1 sm:space-y-0 print:space-y-0">
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

      <div className="text-xs  text-gray-400 md:absolute md:pb-0 pb-2 bottom-4 right-0 print:right-16  print:hidden">
        References available upon request
      </div>
    </footer>
  );
};

export default Footer;
