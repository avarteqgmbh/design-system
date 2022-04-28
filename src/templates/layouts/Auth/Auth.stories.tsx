import React from 'react'
import { Story } from '@storybook/react'
import { AccountBox, Key } from '@mui/icons-material'
import { withDesign } from 'storybook-addon-designs'
import { Auth, AuthProps } from './Auth'
import {
  Box,
  Button,
  Link,
  Typography,
  TextField,
  InputAdornment
} from '../../../index'

export default {
  title: 'Templates/Layouts/Auth',
  component: Auth,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1630%3A14396'
    },
    muiDocSrc: ''
  }
}

const Template: Story<AuthProps> = (args) => {
  return <Auth {...args} />
}

const footer = (
  <>
    <Link href='/' tabIndex={0} sx={{ mb: 1 }}>
      <Typography>Registrieren</Typography>
    </Link>
    <Link href='/' tabIndex={0} sx={{ mb: 1 }}>
      <Typography>Passwort vergessen</Typography>
    </Link>
  </>
)

const children = (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography mb={5} variant='h4' fontWeight={900}>
      Anmelden
    </Typography>
    <TextField
      id='username'
      label='login'
      onChange={(): void => {
        console.log('User')
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <AccountBox />
          </InputAdornment>
        )
      }}
      sx={{ marginBottom: 5, bgcolor: 'background.input' }}
    />
    <TextField
      id='password'
      label='Passwort'
      type='password'
      onChange={(): void => {
        console.log('Password')
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Key />
          </InputAdornment>
        )
      }}
      sx={{ marginBottom: 5, bgcolor: 'background.input' }}
    />
    <Button
      onClick={(): void => {
        console.log('Login')
      }}
    >
      Anmelden
    </Button>
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  bgImage:
    'https://images.pexels.com/photos/6481652/pexels-photo-6481652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  footer,
  children
}
