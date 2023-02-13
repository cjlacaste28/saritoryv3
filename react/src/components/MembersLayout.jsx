import React, { useEffect, useState } from 'react'
import {Link, Navigate, NavLink, Outlet} from 'react-router-dom';
import logo from '../assets/SARITORY_with_text_v2.png';
import logo2 from "../assets/SARITORY2.png"
import TopNavBar from "./dashboard/TopNavbar"
import '../styles/dashboard.css'
import { useStateContext } from '../context/ContextProvider.jsx';
import axiosClient from '../axios-clent';
import { FaAlignJustify, FaAlignLeft } from 'react-icons/fa';

export default function MembersLayout() {
	const {user, token, setUser, setToken} = useStateContext();
	const [sidebarStatus, setSidebarStatus] = useState('');

	if(!token) {
		return <Navigate to='/portal/login' />
	}

	const onLogout = (event) => { 
		event.preventDefault();
		console.log(`this was clicked`);
		axiosClient.post('/logout')
		.then(()=> {
			setUser({});
			setToken(null);
		});
	 }

	 useEffect (()=>{
		axiosClient.get('/user')
		.then(({data})=>{
			setUser(data);
		})
	 },[]);

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
						<span id="storeName">
							{user.store_name}
						</span>
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
					{/* <TopNavBar toggleSidebarStatus={toggleSidebarStatus} username={user.username} onLogout={onLogout}/> */}
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button type="button" id="sidebarCollapse" className="btn btn-info wew" onClick={toggleSidebarStatus}>
          <FaAlignLeft />
        </button>
        <button
          className="btn d-inline-block d-lg-none ml-auto burgerMenu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavbar"
          aria-controls="topNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaAlignJustify />
        </button>

        <div className="collapse navbar-collapse" id="topNavbar">
          <ul className="nav navbar-nav ml-auto tabmobile-center me-lg-3">
            <li className="nav-item dropdown" id="usernameArea">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                id="username"
              >
                {user.username}
                <span>
                  <img src={logo2} width="50" alt="" style={{marginLeft: '10px'}} />
                </span>
              </a>

              <ul className="dropdown-menu tabmobile-center" id="topNavbar__dropdown">
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Settings
                  </NavLink>
                </li>
                <hr />
                <li id="logout">
                  <NavLink className="dropdown-item" to="#" onClick={onLogout}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
					<Outlet />
				</div>
			</div>
		</div>
  )
}
