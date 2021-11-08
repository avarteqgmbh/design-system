import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Container } from '../../layout/index'
import { Slides } from './Slides'
import { Typography } from '../Typography/Typography'

import { SlideProps, SlidesProps } from './types'

export default {
  title: 'Data Display/Slides',
  component: Slides,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const slides: SlideProps[] = [
  {
    title: 'Kind of universe',
    src: 'https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    link: 'https://www.anynines.com/',
    children: (
      <div>
        <Typography variant='h4'>Kind of Universe</Typography>
      </div>
    )
  },
  {
    title: 'Smells like roses',
    subtitle: 'Wolle rose kaufen?',
    src: 'https://images.pexels.com/photos/54320/rose-roses-flowers-red-54320.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
  },
  {
    title: 'Special fish',
    subtitle: 'Most beautiful fish',
    src: 'https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    children: (
      <div>
        <Typography variant='h4' color='primary'>
          Special fish
        </Typography>
      </div>
    )
  }
]

const Template: Story<SlidesProps> = (args) => {
  return (
    <Container style={{ padding: 20, backgroundColor: 'transparent' }}>
      <Slides {...args} />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  slides
}
