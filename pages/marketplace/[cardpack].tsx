import { Navbar } from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { RoundPanel } from '../../components/Panels/RoundPanel';
import { IconButton } from '../../components/Buttons/IconButton';
import { ExpandDropdown } from '../../components/Dropdown/ExpandDropdown';
import { ApexOptions } from '../../components/ApexOptions';
// import { Collapse } from 'react-collapse';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import Head from "next/head";
import { faHeart, faShareAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router'

export default function CardPack(){
    const {theme, setTheme} = useTheme();
    const router = useRouter()
    const { cardpack } = router.query;
    console.log(cardpack);
    useEffect(() => {
        document.documentElement.classList.add('dark')
        setTheme('dark')
      }, [])
    // The wrapper exports only a default component class that at the same time is a
    // namespace for the related Props interface (HighchartsReact.Props). All other
    // interfaces like Options come from the Highcharts module itself.

    return(
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row flex-shrink-1 justify-between mx-4 md:mx-16 md:p-8 md:pl-24 dark:bg-black border-2 border-pink-900 border-opacity-50 dark:bg-pink-300 dark:bg-opacity-5 p-5">
                {/* <div className="flex-shrink-0 p-6 h-full title-font">qweqweqwe</div> */}
                {/* <div className="flex-shrink-0 p-6 h-full subtitle-font">qweqweqwe</div> */}
                <div className="flex-shrink w-full md:w-3/5">
                    <img className="w-4/5 md:w-1/2 mx-auto md:mx-32 my-6" src="/img/card-uncommon.png"></img>
                </div>
                <div className="flex-shrink w-full md:w-2/5">
                    <h1 className="text-3xl md:text-5xl">5 CARD PACK UNCOMMON</h1>
                    <div className="flex flex-col md:flex-row text-center flex-shrink-1 justify-between py-6 border-b-2 border-pink-900 border-opacity-50">
                        <ul className="breadcrumb">
                            <li className="pr-6 dark:text-red-100 dark:text-opacity-70">Views 10k</li>
                            <li className="dark:text-red-100 dark:text-opacity-70">In Stock: 5</li>
                        </ul>
                        <div className="flex flex-shrink text-center justify-center">
                            <div className="px-2 py-1 border border-dark-color-bg-yellow border-opacity-80 mr-2"><FontAwesomeIcon icon={faHeart} className="mr-1 text-pink-500"></FontAwesomeIcon>234</div>
                            <div className="px-2 py-1 border border-dark-color-bg-yellow border-opacity-80 mr-2"><FontAwesomeIcon icon={faShareAlt} size="sm" className="mr-1 text-gray-300"></FontAwesomeIcon></div>
                            <div className="px-2 py-1 border border-dark-color-bg-yellow border-opacity-80"><FontAwesomeIcon icon={faEllipsisH} className="text-gray-300"></FontAwesomeIcon></div>
                        </div>
                    </div>
                    <div className="my-6 px-4 py-2 border-2 border-pink-900 border-opacity-50 text-center md:text-left">
                        <p>Current Price</p>
                        <h1 className="text-4xl">10 BUSD</h1>
                        <button className="button w-3/5 p-1 my-4 text-black text-center bg-dark-color-bg-yellow hover:bg-dark-color-bg-yellow-hover">Buy Now</button>
                    </div>
                    <p className="text-xs dark:text-red-100 dark:text-opacity-70">About Pack</p>
                    <p>Pack Uncommon</p>
                    <p className="mt-6 text-sm dark:text-red-100 dark:text-opacity-70">Pack composed of 60% common cards and 40% rare cards</p>
                </div>
            </div>
        </div>
    )
}