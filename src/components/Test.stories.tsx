import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { StaticDateRangePickerProps } from '@mui/lab/StaticDateRangePicker'
import { DateRangePicker } from './inputs/Pickers/DateRange'

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

const Template: Story<StaticDateRangePickerProps> = (args) => {
  return <DateRangePicker {...args} />
}

export const Default = Template.bind({})
