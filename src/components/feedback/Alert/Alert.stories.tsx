import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AlertProps, AlertTitle } from '@mui/material'
import { Alert } from './Alert'
import { Button } from '../../index'

export default {
  title: 'Feedback/Alert',
  component: Alert,
  argTypes: {
    closeText: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Close' }
      }
    },
    color: {
      control: 'radio',
      options: ['error', 'info', 'success', 'warning'],
      table: {
        type: { summary: 'error | info | success | warning' }
      }
    },
    role: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'alert' }
      }
    },
    severity: {
      control: 'radio',
      options: ['error', 'info', 'success', 'warning'],
      defaultValue: 'success',
      table: {
        type: { summary: 'error | info | success | warning' },
        defaultValue: { summary: 'success' }
      }
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outlined', 'standard'],
      defaultValue: 'standard',
      table: {
        type: { summary: 'filled | outlined | standard' },
        defaultValue: { summary: 'standard' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1908%3A11878'
    },
    muiDocSrc: 'https://mui.com/components/alert/'
  }
}

const ErrorTag = 'This is an error alert — check it out!'
const AlertTag = 'This is an alert — check it out!'

const Template: Story<AlertProps> = (args) => {
  return <Alert {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: AlertTag
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  severity: 'error',
  children: (
    <>
      <AlertTitle>Error</AlertTitle> {ErrorTag}
    </>
  )
}

export const ActionClose = Template.bind({})
ActionClose.args = {
  onClose: (): void => {},
  children: AlertTag
}

export const ActionUndo = Template.bind({})
ActionUndo.args = {
  severity: 'error',
  action: (
    <Button variant='text' color='error' size='small'>
      UNDO
    </Button>
  ),
  children: ErrorTag
}
