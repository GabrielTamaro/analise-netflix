import "./sidebar.css"
import ReactCountryFlag from "react-country-flag"
import Flag from 'react-world-flags'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <ReactCountryFlag countryCode="US" className="sidebarIcon"/>
                        Estados Unidos
                    </li>
                    <li className="sidebarListItem">
                    <ReactCountryFlag countryCode="IN" className="sidebarIcon"/>
                        Índia
                    </li>
                    <li className="sidebarListItem">
                    <ReactCountryFlag countryCode="GB" className="sidebarIcon"/>
                        Reino Unido
                    </li>
                    <li className="sidebarListItem">
                    <ReactCountryFlag countryCode="JP" className="sidebarIcon"/>
                        Japão
                    </li>
                    <li className="sidebarListItem">
                    <Flag code="kor" height="13" className="sidebarIcon"/>
                        Coréia do Sul
                    </li>
                    <li className="sidebarListItem">
                    <ReactCountryFlag countryCode="BR" className="sidebarIcon"/>
                        Brasil
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}