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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=384%3A8015'
    }
  }
}

const Template: Story<FabProps> = (args) => {
  return <FloatingActionButton {...args} />
}

const FabChildren = <FavoriteIcon />

export const Default = Template.bind({})
Default.args = {
  children: FabChildren
}
