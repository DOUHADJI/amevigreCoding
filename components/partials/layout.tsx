import { FunctionComponent, ReactNode, useState } from 'react';
import NavbarFc from './navbar';
import Cookies from './cookies';
import { BsCaretUp } from 'react-icons/bs';
import ScrollToTop from './scrollToTop';
import AskQuestion from './askQuestion';
import Footer from './footer';
import SecondNavBar from './secondNavbar';

type layoutProps = {
  children: ReactNode;
};

const Layout: FunctionComponent<layoutProps> = ({ children }) => {
 
  return (
    <div className="relative">
      {/* <SecondNavBar /> */}
      <NavbarFc />
      <div className="">
        {children}
       <Cookies />
       <AskQuestion />
       <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
