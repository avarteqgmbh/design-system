import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AccordionProps, Divider, Typography } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { Accordion } from './Accordion'
import { AccordionActions } from './AccordionActions'
import { AccordionDetails } from './AccordionDetails'
import { AccordionSummary } from './AccordionSummary'
import { Button } from '../../index'

export default {
  title: 'Surfaces/Accordion',
  component: Accordion,
  argTypes: {
    defaultExpanded: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disableGutters: {
      control: { type: 'boolean' },
      description: 'Enable/ Disable static Header',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    expanded: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      }
    },
    onClick: {
      action: { type: 'onClick' },
      table: {
        type: { summary: 'func' }
      }
    },
    square: {
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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=701%3A6919'
    },
    muiDocSrc: 'https://mui.com/components/accordion/'
  }
}

const Template: Story<AccordionProps> = (args) => {
  return (
    <Accordion {...args}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography variant='h6'>Accordion Header</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          In order to put an action such as a Checkbox or a button inside of the
          AccordionSummary, you need to stop the propagation of the focus and
          click events to prevent the accordion from expanding/collapsing when
          using the action.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const AccordionAction: Story<AccordionProps> = (args) => {
  return (
    <Accordion {...args}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography variant='h6'>Accordion Header</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          In order to put an action such as a Checkbox or a button inside of the
          AccordionSummary, you need to stop the propagation of the focus and
          click events to prevent the accordion from expanding/collapsing when
          using the action.
        </Typography>
      </AccordionDetails>
      <Divider />
      <AccordionActions>
        <Button size='small'>Cancel</Button>
        <Button size='small' color='primary'>
          Save
        </Button>
      </AccordionActions>
    </Accordion>
  )
}
