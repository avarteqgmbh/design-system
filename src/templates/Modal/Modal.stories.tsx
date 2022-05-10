import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Modal, ModalProps } from './Modal'
import { Button, Box } from '../../components'

export default {
  title: 'Templates/Modal',
  component: Modal,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=3309%3A56636'
    },
    muiDocSrc: 'https://mui.com/components/dialogs/'
  }
}

const slideActions = (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <Button>Go to Shop</Button>
    <Button color='secondary'>Go to Wishlist</Button>
  </Box>
)

const multipleSlides = [
  {
    title: 'Test',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    image:
      'https://images.pexels.com/photos/10873117/pexels-photo-10873117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    title: 'Test 2',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    actions: slideActions,
    image:
      'https://images.pexels.com/photos/6801450/pexels-photo-6801450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    title: 'Test 3',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  }
]

const singleSlide = [
  {
    title: 'Test 2',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    actions: slideActions,
    image:
      'https://images.pexels.com/photos/6801450/pexels-photo-6801450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
]

const Template: Story<ModalProps> = (args) => {
  return <Modal {...args} open />
}

export const Default = Template.bind({})
Default.args = {
  slides: multipleSlides
}

export const SingleSlide = Template.bind({})
SingleSlide.args = {
  slides: singleSlide
}
