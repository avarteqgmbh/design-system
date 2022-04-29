import React from 'react'
import { AccountBox, Key, DarkMode } from '@mui/icons-material'
import { FormControlLabel } from '@mui/material'
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Link,
  FormControl,
  InputAdornment,
  Typography,
  TextField
} from '../../../index'

const footer = (
  <>
    <Link href='/' tabIndex={0} sx={{ mb: 1 }}>
      <Typography color='primary'>Registrieren</Typography>
    </Link>
    <Link href='/' tabIndex={0} sx={{ mb: 1 }}>
      <Typography color='primary'>Passwort vergessen</Typography>
    </Link>
  </>
)

const Logo = (): JSX.Element => {
  return (
    <svg
      width='132'
      height='34'
      viewBox='0 0 132 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M47.2806 17.7588C46.1669 17.7588 43.6977 17.8553 43.6977 19.4442C43.6977 20.3116 44.6175 20.721 45.4162 20.721C46.8448 20.721 48.1759 19.9742 48.1759 18.5296V17.7588H47.2806ZM48.1759 21.4192H48.1274C47.3286 22.6709 45.8764 23.1763 44.3995 23.1763C42.1971 23.1763 40.2119 21.9246 40.2119 19.5644C40.2119 15.5197 45.1499 15.4478 48.1759 15.4478C48.1759 14.1715 47.111 13.3528 45.852 13.3528C44.6658 13.3528 43.6731 13.8831 42.8989 14.7493L40.9625 12.7752C42.2935 11.5233 44.2303 10.8975 46.1424 10.8975C50.3787 10.8975 51.5163 13.0401 51.5163 16.9406V22.888H48.1759V21.4192Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M53.1852 11.1863H56.6708V12.7753H56.7192C57.2036 11.8602 58.3896 10.8975 60.1568 10.8975C63.8362 10.8975 64.5146 13.3051 64.5146 16.4349V22.8882H60.8829V17.157C60.8829 15.8094 60.8591 14.0756 58.9947 14.0756C57.1066 14.0756 56.8164 15.5443 56.8164 17.0614V22.8882H53.1852V11.1863Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M72.4255 24.7886C71.4579 27.2686 70.9006 28.6654 67.439 28.6654C66.5198 28.6654 65.5996 28.521 64.7282 28.2315L65.2125 25.2703C65.7691 25.5113 66.302 25.6319 66.9071 25.6319C68.5532 25.6319 68.8195 24.9333 69.3275 23.6573L69.594 22.983L64.4376 11.1855H68.3589L71.3847 18.9145H71.4333L74.0231 11.1855H77.751L72.4255 24.7886Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M78.2725 11.1863H81.7587V12.7753H81.8071C82.2915 11.8602 83.4779 10.8975 85.244 10.8975C88.9241 10.8975 89.6015 13.3051 89.6015 16.4349V22.8882H85.9707V17.157C85.9707 15.8094 85.9461 14.0756 84.0823 14.0756C82.1944 14.0756 81.9042 15.5443 81.9042 17.0614V22.8882H78.2725V11.1863Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M91.3904 22.8874H95.022V11.1855H91.3904V22.8874Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M96.8785 11.1863H100.365V12.7753H100.414C100.898 11.8602 102.083 10.8975 103.85 10.8975C107.53 10.8975 108.208 13.3051 108.208 16.4349V22.8882H104.577V17.157C104.577 15.8094 104.552 14.0756 102.688 14.0756C100.801 14.0756 100.51 15.5443 100.51 17.0614V22.8882H96.8785V11.1863Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M117.872 15.7128C117.897 14.5091 116.952 13.4977 115.645 13.4977C114.047 13.4977 113.176 14.581 113.079 15.7128H117.872ZM120.946 20.8654C119.785 22.3341 117.872 23.1763 115.983 23.1763C112.353 23.1763 109.448 20.7693 109.448 17.0369C109.448 13.3051 112.353 10.8975 115.983 10.8975C119.374 10.8975 121.503 13.3051 121.503 17.0369V18.1685H113.079C113.37 19.5408 114.411 20.4315 115.815 20.4315C117.001 20.4315 117.8 19.83 118.405 19.0109L120.946 20.8654Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M129.313 14.6291C128.78 13.979 128.078 13.6421 127.207 13.6421C126.601 13.6421 125.876 13.9071 125.876 14.605C125.876 16.3383 132 14.87 132 19.3241C132 22.3099 129.094 23.1762 126.578 23.1762C124.931 23.1762 123.115 22.7669 121.955 21.5873L124.157 19.1557C124.835 19.9742 125.633 20.4314 126.722 20.4314C127.545 20.4314 128.369 20.2155 128.369 19.5891C128.369 17.711 122.244 19.3004 122.244 14.8458C122.244 12.1012 124.713 10.8975 127.183 10.8975C128.731 10.8975 130.45 11.2825 131.54 12.4382L129.313 14.6291Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.0464 34C26.4608 34 34.0927 26.3888 34.0927 17C34.0927 7.61116 26.4608 0 17.0464 0C7.63192 0 0 7.61116 0 17C0 26.3888 7.63192 34 17.0464 34Z'
        fill='#FD7B1D'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.9868 16.9999C13.9868 17.6017 14.0751 18.1821 14.238 18.7304H16.6638C16.4005 18.2103 16.2513 17.6228 16.2513 16.9999C16.2513 14.8764 17.9763 13.1558 20.1058 13.1558C22.235 13.1558 23.9613 14.8764 23.9613 16.9999C23.9613 19.1238 22.235 20.8449 20.1058 20.8449H12.7979C11.337 20.8449 10.1532 19.6645 10.1532 18.2076C10.1532 16.7511 11.337 15.5705 12.7979 15.5705C12.8932 14.2969 13.6877 13.269 13.6877 13.269H12.7979C10.0748 13.269 7.86755 15.4703 7.86755 18.1857C7.86755 20.9018 10.0748 23.1026 12.7979 23.1026H20.1058C21.2281 23.1026 22.2789 22.8005 23.183 22.2745C25.0016 21.2166 26.2252 19.2511 26.2252 16.9999C26.2252 13.63 23.4855 10.8975 20.1058 10.8975C16.7264 10.8975 13.9868 13.63 13.9868 16.9999Z'
        fill='white'
      />
    </svg>
  )
}

const logoWrapper = (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Logo />
    <IconButton>
      <DarkMode />
    </IconButton>
  </Box>
)

const children = (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography mb={2} variant='h4' fontWeight={900}>
      Anmelden
    </Typography>
    <Typography mb={5} variant='body2' color='textSecondary'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua.
    </Typography>
    <FormControl margin='normal'>
      <TextField
        id='username'
        label='login'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountBox />
            </InputAdornment>
          )
        }}
      />
    </FormControl>
    <FormControl margin='normal'>
      <TextField
        id='password'
        label='Passwort'
        type='password'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Key />
            </InputAdornment>
          )
        }}
      />
    </FormControl>
    <FormControl margin='normal'>
      <Button>Anmelden</Button>
    </FormControl>
    <FormControl margin='normal'>
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography>Anmeldedaten speichern</Typography>}
      />
    </FormControl>
  </Box>
)

export { footer, logoWrapper, children }
