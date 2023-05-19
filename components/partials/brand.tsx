import { Children, FunctionComponent, ReactNode } from 'react';
import { Navbar } from '@nextui-org/react';
import TransformOneFc from './transformOne';

const Brand: FunctionComponent<{children : ReactNode}> = ({ children}) => {
  return (
    <div className="w-full font-prompt bg-appThemeColor pt-[130px]">
      {children}
      <TransformOneFc />
    </div>
  );
};

export default Brand;
