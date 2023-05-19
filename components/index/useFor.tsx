import { toUnitless } from '@mui/material/styles/cssUtils';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { FunctionComponent, useState, useRef, useEffect } from 'react';
import { isInViewport } from '../../hooks/useIsInViewport';

const UseFor: FunctionComponent = () => {
  const [visibility, setVisibility] = useState(true);
  const useForRef = useRef(null);

  const items = [
    {
      img: '/useFor/Programmer-pana.svg',
      title: 'voluptatem ',
      subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
      img: '/useFor/Programming-pana.svg',
      title: 'accusantium ',
      subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },

    {
      img: '/useFor/Pair programming-pana .svg',
      title: 'doloremque ',
      subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },

    {
      img: 'useFor/Hand coding-pana.svg',
      title: 'laudantium',
      subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
  ];

  useEffect(() => {
    const observer = isInViewport(setVisibility);
    observer.observe(useForRef.current);
  }, []);

 

  return (
    <section className="mt-2 h-full py-4 bg-gray-100 ">
      <div className="flex justify-center -mt-8">
        <Link
          href={'/'}
          className="py-2 px-8 rounded-full bg-appThemeColor font-semibold uppercase text-md md:text-lg "
        >
          Donec accumsan libero ac gravida convallis.
        </Link>
      </div>
      <div ref={useForRef} className=" px-4 pt-12 md:px-24 ">
        <p className="text-center uppercase tracking-[3px] mt-8 text-appThemeColor text-[1.3rem] font-semibold  ">
          Just show you a content{' '}
        </p>
        <div
          
          className={
            visibility
              ? 'bg-cardColorOne px-8 rounded-[24px] mt-10 -mb-44 animate-fadeInUp  h-full '
              : 'display-none'
          }
        >
          <div className="grid md:grid-cols-4">
            {items.map((item, index) => (
              <UseForItem
                key={index}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseFor;

const UseForItem = ({ img, title, subtitle }) => {
  return (
    <div className="py-12 hover:bg-black/50">
      <div className="flex justify-center items-center h-56">
        <Image src={img}  alt="AIDS Research-amico" className="h-52" />
      </div>
      <div className="flex flex-col justify-start text-center text-lg uppercase tracking-[2px]">
        <div className="font-bold  ">{title}</div>

        <div className="mt-3 ">{subtitle}</div>
      </div>
    </div>
  );
};
