import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AlertProps, AlertTitle } from '@material-ui/lab'
import { Alert } from './Alert'
import { Button } from '../../index'

export default {
  title: 'Labs/Alert',
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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const ErrorTag = 'This is an error alert — check it out!'
const SuccessTag = 'This is a success alert — check it out!'
const WarningTag = 'This is a warning alert — check it out!'
const InfoTag = 'This is an info alert — check it out!'

const Template: Story<AlertProps> = (args) => {
  return <Alert {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: SuccessTag
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  children: SuccessTag
}

export const Filled = Template.bind({})
Filled.args = {
  variant: 'filled',
  children: SuccessTag
}

export const ErrorMessage = Template.bind({})
ErrorMessage.args = {
  severity: 'error',
  children: ErrorTag
}

export const Warning = Template.bind({})
Warning.args = {
  severity: 'warning',
  children: WarningTag
}

export const Info = Template.bind({})
Info.args = {
  severity: 'info',
  children: InfoTag
}

export const Color = Template.bind({})
Color.args = {
  color: 'warning',
  children: SuccessTag
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
  children: SuccessTag
}

export const ActionUndo = Template.bind({})
ActionUndo.args = {
  severity: 'error',
  action: <Button size='small'>UNDO</Button>,
  children: ErrorTag
}

export const NoIcon = Template.bind({})
NoIcon.args = {
  icon: false,
  children: SuccessTag
}
