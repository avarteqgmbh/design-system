import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TransferList, TransferListProps } from './TransferList'

export default {
  title: 'Input/TransferList',
  component: TransferList,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=385%3A5870'
    }
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

const onChangeExample = (right: [], left: []): void => {
  console.log(right)
  console.log(left)
}

export const OnChange = Template.bind({})
OnChange.args = {
  leftList,
  rightList,
  onChange: onChangeExample
}

export const CheckedList = Template.bind({})
CheckedList.args = {
  leftList,
  rightList,
  checkedList: [1, 2, 5] as never
}

export const CheckboxProps = Template.bind({})
CheckboxProps.args = {
  leftList,
  rightList,
  checkedList: [1, 2, 5] as never,
  checkboxProps: {
    color: 'primary'
  }
}
