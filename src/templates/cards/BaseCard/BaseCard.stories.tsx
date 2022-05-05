import React from 'react'
import { Story } from '@storybook/react'

import { withDesign } from 'storybook-addon-designs'
import { BaseCard, CardProps } from './BaseCard'

export default {
  title: 'Templates/Cards/Base',
  component: BaseCard,
  decorators: [withDesign],
  argTypes: {
    onClick: {
      action: { type: 'onClick' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1630%3A14396'
    },
    muiDocSrc: ''
  }
}

const Template: Story<CardProps> = (args) => {
  return <BaseCard {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  subtitle: '12.04.2022',
  description: 'LoremIpsum',
  image:
    'https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  tags: [
    { primary: true, title: 'Neu' },
    { primary: false, title: 'TKG' }
  ]
}
