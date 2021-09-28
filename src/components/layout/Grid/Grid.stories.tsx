import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { GridProps } from '@mui/material'
import { Grid } from './Grid'
import { Paper } from '../../index'

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    alignContent: {
      control: 'radio',
      options: [
        'stretch',
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around'
      ],
      table: {
        type: {
          summary:
            'stretch | center | flex-start | flex-end | space-between | space-around'
        },
        defaultValue: { summary: 'stretch' }
      }
    },
    alignItems: {
      control: 'radio',
      options: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline'],
      table: {
        type: {
          summary: 'stretch | center | flex-start | flex-end | baseline'
        },
        defaultValue: { summary: 'stretch' }
      }
    },
    container: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    direction: {
      control: 'radio',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      table: {
        type: {
          summary: 'row | row-reverse | column | column-reverse'
        },
        defaultValue: { summary: 'row' }
      }
    },
    item: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375'
    }
  }
}

const Template: Story<GridProps> = (args) => {
  return (
    <Grid {...args}>
      {[1, 3, 5].map((value) => {
        return (
          <Grid key={value} item>
            <Paper
              style={{ minHeight: 140, minWidth: 100 }}
              elevation={value}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export const Default = Template.bind({})
Default.args = {
  id: 'grid-default',
  container: true
}

export const Spacing = Template.bind({})
Spacing.args = {
  id: 'grid-spacing',
  container: true,
  justify: 'center',
  spacing: 5
}

const BreakpointTemplate: Story<GridProps> = (args) => {
  return (
    <Grid {...args}>
      <Grid item xs={12}>
        <Paper style={{ textAlign: 'center', padding: '12px' }}>xs=12</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper style={{ textAlign: 'center', padding: '12px' }}>
          xs=12 sm=6
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper style={{ textAlign: 'center', padding: '12px' }}>
          xs=12 sm=6
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper style={{ textAlign: 'center', padding: '12px' }}>
          xs=6 sm=3
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper style={{ textAlign: 'center', padding: '12px' }}>
          xs=6 sm=3
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper style={{ textAlign: 'center', padding: '12px' }}>
          xs=6 sm=3
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper style={{ textAlign: 'center', padding: '12px' }}>
          xs=6 sm=3
        </Paper>
      </Grid>
    </Grid>
  )
}

export const Breakpoint = BreakpointTemplate.bind({})
Breakpoint.args = {
  id: 'grid-breakpoint',
  container: true,
  spacing: 4
}
