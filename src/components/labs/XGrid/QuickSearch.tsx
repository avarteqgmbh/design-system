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
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      marginLeft: 'auto',
      '& .MuiInput-input': {
        fontFamily: theme.typography.fontFamily
      }
    },
    textField: {
      width: '100%',
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export function QuickSearch(props: QuickSearchProps): JSX.Element {
  const classes = useStyles()
  const { clearSearch, onChange, value } = props

  return (
    <div className={classes.root}>
      <TextField
        variant='standard'
        value={value}
        autoFocus
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          return onChange(event)
        }}
        placeholder='Suchen…'
        className={classes.textField}
        InputProps={{
          startAdornment: <SearchIcon fontSize='small' />,
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
    </div>
  )
}