import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { makeStyles } from '@mui/styles'
import { Theme } from '../../../theme/types'

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      padding: 1,
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginRight: '1rem',
      '& .MuiInput-input': {
        fontFamily: theme.typography.fontFamily
      }
    },
    textField: {
      flex: 1,
      margin: 2,
      '& .MuiSvgIcon-root': {
        marginRight: 2
      },
      '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${theme.palette.grey}`
      }
    }
  }
})

export interface QuickSearchProps {
  clearSearch: () => void
  onClick: (term: string) => void
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export function QuickSearch(props: QuickSearchProps): JSX.Element {
  const classes = useStyles()
  const { clearSearch, onClick, value, setValue } = props

  return (
    <div className={classes.root}>
      <TextField
        variant='standard'
        value={value}
        autoFocus={!!value}
        onChange={(event): void => {
          return setValue(event.target.value)
        }}
        placeholder='Suchen…'
        className={classes.textField}
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
    </div>
  )
}
