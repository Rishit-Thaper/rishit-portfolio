import {useState} from 'react'
import {HiMenu} from 'react-icons/hi'

import { NavLink } from 'react-router-dom'
import {BiHomeCircle, BiCodeAlt} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {LuPhoneCall} from 'react-icons/lu'
import {FiUser} from 'react-icons/fi'
import alphaLogo from '../assets/alphaLogo.png'
import '../App.scss'

export default function navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='nav'>
      <button className="burger-menu" onClick={toggleSidebar}><HiMenu/></button>
      <div className={`sideBar ${sidebarOpen ? 'show-sidebar' : ''}`}>
        <div className='sideBarContent'>
          <NavLink to='/' className='sideBarLink' ><img src={alphaLogo} alt="logo"/></NavLink>

            <div className='sideBarLinks'>
              <ul>
                <li><NavLink to='/' onClick={toggleSidebar}className='sideBarLink'><i><BiHomeCircle/></i>Home</NavLink></li>
                <li><NavLink to='/about' onClick={toggleSidebar} className='sideBarLink'><i><FiUser/></i>About</NavLink></li>
                <li><NavLink to='/skills' onClick={toggleSidebar}className='sideBarLink'><i><BiCodeAlt/></i>Skills</NavLink></li>
                <li><NavLink to='/projects' onClick={toggleSidebar}className='sideBarLink'><i><FaLaptopCode/></i>Projects</NavLink></li>
                <li><NavLink to='/contact' onClick={toggleSidebar}className='sideBarLink'><i><LuPhoneCall/></i>Contact</NavLink></li>
              </ul>
            </div>
            <div className="buttons">
              <NavLink target='_blank' to="https://drive.google.com/file/d/1FLNYwOr0Wpa-RjMFkEBQW65RxUNZyTP4/view?usp=drive_link"><button>Resume</button></NavLink>
              <NavLink target='_blank' to="https://github.com/Rishit-Thaper"><button>Github</button></NavLink>
              <NavLink target='_blank' to="https://www.linkedin.com/in/rishit-5463261a6"><button>Linkedin</button></NavLink>
            </div>
        </div>
    </div>
    </div>
    

  )
}
