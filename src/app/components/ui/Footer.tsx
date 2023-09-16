import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" bg-black m-4 mx-10">
      <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex flex-col items-center mb-4 sm:mb-0">
            <p className="text-sm mb-2 text-gray-400 text-right">Powered By</p>
            <Image
              className="relative "
              src="/metabolite-full.png"
              alt="Metabolite logo"
              width={200}
              height={200}
              quality={100}
              priority
            />
          </a>
          <ul className="flex flex-wrap items-center justify-around mb-6 text-sm font-medium sm:mb-0 text-gray-400 ">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/user-guide" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/user-guide" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a className="hover:underline" href="mailto:metabolite.io@gmail.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700" />
        <p className="block text-sm text-gray-400 text-center">Ignite Vitality.</p>
        <span className="block text-sm text-gray-400 text-center my-2">
          © 2023{' '}
          <a href="https://metabolite.vercel.app/" className="hover:underline">
            Metabolite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
