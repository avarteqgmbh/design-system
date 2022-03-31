import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Button } from '../Button/Button'
import { ButtonGroup } from './ButtonGroup'
import { ButtonGroupProps } from '@mui/material'

export default {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const Template: Story<ButtonGroupProps> = (args) => {
  return <ButtonGroup {...args} />
}

const ButtonGroupChildren = (
  <>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: ButtonGroupChildren
}
