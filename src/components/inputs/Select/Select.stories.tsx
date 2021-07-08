import React from 'react'
// import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Select } from './Select'
import { MenuItem } from '../../index'
// import { SelectProps } from '@material-ui/core'

export default {
  title: '💧 Atoms/Select',
  component: Select,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375'
    }
  }
}

// const Template: Story<SelectProps> = (args) => {
//   return <Select {...args} />
// }

export const Default = (): JSX.Element => {
  return (
    <Select
      id='select-default'
      value={20}
      defaultValue='Select a value'
      fullWidth
      variant='outlined'
    >
      <MenuItem value='' />
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  )
}
