import { Card, Image } from '@nextui-org/react';
import { FunctionComponent, useState, useEffect } from 'react';
import { FaCookieBite } from 'react-icons/fa';
import { RxCrossCircled } from 'react-icons/rx';

const Cookies: FunctionComponent = () => {
  const [hidden, setHidden] = useState(true);
  const [remove, setRemove] = useState(false);

  const handleVisibility = () => {
    hidden ? setHidden(false) : setHidden(true);
  };

 /*  useEffect(() => {
    const isSetCookies = localStorage.getItem('isSetcookies')
    console.log(isSetCookies)
    if(isSetCookies == null){
      setTimeout(() => {
        handleVisibility()
      }, 8000)
    }
  },[]) */

  return (
    <div className="">
      <button
        onClick={handleVisibility}
        className={
          hidden
            ? 'fixed bg-cardColorOne py-4 px-3 drop-shadow-lg rounded-tl-[93px] rounded-tr-[60px] rounded-bl-[72px] rounded-br-[112px] top-[90vh]  left-3 z-40 hover:rotate-12'
            : 'hidden'
        }
      >
        <FaCookieBite className="text-2xl" />
      </button>

      <div
        className={
          hidden
            ? 'hidden'
            : 'fixed flex items-center px-4 h-screen w-screen top-0 z-30'
        }
      >
        <Card className="bg-gray-100 w-fit border-none py-6 mx-6 h-fit animate-slideInLeft ">
          <Card.Header>
            <div className="flex justify-end items-end">
              <button onClick={handleVisibility} className="">
                <RxCrossCircled className="text-5xl" />
              </button>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-col justify-center lg:w-[30vw]">
              <div className="flex items-center justify-center">
                <Image src="/cookies.svg" alt="cookies" className="h-[8rem]" />
              </div>
              <div className="text-lg mt-3 px-6 text-start text-gray-600 font-medium">
                <span className="text-black text-2xl font-medium">
                  Salut c'est nous...
                </span>
                <br />
                <span className="font-bold text-4xl text-black">
                  les Cookies !
                </span>
                <br />
                <div className="pt-3">
                  On a attendu d'être sûrs que le contenu de ce site vous
                  intéresse avant de vous déranger, mais on aimerait bien vous
                  accompagner pendant votre visite... C'est OK pour vous ?
                </div>
              </div>
              <div className="flex justify-center mt-8 gap-6">
                <button className="border-2 border-gray-800 text-gray-800 text-lg py-3 px-8  hover:rotate-1">
                  Non merci
                </button>
                <button className="border-2 border-gray-800 text-gray-800 text-lg py-3 px-8 hover:rotate-1">
                  Je choisis
                </button>
                <button className="bg-gray-800 text-white text-lg py-3 px-8  hover:rotate-1">
                  Mmm... Parfait
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cookies;
