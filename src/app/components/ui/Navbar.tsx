'use client';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import LoginWithGoogle, { onSignIn } from '../features/LoginWithGoogle';
import { useSession, signOut, signIn } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Hub', href: '/', current: true },
  { name: 'Fitness', href: '/fitness', current: false },
  { name: 'Nutrition', href: '/nutrition', current: false },
  { name: 'Guide', href: '/user-guide', current: false },
  { name: 'About', href: '/about', current: false },
];

const classNames = (...classes: any[]): string => {
  return classes.filter(Boolean).join(' ');
};

const Navbar = () => {
  const { data: session, status } = useSession();
  const currentRoute = usePathname();

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-neutral-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-[4.5rem] lg:hidden "
                    src="/metabolite-m.png"
                    alt="Metabolite Logo"
                    width={120}
                    height={100}
                    quality={100}
                    priority
                  />
                  <Image
                    className="hidden h-8 w-[4.5rem] lg:block"
                    src="/metabolite-m.png"
                    alt="Metabolite Logo"
                    width={120}
                    height={100}
                    quality={100}
                    priority
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === currentRoute ||
                            (item.href !== '/' && currentRoute.includes(item.href))
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {status === 'loading' ? <></> : <LoginWithGoogle data={session} status={status} />}
                {session ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className={classNames(
                            session?.user?.image ? '' : 'invert',
                            'h-8 w-8 rounded-full'
                          )}
                          src={session?.user?.image ?? '/profile-placeholder.png'}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={`/api/auth/signout`}
                              onClick={(e) => {
                                e.preventDefault();
                                signOut();
                              }}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <></>
                )}
                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {session ? (
                <></>
              ) : (
                <Disclosure.Button
                  onClick={onSignIn}
                  as="a"
                  className="text-blue-300 hover:bg-gray-700 hover:text-white
                    block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                >
                  Login With Google
                </Disclosure.Button>
              )}

              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === currentRoute
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;

//  { name: 'Login with Google', href: '/api/auth/signin', current: false },
