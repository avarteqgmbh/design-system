import React from 'react'
import { SelectChangeEvent } from '@mui/material'
import { MenuItem, Select } from '../../components'

export interface LanguageSelectProps {
  languages: {
    value: string
    icon: React.ReactNode
  }[]
  size?: 'small' | 'medium' | 'large'
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({
  languages = null,
  size = 'medium'
}) => {
  const [language, setLanguage] = React.useState<unknown>(
    languages && languages[0].value
  )

  const handleChange = (event: SelectChangeEvent<unknown>): void => {
    setLanguage(event.target.value)
  }

  return (
    <Select
      value={language}
      onChange={handleChange}
      sx={classes.root}
      className={size}
      MenuProps={{
        disableScrollLock: true,
        PaperProps: {
          sx: {
            bgcolor: 'background.light',
            '& .MuiMenuItem-root': {
              padding: 2
            }
          }
        }
      }}
      IconComponent={(): React.ReactElement | null => {
        return null
      }}
    >
      {languages &&
        languages.map((item) => {
          return (
            <MenuItem
              value={item.value}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {item.icon}
            </MenuItem>
          )
        })}
    </Select>
  )
}

const classes = {
  root: {
    mr: 4,
    height: 40,
    width: 40,
    bgcolor: 'background.light',
    border: '1px solid',
    borderColor: 'background.medium',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    boxShadow: 0,
    '&.small': {
      height: 30,
      width: 30
    },
    '&.large': {
      height: 50,
      width: 50
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent'
    },
    '&.Mui-focused, &:hover': {
      bgcolor: 'background.medium',
      border: '1px solid',
      borderColor: 'background.medium',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent'
      }
    },
    '& .MuiSelect-select': {
      padding: '0 !important',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}
