import React from 'react'
import {
  DateRangePicker as MuiDateRangePicker,
  DateRangePickerProps
} from '@mui/x-date-pickers-pro/DateRangePicker'
import { LicenseInfo } from '@mui/x-license-pro'
import deLocale from 'date-fns/locale/de'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

LicenseInfo.setLicenseKey(process.env.REACT_APP_MUI_LICENSE_KEY as string)

export const DateRangePicker: React.FC<DateRangePickerProps<unknown, Date>> = (
  props
) => {
  return (
    <LocalizationProvider locale={deLocale} dateAdapter={AdapterDateFns}>
      <MuiDateRangePicker {...props} />
    </LocalizationProvider>
  )
}
