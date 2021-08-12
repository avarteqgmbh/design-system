import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  ListProps
} from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'

import { List } from './List'
import { Checkbox } from '../../index'

export default {
  title: 'Data Display/List',
  component: List,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375'
    }
  }
}

const BasicListItems = (
  <>
    <ListItem button>
      <ListItemText primary='Inbox' />
    </ListItem>
    <ListItem button>
      <ListItemText primary='Drafts' />
    </ListItem>
    <ListItem button>
      <ListItemText primary='About' />
    </ListItem>
  </>
)
const IconListItems = (
  <>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary='Photos' secondary='Jan 9, 2014' />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <WorkIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary='Work' secondary='Jan 7, 2014' />
    </ListItem>
  </>
)

const InsetItem = (
  <>
    {IconListItems}
    <ListItem>
      <ListItemText inset primary='Vacation' secondary='July 20, 2014' />
    </ListItem>
  </>
)

const Template: Story<ListProps> = (args) => {
  return <List {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: BasicListItems
}

export const IconList = Template.bind({})
IconList.args = {
  children: IconListItems
}

export const InsetList = Template.bind({})
InsetList.args = {
  children: InsetItem
}

export const ListControls: Story<ListProps> = (args) => {
  const [checked, setChecked] = React.useState([1])

  const handleToggle = (value: number) => {
    return (): void => {
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]

      if (currentIndex === -1) {
        newChecked.push(value)
      } else {
        newChecked.splice(currentIndex, 1)
      }

      setChecked(newChecked)
    }
  }

  return (
    <List {...args} dense style={{ maxWidth: 500 }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge='end'
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  )
}
