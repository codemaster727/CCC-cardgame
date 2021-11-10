import { Navbar } from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { RoundPanel } from '../../components/Panels/RoundPanel';
import { IconButton } from '../../components/Buttons/IconButton';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { ExpandDropdown } from '../../components/Dropdown/ExpandDropdown';
import { ApexOptions } from '../../components/ApexOptions';
// import { Collapse } from 'react-collapse';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'


export default function DashBoard(){
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
    return(
        <div className="flex h-screen flex-col">
            <div className="flex flex-shrink-1 h-full justify-between bg-light-color-main-99 dark:bg-dark-color-main-99 ">
                <div className="flex-shrink-0 p-6 h-full">
                </div>
                <div className="flex-shrink-1 py-6 w-full">
                    
                </div>
            </div>
        </div>
    )
}