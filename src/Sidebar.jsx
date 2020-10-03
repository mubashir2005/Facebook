import React, {Component} from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow.jsx';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <SidebarRow
                    src='https://avatars3.githubusercontent.com/u/60180419?s=460&u=5135c6af08fc8ae159e854882cd816efa82c7da5&v=4'
                    title='Mubashir Hasan'
                />
                <SidebarRow  Icon={LocalHospitalIcon}
                             title="Covid-19 Information Center"
                />
                <SidebarRow Icon={EmojiFlagsIcon}
                            title="Pages"
                />
                <SidebarRow Icon={PeopleIcon}
                            title="Friends"
                />
                <SidebarRow Icon={ChatIcon}
                            title="Messenger"
                />
                <SidebarRow Icon={StorefrontIcon}
                            title="Marketplace"
                />
                <SidebarRow Icon={VideoLibraryIcon}
                            title="Videos"
                />
                <SidebarRow Icon={ExpandMoreOutlinedIcon}
                            title="Marketplace"
                />



            </div>
        );
    }
}
export default Sidebar;
