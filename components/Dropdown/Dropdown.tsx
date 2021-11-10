import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function MyDropdown({title, items}) {
  return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-max mx-8 my-4 md:mx-4 md:my-0 text-white text-left rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span className="font-bold">{title}</span>
            <FontAwesomeIcon size="xs" className="ml-2" icon={faAngleDown} />
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
          <Menu.Items className="absolute top-12 md:top-6 right-0 w-max md:mt-2 origin-top-left md:origin-top-right bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center z-40">
            <div className="px-1 py-1 text-center">
              {items.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={`${
                        active && 'font-medium bg-gray-600'
                      } group flex rounded-md flex-row w-full px-2 py-2 text-sm text-white`}
                    >
                      <Link href={"/"+item.to}>{item.name}</Link>
                    </button>
                  )}
                </Menu.Item>
              ))}
              </div>
            </Menu.Items>
        </Transition>
      </Menu>
  )
}