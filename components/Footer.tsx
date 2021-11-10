import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import Link from 'next/link';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(){
    const {theme, setTheme} = useTheme();
    
    useEffect(() => {
        document.documentElement.classList.add('dark')
        setTheme('dark')
      }, [])
    // The wrapper exports only a default component class that at the same time is a
    // namespace for the related Props interface (HighchartsReact.Props). All other
    // interfaces like Options come from the Highcharts module itself.
    const balanceColor = "#5E5CE6"
    const paidColor = "#3480FF"
    const legendColor = theme==="dark"?"#ffffff":"#8388A8"
    
    const inactiveClass = "h-10 text-center mr-4 flex p-2 transition-colors hover:text-gray-800 text-gray-400 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 duration-200 rounded-lg my-2";
    const activeClass = "h-10 text-center mr-4 flex p-2 transition-colors hover:text-gray-800 text-gray-50 dark:text-white hover:bg-blue-400 dark:hover:bg-purple-400 duration-200 rounded-lg my-2 bg-indigo-600 dark:bg-purple-500";
    const [activeTimeButton, setActiveTimeButton] = useState(0)
    const timeButtonClick = (btn) => () => {
        setActiveTimeButton(btn)
    }
    const logoUrl = "/Logo CCC (2021)@2x-8.png";
    
    return(
        <div className="flex flex-col flex-shrink-1 md:flex-row mt-4 md:mt-12 border-t-2 border-white justify-between p-8">
            <div className="flex-shrink-0 p-6">
                <Link href="/dashboard">
                    <img className="h-auto w-10 mb-4" src={logoUrl} alt="Workflow"/>
                </Link>
                <p>A turn based card<br/>dueling platform</p>
            </div>
            <div className="flex-shrink-1 py-6 text-left">
                <div className='inline-flex flex-col md:ml-auto md:w-auto w-full md:items-left items-start text-left md:h-auto'>
                    <Link href='/'>
                    <a className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 bg-opacity-20 hover:text-white '>
                        Stacks
                    </a>
                    </Link>
                    <Link href='/'>
                    <a className='md:inline-flex md:w-auto w-full dark:text-gray-400 px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 bg-opacity-20 hover:text-white'>
                        Farm
                    </a>
                    </Link>
                    <Link href='/'>
                    <a className='md:inline-flex md:w-auto w-full dark:text-gray-400 px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 bg-opacity-20 hover:text-white'>
                        Battle Center
                    </a>
                    </Link>
                    <Link href='/marketplace'>
                    <a className='md:inline-flex md:w-auto w-full dark:text-gray-400 px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 bg-opacity-20 hover:text-white'>
                        MarketPlace
                    </a>
                    </Link>
                </div>
            </div>
            <div className="flex-shrink-1 py-6 text-left">
                <div className='inline-flex flex-col md:ml-auto md:w-auto w-full md:items-left items-start text-left md:h-auto'>
                    <Link href='/'>
                    <a className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 bg-opacity-20 hover:text-white '>
                        Info
                    </a>
                    </Link>
                    <Link href='/'>
                    <a className='md:inline-flex md:w-auto w-full dark:text-gray-400 px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 bg-opacity-20 hover:text-white'>
                        CCC Token
                    </a>
                    </Link>
                    <Link href='/'>
                    <a className='md:inline-flex md:w-auto w-full dark:text-gray-400 px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 bg-opacity-20 hover:text-white'>
                        Whitepaper
                    </a>
                    </Link>
                    <Link href='/'>
                    <a className='md:inline-flex md:w-auto w-full dark:text-gray-400 px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 bg-opacity-20 hover:text-white'>
                        Blog
                    </a>
                    </Link>
                </div>
            </div>
            <div className="flex-shrink-1 py-6 text-left">
                <p className="pb-6">Join Newsletter</p>
                <p className="pb-6">Subscribe our newsletter to get more information and launch game</p>
                <input placeholder="Enter your email" className="p-1 pb-2 px-2 outline-black"></input>
                <button className="bg-yellow-500 p-1 pb-2 px-4"><FontAwesomeIcon className="" icon={faAngleRight} /></button>
            </div>
        
        
        </div>
    )
}