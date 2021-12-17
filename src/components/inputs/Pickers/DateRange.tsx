import * as React from 'react'
import MuiDateRangePicker, {
  DateRangePickerProps
} from '@mui/lab/DateRangePicker'
import { LicenseInfo } from '@mui/x-data-grid-pro'
import { makeStyles } from '../../../theme/ThemeProvider'
import { Theme } from '../../../theme/types'

export function DateRangePicker(
  props: DateRangePickerProps<Date>
): JSX.Element {
  const classes = useStyles()

  LicenseInfo.setLicenseKey(process.env.REACT_APP_MUI_LICENSE || '')

  return <MuiDateRangePicker {...props} className={classes.root} />
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
