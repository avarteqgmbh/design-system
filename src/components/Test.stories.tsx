import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { DateRangePicker } from './inputs/Pickers/DateRange'
import TextField from '@mui/material/TextField'
import { DateRange } from '@mui/lab/DateRangePicker'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'

export default {
  title: 'Test/Playground',
  component: DateRangePicker,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story = () => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DateRangePicker
        startText='Check-in'
        endText='Check-out'
        value={value}
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

export const Default = Template.bind({})
