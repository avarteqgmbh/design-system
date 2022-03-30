import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { FloatingActionButton } from './FloatingActionButton'
import { FabProps } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default {
  title: 'Inputs/FloatingActionButton',
  component: FloatingActionButton,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}
const Template: Story<FabProps> = (args) => {
  return (
    <>
      <FloatingActionButton {...args}>
        <FavoriteIcon />
      </FloatingActionButton>
    </>
  )
}

export const Default = Template.bind({})
