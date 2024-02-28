import React, { useEffect, useState } from 'react'
import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useTheme from '../../Theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";


import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      className=''
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

function Sidebar() {
  const { themeMode, setSett,setter } = useTheme();

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const handleMenuClick = (item) => {
    setSelected(item.title);
  }
  useEffect(() => {
    setSett();
    // console.log(setter)
  }, [isCollapsed,setIsCollapsed]); 

  
  return (
    <Box sx={{
      "& .pro-sidebar-inner": {
        background: `${themeMode === "dark" ? '#1F2A40' : '#141b2d'} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
      "& .pro-inner-item.active": {
        color: "#6870fa !important",
      },
      "& .pro-inner-item:hover": {
        color: "#6870fa !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
      "& .pro-inner-item.active": {
        color: "#6870fa !important",
      },
    }}>
      <ProSidebar className='bg-slate-900 cursor-pointer h-screen' collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => (setIsCollapsed(!isCollapsed))}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
             className=" mb-0 text-[#e0e0e0]"
            >
            {!isCollapsed && (
              <Box className='flex justify-between items-center ml-4'>
                <Typography variant='h5' className=' font-extrabold' color='#e0e0e0'>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>

            )
            }
            </MenuItem>
            {!isCollapsed && (
              <Box className='mb-[25px]'>
                <Box className='flex justify-center items-center'>
                <img
                className=' cursor-pointer w-[200px] rounded-[50%]'
                alt="user-profile"
                  src = {`images/logo.png`}
                />

                </Box>
                <Box className='text-center'>
                   <Typography  variant='h3' className='px-2' color='#e0e0e0'>
                    {/* Admin name */}
                    Jujhar Singh
                  </Typography>
                </Box>
              </Box>
            )}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant={!isCollapsed?"h6":null}
              color={'#a3a3a3'}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Donations"
              to="/donations"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant={!isCollapsed?"h6":null}
              color={'#a3a3a3'}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

         
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar