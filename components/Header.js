import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
  QuestionMarkCircleIcon,
  CogIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  HomeIcon,
  PlayIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  SearchIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const [session] = useSession();
  const router = useRouter();

  const friends = (e) => {
    // e.preventDefault();

    router.push("/friends");
  };
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-1 lg:px-4 shadow-md">
      {/*Left */}
      <div className="flex items-center">
        <Image
          src="/images/Imagen1.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/*Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active src={"/pet-package/pet-house.png"} />
          <button type="button" onClick={friends}>
            <HeaderIcon src={"/pet-package/veterinarian.png"} />
          </button>
          <HeaderIcon src={"/pet-package/clapperboard.png"} />

          <HeaderIcon src={"/pet-package/pet-shop.png"} />

          <HeaderIcon src={"/pet-package/pet-care.png"} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/*Profile*/}
        <Image
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="30"
          height="30"
          layout="fixed"
        />

        <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="focus:outline-none">
              <ChevronDownIcon className="icon" />
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
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                    >
                      <Image
                        className="rounded-full cursor-pointer "
                        src={session.user.image}
                        width="50"
                        height="50"
                        layout="fixed"
                      />
                      <p className="lg:inline-flex text-sm whitespace-nowrap font-semibold pl-5 ">
                        {session.user.name}
                        <br />
                        Ver perfil
                      </p>
                    </button>
                  )}
                </Menu.Item>
              </div>

              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                    >
                      <CogIcon
                        className="icon w-9 h-9 mr-2"
                        aria-hidden="true"
                      />
                      Configuracion
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                    >
                      <QuestionMarkCircleIcon
                        className="icon w-9 h-9 mr-2"
                        aria-hidden="true"
                      />
                      Ayuda y soporte
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={signOut}
                      className={`${
                        active ? "bg-gray-100" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                    >
                      <LogoutIcon
                        className="icon w-9 h-9 mr-2"
                        aria-hidden="true"
                      />
                      Cerrar sesion
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
