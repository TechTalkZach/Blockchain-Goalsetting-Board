// BACKUP NAVIGATION
import * as React from 'react';
import style from '../styles/Nav.module.scss'


const navLinks = [
    {
      title: "Short",
      path: '/',
    },
    {
      title: "Medium",
      path: '/medium'
    },
    {
      title: "Long",
      path: '/long'
    },
    {
      title: "Home",
      path: '/'
    }
  ]
  
  
  function Navbar2() {
  
    const [active, setActive] = React.useState(false);
  
    return (
      <nav className={style.navbar}>
        <span>Blockchain Goal Tracker</span>
        <ul className={style.navbarNav} {...active && "active"}>
          {navLinks.map((links, index) => <NavItem key={index} 
          something={links.title}
          title={links.title} 
          path={links.path}/>)}
        </ul>
      <div className={style.hamburgerIcon} onClick={() => setActive(!active)}></div>
      </nav>
    )
  }
  
  function NavItem({title, path, something}) {
    return <li className={style.navItem}  {...something} >
      <a href={path}>{title}</a>
      </li>
  }

export default Navbar2  
  
  
//   ReactDOM.render(<Navbar2 />, document.body)