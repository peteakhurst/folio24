// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import works from '../data/works';

function WorkList() {
  return (
    <section className='py-10 bg-coral rounded-t-2xl ' id='projects'>
      <div className='container'>
        <div className='mb-10'>
          <h2 className='py-10 text-xl font-black text-oliveGreen'>
            Selected Work
          </h2>
          {works.map((work) => (
            <Work
              heading={work.heading}
              imgSrc={work.imgSrc}
              subHeading={work.subHeading}
              href={work.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Work = ({
  heading,
  imgSrc,
  subHeading,
  href,
}: {
  heading: string;
  imgSrc: string;
  subHeading: string;
  href: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();

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
      className='relative flex items-center justify-between transition-colors duration-500 border-b-2 group border-oliveGreen hover:border-neutral-50 md:py-12'
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
          className='relative z-10 block font-bold uppercase transition-colors duration-500 text-4xl md:text-[9rem] text-oliveGreen group-hover:text-neutral-50'
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

        <span className='relative z-10 hidden text-sm transition-colors duration-500 md:block lg:mx-4 md:top-12 text-coral group-hover:text-neutral-50'>
          {subHeading}
        </span>
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
