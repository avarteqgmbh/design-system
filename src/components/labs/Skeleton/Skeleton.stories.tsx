import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SkeletonProps } from '@material-ui/lab'
import { Skeleton } from './Skeleton'
import { Box, Avatar, Typography } from '../../index'

export default {
  title: 'Labs/Skeleton',
  component: Skeleton,
  argTypes: {
    animation: {
      defaultValue: 'pulse',
      table: {
        defaultValue: { summary: 'pulse' }
      }
    },
    variant: {
      defaultValue: 'text',
      table: {
        defaultValue: { summary: 'text' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const Template: Story<SkeletonProps> = (args) => {
  return <Skeleton {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Circle = Template.bind({})
Circle.args = {
  variant: 'circle',
  width: 40,
  height: 40
}

export const Rect = Template.bind({})
Rect.args = {
  variant: 'rect',
  width: 210,
  height: 118
}

export const NoAnimation = Template.bind({})
NoAnimation.args = {
  variant: 'circle',
  width: 40,
  height: 40,
  animation: false
}

export const Wave = Template.bind({})
Wave.args = {
  variant: 'circle',
  width: 40,
  height: 40,
  animation: 'wave'
}

export const Loading: Story<SkeletonProps> = (args) => {
  return (
    <div>
      <Box display='flex' alignItems='center'>
        <Box margin={1}>
          <Skeleton {...args} variant='circle'>
            <Avatar />
          </Skeleton>
        </Box>
        <Box width='100%'>
          <Skeleton {...args} variant='text' width='100%'>
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      <Skeleton {...args} variant='rect' width='100%'>
        <div style={{ paddingTop: '57%' }} />
      </Skeleton>
    </div>
  )
}
