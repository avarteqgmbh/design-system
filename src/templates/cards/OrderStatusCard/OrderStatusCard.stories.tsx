import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import {
  OrderStatusCard,
  OrderStatusCardProps
} from './OrderStatusCard'
import { Button } from '../../../components'

export default {
  title: 'Templates/Cards/OrderStatusCard',
  component: OrderStatusCard,
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
      url: 'https://www.figma.com/file/R2oPOOWOFTZxvFSmBgwwoX/%F0%9F%96%A5-Web?node-id=2795%3A69159'
    }
  }
}

const Template: Story<OrderStatusCardProps> = (args) => {
  return <OrderStatusCard {...args} />
}

export const Default = Template.bind({})
Default.args = {
  orderDate: '12.03.2022',
  orderNumber: 'TK-123104901429',
  userInfo: {
    fullName: 'John Doe'
  },
  orderItems: [
    {
      title: 'Apple Computer "iMac" (24 Zoll / M1 Chip )',
      image:
        'https://s3-eu-west-1.amazonaws.com/bum-stage/articles/1315051-thumb_medium-BM-018235_1.jpg',
      points: 13500,
      variant: 'Gunmetal Gray',
      amount: 1,
      sendAt: '12.03.2022',
      onClick: () => { return null }
    },
    {
      title: 'Duftkerze Forest',
      backgroundImage: true,
      image: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      variant: 'Forest',
      amount: 1,
      points: 349
    }
  ]
}
