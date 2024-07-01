import { FaCaretDown } from 'react-icons/fa';

const Grid = () => {
  return (
    <div className='container'>
      <div className='grid items-center gap-4 pt-4 pb-4 lg:grid-cols-2 min-h-[38vh] lg:max-w-6xl lg:mx-auto '>
        <div className='w-full h-full row-span-2 p-10 align-middle border-b-8 border-r-9 rounded-2xl place-items-center bg-lightGreen place-content-center border-coral'>
          <div className='mx-auto'>
            <h2 className='text-lg font-light lg:text-2xl text-oliveGreen'>
              Hi, i'm
              <span className='font-semibold text-oliveGreen'> Pete</span>. I
              help craft digital solutions that matter. Through engaging user
              experiences, I specialise in crafting responsive, dynamic and
              visually appealing websites.
            </h2>
          </div>
        </div>
        <div className='w-full h-full p-8 align-middle border-b-8 border-r-8 rounded-2xl bg-lightGreen border-coral place-items-center place-content-center'>
          <p className='mx-auto text-lg font-light lg:text-2xl text-oliveGreen'>
            Want to work together? Send me an email and let's spark some digital
            magic!
          </p>
          <p className='mx-auto my-4 text-lg font-semibold lg:text-xl text-oliveGreen hover:underline'>
            <a href='mailto:peteakhurst@gmail.com'>pete@email.com</a>
          </p>
        </div>
        <div className='w-full h-full p-8 mx-auto border-b-8 border-r-8 place-items-center place-content-center rounded-2xl bg-lightGreen border-coral'>
          <p className='text-lg font-light lg:text-2xl text-oliveGreen'>
            Actions speak louder than words, please feel free to checkout my
            work below{' '}
            <a href='#projects'>
              <FaCaretDown className='inline' />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
