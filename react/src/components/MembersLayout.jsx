import React from 'react'
import { Outlet } from 'react-router-dom'
import {useProSidebar } from 'react-pro-sidebar';

import SidebarComponent from './dashboard/SidebarComponent';


export default function MembersLayout() {
	const { collapseSidebar } = useProSidebar();
  return (
		<div style={{ display: 'flex', height: '100%' }}>
			<SidebarComponent />
			<main>
				<button onClick={() => collapseSidebar()}>Collapse</button>
			</main>
		</div>
  )
}
