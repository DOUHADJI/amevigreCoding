import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';

type DropdownProps = {
  text: string;
  paths: { path: string; to: string }[];
  color: boolean;
};
const DropdownFc: FunctionComponent<DropdownProps> = ({
  text,
  paths,
  color,
}) => {
  const [showDropMenu, setShowdropMenu] = useState(false);

  const handleDropMenu = () => {
    showDropMenu ? setShowdropMenu(false) : setShowdropMenu(true);
  };
  return (
    <a
      className={
        !color
          ? 'relative px-3 mx-6 h-fit p-4 text-[12px] text-white hover:text'
          : 'relative px-3 mx-6 h-fit p-4 text-[12px] text-[#003f5d] hover:text'
      }
      onMouseEnter={handleDropMenu}
      onMouseLeave={handleDropMenu}
    >
      <div className="flex justify-center w-32 items-center">
        <p className=" uppercase tracking-[3px] font-prompt font-[600] px-[15px]">
          {text}
        </p>
        <div>
          <BsCaretDownFill className="text-lg" />
        </div>
      </div>
      <div>
        {showDropMenu && (
          <div className=" bg-white flex flex-col absolute right-0 left-0 top-10 mt-6 z-20 w-fit">
            {paths.map((path, index) => (
              <Link href={path.to} key={index} className="w-full">
                <div className="w-full bg-white flex tracking-[2px] text-[1.1rem]  whitespace-nowrap font-[600] text-gray-600 uppercase py-6 px-12 focus:bg-gray-100, hover:bg-gray-100">
                  {path.path}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default DropdownFc;
