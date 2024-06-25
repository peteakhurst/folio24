const Navbar = () => {
  return (
    <div>
      <nav className='container max-w-5xl pt-4 pb-6 mx-auto '>
        <div className='w-full h-full py-2 border-b-4 rounded-full border-lightGreen bg-coral bg-clip-padding backdrop-filter backdrop-blur-sm'>
          <ul className='flex items-center justify-between mx-8 text-xl font-regular font-source text-oliveGreen'>
            <li>
              <a className='hover:text-lightGreen hover:underline' href='#'>
                About
              </a>
            </li>
            <li>
              <a
                className='hover:text-lightGreen hover:underline'
                href='#projects'
              >
                Projects
              </a>
            </li>
            <li>
              <a className='hover:text-lightGreen hover:underline' href='#'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
