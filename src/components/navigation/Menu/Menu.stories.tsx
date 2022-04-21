import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { MenuProps } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'

import { Menu } from './Menu'
import { MenuList } from './MenuList'
import { MenuItem } from './MenuItem'

export default {
  title: 'Navigation/Menu',
  component: Menu,
  argTypes: {
    onClick: {
      action: { type: 'onClick' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=404%3A30059'
    },
    muiDocSrc: 'https://mui.com/components/menus/'
  }
}

const MenuChildren = (
  <MenuList>
    <MenuItem>
      <ListItemIcon>
        <ContentCut fontSize='small' />
      </ListItemIcon>
      <ListItemText>Cut</ListItemText>
      <Typography variant='body2' color='text.secondary'>
        ⌘X
      </Typography>
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <ContentCopy fontSize='small' />
      </ListItemIcon>
      <ListItemText>Copy</ListItemText>
      <Typography variant='body2' color='text.secondary'>
        ⌘C
      </Typography>
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <ContentPaste fontSize='small' />
      </ListItemIcon>
      <ListItemText>Paste</ListItemText>
      <Typography variant='body2' color='text.secondary'>
        ⌘V
      </Typography>
    </MenuItem>
    <Divider />
    <MenuItem>
      <ListItemIcon>
        <Cloud fontSize='small' />
      </ListItemIcon>
      <ListItemText>Web Clipboard</ListItemText>
    </MenuItem>
  </MenuList>
)

const Template: Story<MenuProps> = (args) => {
  return <Menu {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: MenuChildren,
  open: true
}

export const Anchor = Template.bind({})
Anchor.args = {
  children: MenuChildren,
  open: true,
  anchorOrigin: { horizontal: 'right', vertical: 'bottom' }
}
