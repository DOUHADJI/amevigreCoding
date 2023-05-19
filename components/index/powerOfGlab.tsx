import { Image } from '@nextui-org/react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import AskForDemo from '../partials/askForDemo';
import { isInViewport } from '../../hooks/useIsInViewport';

const ForceOfGlab: FunctionComponent = () => {
  const itemRef = useRef(null);
  const items = [
    {
      title: 'Vivamus congue diam',
      subtitle: 'sit amet lacus aliquet hendrerit',
      description:
        'Sed quis mauris maximus, interdum nibh a, efficitur purus. Nullam accumsan a magna at facilisis. ',
      img: '/power/Globalization-pana .svg',
    },

    {
      title: 'Vivamus congue diame',
      subtitle: "sit amet lacus aliquet hendrerit",
      description:
        "Sed quis mauris maximus, interdum nibh a, efficitur purus. Nullam accumsan a magna at facilisis. ",
      img: '/power/Business analytics-pana.svg',
    },

    {
      title: 'Vivamus congue diam',
      subtitle: 'sit amet lacus aliquet hendrerit',
      description:
        'Sed quis mauris maximus, interdum nibh a, efficitur purus. Nullam accumsan a magna at facilisis. ',
      img: '/power/Server status-pana.svg',
    },
  ];
  return (
    <div className="bg-gray-100  pt-44 pb-24 overflow-x-hidden">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 w-full mb-44 px-6">
          <div className="text-[#003F5D] text-start text-[2em] font-semibold tracking-[2.3px] uppercase leading-[50px] ">
            <div>
              <span className="text-[#D82939]">Maecenas </span>
            </div>
            <div>
              eu erat <span className="text-[#D82939]">commodo </span>{' '}
            </div>
          </div>
          <div className="text-gray-700 font-light text-[1.2em] tracking-[2.3px] leading-[33px] text-start">
            Aenean velit sapien, bibendum a risus vel, placerat dictum neque.
            Mauris feugiat arcu nec velit gravida rutrum. Pellentesque mattis
            nunc id ligula rutrum, et semper ligula consequat. Sed finibus
            tincidunt tristique. Proin pharetra turpis at odio vulputate, congue
            ultricies arcu porta.
          </div>
          <AskForDemo />
        </div>
        <div ref={itemRef} className="bg-appGreen rounded-l-[40px]">
          <div className="flex flex-col w-full gap-12 items-center justify-center -my-24">
            {items.map((item, index) => (
              <CardItem
                key={index}
                itemRef={itemRef}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                img={item.img}
                up={index == 0 ? true : null}
                down={index == 2 ? true : null}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForceOfGlab;

const CardItem: FunctionComponent<{
  title;
  subtitle;
  description;
  itemRef;
  img;
  up?;
  down?;
}> = ({ title, subtitle, description, img, up, down, itemRef }) => {
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    const observer = isInViewport(setVisibility);
    observer.observe(itemRef.current);
  }, []);
  return (
    <div className="px-4">
      <div
        ref={itemRef}
        className={
          visibility
            ? up
              ? 'bg-[#7E7F58] relative rounded-2xl shadow  animate-fadeInDown animate-slow md:w-[40rem]'
              : down
              ? 'bg-[#7E7F58] relative   rounded-2xl shadow  animate-fadeInUp animate-slow md:w-[40rem]'
              : 'bg-[#7E7F58] relative  rounded-2xl shadow md:w-[40rem]'
            : 'bg-[#7E7F58] relative  rounded-2xl shadow md:w-[40rem] '
        }
      >
        <div className="flex gap-4 h-full p-4">
          <div className="flex h-full items-center">
            <Image src={img} className="h-32 md:h-56" alt={img} />
          </div>
          <div className="col-span-3 flex flex-col  justify-center gap-4 ">
            <div className="font-semibold tracking-[2.3px] text-white uppercase text-sm md:text-xl  ">
              {title}
            </div>
            <div className="font-medium tracking-[2.5px] text-white uppercase text-sm md:text-md  ">
              {subtitle}
            </div>

            <div className="font-medium tracking-[2.5px] text-white  text-xs md:text-sm  ">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
