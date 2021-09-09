import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AccordionProps, Divider } from '@material-ui/core'

import { Accordion } from './Accordion'
import { AccordionActions } from './AccordionActions'
import { AccordionDetails } from './AccordionDetails'
import { AccordionSummary } from './AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
    expanded: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      }
    },
    square: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    onChange: {
      action: { type: 'changed' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<AccordionProps> = (args) => {
  return (
    <Accordion {...args}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        Accordion Header
      </AccordionSummary>
      <AccordionDetails>
        In order to put an action such as a Checkbox or a button inside of the
        AccordionSummary, you need to stop the propagation of the focus and
        click events to prevent the accordion from expanding/collapsing when
        using the action.
      </AccordionDetails>
    </Accordion>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

export const DefaultExpanded = Template.bind({})
DefaultExpanded.args = {
  defaultExpanded: true
}

export const Square = Template.bind({})
Square.args = {
  square: true,
  defaultExpanded: true
}

export const AccordionAction: Story<AccordionProps> = (args) => {
  return (
    <Accordion {...args}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        Accordion Header
      </AccordionSummary>
      <AccordionDetails>
        In order to put an action such as a Checkbox or a button inside of the
        AccordionSummary, you need to stop the propagation of the focus and
        click events to prevent the accordion from expanding/collapsing when
        using the action.
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
