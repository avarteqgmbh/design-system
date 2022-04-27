import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SnackbarProps } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

import { Snackbar } from './Snackbar'
import { Button } from '../../index'

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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=842%3A7724'
    },
    muiDocSrc: 'https://mui.com/components/snackbars/'
  }
}

const Template: Story<SnackbarProps> = (args) => {
  return <Snackbar {...args} />
}

export const Default = Template.bind({})
Default.args = {
  open: true,
  message: 'My Snackbar message'
}

export const AlertSnackbar: Story<SnackbarProps> = () => {
  const [open, setOpen] = React.useState(false)

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
  })

  const handleClick = (): void => {
    setOpen(true)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ): void => {
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}
