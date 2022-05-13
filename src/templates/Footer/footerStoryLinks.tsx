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
  <Box>
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
    label: 'Terms of use',
    onClick: (): void => {
      return console.log('Click')
    }
  },
  {
    label: 'Privacy Policy',
    onClick: (): void => {
      return console.log('Click')
    }
  },
  {
    label: 'Legal Notes',
    onClick: (): void => {
      return console.log('Click')
    }
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
        label: 'Mein Profil',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Persönliche Daten',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Punktekonto',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Warenkorb',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Wunschliste',
        onClick: (): void => {
          return console.log('Click')
        }
      }
    ]
  },
  {
    label: 'Prämienshop',
    onClick: (): void => {
      return console.log('First Level Label')
    },
    links: [
      {
        label: 'Highlights',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Startseite',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Neuheiten',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Suche',
        onClick: (): void => {
          return console.log('Click')
        }
      }
    ]
  },
  {
    label: 'Wettbewerbe',
    links: [
      {
        label: 'Best of Bets',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Neuwagen Challenge',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Wettbewerb',
        onClick: (): void => {
          return console.log('Click')
        }
      }
    ]
  },
  {
    label: 'Hilfe',
    links: [
      {
        label: 'FAQ',
        onClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Kontakt',
        onClick: (): void => {
          return console.log('Click')
        }
      }
    ],
    children: (
      <>
        <li>
          <FormControl size='small'>
            <Select id='demo-select-small' value='de'>
              <MenuItem value='de'>
                <Box sx={selectItemStyles}>
                  <AnyIcon icon='LangDE' size='md' />
                  <span>Deutsch</span>
                </Box>
              </MenuItem>
              <MenuItem value='en'>
                <Box sx={selectItemStyles}>
                  <AnyIcon icon='LangEN' size='md' />
                  <span>English</span>
                </Box>
              </MenuItem>
              <MenuItem value='fr'>
                <Box sx={selectItemStyles}>
                  <AnyIcon icon='LangSP' size='md' />
                  <span>Espanol</span>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </li>
        <li>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton borderRadius='md' size='small'>
              <DarkMode />
            </IconButton>
            <Typography ml={2}>Dark Mode</Typography>
          </Box>
        </li>
      </>
    )
  }
]
