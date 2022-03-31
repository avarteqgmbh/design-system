import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Select } from './Select'
import { FormControl } from '../FormControl/FormControl'
import { InputLabel } from '../FormControl/InputLabel'
import { MenuItem } from '../../navigation/Menu/MenuItem'
import { SelectProps } from '@mui/material'

export default {
  title: 'Inputs/Select',
  component: Select,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const Template: Story<SelectProps> = () => {
  const [age, setAge] = React.useState('')

  const handleChange = (event): void => {
    setAge(event.target.value as string)
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export const Default = Template.bind({})
