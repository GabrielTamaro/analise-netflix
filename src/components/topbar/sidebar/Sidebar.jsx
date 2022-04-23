import "./sidebar.css"
import ReactCountryFlag from "react-country-flag"
import Flag from 'react-world-flags'
import { Link, NavLink } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <li className="sidebarListItemHome">
                        <HomeIcon/>
                    </li>
                </NavLink>
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <NavLink to="/brasil" style={{ textDecoration: 'none'}} className={({ isActive }) => (isActive ? 'sidebarListItem active' : '')}>
                        <li className="sidebarListItem">
                            <ReactCountryFlag countryCode="BR" className="sidebarIcon"/>
                            Brasil
                        </li>
                   </NavLink>
                    <NavLink to="/eua" style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? 'sidebarListItem active' : '')}>
                        <li className="sidebarListItem">
                            <ReactCountryFlag countryCode="US" className="sidebarIcon"/>
                            Estados Unidos
                        </li>
                    </NavLink>
                    <NavLink to="/india" style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? 'sidebarListItem active' : '')}>
                        <li className="sidebarListItem">
                            <ReactCountryFlag countryCode="IN" className="sidebarIcon"/>
                            Índia
                        </li>
                    </NavLink>
                    <NavLink to="/reino" style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? 'sidebarListItem active' : '')}>    
                        <li className="sidebarListItem">
                            <ReactCountryFlag countryCode="GB" className="sidebarIcon"/>
                            Reino Unido
                        </li>
                    </NavLink>
                    <NavLink to="/japao" style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? 'sidebarListItem active' : '')}>    
                        <li className="sidebarListItem">
                            <ReactCountryFlag countryCode="JP" className="sidebarIcon"/>
                            Japão
                        </li>
                    </NavLink>
                    <NavLink to="/coreia" style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? 'sidebarListItem active' : '')}>    
                        <li className="sidebarListItem">
                            <Flag code="kor" height="13" className="sidebarIcon"/>
                            Coréia do Sul
                       </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}