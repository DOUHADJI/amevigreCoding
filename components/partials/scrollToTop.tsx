import { FunctionComponent } from 'react';
import { BsCaretUp } from 'react-icons/bs';

const ScrollToTop: FunctionComponent = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 20 });
  };

  return (
    <div className="fixed bottom-3 right-4">
      <button
        onClick={handleScrollToTop}
        className="  bg-cardColorOne py-4 px-3 drop-shadow-lg rounded-tl-[93px] rounded-tr-[60px] rounded-bl-[72px] rounded-br-[112px] opacity-50 left-3 z-40 hover:opacity-100"
      >
        <BsCaretUp className="text-2xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;
