import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { isInViewport } from '../../hooks/useIsInViewport';
import Link from 'next/link';
import {
  Bs1Circle,
  Bs2Circle,
  Bs3Circle,
  Bs4Circle,
  BsBarChartSteps,
  BsGraphUp,
} from 'react-icons/bs';

const GainProductivity: FunctionComponent = () => {
  const [visibility, setVisibility] = useState(true);
  const gainProductivityRef = useRef(null);

  const items = [
    {
      title: 'consectetur',
      icon: <Bs1Circle />,
    },

    {
      title: 'consectetur',
      icon: <Bs2Circle />,
    },

    {
      title: 'consectetur',
      icon: <Bs3Circle />,
    },

    {
      title: 'consectetur',
      icon: <Bs4Circle />,
    },
  ];

  useEffect(() => {
    const observer = isInViewport(setVisibility);
    observer.observe(gainProductivityRef.current);
  }, []);

  return (
    <div className="bg-gray-100 pt-44 overflow-x-hidden">
      <div ref={gainProductivityRef} className="grid md:grid-cols-3">
        <div className="md:col-span-2 h-full">
          <div
            className={
              visibility
                ? 'flex flex-col h-full  items-start animate-slideInLeft animate-duration-[1500ms] justify-center gap-12 bg-appGreen rounded-r-[40px] p-24 mt-12 pl-12 md:pl-52 md:mt-[0px]'
                : 'flex flex-col h-full items-start justify-center gap-12 bg-[#C7D6E4]/50 rounded-r-[40px] p-24 mt-12 pl-12 md:pl-52 md:mt-[0px]'
            }
          >
            <div className="text-[#003F5D] text-[2.2rem] font-semibold tracking-[2.3px] uppercase leading-[50px] ">
              <div>
                Nunc quis lacus{' '}
                <span className="text-[#D82939]">Nunc quis lacus </span>
                vel erat{' '}
                <span className="text-[#D82939]">fermentum ultrices</span>{' '}
              </div>
              <div>
                Etiam
                <span className="text-[#D82939]">
                  {' '}
                  volutpat id elit id faucibus
                </span>
              </div>
            </div>
            <div className="text-[#003F5D] text-[1.3rem] font-medium tracking-[2.3px] uppercase leading-[27px] ">
              Aenean blandit dignissim justo, a lacinia nisl. Donec ornare
              molestie fringilla
            </div>
            <div className="text-gray-700 font-light text-xl tracking-[2.3px] leading-[33px] w-fit">
              Integer posuere diam lacus. Vivamus venenatis metus libero, eu
              tristique diam facilisis in. Maecenas scelerisque risus eu erat
              varius, dignissim dapibus risus dignissim. Donec bibendum urna id
              erat interdum rutrum. Fusce et auctor velit. Aenean fringilla quam
              elit, vitae fringilla tortor pulvinar eget.
            </div>
            <div className="text-gray-700 font-light text-xl tracking-[2.3px] leading-[33px] w-fit">
              Nulla sodales metus justo, pulvinar ornare turpis placerat ac.
              Donec accumsan libero ac gravida convallis. Vivamus consectetur
              dolor eget metus mollis, at lacinia felis efficitur. Suspendisse
              vehicula mi sed congue auctor. Donec nunc risus, pretium sed
              tellus a, viverra vestibulum eros.
            </div>
            <div>
              <Link
                href={'/'}
                className="py-2 px-6 rounded-full bg-[#1A728F] font-semibold uppercase text-xl"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div
            className={
              visibility
                ? 'flex flex-col h-full w-full animate-slideInRight items-center justify-center gap-6 md:items-start md:-ml-20'
                : 'flex flex-col h-full items-center justify-center gap-6 md:absolute md:-left-20'
            }
          >
            {items.map((item, index) => (
              <CardItem key={index} title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GainProductivity;

const CardItem = ({ title, icon }) => {
  return (
    <div className="bg-cardColorOne relative h-[10rem] w-[20rem] rounded-2xl shadow drop-shadow-lg animate-headShake animate-infinite animate-slower">
      <div className="flex flex-col h-full p-8">
        <div className="flex flex-col h-full  pt-8  text-center">
          <div className="font-semibold tracking-[2.3px] text-white uppercase text-[1em] text-start w-full  ">
          Vestibulum 
          </div>
          <div className="font-semibold tracking-[2.3px] text-white uppercase text-start text-[1.5em]  ">
            {title}
          </div>
          <div className="absolute top-5 left-4 font-medium tracking-[2.5px] text-white/25 uppercase text-[2rem] ">
            {icon}
          </div>
        </div>
      </div>
      <div className="absolute top-5 right-10">
        <BsGraphUp className="text-[3rem] opacity-75" />
      </div>
    </div>
  );
};
