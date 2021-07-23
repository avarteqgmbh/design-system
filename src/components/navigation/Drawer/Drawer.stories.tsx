import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { Drawer } from './Drawer'
import { Button } from '../../inputs/Button/Button'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Mail as MailIcon, Inbox as InboxIcon } from '@material-ui/icons'

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

type Anchor = 'top' | 'left' | 'bottom' | 'right' | undefined

export const Default: Story<DrawerProps> = (): JSX.Element => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (anchor: Anchor, open: boolean): void => {
    return (event: React.KeyboardEvent | React.MouseEvent): void => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
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

  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as Anchor[]).map(
        (anchor: Anchor): JSX.Element[] => {
          return (
            <React.Fragment key={anchor.toString()}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          )
        }
      )}
    </div>
  )
}
