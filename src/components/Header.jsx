import { Typography } from '@mui/material'
import useTheme from '../Theme'

function Header({title, subtitle}) {
  const { themeMode } = useTheme();

  const dynoTheme = themeMode=="dark" ? 'text-[#e0e0e0]':'text-black '
  const dynoTheme2 = themeMode=="dark" ? 'text-[#70d8bd]':'text-[#256d5a] '
  return (
    <div className=' mb-7'>
        <Typography variant='h4' className={`${dynoTheme} font-bold mb-1`}>{title}</Typography>
        <Typography variant='h6' className={`${dynoTheme2} mb-1`}>{subtitle}</Typography>
    </div>
  )
}

export default Header