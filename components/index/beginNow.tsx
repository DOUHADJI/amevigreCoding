import { Image } from '@nextui-org/react';
import { FunctionComponent } from 'react';

const BeginNow: FunctionComponent = () => {
  return (
    <div className="bg-gray-100 pt-44 pb-24">
      <div className="grid md:grid-cols-2">
        <div className="flex items-center md:justify-center">
          <img
            src="/Light bulb-pana.svg"
            alt="Light bulb-pana.svg"
            className="w-[60vh]"
          />
        </div>

        <div className="flex flex-col gap-8 justify-center px-12">
          <div className="text-[#003F5D] text-start text-[2.2rem] font-semibold tracking-[2.3px] uppercase leading-[50px] ">
            <div>
              Integer posuere diam lacus.
              <span className="text-[#D82939]">Integer </span> Integer posuere{' '}
              <span className="text-[#D82939]">diam lacus</span>
            </div>
          </div>
          <div className="text-gray-700 font-light text-xl tracking-[2.3px] leading-[33px] w-fit">
            Maecenas scelerisque risus eu erat varius, dignissim dapibus risus
            dignissim. Donec bibendum urna id erat interdum rutrum. Fusce et
            auctor velit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginNow;
