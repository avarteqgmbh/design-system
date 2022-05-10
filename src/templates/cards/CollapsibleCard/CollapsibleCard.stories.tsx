import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CollapsibleCard, CollapsibleCardProps } from './CollapsibleCard'

export default {
  title: 'Templates/Cards/CollapsibleCard',
  component: CollapsibleCard,
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
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=4027%3A43080'
    }
  }
}

const Template: Story<CollapsibleCardProps> = (args) => {
  return <CollapsibleCard {...args} />
}

export const Default = Template.bind({})
Default.args = {
  subtitle: 'Company',
  position: 1,
  score: 14022,
  title: 'Max Muster',
  info: [
    { label: 'Company: #420', value: 'Arc Corperation' },
    { label: 'User: #10', value: 'Max Muster' }
  ],
  kpis: [
    { label: 'KPI', value: '420' },
    { label: 'another KPI', value: '1337' },
    { label: 'My KPI', value: '420' },
    { label: 'KPI longterm', value: '1420' },
    { label: 'KPI Percentage', value: '42%' },
    { label: 'KPI another Percentage', value: '37,5%' }
  ]
}

export const PointsBooking = Template.bind({})
PointsBooking.args = {
  subtitle: '14.02.2022',
  score: 14022,
  scoreColor: 'success',
  title: 'Pointbooking ID 12345678',
  info: [
    { label: 'Company: #420', value: 'Arc Corperation' },
    { label: 'User: #10', value: 'Max Muster' }
  ]
}
