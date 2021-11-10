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
import { faShareAlt, faEllipsisH, faBolt, faFireAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MarketPlace(){
    const {theme, setTheme} = useTheme();
    
    useEffect(() => {
        document.documentElement.classList.add('dark')
        setTheme('dark')
      }, [])
    // The wrapper exports only a default component class that at the same time is a
    // namespace for the related Props interface (HighchartsReact.Props). All other
    // interfaces like Options come from the Highcharts module itself.

    return(
        <div className="flex flex-col">
            <h1 className="text-5xl text-center mb-4">DISCOVER <span className="dark:text-dark-color-bg-yellow whitespace-nowrap">PACK CCC</span></h1>
            <div className="flex flex-col md:flex-row flex-shrink-1 justify-between mx-4 md:mx-16 p-4 pb-0 dark:bg-black">
                {/* <div className="flex-shrink-0 p-6 h-full title-font">qweqweqwe</div> */}
                {/* <div className="flex-shrink-0 p-6 h-full subtitle-font">qweqweqwe</div> */}
                
                <div className="flex-shrink mb-2 md:mb-0 w-full md:w-1/2 border-2 border-pink-900 border-opacity-50 p-2 mr-4">
                    <div className="h-6">
                        <div className="inline-block px-2 pb-0.5 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faBolt} className="mr-2"></FontAwesomeIcon>
                            Featured
                        </div>
                        <div className="inline-block px-2 pb-0.5 ml-2 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faFireAlt} className="mr-2"></FontAwesomeIcon>
                            Rare
                        </div>
                    </div>
                    <img className="w-1/4 mx-auto my-2" src="/img/card-uncommon.png"></img>
                    <p>5 Card Pack Rare</p>

                    <div className="float-left dark:text-dark-color-bg-yellow dark:text-opacity-80">10 BUSD</div>
                    <div className="float-right dark:text-dark-color-bg-yellow dark:text-opacity-80">in stock: 5</div>
                    <div className="clear-right text-center">
                        <button className="clear-right button p-1 w-full my-2 text-black text-center bg-dark-color-bg-yellow hover:bg-dark-color-bg-yellow-hover">Buy Now</button>
                    </div>
                    <div className="text-center dark:text-opacity-90"><FontAwesomeIcon icon={faHeart} className="mr-1 text-dark-color-bg-yellow"></FontAwesomeIcon>234</div>
                </div>
                
                <div className="flex-shrink mb-2 md:mb-0 w-full md:w-1/2 border-2 border-pink-900 border-opacity-50 p-2">
                    <div className="h-6">
                        <div className="inline-block px-2 pb-0.5 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faBolt} className="mr-2"></FontAwesomeIcon>
                            Featured
                        </div>
                        <div className="inline-block px-2 pb-0.5 ml-2 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faFireAlt} className="mr-2"></FontAwesomeIcon>
                            Rare
                        </div>
                    </div>
                    <img className="w-1/4 mx-auto my-2" src="/img/card-uncommon.png"></img>
                    <p>5 Card Pack Rare</p>

                    <div className="float-left dark:text-dark-color-bg-yellow dark:text-opacity-80">10 BUSD</div>
                    <div className="float-right dark:text-dark-color-bg-yellow dark:text-opacity-80">in stock: 5</div>
                    <div className="clear-right text-center">
                        <button className="clear-right button p-1 w-full my-2 text-black text-center bg-dark-color-bg-yellow hover:bg-dark-color-bg-yellow-hover">Buy Now</button>
                    </div>
                    <div className="text-center dark:text-opacity-90"><FontAwesomeIcon icon={faHeart} className="mr-1 text-dark-color-bg-yellow"></FontAwesomeIcon>234</div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row flex-shrink-1 justify-between mx-4 md:mx-16 p-4 dark:bg-black">
                {/* <div className="flex-shrink-0 p-6 h-full title-font">qweqweqwe</div> */}
                {/* <div className="flex-shrink-0 p-6 h-full subtitle-font">qweqweqwe</div> */}
                
                <div className="flex-shrink mb-2 md:mb-0 w-full md:w-1/3 border-2 border-pink-900 border-opacity-50 p-2 mr-4">
                    <div className="h-6">
                        {/* <div className="inline-block px-2 pb-0.5 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faBolt} className="mr-2"></FontAwesomeIcon>
                            Featured
                        </div>
                        <div className="inline-block px-2 pb-0.5 ml-2 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faFireAlt} className="mr-2"></FontAwesomeIcon>
                            Rare
                        </div> */}
                    </div>
                    <img className="w-1/4 mx-auto my-2" src="/img/card-uncommon.png"></img>
                    <p>5 Card Pack Common</p>

                    <div className="float-left dark:text-dark-color-bg-yellow dark:text-opacity-80">10 BUSD</div>
                    <div className="float-right dark:text-dark-color-bg-yellow dark:text-opacity-80">in stock: 5</div>
                    <div className="clear-right text-center">
                        <button className="clear-right button p-1 w-full my-2 text-black text-center bg-dark-color-bg-yellow hover:bg-dark-color-bg-yellow-hover">Buy Now</button>
                    </div>
                    <div className="text-center dark:text-opacity-90"><FontAwesomeIcon icon={faHeart} className="mr-1 text-dark-color-bg-yellow"></FontAwesomeIcon>234</div>
                </div>
                
                <div className="flex-shrink mb-2 md:mb-0 w-full md:w-1/3 border-2 border-pink-900 border-opacity-50 p-2 mr-4">
                    <div className="h-6">
                        <div className="inline-block px-2 pb-0.5 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faTimes} className="mr-2"></FontAwesomeIcon>
                            Sold off
                        </div>
                        {/* <div className="inline-block px-2 pb-0.5 ml-2 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faFireAlt} className="mr-2"></FontAwesomeIcon>
                            Rare
                        </div> */}
                    </div>
                    <img className="w-1/4 mx-auto my-2" src="/img/card-uncommon.png"></img>
                    <p>5 Card Pack Uncommon</p>

                    <div className="float-left dark:text-dark-color-bg-yellow dark:text-opacity-80">10 BUSD</div>
                    <div className="float-right dark:text-dark-color-bg-yellow dark:text-opacity-80">in stock: 5</div>
                    <div className="clear-right text-center">
                        <button className="clear-right button p-1 w-full my-2 text-black text-center bg-dark-color-bg-yellow hover:bg-dark-color-bg-yellow-hover">Buy Now</button>
                    </div>
                    <div className="text-center dark:text-opacity-90"><FontAwesomeIcon icon={faHeart} className="mr-1 text-dark-color-bg-yellow"></FontAwesomeIcon>234</div>
                </div>

                <div className="flex-shrink mb-2 md:mb-0 w-full md:w-1/3 border-2 border-pink-900 border-opacity-50 p-2">
                    <div className="h-6">
                        <div className="inline-block px-2 pb-0.5 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faBolt} className="mr-2"></FontAwesomeIcon>
                            Featured
                        </div>
                        <div className="inline-block px-2 pb-0.5 ml-2 bg-dark-color-bg-red shadow-sm text-xs dark:text-dark-color-bg-yellow dark:text-opacity-80">
                            <FontAwesomeIcon icon={faFireAlt} className="mr-2"></FontAwesomeIcon>
                            Rare
                        </div>
                    </div>
                    <img className="w-1/4 mx-auto my-2" src="/img/card-uncommon.png"></img>
                    <p>5 Card Pack Rare</p>

                    <div className="float-left dark:text-dark-color-bg-yellow dark:text-opacity-80">10 BUSD</div>
                    <div className="float-right dark:text-dark-color-bg-yellow dark:text-opacity-80">in stock: 5</div>
                    <div className="clear-right text-center">
                        <button className="clear-right button p-1 w-full my-2 text-black text-center bg-dark-color-bg-yellow hover:bg-dark-color-bg-yellow-hover">Buy Now</button>
                    </div>
                    <div className="text-center dark:text-opacity-90"><FontAwesomeIcon icon={faHeart} className="mr-1 text-dark-color-bg-yellow"></FontAwesomeIcon>234</div>
                </div>
            </div>
        </div>
    )
}