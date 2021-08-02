import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AvatarProps, makeStyles } from '@material-ui/core'
import { Theme, createStyles } from '@material-ui/core/styles'
import { deepOrange, deepPurple, pink, green } from '@material-ui/core/colors'
import {
  Folder as FolderIcon,
  Pageview as PageviewIcon,
  Assignment as AssignmentIcon
} from '@material-ui/icons'

import { Avatar } from './Avatar'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
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
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  })
})

export const Image: Story<AvatarProps> = (args) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar
        alt='Remy Sharp'
        src='https://material-ui.com/static/images/avatar/1.jpg'
        {...args}
      />
      <Avatar
        alt='Travis Howard'
        src='https://material-ui.com/static/images/avatar/2.jpg'
        {...args}
      />
      <Avatar
        alt='Cindy Baker'
        src='https://material-ui.com/static/images/avatar/3.jpg'
        {...args}
      />
    </div>
  )
}

const useLetterStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500]
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500]
    }
  })
})

export const Letter: Story<AvatarProps> = (args) => {
  const classes = useLetterStyles()

  return (
    <div className={classes.root}>
      <Avatar {...args}>H</Avatar>
      <Avatar className={classes.orange} {...args}>
        N
      </Avatar>
      <Avatar className={classes.purple} {...args}>
        OP
      </Avatar>
    </div>
  )
}

const useSizeStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7)
    }
  })
})

export const Size: Story<AvatarProps> = (args) => {
  const classes = useSizeStyles()

  return (
    <div className={classes.root}>
      <Avatar
        alt='Remy Sharp'
        src='https://material-ui.com/static/images/avatar/1.jpg'
        className={classes.small}
        {...args}
      />
      <Avatar
        alt='Remy Sharp'
        src='https://material-ui.com/static/images/avatar/2.jpg'
        {...args}
      />
      <Avatar
        alt='Remy Sharp'
        src='https://material-ui.com/static/images/avatar/3.jpg'
        className={classes.large}
        {...args}
      />
    </div>
  )
}

const useIconStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500]
    },
    green: {
      color: '#fff',
      backgroundColor: green[500]
    }
  })
})

export const Icon: Story<AvatarProps> = (args) => {
  const classes = useIconStyles()

  return (
    <div className={classes.root}>
      <Avatar {...args}>
        <FolderIcon />
      </Avatar>
      <Avatar {...args} className={classes.pink}>
        <PageviewIcon />
      </Avatar>
      <Avatar {...args} className={classes.green}>
        <AssignmentIcon />
      </Avatar>
    </div>
  )
}
