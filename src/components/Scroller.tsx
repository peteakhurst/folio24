import Marquee from 'react-fast-marquee';

const Scroller = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full '>
      <div className='flex flex-col w-full my-16 add-noise'>
        <div className='flex flex-col space-y-2 text-center mx-14'>
          {/* <span className='text-2xl'>
            These are the technologies I've worked with
          </span> */}
        </div>
        <Marquee autoFill pauseOnClick>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer bg-black rounded-xl text-orange'>
            Tailwindcss
          </div>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer text-white  rounded-xl'>
            Bootstrap
          </div>
          <div className='flex p-4 space-x-5 text-2xl font-bold cursor-pointer text-orange bg-black rounded-xl'>
            HTML
          </div>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer text-white  rounded-xl'>
            CSS
          </div>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer bg-black rounded-xl text-orange'>
            Javascript
          </div>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer text-white rounded-xl'>
            Node JS
          </div>
        </Marquee>
        <Marquee autoFill pauseOnClick direction='right'>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer bg-black text-orange rounded-xl'>
            ReactJS
          </div>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer rounded-xl text-white'>
            NextJS
          </div>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer text-orange bg-black rounded-xl'>
            Shopify
          </div>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer rounded-xl text-white'>
            AWS
          </div>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer text-orange bg-black rounded-xl'>
            Mongodb
          </div>
          <div className='flex p-4 m-1 space-x-5 text-2xl font-bold cursor-pointer rounded-xl text-white'>
            Typescript
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Scroller;
