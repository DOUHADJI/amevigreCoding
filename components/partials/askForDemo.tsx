import { FunctionComponent } from 'react';

const AskForDemo: FunctionComponent<{ reverse?: boolean }> = ({ reverse }) => {
  return (
    <>
      <button
        className={
          reverse
            ? 'py-2 px-6 w-fit rounded-full bg-white text-appThemeColor font-semibold uppercase text-lg '
            : 'py-2 px-6 w-fit rounded-full bg-appThemeColor font-semibold uppercase text-lg'
        }
      >
       Just a button
      </button>
    </>
  );
};

export default AskForDemo;
