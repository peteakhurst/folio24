import { CgFileDocument } from 'react-icons/cg';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='bg-oliveGreen add-noise'>
        <footer className='container max-w-5xl mx-auto rounded-t-2xl'>
          <div className='flex justify-between gap-4 mb-4 align-middle'>
            <div className=''>
              <h4 className='py-10 text-xl font-black text-cream'>
                Let’s make some magic
              </h4>
              <ul className='text-cream'>
                <li className='flex items-center gap-2'>
                  <p className='font-bold'>Code:</p>
                  <a
                    className='hover:underline'
                    href='https://github.com/peteakhurst'
                  >
                    GitHub
                  </a>
                  <FaGithub className='text-cream' />
                </li>

                <li className='flex items-center gap-2'>
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
            <div className=''>
              <h4 className='py-10 text-xl font-black text-cream'>
                Just For Fun
              </h4>
            </div>
          </div>
          <div className='pb-4 text-center'>
            <small className=' text-cream'>
              &copy; {currentYear} Gen2 By Design
            </small>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
