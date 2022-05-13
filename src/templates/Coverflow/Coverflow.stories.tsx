import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Coverflow, CoverflowProps } from './Coverflow'

export default {
  title: 'Templates/Coverflow',
  component: Coverflow,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66401'
    }
  }
}

const Template: Story<CoverflowProps> = (args) => {
  return <Coverflow {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Lorem Ipsum',
  breadcrumbs: [
    {
      label: 'Shop'
    },
    {
      label: 'Multimedia'
    }
  ],
  search: true
}
