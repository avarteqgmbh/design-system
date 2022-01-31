import * as React from 'react'
import MuiDateRangePicker, {
  DateRangePickerProps
} from '@mui/lab/DateRangePicker'
import { LicenseInfo } from '@mui/x-data-grid-pro'

export function DateRangePicker(
  props: DateRangePickerProps<Date>
): JSX.Element {
  LicenseInfo.setLicenseKey(process.env.REACT_APP_MUI_LICENSE || '')

  return <MuiDateRangePicker {...props} />
}
