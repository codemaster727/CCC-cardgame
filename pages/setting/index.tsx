import { Navbar } from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { RoundPanel } from '../../components/Panels/RoundPanel';
import { IconButton } from '../../components/Buttons/IconButton';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { ExpandDropdown } from '../../components/Dropdown/ExpandDropdown';
// import { ToggleButton } from '../../components/Buttons/ToggleButton';
import Toggle from '../../components/Buttons/ToggleButton';
// import { Collapse } from 'react-collapse';
import { useTheme } from 'next-themes'

export default function (){
    const {theme, setTheme} = useTheme();
    return(
        <div className="flex h-screen flex-col">
            <Navbar>
            </Navbar>
            <div className="flex flex-shrink-1 h-full justify-between bg-light-color-main-99 dark:bg-dark-color-main-99">
                <div className="flex-shrink-0 p-6 h-full">
                    <Sidebar></Sidebar>
                </div>
                <div className="flex-shrink-1 py-6 w-3/5 mx-auto">
                    <RoundPanel className="w-full">
                        <Toggle onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
                    </RoundPanel>
                </div>
            </div>
        </div>
    )
}