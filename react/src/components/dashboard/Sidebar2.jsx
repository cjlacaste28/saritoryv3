import {useState} from 'react';
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from 'react-router-dom';
import { tokens } from '../../utility/theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import One from '../../assets/logo1.png';
import Two from '../../assets/logotext.png';


// MENU VARIABLES
const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title} style={{ color: colors.blue[100]}} onClick={()=> setSelected(title)} icon = {icon}>
            <Typography>
                {title}
            </Typography>
        <Link to = {to}/>    
        </MenuItem>
    );

}
//IMAGE AND HEADING
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
       
            sx={{
                '& .pro-sidebar-inner': {
                    background: `${colors.black[400]} !important`,
                },
                '& .pro-icon-wrapper': {
                    background: 'transparent !important',
                },
                '& .pro-inner-item': {
                    padding: '5px 35px 5px 20px !important',
                },
                '& .pro-inner-item:hover': {
                    color: `${colors.brightorange[400]} !important`,
                },
                '& .pro-menu-item:active': {
                    color: `${colors.brightorange[500]} !important`,
                },
              
            }}
            >
            <ProSidebar collapsed = {isCollapsed}> 
                <Menu iconShape='square'>
                    {/* LOGO AND MENU ICON */}
                    <MenuItem onClick={()=> setIsCollapsed(!isCollapsed)} icon = {isCollapsed ? <MenuOutlinedIcon/> : undefined} 
                    style = {{ m: '10px 0 20px 0', color: colors.indigo[100]}}
                    >
                    {!isCollapsed && (
                        <Box display='flex' justifyContent={'space-between'} alignItems='center' ml='15px'>
                              <Box display="flex" justifyContent= "center" alignItems= "center">
                            <img
                            alt="Saritory" 
                            width="100px"
                            src={Two}
                            />
                        </Box> 
                            {/* <Typography variant='h5' color={colors.indigo[100]} >DMOST</Typography> */}
                            <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}><MenuOutlinedIcon/></IconButton>
                        </Box>
                    )}

                    </MenuItem>
                    
                
                {/* USER */}
                {!isCollapsed && (
                    <Box mb = "25px">
                         <Box display="flex" justifyContent= "center" alignItems= "center">
                            <img
                            alt="profile-user" 
                            width="100px"
                            height="100px"
                            src={One}
                            style = {{ cursor: 'pointer' , borderRadius: '50%' }}
                            />
                        </Box> 
                        <Box textAlign='center'>
                            <Typography variant = 'h5' color = {colors.blue[400]} fontWeight = 'bold' sx={{ m: '10px 0 0 0'}}>
                                Sample Store
                            </Typography>
                            <Typography variant='h6' color= {colors.brightorange[400]}>
                                Owner
                            </Typography>
                        </Box>
                    </Box>
                )}
                {/* MENU ITEMS */}
                <Box paddingLeft={isCollapsed ? undefined: '10%'}>
                    {/* <Item title = 'Dashboard' to = '/' icon = {<HomeOutlinedIcon />} selected = {selected} setSelected = {setSelected} /> */}
                    <Item title = 'Dashboard' to = '/adminpage' icon = {<HomeOutlinedIcon />} selected = {selected} setSelected = {setSelected} />
     
                    <hr/>

                    <Typography fontSize={!isCollapsed ? undefined: 10 } color ={colors.blue[400]} sx = {{m: '15px 0 5px 20px'}}>Inventory</Typography>

                    <Item title = 'Item Categories' to = '/category' icon = {<PeopleOutlinedIcon />} selected = {selected} setSelected = {setSelected} />

                    <Item title = 'Items' to = '/items' icon = {<ContactsOutlinedIcon />} selected = {selected} setSelected = {setSelected} />

                    <Item title = 'Expiring Items' to = '/expiringItems' icon = {<ReceiptOutlinedIcon />} selected = {selected} setSelected = {setSelected} />

                    <Item title = 'Top Products' to = '/topProducts' icon = {<ReceiptOutlinedIcon />} selected = {selected} setSelected = {setSelected} />

                    <hr/>

                    <Typography fontSize={!isCollapsed ? undefined: 10 } color ={colors.blue[400]} sx = {{m: '15px 0 5px 20px'}}>Sales</Typography>
                    
                    <Item title = 'Input Sales' to = '/inputSales' icon = {<ContactsOutlinedIcon />} selected = {selected} setSelected = {setSelected} />

                    <Item title = "Today's Sales" to = '/todaysSales' icon = {<PeopleOutlinedIcon />} selected = {selected} setSelected = {setSelected} />

                    <Item title = 'Monthly Sales' to = '/monthlySales' icon = {<ContactsOutlinedIcon />} selected = {selected} setSelected = {setSelected} />


                    <hr/>
                    
                    <Typography fontSize={!isCollapsed ? undefined: 10 } color ={colors.blue[400]} sx = {{m: '15px 0 5px 20px'}}>Charts</Typography>

                    <Item title = 'Bar Chart' to = '/barChart' icon = {<BarChartOutlinedIcon />} selected = {selected} setSelected = {setSelected} />

                    <Item title = 'Pie Chart' to = '/pieChart' icon = {<PieChartOutlineOutlinedIcon />} selected = {selected} setSelected = {setSelected} />

                    <Item title = 'Line Chart' to = '/lineChart' icon = {<TimelineOutlinedIcon/>} selected = {selected} setSelected = {setSelected} />

                    <hr/>

                    <Typography fontSize={!isCollapsed ? undefined: 10 } color ={colors.blue[400]} sx = {{m: '15px 0 5px 20px'}}>Pages</Typography>

                    <Item title = 'Calendar' to = '/calendar' icon = {<CalendarTodayOutlinedIcon />} selected = {selected} setSelected = {setSelected} />

                    <Item title = 'Profile' to = '/profile' icon = {<PersonOutlinedIcon />} selected = {selected} setSelected = {setSelected} />


                </Box>
                </Menu>
           </ProSidebar>
        </Box>
    );
};

export default Sidebar;