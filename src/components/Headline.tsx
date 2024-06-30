import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

const Headline = () => {
  Splitting();

  return (
    <div className='container '>
      <div data-splitting className='flex justify-center py-10 uppercase'>
        <h1 className='text-5xl font-black md:leading-none md:text-[11rem] font-source text-coral'>
          Pete <span className='italic font-light'>Akhurst</span>
        </h1>
      </div>
    </div>
  );
};

export default Headline;
