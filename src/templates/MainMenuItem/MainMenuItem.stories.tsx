import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AnyIcon } from '../../components'
import { MainMenuItem, MainMenuItemProps } from './MainMenuItem'

export default {
  title: 'Templates/MainMenuItem',
  component: MainMenuItem,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=404%3A30059'
    }
  }
}

const Template: Story<MainMenuItemProps> = (args) => {
  return <MainMenuItem {...args} icon={<AnyIcon icon='customer' hasContrastColor={args.active} />}/>
}

export const Default = Template.bind({})
Default.args = {
  label: 'Menu Item'
}
