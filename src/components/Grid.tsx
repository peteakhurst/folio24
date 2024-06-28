const Grid = () => {
  return (
    <div className='container max-w-5xl mx-auto '>
      <div className='grid items-center gap-4 pt-4 pb-12 lg:grid-cols-2 min-h-[38vh]'>
        <div className='w-full h-full row-span-2 p-8 align-middle border-b-8 border-r-8 rounded-[48px] place-items-center bg-lightGreen place-content-center border-coral'>
          <div className='mx-auto'>
            <h2 className='text-3xl font-light text-oliveGreen'>
              Hi, i'm <span className='font-black text-oliveGreen'>Pete</span>.
              I make websites, I'm a digital designer, and I love tech gadgets,
              playing music .
            </h2>
          </div>
        </div>
        <div className='w-full h-full p-8 rounded-[48px] bg-lightGreen border-b-8 border-r-8 border-coral align-middle place-items-center place-content-center'>
          <p className='mx-auto text-xl font-light text-oliveGreen'>
            Ready to connect? Send me an email and let's spark some digital
            magic! 🚀✨
          </p>
          <p className='mx-auto my-4 text-xl font-semibold text-oliveGreen hover:underline'>
            <a href='mailto:peteakhurst@gmail.com'>pete@email.com</a>
          </p>
        </div>
        <div className='w-full h-full mx-auto place-items-center place-content-center p-8 rounded-[48px] bg-lightGreen border-b-8 border-r-8 border-coral'>
          <p className='text-xl font-light text-oliveGreen'>
            Actions speak louder than words so, please feel free to checkout my
            work below
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
