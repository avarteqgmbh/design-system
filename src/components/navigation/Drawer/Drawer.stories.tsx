import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import {
  DrawerProps,
  ListItem,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton
} from '@mui/material'
import { Theme, useTheme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import clsx from 'clsx'
import {
  Mail as MailIcon,
  Inbox as InboxIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon
} from '@mui/icons-material'

import { Drawer } from './Drawer'
import { Button } from '../../inputs/Button/Button'
import { List } from '../../dataDisplay/List/List'

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
  argTypes: {
    anchor: {
      control: { type: 'select' },
      options: ['bottom', 'left', 'right', 'top'],
      defaultValue: 'left',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'left' }
      }
    },
    children: {
      control: { type: 'node' },
      table: { type: { summary: 'node' } }
    },
    classes: {
      control: { type: 'object' },
      table: { type: { summary: 'object' } }
    },
    elevation: {
      control: { type: 'number' },
      defaultValue: 16,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 16 }
      }
    },
    ModalProps: {
      control: { type: 'object' },
      defaultValue: {},
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: {} }
      }
    },
    onClose: {
      action: { type: 'closed' },
      table: {
        type: { summary: 'function' }
      }
    },
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    PaperProps: {
      control: { type: 'object' },
      defaultValue: {},
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: {} }
      }
    },
    SlideProps: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      }
    },
    variant: {
      control: { type: 'select' },
      options: ['permanent', 'persistent', 'temporary'],
      defaultValue: 'temporary',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'temporary' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const useDefaultStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

type Anchor = 'top' | 'left' | 'bottom' | 'right'

type ToggleDrawerReturnType = (
  event: React.KeyboardEvent | React.MouseEvent
) => void

export interface DrawerState {
  top: boolean
  left: boolean
  bottom: boolean
  right: boolean
}

export const Default: Story<DrawerProps> = (args): JSX.Element => {
  const classes = useDefaultStyles()
  const [state, setState] = React.useState<DrawerState>({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (
    anchor: Anchor,
    open: boolean
  ): ToggleDrawerReturnType => {
    return (event: React.KeyboardEvent | React.MouseEvent): void => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor as string]: open })
    }
  }

  const list = (anchor: Anchor): JSX.Element => {
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom'
        })}
        role='presentation'
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
            (text, index): JSX.Element => {
              return (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            }
          )}
        </List>
      </div>
    )
  }

  const items: Anchor[] = ['left', 'right', 'top', 'bottom']

  return (
    <>
      {items.map((anchor: Anchor): JSX.Element => {
        return (
          <div key={anchor as string}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              {...args}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </div>
        )
      })}
    </>
  )
}

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
})

export const PersistentDrawer: Story<DrawerProps> = (args): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = (): void => {
    setOpen(true)
  }

  const handleDrawerClose = (): void => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
            size='large'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        {...args}
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} size='large'>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
            return (
              <ListItem button key={text} onClick={handleDrawerClose}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  )
}
