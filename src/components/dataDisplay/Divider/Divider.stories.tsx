import React from 'react'
import { Story } from '@storybook/react'
import { DividerProps } from '@mui/material'
import { Chip } from '../Chip/Chip'
import { Divider } from './Divider'

export default {
  title: 'Data Display/Divider',
  component: Divider,
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<DividerProps> = (args) => {
  const content = (
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
  )

  return (
    <>
      {content}
      <Divider {...args}>Label</Divider>
      {content}
      <Divider {...args}>
        <Chip label='CHIP' />
      </Divider>
      {content}
    </>
  )
}

export const Default = Template.bind({})
