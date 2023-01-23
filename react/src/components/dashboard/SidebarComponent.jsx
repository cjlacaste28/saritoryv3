import React, {useState} from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBeer, FaTachometerAlt} from 'react-icons/fa';
import '../../styles/sidebar.css';

export default function SidebarComponent() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  return (
      <Sidebar className='sidebar-container'>
        <Menu>
          <MenuItem><FaTachometerAlt /> Dashboard </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> <FaBeer />Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
  )
}
