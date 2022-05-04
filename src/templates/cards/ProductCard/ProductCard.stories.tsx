import React from 'react'
import { Story } from '@storybook/react'

import { withDesign } from 'storybook-addon-designs'
import { ProductCard, ProductCardProps } from './ProductCard'

export default {
  title: 'Templates/Cards/Product',
  component: ProductCard,
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

const Template: Story<ProductCardProps> = (args) => {
  return <ProductCard {...args} />
}

export const Default = Template.bind({})
Default.args = {
  name: 'Title',
  points: 1050,
  image:
    'https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
}
