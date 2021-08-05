import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Dialog } from './Dialog'
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps as MuiDialogProps,
  DialogTitle
} from '@material-ui/core'
import { Button } from '../../index'

const head = `Lorem Ipsum`

const body = ` Cras mattis consectetur purus sit amet fermentum.Cras justo odio
dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta
ac consectetur ac, vestibulum at eros.Praesent commodo cursus
magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.Cras justo odio,
  dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta
ac consectetur ac, vestibulum at eros.Praesent commodo cursus
magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.Cras justo odio
dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta
ac consectetur ac, vestibulum at eros.Praesent commodo cursus
magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.Cras justo odio,
  dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta
ac consectetur ac, vestibulum at eros.Praesent commodo cursus
magna, vel scelerisque nisl consectetur et.`

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
  argTypes: {
    'aria-describedby': {
      control: { type: 'text' },
      table: {
        type: { summary: 'text' }
      }
    },
    'aria-labelledby': {
      control: { type: 'text' },
      table: {
        type: { summary: 'text' }
      }
    },
    disableEscapeKeyDown: {
      control: 'boolean',
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    fullScreen: {
      control: 'boolean',
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    fullWidth: {
      control: 'boolean',
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['lg', 'md', 'sm', 'xl', 'xs', false],
      defaultValue: 'sm',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'sm' }
      }
    },
    scroll: {
      control: { type: 'select' },
      options: ['body', 'paper'],
      defaultValue: 'paper',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'paper' }
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

const AlertTemplate: Story<MuiDialogProps> = (args) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Open alert dialog</Button>
      <Dialog {...args} open={open} onClose={handleClose}>
        <DialogTitle id='alert-dialog-title'>{head}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export const Default = AlertTemplate.bind({})
Default.args = {}

export const DisabledEsc = AlertTemplate.bind({})
DisabledEsc.args = {
  'aria-describedby': 'alert-dialog-description',
  'aria-labelledby': 'alert-dialog-title',
  disableEscapeKeyDown: true
}

export const FullScreen = AlertTemplate.bind({})
FullScreen.args = {
  'aria-describedby': 'alert-dialog-description',
  'aria-labelledby': 'alert-dialog-title',
  fullScreen: true
}

export const xlWidth = AlertTemplate.bind({})
xlWidth.args = {
  'aria-describedby': 'alert-dialog-description',
  'aria-labelledby': 'alert-dialog-title',
  maxWidth: 'xl'
}

export const xsWidth = AlertTemplate.bind({})
xsWidth.args = {
  'aria-describedby': 'alert-dialog-description',
  'aria-labelledby': 'alert-dialog-title',
  maxWidth: 'xs'
}

export const scrollBody = AlertTemplate.bind({})
scrollBody.args = {
  'aria-describedby': 'alert-dialog-description',
  'aria-labelledby': 'alert-dialog-title',
  scroll: 'body'
}

export const scrollPaper = AlertTemplate.bind({})
scrollPaper.args = {
  'aria-describedby': 'alert-dialog-description',
  'aria-labelledby': 'alert-dialog-title',
  scroll: 'paper'
}
