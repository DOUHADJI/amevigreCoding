import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/partials/layout';
import Brand from '../components/partials/brand';
import TransformOneFc from '../components/partials/transformOne';
import SliderBrand from '../components/index/sliderBrand';
import UseFor from '../components/index/useFor';
import OurSolutions from '../components/index/ourSolutions';
import GainProductivity from '../components/index/gainProductivity';
import ForceOfGlab from '../components/index/powerOfGlab';
import BeginNow from '../components/index/beginNow';

const Home: NextPage = () => {
  return (
    <Layout>
      <SliderBrand />
      <div>
        <section className="flex justify-center items-center p-24 mb-24">
          <div className="">
            <p className="text-[3.2rem] font-semibold text-center my-12 text-[#003F5D] tracking-[2px] leading-[50px]">
              Just want to{' '}
              <span className="text-[#D82939]">
                show you
                <br />
              </span>{' '}
              something {" "}
              <span className="text-[#D82939]">simple </span>
              and
              <span className="text-[#D82939]"> creative</span>
            </p>
            <p className="text-gray-800 font-light text-center text-2xl tracking-[1.5px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              maxime iusto, enim, tempore magnam dolor fugiat quia rem
              architecto natus facilis at quam eum, omnis quasi a voluptas quae
              aliquam.
            </p>
            <p className="text-gray-800 font-light text-center text-2xl tracking-[1.5px] mt-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              maxime iusto, enim, tempore magnam dolor fugiat quia rem
              architecto natus facilis at quam eum, omnis quasi a voluptas quae
              aliquam.
            </p>
          </div>
        </section>
        <UseFor />
        <OurSolutions />
        <GainProductivity />
        <ForceOfGlab />
        <BeginNow />
      </div>
    </Layout>
  );
};

export default Home;
