import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <div className="bg-appThemeColor pt-8">
      <div className="flex flex-wrap justify-center py-4 gap-6">
        {/* <Image src="/logo-glab.png" className="h-32" alt="Logo GLab" /> */}
        <a className="underline" href="https://github.com/DOUHADJI">
          #myGithub
        </a>{' '}
        <a
          className="underline"
          href="https://www.linkedin.com/in/amevi-gregoire-douhadji-5b43281ab/"
        >
          #myLinkedin
        </a>
      </div>
      {/*  <div className=' flex flex-wrap justify-center gap-8 pl-8'>
        <Link className='underline' href={'/'}>Mention légales</Link>
        <Link className='underline' href={'/'}>Politique de confidentialité</Link>
        <Link className='underline' href={'/'}>Utilisation des cookies</Link>
      </div> */}
      <hr className="w-32" />
      <div className="text-center py-3">
        @copyright {new Date().getFullYear()} - AmeviGre
      </div>
    </div>
  );
};

export default Footer;
