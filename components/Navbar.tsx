import Link from 'next/link';
import { ReactNode, useState, useEffect, useContext, Fragment } from 'react';
import { useTheme } from 'next-themes';
import { Context } from "../context";
import { faCheck, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
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

    const [mobile, setMobile] = useState(false);
    const handleMobile = () => {
        setMobile(!mobile);
    }
    const currentRouters = router.pathname.split("/")

    const menubar = <div className="flex flex-col md:inline-flex md:flex-row">
                        <span className="mx-8 my-4 md:mx-4 md:my-0 font-bold "><Link href="/dashboard">Farm</Link></span>
                        <MyDropdown title="Battle Center" items={battleCenterItems}></MyDropdown>
                        <MyDropdown title="MarketPlace" items={marketPlaceItems}></MyDropdown>
                        <span className="mx-8 my-4 md:mx-4 md:my-0 font-bold"><Link href="/dashboard">CCC Token</Link></span>
                        <MyDropdown title="Know" items={knowItems}></MyDropdown>
                    </div>

    return (
        <>
            {/* <header className="dark w-full sticky top-0 flex-shrink-0"> */}
                <nav className={`bg-black shadow py-2`}>
                    <div className="mx-auto px-4 md:px-16 border-b-2 border-pink-900 border-opacity-50">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center cursor-pointer">
                                <Link href="/dashboard">
                                    <img className="h-auto w-10" src={logoUrl} alt="Workflow"/>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                {menubar}
                            </div>
                            <div className="md:block w-8">
                                <div className="w-max px-4 py-1 border-2 border-green-700 cursor-pointer">
                                    
                                    <a className="dark:text-green-300 block relative" onClick={() => connect()}>
                                        <span className="dark:text-green-300">{state.wallet.address?"Wallet Connected":"Wallet Connect"}</span>
                                        {state.wallet.address&&<FontAwesomeIcon className="ml-2" icon={faCheck} />}
                                    </a>
                                    { openPopup }
                                </div>
                            </div>

                            <div className="flex md:hidden">
                                <button className="w-8 text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none" onClick={handleMobile}>
                                    {mobile?
                                    <FontAwesomeIcon size="2x" className="h-8 w-8" icon={faTimes} />
                                    :
                                    <FontAwesomeIcon size="2x" className="h-8 w-8" icon={faBars} />
                                    // <svg fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    //     <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    //     </path>
                                    // </svg>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-16 pt-5 hidden md:block">
                        <ul className="breadcrumb">
                            {
                                currentRouters.map((path, index) => {
                                    return <li key={index}>{(currentRouters.length-1)!=index?<Link href={currentRouters.slice(0, index+1).join("/")}>{path}</Link>:<span className="text-white">{path.search(/\[/i)<0?path:router.query.cardpack}</span>}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div
                        className={`${
                            mobile ? 'md:hidden' : 'hidden'
                        }   w-full md:w-auto`}
                    >
                        <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto'>
                            {menubar}
                        </div>
                    </div>
                </nav>
            {/* </header> */}
        </>
    )
}