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

const actions = [
  <IconButton>
    <DarkMode />
  </IconButton>,
  <IconButton>
    <DarkMode />
  </IconButton>
]

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

export { footer, actions, children }
