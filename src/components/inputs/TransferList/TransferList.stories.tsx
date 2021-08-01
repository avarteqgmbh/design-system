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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A36790'
    }
  }
}

const Template: Story<TransferListProps> = (args) => {
  return <TransferList {...args} />
}

const leftList = [
  {
    id: 0,
    name: 1
  },
  {
    id: 1,
    name: 2
  },
  {
    id: 2,
    name: 3
  },
  {
    id: 3,
    name: 4
  },

]

const rightList = [
  {
    id: 4,
    name: 5
  },
  {
    id: 5,
    name: 6
  },
  {
    id: 6,
    name: 7
  },
  {
    id: 7,
    name: 8
  }
]

export const Default = Template.bind({})
Default.args = {
  leftList: leftList,
  rightList: rightList
}

const onChangeExample = (right: [], left: []): void => {
  console.log(right)
  console.log(left);
}

export const CheckboxProps = Template.bind({})
CheckboxProps.args = {
  leftList: leftList,
  rightList: rightList,
  checkboxProps: {
    color: 'primary'
  },
  onChange: onChangeExample
}


