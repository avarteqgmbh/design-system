import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import {
  ListItem,
  ListItemText,
  DividerProps,
  ListItemAvatar,
  Avatar
} from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import {
  Work as WorkIcon,
  BeachAccess as BeachAccessIcon,
  Image as ImageIcon
} from '@material-ui/icons'

import { Divider } from './Divider'
import { List } from '../List/List'
import { Grid } from '../../layout/Grid/Grid'

export default {
  title: 'Data Display/Divider',
  component: Divider,
  argTypes: {
    absolute: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      }
    },
    orientation: {
      defaultValue: 'horizontal',
      table: {
        defaultValue: { summary: 'horizontal' }
      }
    },
    component: {
      defaultValue: 'hr',
      table: {
        defaultValue: { summary: 'hr' }
      }
    },
    flexItem: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      }
    },
    light: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      }
    },
    variant: {
      defaultValue: 'fullWidth',
      table: {
        defaultValue: { summary: 'fullWidth' }
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

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  })
})

export const Default: Story<DividerProps> = (args): JSX.Element => {
  const classes = useStyles()

  return (
    <List component='nav' className={classes.root} aria-label='mailbox folders'>
      <ListItem button>
        <ListItemText primary='Inbox' />
      </ListItem>
      <Divider {...args} />
      <ListItem button divider>
        <ListItemText primary='Drafts' />
      </ListItem>
      <ListItem button>
        <ListItemText primary='Trash' />
      </ListItem>
      <Divider {...args} light />
      <ListItem button>
        <ListItemText primary='Spam' />
      </ListItem>
    </List>
  )
}

export const Inset: Story<DividerProps> = (args): JSX.Element => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Photos' secondary='Jan 9, 2014' />
      </ListItem>
      <Divider variant='inset' {...args} />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Work' secondary='Jan 7, 2014' />
      </ListItem>
      <Divider variant='inset' {...args} />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Vacation' secondary='July 20, 2014' />
      </ListItem>
    </List>
  )
}

const useVerticalStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: 'fit-content',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& svg': {
        margin: theme.spacing(1.5)
      },
      '& hr': {
        margin: theme.spacing(0, 0.5)
      }
    }
  })
})

export const Vertical: Story<DividerProps> = (): JSX.Element => {
  const classes = useVerticalStyles()

  return (
    <div>
      <Grid container alignItems='center' className={classes.root}>
        <BeachAccessIcon />
        <Divider orientation='vertical' flexItem />
        <WorkIcon />
        <ImageIcon />
      </Grid>
    </div>
  )
}
