import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

function WorkList() {
  return (
    <section className='py-10 bg-coral rounded-t-2xl add-noise' id='projects'>
      <div className='max-w-5xl mx-auto mb-10'>
        <h2 className='py-10 text-3xl font-black text-oliveGreen'>
          Selected Work
        </h2>
        <Link heading='Swaggle' imgSrc='swaggleScreenshot.png' href='#' />
        <Link heading='SESIMI' imgSrc='sesimi.jpg' href='#' />
        <Link
          heading='Latitude'
          imgSrc='clearDynamicsScreenshot.png'
          href='#'
        />
        <Link heading='The Catfish' imgSrc='catfish.png' href='#' />
      </div>
    </section>
  );
}

const Link = ({ heading, imgSrc, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial='initial'
      whileHover='whileHover'
      className='relative flex items-center justify-between py-4 transition-colors duration-500 border-b-2 group border-oliveGreen hover:border-neutral-50 md:py-8'
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: 'spring',
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className='relative z-10 block font-bold uppercase transition-colors duration-500 text-lg md:text-[6rem] text-oliveGreen group-hover:text-neutral-50'
        >
          {heading.split('').map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: 'spring' }}
              className='inline-block'
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          initial: { scale: 0, rotate: '-12.5deg' },
          whileHover: { scale: 1, rotate: '12.5deg' },
        }}
        transition={{ type: 'spring' }}
        src={imgSrc}
        className='absolute z-0 object-contain w-32 h-24 rounded-lg md:h-48 md:w-64'
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{ type: 'spring' }}
        className='relative z-10 p-4'
      >
        <FiArrowRight className='text-5xl text-neutral-50' />
      </motion.div>
    </motion.a>
  );
};

export default WorkList;