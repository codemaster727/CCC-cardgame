import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function MyDropdown({title, items}) {
  return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full px-4 text-white rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span>{title}</span>
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
          <Menu.Items className="absolute right-0 w-max mt-2 origin-top-right bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
            <div className="px-1 py-1 text-center">
              {items.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={`${
                        active && 'font-medium bg-gray-600'
                      } group flex rounded-md flex-row w-full px-2 py-2 text-sm text-white`}
                    >
                      <Link href={item.to}>{item.name}</Link>
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