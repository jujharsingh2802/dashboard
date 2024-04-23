import { IconButton, InputBase } from '@mui/material';
import React from 'react';
import useTheme from '../../Theme.jsx';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Topbar() {
  const { themeMode, lightTheme, darkTheme,setter } = useTheme();
  
  const onClickBtn = () => {
    const darkModeStatus = themeMode === 'dark' ? true : false;
    if (!darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  let dynowidth = setter ? 'lg:w-[94vw]': 'lg:w-[82vw]'
  React.useEffect(() => {
    dynowidth = setter? 'lg:w-[94vw]': 'lg:w-[82vw]'
  }, [setter])
  
  
  return (
    <div className={`flex justify-between p-2 ${dynowidth}`}>
      {/* SEARCH BAR  */}
      <div className='flex dark:bg-[#1F2A40]  rounded-md dark:text-white bg-[#525252]'>
        <InputBase className='ml-2 flex-1 '  placeholder='Search' style={{ color: 'white' }}/>
        <IconButton type='button' className='p-1'>
          <SearchIcon />
        </IconButton>
      </div>
      {/* ICONS  */}
      <div className='flex'>
        <IconButton onClick={onClickBtn}>
          {themeMode === 'dark' ? (
            <DarkModeOutlinedIcon className="text-black dark:text-white" />
          ) : (
            <LightModeOutlinedIcon className="text-black" />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon className="text-black dark:text-white" />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon className="text-black dark:text-white" />
        </IconButton>
        <IconButton>
            <Link to="/pie">
          <PersonOutlinedIcon className="text-black dark:text-white" />
            </Link>
        </IconButton>
      </div>
    </div>
  );
}

export default Topbar;
