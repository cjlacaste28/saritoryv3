import React, { useState } from 'react'
import {Link, Outlet} from 'react-router-dom';
import logo from '../assets/SARITORY_with_text_v2.png';
import TopNavBar from "./dashboard/TopNavbar"
import '../styles/dashboard.css'

export default function MembersLayout() {
	const [sidebarStatus, setSidebarStatus] = useState('');
	function toggleSidebarStatus(){
		sidebarStatus===''? setSidebarStatus('active') : setSidebarStatus('');
	  };
  return (
		<div style={{ display: 'flex', height: '100%' }} className="dashboard">
			<div className="wrapper">
				<nav id="sidebar" className={sidebarStatus}>
					<div className="sidebar-header">
						<Link to="/app">
							<img src={logo} width="200" alt="logo2"/>
						</Link>
					</div>
					<ul className="list-unstyled components">
						<span id="storeName">Name of Store</span>
						<li id="sideMenuDashboard">
							<Link to="/app/dashboard">Dashboard</Link>
						</li>
						<hr/>
						<li className="sideMenuDropdown" id="sideMenuManageItems">
							<a
							data-bs-toggle="collapse"
							href="#inventorySubmenu"
							aria-expanded="false"
							aria-controls="inventorySubmenu"
							className="dropdown-toggle"
							>
							<span className="beforeIcon"></span>Manage Items
							</a>
							<ul className="collapse list-unstyled" id="inventorySubmenu">
								<li>
									<Link to="/app/category">Category Management</Link>
								</li>
								<li>
									<Link to="/app/items">Items Management</Link>
								</li>
								<li>
									<Link to="/app/expiring">Expiring Items</Link>
								</li>
								<li>
									<Link to="/app">Top Products</Link>
								</li>
							</ul>
						</li>
						<li id="sideMenuSellerArea">
							<Link to="/app">Seller Area</Link>
						</li>
						<li className="sideMenuDropdown" id="sideMenuEarnings">
							<a
								data-bs-toggle="collapse"
								href="#salesSubmenu"
								aria-expanded="false"
								aria-controls="salesSubmenu"
								className="dropdown-toggle"
							>
								<span className="beforeIcon"></span>Sales
							</a>
							<ul className="collapse list-unstyled" id="salesSubmenu">
								<li>
									<Link to="/app">Today's Transaction</Link>
								</li>
								<li>
									<Link to="/app">Monthly Sales</Link>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<div id="content">
					<TopNavBar toggleSidebarStatus={toggleSidebarStatus}/>
					<Outlet />
				</div>
			</div>
		</div>
  )
}
