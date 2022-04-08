import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SkeletonProps } from '@mui/material'
import { Skeleton } from './Skeleton'
import { Box, Avatar, Typography } from '../../index'

export default {
  title: 'Feedback/Skeleton',
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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1910%3A12357'
    },
    muiDocSrc: 'https://mui.com/components/skeleton/'
  }
}

const Template: Story<SkeletonProps> = (args) => {
  return <Skeleton {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Example: Story<SkeletonProps> = (args) => {
  return (
    <div>
      <Box display='flex' alignItems='center'>
        <Box margin={1}>
          <Skeleton {...args} variant='circular'>
            <Avatar />
          </Skeleton>
        </Box>
        <Box width='100%'>
          <Skeleton {...args} variant='text' width='100%'>
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      <Skeleton {...args} variant='rectangular' width='100%' height={290}>
        <div style={{ paddingTop: '57%' }} />
      </Skeleton>
    </div>
  )
}
