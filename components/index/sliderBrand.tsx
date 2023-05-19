import { FunctionComponent, useEffect, useState } from 'react';
import Brand from '../partials/brand';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import AskForDemo from '../partials/askForDemo';

const SliderBrand: FunctionComponent = () => {
  const [hidden, setHidden] = useState(true);

  const handleCarousel = () => {
    setHidden(!hidden);
  };

  const interval = setTimeout(() => {
    handleCarousel();
  }, 7000);

  useEffect(() => {
    interval;
  }, [hidden]);

  const items = [
    {
      title: "Programming isn't about what you know; it's about what you can figure out.",
      subtitle:
        'Chris Pine',
      description:
        "Especially important for beginners. At first, we're so anxious about knowing everything, especially language syntax. Problem-solving is the skill we end up using most.",
      img: '/brand/brand_1.png',
    },
    {
      title: "The only way to learn a new programming language is by writing programs in it",
      subtitle:
        'Dennis Ritchie',
      description:
        "Programmers are mostly 'learn by doing' types. No amount of academic study or watching other people code can compare to breaking open an editor and start making mistakes.",
      img: '/brand/brand_2.png',
    },
  ];
  return (
    <Brand>
      <div className="relative">
        {/* {<div  className=' flex flex-col gap-4 left-6 top-1/3'>
            <button onClick={() => setHidden(!hidden)} className='bg-white/25 rounded-full h-12 w-4'>
                {" "}
            </button>
            <button onClick={() => setHidden(!hidden)} className='bg-white/25 rounded-full h-12 w-4'>
                {" "}
            </button>
        </div>} */}
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            hidden={hidden}
            id={'animation' + index}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </Brand>
  );
};

export default SliderBrand;

const CarouselItem = ({ title, subtitle, description, img, id, hidden }) => {
  return (
    <div
    /* className={
        (id == 'animation0'
          ? !hidden
            ? 'carouselItemUp animate-slower'
            : 'hidden'
          : hidden
          ? 'carouselItemUp animate-slower'
          : 'hidden')
      } */
    >
      <div className="grid w-fit justify-center items-center  lg:grid-cols-3">
        <div className="md:col-span-2  mt-12 md:mt-2 md:px-24 ">
          <div
            className={
              id == 'animation0'
                ? !hidden
                  ? 'carouselItem animate-slowe w-screen px-12 md:w-fit'
                  : 'hidden'
                : hidden
                ? 'carouselItem  animate-slowe w-screen px-12 md:w-fit'
                : 'hidden'
            }
          >
            <div className="text-center text-[2.3rem]  font-[600] leading-[1em] md:text-start">
              " {title} "
            </div>
            <div className="uppercase italic text-center text-[1.3rem]  font-medium tracking-[4px] mt-6 md:text-start ">
              {subtitle}
            </div>
            <div className="mt-6 text-center text-lg text-[1rem] tracking-[1.2px] pr-4 md:text-start">
              {description}
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8 md:justify-start">
              <Link
                href={'/'}
                className="flex items-center py-2 px-6 rounded-full bg-cardColorOne font-semibold uppercase text-xl "
              >
                just a button
              </Link>
              <AskForDemo reverse />
            </div>
          </div>
        </div>

        <div className="order-first flex w-full mt-6 justify-center items-center md:order-last">
          <Image
            src={img}
            alt="image"
            className={
              id == 'animation0'
                ? !hidden
                  ? 'h-96 carouselItem animate-slower  lg:h-3/4  lg:-mb-44 lg:-ml-44'
                  : 'hidden'
                : hidden
                ? 'h-96 carouselItem animate-slower lg:h-3/4  lg:-mb-36 lg:-ml-44'
                : 'hidden'
            }
          />
        </div>
      </div>
    </div>
  );
};
