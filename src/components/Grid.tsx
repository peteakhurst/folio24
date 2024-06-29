import { FaCaretDown } from 'react-icons/fa';

const Grid = () => {
  return (
    <div className='container max-w-5xl pb-16 mx-auto'>
      <div className='grid items-center gap-4 pt-4 pb-4 lg:grid-cols-2 min-h-[38vh] '>
        <div className='w-full h-full row-span-2 p-10 align-middle border-b-8 border-r-8 rounded-[48px] place-items-center bg-lightGreen place-content-center border-coral'>
          <div className='mx-auto'>
            <h2 className='text-lg font-light lg:text-3xl text-oliveGreen'>
              Hi, i'm
              <span className='font-semibold text-oliveGreen'> Pete</span>. I
              help craft digital solutions that matter. Through engaging user
              experiences, I specialise in crafting responsive, dynamic and
              visually appealing websites.
            </h2>
          </div>
        </div>
        <div className='w-full h-full p-8 rounded-[48px] bg-lightGreen border-b-8 border-r-8 border-coral align-middle place-items-center place-content-center'>
          <p className='mx-auto text-lg font-light lg:text-3xl text-oliveGreen'>
            Want to work together? Send me an email and let's spark some digital
            magic!
          </p>
          <p className='mx-auto my-4 text-lg font-semibold lg:text-3xl text-oliveGreen hover:underline'>
            <a href='mailto:peteakhurst@gmail.com'>pete@email.com</a>
          </p>
        </div>
        <div className='w-full h-full mx-auto place-items-center place-content-center p-8 rounded-[48px] bg-lightGreen border-b-8 border-r-8 border-coral'>
          <p className='text-lg font-light lg:text-3xl text-oliveGreen'>
            Actions speak louder than words, please feel free to checkout my
            work below <FaCaretDown className='inline' />
          </p>
        </div>
      </div>
      <div className='grid items-center gap-4 pb-4 md:pt-4 md:grid-cols-3'>
        <div className='w-full h-full text-center md:text-left mx-auto place-items-center place-content-center p-4 lg:p-8 rounded-[48px] bg-lightGreen border-b-8 border-r-8 border-coral'>
          <h5 className='text-lg font-semibold text-oliveGreen'>
            E-com experience:
          </h5>
          <ul className='text-sm font-light text-oliveGreen'>
            <li>Shopify</li>
            <li>Wordpress</li>
            <li>WooCommerce</li>
          </ul>
        </div>
        <div className='w-full h-full mx-auto text-center md:text-left place-items-center place-content-center p-4 lg:p-8 rounded-[48px] bg-lightGreen border-b-8 border-r-8 border-coral'>
          <h5 className='text-lg font-semibold text-oliveGreen'>Skills:</h5>
          <ul className='text-sm font-light text-oliveGreen'>
            <li>HTML/CSS/Javascript</li>
            <li>Liquid</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className='w-full h-full text-center md:text-left mx-auto place-items-center place-content-center p-4 lg:p-8 rounded-[48px] bg-lightGreen border-b-8 border-r-8 border-coral'>
          <h5 className='text-lg font-semibold text-oliveGreen'>
            JS Frameworks:
          </h5>
          <ul className='text-sm font-light text-oliveGreen'>
            <li>ReactJs</li>
            <li>NextJs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grid;
