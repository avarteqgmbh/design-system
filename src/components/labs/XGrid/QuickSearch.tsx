import * as React from 'react'

import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '../../layout'
import { TextField } from '../../inputs'
import { IconButton } from '../../dataDisplay'

const styles = {
  padding: 1,
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginRight: '1rem'
}

export interface QuickSearchProps {
  clearSearch: () => void
  onClick: (term: string) => void
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export function QuickSearch(props: QuickSearchProps): JSX.Element {
  const { clearSearch, onClick, value, setValue } = props

  return (
    <Box sx={{ ...styles }}>
      <TextField
        variant='standard'
        value={value}
        autoFocus={!!value}
        onChange={(event): void => {
          return setValue(event.target.value)
        }}
        placeholder='Suchen…'
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
        sx={{
          flex: 1
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
