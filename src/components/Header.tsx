import PROFILE_PIC from "/headshot.webp";
import COVER_PIC from "/cover.webp";

const Header = () => {
  return (
    <header className="flex items-start  shrink-0 pt-6 print:px-16">
      <img
        src={COVER_PIC}
        className=" object-cover opacity-90 absolute top-0 left-0  w-full h-28 "
      />
      <img
        className="rounded-full  ring-2 ring-white h-14 w-14 sm:h-16 sm:w-16 print:h-16 print:w-16 z-20 relative object-cover mr-8"
        src={PROFILE_PIC}
      />
      <div>
        <h1 className="text-2xl sm:text-4xl print:text-4xl font-thin  relative tracking-wide  font-serif text-white ">
          Taylor MacDonald
        </h1>
        <div className="flex items-center sm:font-thin flex-wrap text-sm sm:text-lg print:text-lg relative text-white print:text-white">
          Chemical Engineer (EIT)
        </div>
      </div>
    </header>
  );
};

export default Header;
