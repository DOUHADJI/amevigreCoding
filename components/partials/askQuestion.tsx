import { Button, Card, Image, Input } from '@nextui-org/react';
import { FunctionComponent, useState } from 'react';
import { BsChat, BsSend } from 'react-icons/bs';
import { FaCookieBite } from 'react-icons/fa';
import { RxCrossCircled } from 'react-icons/rx';

const AskQuestion: FunctionComponent = () => {
  const [hidden, setHidden] = useState(true);

  const handleOpenChat = () => {
    hidden ? setHidden(false) : setHidden(true);
  };
  return (
    <div className="">
      <button
        onClick={handleOpenChat}
        className={
          hidden
            ? 'fixed bg-cardColorOne py-4 px-3 drop-shadow-lg rounded-tl-[93px] rounded-tr-[60px] rounded-bl-[72px] rounded-br-[112px] bottom-24  right-3 z-10 hover:rotate-12'
            : 'hidden'
        }
      >
        <BsChat className="text-2xl" />
      </button>

      <div
        className={
          hidden
            ? 'hidden'
            : 'fixed flex items-center px-4 h-fit w-fit bottom-24 right-6 z-40 '
        }
      >
        <div className="animate-slideInRight z-50 bg-gray-200 rounded-2xl w-[80vw] h-[70vh] md:w-[30vw] md:h-[50vh]">
          <div className="flex justify-between w-full bg-cardColorOne items-end py-3 px-2 rounded-t-2xl">
            <div className="text-white font-medium tracking-[2.3px] text-lg w-full text-center">
              Poser une question
            </div>

            <div>
              <button onClick={handleOpenChat} className="">
                <RxCrossCircled className="text-2xl" />
              </button>
            </div>
          </div>
          <div className='flex items-center h-full'>
            <Image
              src="/Contact us-pana.svg"
              alt="Contact us-pana"
              className="w-36"
            />
          </div>
          <div className="flex flex-col justify-end p-8 h-full w-full">
            <div className="flex absolute bottom-4 right-4 justify-end left-6 gap-2 ">
              <input
                placeholder="votre question"
                className="w-full border boder-gray-200 rounded-2xl py-2 px-4 bg-white text-gray-800"
              />
              <Button auto flat type={null} onClick={handleOpenChat}>
                <BsSend />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
