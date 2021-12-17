import * as React from 'react'
import TextField from '@mui/material/TextField'
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import { DateRange } from '@mui/lab/DateRangePicker'
import { makeStyles } from '../../../theme/ThemeProvider'
import { Theme } from '../../../theme/types'

export function DateRangePicker(): JSX.Element {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])
  const classes = useStyles()

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <StaticDateRangePicker
        startText='Check-in'
        endText='Check-out'
        displayStaticWrapperAs='desktop'
        value={value}
        className={classes.root}
        onChange={(newValue): void => {
          return setValue(newValue as DateRange<Date>)
        }}
        renderInput={(startProps, endProps): JSX.Element => {
          return (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </>
          )
        }}
      />
    </LocalizationProvider>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      '& .MuiButtonBase-root.MuiIconButton-root': {
        color: theme.palette.text.secondary
      }
    }
  }
})
