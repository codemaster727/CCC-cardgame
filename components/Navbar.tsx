import Link from 'next/link';
import { ReactNode, useState, useEffect, useContext, Fragment } from 'react';
import { useTheme } from 'next-themes';
import { Context } from "../context";
import { faCheck, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import MyDropdown from '../components/Dropdown/Dropdown'
import { useRouter } from "next/router";

const logoUrl = "/Logo CCC (2021)@2x-8.png";
interface NavbarInterface {
    children?: ReactNode,
    mode: "light" | "dark"
}
export const Navbar = ({
    children,
    mode = "dark"
}) => {
    const ran = Math.ceil(100 * Math.random());
    let userAvatarUrl = `https://i.pravatar.cc/${99}`;
    const [openPopup, togglePopup] = useState(false);
    const {theme, setTheme} = useTheme();

    const battleCenterItems = [
        { name: '5 Card Pack Uncommon', to: "marketplace/5cardpack" },
        { name: 'Hellen Schmidt', to: "" },
    ]
    
    const marketPlaceItems = [
        { name: 'MarketPlace', to: "marketplace" },
        { name: '5 Card Pack Uncommon', to: "marketplace/5cardpack" },
    ]

    const knowItems = [
        { name: '5 Card Pack Uncommon', to: "marketplace/5cardpack" },
        { name: 'Hellen Schmidt', to: "" },
    ]

    useEffect(() => {
        document.documentElement.classList.add('dark')
        setTheme('dark')
      }, [])
    const { state, dispatch } = useContext(Context);
    const connect = () => {
        if(!state.wallet.address) {
            dispatch({
                type: "WALLET",
                payload: {
                    address: "0x123"
                }
            })
        }
        else {
            dispatch({
                type: "WALLET",
                payload: {
                    address: ""
                }
            })
        }
    }

    const router = useRouter()
console.log(router);
    const currentRouters = router.pathname.split("/")
    return (
        <>
            <header className="dark w-full sticky top-0 flex-shrink-0">
                <nav className={`bg-black shadow py-2`}>
                    <div className="mx-auto px-16 border-b-2 border-pink-900 border-opacity-50">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center cursor-pointer">
                                <Link href="/dashboard">
                                    <img className="h-auto w-10" src={logoUrl} alt="Workflow"/>
                                </Link>
                            </div>
                            <div>
                                <span className="mx-4"><Link href="/dashboard">Farm</Link></span>
                                <MyDropdown title="Battle Center" items={battleCenterItems}></MyDropdown>
                                <MyDropdown title="MarketPlace" items={marketPlaceItems}></MyDropdown>
                                <span className="mx-4"><Link href="/dashboard">CCC Token</Link></span>
                                <MyDropdown title="Know" items={knowItems}></MyDropdown>
                            </div>
                            <div className="md:block">
                                <div className="px-4 py-1 border-2 border-green-700 cursor-pointer">
                                    
                                    <a className="dark:text-green-300 block relative" onClick={() => connect()}>
                                        <span className="dark:text-green-300">{state.wallet.address?"Wallet Connected":"Wallet Connect"}</span>
                                        {state.wallet.address&&<FontAwesomeIcon className="ml-2" icon={faCheck} />}
                                    </a>
                                    { openPopup }
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                    <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                        <div className="px-16 pt-5">
                            <ul className="breadcrumb">
                                {
                                    currentRouters.map((path, index) => {
                                        return <li key={index}>{(currentRouters.length-1)!=index?<Link href={currentRouters.slice(0, index+1).join("/")}>{path}</Link>:<span className="text-white">{path.search(/\[/i)<0?path:router.query.cardpack}</span>}</li>
                                    })
                                }
                            </ul>
                        </div>
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Home
                            </a>
                            <a className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Gallery
                            </a>
                            <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Content
                            </a>
                            <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}