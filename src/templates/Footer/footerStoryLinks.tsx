import React from 'react'
import {
  Box,
  Button,
  Typography,
  Select,
  FormControl,
  MenuItem,
  IconButton,
  AnyIcon
} from '../../components'
import Logo from '../Logo'
import { DarkMode } from '@mui/icons-material'

export const CHILDREN = (
  <Box sx={{ color: 'text.primary' }}>
    <Logo />
    <Typography my={3} color='textSecondary'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt.
    </Typography>
    <Button>Subscribe</Button>
  </Box>
)

export const LINKS = [
  {
    label: 'Terms of use'
  },
  {
    label: 'Privacy Policy'
  },
  {
    label: 'Legal Notes'
  }
]

const selectItemStyles = {
  display: 'flex',
  alignItems: 'center',
  '& span': { ml: 3 }
}

export const MENU_ITEMS = [
  {
    label: 'Mein Account',
    links: [
      {
        label: 'Mein Profil'
      },
      {
        label: 'Persönliche Daten'
      },
      {
        label: 'Punktekonto'
      },
      {
        label: 'Warenkorb'
      },
      {
        label: 'Wunschliste'
      }
    ]
  },
  {
    label: 'Prämienshop',
    links: [
      {
        label: 'Highlights'
      },
      {
        label: 'Startseite'
      },
      {
        label: 'Neuheiten'
      },
      {
        label: 'Suche'
      }
    ]
  },
  {
    label: 'Wettbewerbe',
    links: [
      {
        label: 'Best of Bets'
      },
      {
        label: 'Neuwagen Challenge'
      },
      {
        label: 'Wettbewerb'
      }
    ]
  },
  {
    label: 'Hilfe',
    links: [
      {
        label: 'FAQ'
      },
      {
        label: 'Kontakt'
      }
    ],
    children: (
      <>
        <li>
          <FormControl size='small'>
            <Select id='demo-select-small' value='de'>
              <MenuItem value='de'>
                <Box sx={selectItemStyles}>
                  <AnyIcon icon='LangDE' size='medium' />
                  <span>Deutsch</span>
                </Box>
              </MenuItem>
              <MenuItem value='en'>
                <Box sx={selectItemStyles}>
                  <AnyIcon icon='LangEN' size='medium' />
                  <span>English</span>
                </Box>
              </MenuItem>
              <MenuItem value='fr'>
                <Box sx={selectItemStyles}>
                  <AnyIcon icon='LangSP' size='medium' />
                  <span>Espanol</span>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </li>
        <li>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton borderRadius='medium' size='small'>
              <DarkMode />
            </IconButton>
            <Typography ml={2}>Dark Mode</Typography>
          </Box>
        </li>
      </>
    )
  }
]
