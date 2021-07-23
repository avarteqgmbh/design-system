import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SnackbarProps } from '@material-ui/core'
import { Snackbar } from './Snackbar'
import { Alert } from '../../labs/Alert/Alert'
import { Button } from '../../inputs/Button/Button'

export default {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  argTypes: {
    autoHideDuration: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      }
    },
    disableWindowBlurListener: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false
        }
      }
    },
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false
        }
      }
    },
    resumeHideDuration: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
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

const successAlert = <Alert severity='success'>success message!</Alert>
const errorAlert = <Alert severity='error'>error message!</Alert>

const Template: Story<SnackbarProps> = (args) => {
  return <Snackbar {...args} />
}

export const Default = Template.bind({})
Default.args = {
  open: true,
  message: 'My Snackbar message'
}

export const AlertSuccess = Template.bind({})
AlertSuccess.args = {
  open: true,
  children: successAlert
}

export const AlertError = Template.bind({})
AlertError.args = {
  open: true,
  children: errorAlert
}

export const TopCenter = Template.bind({})
TopCenter.args = {
  open: true,
  children: successAlert,
  anchorOrigin: { vertical: 'top', horizontal: 'center' }
}

export const TopRight = Template.bind({})
TopRight.args = {
  open: true,
  children: successAlert,
  anchorOrigin: { vertical: 'top', horizontal: 'right' }
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  open: true,
  children: successAlert,
  anchorOrigin: { vertical: 'top', horizontal: 'left' }
}

export const BottomCenter = Template.bind({})
BottomCenter.args = {
  open: true,
  children: successAlert,
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' }
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  open: true,
  children: successAlert,
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' }
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  open: true,
  children: successAlert,
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' }
}

export const StatefulSnackbar: Story<SnackbarProps> = (args) => {
  const [open, setOpen] = React.useState(false)

  const handleClick = (): void => {
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Button variant='outlined' onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar
        {...args}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success'>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}
