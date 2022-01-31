import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/material'

export interface QuickSearchProps {
  clearSearch: () => void
  onClick: (term: string) => void
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export function QuickSearch(props: QuickSearchProps): JSX.Element {
  const { clearSearch, onClick, value, setValue } = props

  return (
    <Box
      sx={{
        padding: 1,
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginRight: '1rem'
      }}
    >
      <TextField
        variant='standard'
        value={value}
        autoFocus={!!value}
        onChange={(event): void => {
          return setValue(event.target.value)
        }}
        placeholder='Suchen…'
        sx={{
          flex: 1,
          margin: 2,
          '& .MuiSvgIcon-root': {
            marginRight: 2
          },
          '& .MuiInput-underline:before': {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'bg.border'
          }
        }}
        InputProps={{
          endAdornment: (
            <IconButton
              title='Clear'
              aria-label='Clear'
              size='small'
              style={{ visibility: value ? 'visible' : 'hidden' }}
              onClick={clearSearch}
            >
              <ClearIcon fontSize='small' />
            </IconButton>
          )
        }}
      />
      <IconButton
        title='Search'
        aria-label='Search'
        size='medium'
        onClick={(): void => {
          onClick(value)
        }}
      >
        <SearchIcon fontSize='medium' />
      </IconButton>
    </Box>
  )
}
