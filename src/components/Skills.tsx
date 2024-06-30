const Skills = () => {
  return (
    <section className='bg-cream '>
      <div className='container'>
        <div className='grid items-center gap-4 pb-4 md:pt-4 md:grid-cols-3'>
          <div className='w-full h-full text-center mx-auto place-items-center place-content-center p-4 lg:p-8 rounded-[48px] bg-oliveGreen border-b-8 border-r-8 border-lightGreen'>
            <h5 className='text-lg font-semibold text-cream'>
              E-com experience:
            </h5>
            <ul className='text-sm font-light text-cream'>
              <li>Shopify</li>
              <li>Wordpress</li>
              <li>WooCommerce</li>
            </ul>
          </div>
          <div className='w-full h-full mx-auto text-center place-items-center place-content-center p-4 lg:p-8 rounded-[48px] bg-oliveGreen border-b-8 border-r-8 border-lightGreen'>
            <h5 className='text-lg font-semibold text-cream'>Skills:</h5>
            <ul className='text-sm font-light text-cream'>
              <li>HTML/CSS/Javascript</li>
              <li>Liquid</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className='w-full h-full text-center mx-auto place-items-center place-content-center p-4 lg:p-8 rounded-[48px] bg-oliveGreen border-b-8 border-r-8 border-lightGreen'>
            <h5 className='text-lg font-semibold text-cream'>JS Frameworks:</h5>
            <ul className='text-sm font-light text-cream'>
              <li>ReactJs</li>
              <li>NextJs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
