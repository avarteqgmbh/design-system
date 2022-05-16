import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Slider, SliderProps } from './Slider'

export default {
  title: 'Templates/Slider',
  component: Slider,
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
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=3309%3A56636'
    },
    muiDocSrc: ''
  }
}

const multipleSlides = [
  {
    title: 'Test',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
    tags: ['Neu', 'Wettbewerb'],
    image:
      'https://images.pexels.com/photos/10873117/pexels-photo-10873117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    title: 'Test 2',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
    image:
      'https://images.pexels.com/photos/6801450/pexels-photo-6801450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    title: 'Test 3',
    description: 'Lorem ipsum dolor sit amet.'
  }
]

const Template: Story<SliderProps> = (args) => {
  return <Slider {...args} />
}

export const Default = Template.bind({})
Default.args = {
  slides: multipleSlides
}
