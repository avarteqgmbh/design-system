import React from 'react'
import MuiDateRangePicker, { DateRange } from '@mui/lab/DateRangePicker'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TextField from '@mui/material/TextField'

export interface DatetimeProps {
  dateRange: DateRange<Date>
  onChange: (dateRange: DateRange<Date>) => void
}

export const DateRangePicker: React.FC<DatetimeProps> = (props) => {
  const { dateRange, onChange } = props

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <MuiDateRangePicker
        startText='Von'
        endText='Bis'
        value={dateRange}
        toolbarTitle='Wähle einen Zeitraum'
        okText='Anwenden'
        cancelText='Abbrechen'
        onChange={(newValue): void => {
          onChange(newValue)
        }}
        renderInput={(startProps, endProps): JSX.Element => {
          return (
            <>
              <TextField
                {...startProps}
                label='Von'
                variant='filled'
                sx={{
                  boxShadow: 1,
                  marginRight: 4,
                  '& .MuiFilledInput-input': {
                    backgroundColor: 'background.paper'
                  }
                }}
              />
              <TextField
                {...endProps}
                label='Bis'
                variant='filled'
                sx={{
                  boxShadow: 1,
                  '& .MuiFilledInput-input': {
                    backgroundColor: 'background.paper'
                  }
                }}
              />
            </>
          )
        }}
      />
    </LocalizationProvider>
  )
}
