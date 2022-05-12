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
    onLabelClick: (): void => {
      return console.log('Click')
    }
  },
  {
    label: 'Privacy Policy',
    onLabelClick: (): void => {
      return console.log('Click')
    }
  },
  {
    label: 'Legal Notes',
    onLabelClick: (): void => {
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
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Persönliche Daten',
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Punktekonto',
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Warenkorb',
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Wunschliste',
        onLabelClick: (): void => {
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
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Startseite',
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Neuheiten',
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Suche',
        onLabelClick: (): void => {
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
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Neuwagen Challenge',
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Wettbewerb',
        onLabelClick: (): void => {
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
        onLabelClick: (): void => {
          return console.log('Click')
        }
      },
      {
        label: 'Kontakt',
        onLabelClick: (): void => {
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
