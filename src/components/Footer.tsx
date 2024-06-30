import { CgFileDocument } from 'react-icons/cg';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Noise from './Noise';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='bg-oliveGreen add-noise'>
        <footer className='container rounded-t-2xl'>
          <div className='flex flex-col items-center justify-center gap-2 mb-4 align-middle'>
            <h4 className='py-4 text-xl font-black text-center text-cream'>
              Let’s make some magic
            </h4>
            <ul className='flex flex-col items-center justify-center gap-2 text-center md:flex-row text-cream'>
              <li className='flex items-center gap-2 text-center'>
                <p className='font-bold'>Code:</p>
                <a
                  className='hover:underline'
                  href='https://github.com/peteakhurst'
                >
                  GitHub
                </a>
                <FaGithub className='text-cream' />
              </li>

              <li className='flex items-center gap-2 text-center'>
                <p className='font-bold'>Connect on:</p>
                <a
                  className='hover:underline'
                  href='https://www.linkedin.com/in/pete-akhurst/'
                >
                  LinkedIn
                </a>
                <FaLinkedinIn className='text-cream' />
              </li>
              <li className='flex items-center gap-2'>
                <p className='font-bold'>Download:</p>
                <a className='hover:underline' href='Pete_Akhurst_cv.pdf'>
                  Resume
                </a>
                <CgFileDocument className='text-cream' />
              </li>
              <li className='flex items-center gap-2 align-middle'>
                <p className='font-bold'>Email me:</p>
                <a
                  href='mailto:peteakhurst@gmail.com'
                  className='hover:underline'
                >
                  Email
                </a>
                <FaEnvelope className='text-cream' />
              </li>
            </ul>
          </div>
          <div className='pb-4 text-center'>
            <small className=' text-cream'>
              &copy; {currentYear} Gen2 By Design
            </small>
          </div>
          <Noise />
        </footer>
      </div>
    </>
  );
};

export default Footer;
