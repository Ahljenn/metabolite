import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="hidden sm:block shadow bg-black m-4 w-full border-t-[0.01px] border-slate-700 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="metabolite.vercel.app" className="flex flex-col items-center mb-4 sm:mb-0">
            <p className="text-sm mb-2 text-gray-400 text-center">Powered by</p>
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
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/guide" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/https://github.com/Ahljenn/metabolite/blob/main/LICENSE"
                className="mr-4 hover:underline md:mr-6 "
              >
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
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-400">
          © 2023{' '}
          <a href="https://Metabolite.com/" className="hover:underline">
            Metabolite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
