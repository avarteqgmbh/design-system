import React from 'react'
import { Story } from '@storybook/react'
import { TransferList, TransferListProps } from './TransferList'

export default {
  title: 'Inputs/TransferList',
  component: TransferList,
  parameters: {
    controls: { expanded: true }
  }
}

const Template: Story<TransferListProps> = (args) => {
  return <TransferList {...args} />
}

const leftList = [
  {
    id: 1,
    name: 'List item 1'
  },
  {
    id: 2,
    name: 'List item 2'
  },
  {
    id: 3,
    name: 'List item 3'
  },
  {
    id: 4,
    name: 'List item 4'
  }
] as never

const rightList = [
  {
    id: 5,
    name: 'List item 5'
  },
  {
    id: 6,
    name: 'List item 6'
  },
  {
    id: 7,
    name: 'List item 7'
  },
  {
    id: 8,
    name: 'List item 8'
  }
] as never

export const Default = Template.bind({})
Default.args = {
  leftList,
  rightList
}
