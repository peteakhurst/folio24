const Grid = () => {
  return (
    <div className='container max-w-5xl mx-auto '>
      <div className='grid items-center gap-4 py-12 lg:grid-cols-2'>
        <div className='w-full h-full row-span-2 p-8 align-middle border-b-8 border-r-8 rounded-[48px] place-items-center bg-lightGreen place-content-center border-coral '>
          <div className='mx-auto'>
            <h2 className='text-3xl text-oliveGreen'>
              Hi, i'm <span className='font-bold'>Pete</span> I make websites,
              I'm a digital designer , tech gadgets, music and tattoos.
            </h2>
          </div>
        </div>
        <div className='w-full max-h-[272px] h-auto p-8 rounded-[48px] bg-lightGreen border-b-8 border-r-8 border-coral place-content-center'>
          <p className='font-lg text-oliveGreen'>
            Ready to connect? Send me an email and let's spark some digital
            magic! 🚀✨
          </p>
          <p>
            <a href='mailto:peteakhurst@gmail.com'>pete@email.com</a>
          </p>
        </div>
        <div className='w-full max-h-[272px] place-content-center h-auto p-8 rounded-[48px] bg-lightGreen border-b-8 border-r-8 border-coral'>
          <p>
            Actions speak louder than words so, please feel free to checkout my
            work
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
