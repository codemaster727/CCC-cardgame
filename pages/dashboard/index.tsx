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
import { useState } from 'react';
import { useTheme } from 'next-themes'


export default function DashBoard(){
    const {theme, setTheme} = useTheme();
    const Chart = dynamic(
      () => import('react-apexcharts'),
      { ssr: false }
    )
    
    // The wrapper exports only a default component class that at the same time is a
    // namespace for the related Props interface (HighchartsReact.Props). All other
    // interfaces like Options come from the Highcharts module itself.
    const balanceColor = "#5E5CE6"
    const paidColor = "#3480FF"
    const legendColor = theme==="dark"?"#ffffff":"#8388A8"
    const series = [{
            name: 'Cash Flow',
            color: balanceColor,
            data: [1.45, 5.42, 5.9, -10.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 10.34, 3.88].map(value=>Math.abs(value))
        }, {
            name: 'Cash Flow1',
            color: paidColor,
            data: [1.45, 5.42, 5.9, -10.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 10.34, 3.88].reverse().map(value=>Math.abs(value)*(-1))
      }];
    const options = {
        chart: {
            type: 'column',
            height: "30%",
            stacked: true
        },
        grid: {
            strokeDashArray: 4,

        },
        plotOptions: {
            bar: {
                // borderRadius: 20,
                columnWidth: '50%',
                // colors: {
                //     name: [{
                //     from: -100,
                //     to: -46,
                //     color: '#F15B46'
                //     }, {
                //     from: -45,
                //     to: 0,
                //     color: '#FEB019'
                //     }]
                // },
            }
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
            text: {
                show: false
            },
            labels: {

                colors: legendColor
        
            },
        },
        yaxis: {
            title: {
                show: false
            },
            tickAmount: 4,
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "%";
                },
                style: {
                    colors: legendColor
                }
            },
            min: -20,
            max: 20
        },
        xaxis: {
            type: 'datetime',
            categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            
            ],
            legend: {
                show: false
            },
            labels: {
                rotate: -90,
                style: {
                    colors: legendColor
                }
            }
        }
    };
    
    const pieseries = [85, 15]
    const pieoptions = {
        chart: {
            height: "30%",
            type: 'donut',
        },
        dataLabels: {
            enabled: true
        },
        colors: [paidColor, balanceColor],
        legend: {
            show: false
        },
        plotOptions: {
            donut: {
                customScale: 0.8,
                labels: {
                    show: false,
                    name: {
                      show: true,
                      fontSize: '22px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      fontWeight: 600,
                      color: undefined,
                      offsetY: -10,
                      formatter: function (val) {
                        return val
                      }
                    },
                    value: {
                      show: true,
                      fontSize: '16px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      fontWeight: 400,
                      color: undefined,
                      offsetY: 16,
                      formatter: function (val) {
                        return val
                      }
                    },
                    total: {
                      show: false,
                      showAlways: false,
                      label: 'Total',
                      fontSize: '22px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      fontWeight: 600,
                      color: '#373d3f',
                      formatter: function (w) {
                        return w.globals.seriesTotals.reduce((a, b) => {
                          return a + b
                        }, 0)
                      }
                    }
            }
        }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                },
                legend: {
                    show: false
                }
            }
        }]
    };
    const inactiveClass = "h-10 text-center mr-4 flex p-2 transition-colors hover:text-gray-800 text-gray-400 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 duration-200 rounded-lg my-2";
    const activeClass = "h-10 text-center mr-4 flex p-2 transition-colors hover:text-gray-800 text-gray-50 dark:text-white hover:bg-blue-400 dark:hover:bg-purple-400 duration-200 rounded-lg my-2 bg-indigo-600 dark:bg-purple-500";
    const [activeTimeButton, setActiveTimeButton] = useState(0)
    const timeButtonClick = (btn) => () => {
        setActiveTimeButton(btn)
    }
    return(
        <div className="flex h-screen flex-col">
            <Navbar>
            </Navbar>
            <div className="flex flex-shrink-1 h-full justify-between bg-light-color-main-99 dark:bg-dark-color-main-99 ">
                <div className="flex-shrink-0 p-6 h-full">
                    <Sidebar></Sidebar>
                </div>
                <div className="flex-shrink-1 py-6 w-full">
                    <RoundPanel className="w-full">
                        <>

                            <div className="text-center flex">
                                <a onClick={timeButtonClick(0)} className={activeTimeButton===0?activeClass:inactiveClass}>Day</a>
                                <a onClick={timeButtonClick(1)} className={activeTimeButton===1?activeClass:inactiveClass}>Week</a>
                                <a onClick={timeButtonClick(2)} className={activeTimeButton===2?activeClass:inactiveClass}>Month</a>
                                <a onClick={timeButtonClick(3)} className={activeTimeButton===3?activeClass:inactiveClass}>Year</a>
                            </div>
                            <div className="grid grid-cols-5">
                                <div className="col-span-3">
                                    <Chart
                                        options={options}
                                        series={series}
                                        type="bar"
                                        width="80%"
                                        height="300"
                                    />
                                </div>
                                <div className="col-span-2 mx-auto mt-5">
                                    <Chart
                                        className="mx-auto mt-5"
                                        options={pieoptions}
                                        series={pieseries}
                                        type="donut"
                                        width="80%"
                                    />
                                    <div className="flex justify-between mt-5">
                                        <svg className="mt-1.5 mr-3" width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="8" height="18" rx="4" fill="#3480FF"/>
                                        </svg>
                                        <div className="mr-8">
                                            <h3 className="font-bold text-xl">£ 2,725.89</h3>
                                            <span className="flex justify-between items-center text-gray-400">
                                                Total Interest Paid
                                                <svg className="ml-2" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.50612 4.73566C8.81785 5.00843 9.29167 4.97684 9.56443 4.66511C9.83719 4.35338 9.80561 3.87956 9.49388 3.6068L8.50612 4.73566ZM5.6585 1.24742L6.15238 0.68299V0.68299L5.6585 1.24742ZM4.3415 1.24742L4.83537 1.81186L4.83537 1.81186L4.3415 1.24742ZM0.506122 3.6068C0.194394 3.87956 0.162806 4.35338 0.435567 4.66511C0.708329 4.97684 1.18215 5.00843 1.49388 4.73566L0.506122 3.6068ZM9.49388 3.6068L6.15238 0.68299L5.16463 1.81186L8.50612 4.73566L9.49388 3.6068ZM3.84762 0.682991L0.506122 3.6068L1.49388 4.73566L4.83537 1.81186L3.84762 0.682991ZM6.15238 0.68299C5.49259 0.105669 4.50741 0.105671 3.84762 0.682991L4.83537 1.81186C4.92963 1.72938 5.07037 1.72938 5.16463 1.81186L6.15238 0.68299Z" fill="#3480FF"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <svg className="mt-1.5 mr-3" width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="8" height="18" rx="4" fill="#5E5CE6"/>
                                        </svg>
                                        <div>
                                            <h3 className="font-bold text-xl">£ 2,725.89</h3>
                                            <span className="flex justify-between items-center text-gray-400">
                                                Accrued Interest
                                                <svg className="ml-2" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.49388 1.56443C9.80561 1.29167 9.83719 0.817849 9.56443 0.506122C9.29167 0.194394 8.81785 0.162806 8.50612 0.435568L9.49388 1.56443ZM5.6585 3.92381L6.15238 4.48824L5.6585 3.92381ZM4.3415 3.92381L4.83537 3.35938L4.83537 3.35938L4.3415 3.92381ZM1.49388 0.435567C1.18215 0.162806 0.708329 0.194394 0.435567 0.506122C0.162806 0.817849 0.194394 1.29167 0.506122 1.56443L1.49388 0.435567ZM8.50612 0.435568L5.16463 3.35938L6.15238 4.48824L9.49388 1.56443L8.50612 0.435568ZM4.83537 3.35938L1.49388 0.435567L0.506122 1.56443L3.84762 4.48824L4.83537 3.35938ZM5.16463 3.35938C5.07037 3.44185 4.92963 3.44185 4.83537 3.35938L3.84762 4.48824C4.50741 5.06556 5.49259 5.06556 6.15238 4.48824L5.16463 3.35938Z" fill="#5E5CE6"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    </RoundPanel>
                    {/* <Chart
                        options={options1.options}
                        series={options1.series}
                        type="bar"
                        width="60%"
                    /> */}
                </div>
                <div className={`flex-shrink-0 w-80 h-full p-6 ml-6 bg-light-color-main-1 dark:bg-dark-color-main-1`}>
                    <RoundPanel className="w-full bg-light-color-main-4 dark:bg-dark-color-main-4">
                        <>
                            <div className="flex justify-between items-center">
                                <h2 className="flex-shrink-1 text-lg">Accounts</h2>
                                <IconButton className="flex-shrink-0">
                                    <img src="/icons/wallet_top_up.png" className="h-8 w-8" alt="wallet-top-up" />
                                </IconButton>
                            </div>
                            <ExpandDropdown
                                iconURL="/logo_panel.png"
                                collapsable={true}
                                mainAmount={12000.00}
                                mainAmountCurrency="£"
                                mainText="Fieonix Interest Account"
                                className="bg-light-color-main-3 dark:bg-dark-color-main-3"
                            >
                                <div className="grid grid-cols-2 ">
                                    <div>
                                        <p className = "text-totalColor-board-font-color">Total Portfolio</p>
                                        <h1 className = "text-lg">
                                            $ 12,401.68
                                        </h1>
                                    </div>
                                    <div>
                                        <p className = "text-totalColor-board-font-color">Total Interest Paid</p>
                                        <h1 className = "text-lg">
                                            $ 800.00
                                        </h1>
                                    </div>
                                </div>
                            </ExpandDropdown>
                            
                            <ExpandDropdown
                                iconURL="/logo_panel.png"
                                collapsable={false}
                                mainAmount={12000.00}
                                mainAmountCurrency="£"
                                mainText="Fieonix Interest Account"
                                className="bg-light-color-main-99 dark:bg-dark-color-main-99"
                            >
                                <div className="grid grid-cols-2 ">
                                    <div>
                                        <p className = "text-totalColor-board-font-color">Total Portfolio</p>
                                        <h1 className = "text-lg">
                                            $ 12,401.68
                                        </h1>
                                    </div>
                                    <div>
                                        <p className = "text-totalColor-board-font-color">Total Interest Paid</p>
                                        <h1 className = "text-lg">
                                            $ 800.00
                                        </h1>
                                    </div>
                                </div>
                            </ExpandDropdown>
                        </>
                    </RoundPanel>
                </div>
            </div>
        </div>
    )
}