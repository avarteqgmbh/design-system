import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AccordionProps, Divider } from '@material-ui/core'

import { Accordion } from './Accordion'
import { AccordionActions } from './AccordionActions'
import { AccordionDetails } from './AccordionDetails'
import { AccordionSummary } from './AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Button } from '../../inputs/Button/Button'

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
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
