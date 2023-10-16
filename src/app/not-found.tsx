const Custom404 = (): JSX.Element => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-white opacity-50">
            Sorry, Metabolite couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-10 items-center justify-center gap-x-6">
            <a
              href="#"
              className="transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent cursor-pointer"
            >
              Go back home
            </a>
            <a className="italic  text-emerald-300 underline" href="mailto:metabolite.io@gmail.com">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Custom404;
