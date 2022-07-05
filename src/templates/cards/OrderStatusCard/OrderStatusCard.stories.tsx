import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { OrderStatusCard, OrderStatusCardProps } from './OrderStatusCard'
import { Container } from '../../../index'

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
  return (
    <Container maxWidth='sm'>
      <OrderStatusCard {...args} />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  orderDate: '12.03.2022',
  orderNumber: 'TK-123104901429',
  releasedDate: {
    label: 'Versendet am',
    value: '14.03.2022'
  },
  orderAddress: {
    label: 'Versandadresse',
    firstName: 'Max4109',
    lastName: 'Muster4109',
    company: 'toyota de',
    street: 'In der Dalheimer Wiese 21',
    zip: '5555',
    city: 'mainhaim',
    email: 'Muster4109@bumg.de',
    phone: '06131 4109'
  },
  pointsInfoLabel: 'Summe',
  orderItems: [
    {
      title: 'Apple Computer "iMac" (24 Zoll / M1 Chip )',
      image:
        'https://s3-eu-west-1.amazonaws.com/bum-stage/articles/1315051-thumb_medium-BM-018235_1.jpg',
      points: 13500,
      variant: { label: 'Artikel', value: 'Space-Gray' },
      amount: { label: 'Anzahl', value: 1 },
      sendAt: { label: 'Versendet am', value: '14.03.2022' },
      trackingLabel: 'Lieferung verfolgen',
      onClick: () => {
        return null
      }
    },
    {
      title: 'Duftkerze Forest',
      backgroundImage: true,
      image:
        'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      variant: { label: 'Farbe', value: 'Blau' },
      amount: { label: 'Anzahl', value: 1 },
      points: 349
    }
  ]
}
