import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { ListItem, ListItemText, DividerProps } from '@material-ui/core'

import { Divider } from './Divider'
import { List } from '../List/List'

export default {
  title: 'Data Display/Divider',
  component: Divider,
  argTypes: {},
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
