import Link from 'next/link';
import { FunctionComponent, useState, useRef, useEffect } from 'react';
/* import VisibilitySensor from 'react-visibility-sensor'; */
/* import { useIsInViewport } from '../../hooks/useIsInViewport'; */
import { InView } from 'react-intersection-observer';
import { isInViewport } from '../../hooks/useIsInViewport';
import AskForDemo from '../partials/askForDemo';

const OurSolutions: FunctionComponent = () => {
  const [visibility, setVisibility] = useState(true);

  const solutionsRef = useRef(null);

  const items = [
    {
      title: 'voluptas',
      subtitle: 'quae ab illo inventore veritatis',
      description:
        'Quis autem vel eum iure reprehenderit qui in ea voluptate',
      link: '/',
    },

    {
      title: 'voluptatem',
      subtitle: 'beatae vitae dicta sunt explicabo',
      description: 'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
      link: '/',
    },
  ];

  useEffect(() => {
    const observer = isInViewport(setVisibility);
    observer.observe(solutionsRef.current);
  }, []);

  return (
    <>
      <div>
        <div className=" pt-96 pb-8 bg-gray-100 overflow-x-hidden">
          <div ref={solutionsRef} className="grid py-8 md:grid-cols-2">
            <div className="order-first flex flex-col justify-center items-center gap-12 px-6 text-center uppercase text-xl leading-[40px] tracking-[2.5px] text-[#1A728F] font-medium md:order-first ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu
              <div
                className={
                  visibility
                    ? 'flex flex-wrap justify-center w-full animate-slideInLeft animate-duration-[1500ms] gap-12 md:-mr-44 md:z-10 md:flex-nowrap'
                    : 'flex flex-wrap justify-center  gap-12 md:-mr-44 md:z-10 md:flex-nowrap'
                }
              >
                {items.map((item, index) => (
                  <SliderItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
            <div
              className={
                visibility
                  ? 'flex flex-col items-start animate-slideInRight animate-duration-[1200ms] justify-center gap-12 bg-appGreen rounded-l-[40px] p-20 mt-12 pl-12 md:pl-52 md:mt-[0px]'
                  : 'flex flex-col items-start  justify-center gap-12 bg-[#C7D6E4]/50 rounded-l-[40px] p-20 mt-12 pl-12 md:pl-52 md:mt-[0px]'
              }
            >
              <div className="text-[#003F5D] text-[2.2rem] font-semibold tracking-[2.3px] uppercase leading-[50px] ">
                <div>
                  Nemo enim ipsam voluptatem{' '}
                  <span className="text-[#D82939]"> quia voluptas </span>
                </div>
                <div> sit aspernatur</div>
                <div>
                  <span className="text-[#D82939]">aut odit aut</span>
                </div>
              </div>
              <div className="text-gray-700 font-light text-xl tracking-[2.3px] leading-[33px] w-fit">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur
              </div>
              <div>
                <AskForDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;

const SliderItem = ({ title, subtitle, description, link }) => {
  return (
    <div className="bg-cardColorOne h-[24rem] w-full md:w-[25rem] rounded-2xl shadow drop-shadow-lg animate-headShake animate-infinite animate-slower">
      <div className="flex flex-col h-full justify-between items-center p-8">
        <div className="flex flex-col h-full pt-12 gap-6 text-center">
          <div className="font-semibold tracking-[2.3px] text-white uppercase text-3xl  ">
            {title}
          </div>
          <div className="font-medium tracking-[2.5px] text-white uppercase text-lg ">
            {subtitle}
          </div>

          <div className="font-medium tracking-[2.5px] text-white text-xs  ">
            {description}
          </div>
        </div>
        <div>
          <Link
            href={link}
            className="py-4 px-12 text-sm rounded-2xl text-white bg-[#7a58249c] font-semibold uppercase"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};
