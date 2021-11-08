
import { Fragment, useState, ReactNode } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Collapse } from 'react-collapse';

const logoUrl = "/logo_panel.png";

interface ExpandDropdownInterface {
    iconURL: string,
    mainText: string,
    mainAmount: number,
    mainAmountCurrency: "$" | "£" | "¥" | "฿" | "€" | "₱",
    collapsable: boolean,
    children: ReactNode,
    className?: string,
}

export const ExpandDropdown = ({
    iconURL = "/logo_panel.png",
    mainText = "Fieonix Interest Account",
    mainAmount = 12401.68,
    mainAmountCurrency = "£",
    collapsable = true,
    children = <></>,
    className = "",
}: ExpandDropdownInterface) => {
    const [collapseStatus, setCollapseStatus] = useState(false);
    const toggle = () => collapsable && setCollapseStatus(!collapseStatus);
    return (
        <div className={`border-2 rounded-2xl border-indigo-800 p-3.5 mt-3.5 ${className}`}>
            <div className="flex justify-between" onClick = {toggle}>
                <div className="flex-shrink-0 flex items-center">
                    <img className="h-9 w-9" src={iconURL} alt="Workflow" />
                </div>
                <div className="flex-shrink-1 m-auto">
                    <p className = "text-xs">{ mainText }</p>
                    <h1 className = "text-lg">
                        { mainAmountCurrency } { mainAmount }
                    </h1>
                </div>
                { collapsable ? 
                <div className={`flex-shrink-0 flex items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div> : "" }
            </div>
            
            <Transition
              show={collapseStatus}
              as={Fragment}
              leave="transition ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
            {children}
            </Transition>
        </div>
    )
}