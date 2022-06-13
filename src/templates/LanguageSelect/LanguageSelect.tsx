import React from 'react'
import { styled } from '@mui/material/styles'
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
    <StyledLanguageSelect
      value={language}
      onChange={handleChange}
      sx={{ boxShadow: 0 }}
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
    </StyledLanguageSelect>
  )
}

const StyledLanguageSelect = styled(Select)(({ theme }) => {
  return {
    marginRight: theme.spacing(4),
    height: 40,
    width: 40,
    backgroundColor: theme.palette.background.light,
    border: '1px solid',
    borderColor: theme.palette.background.medium,
    borderRadius: theme.radius.button,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
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
      backgroundColor: theme.palette.background.medium,
      border: '1px solid',
      borderColor: theme.palette.background.medium,
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
})
