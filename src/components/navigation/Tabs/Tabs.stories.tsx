import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Typography, AppBar, TabsProps, Paper } from '@material-ui/core'

import { Tabs } from './Tabs'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

interface A11yProps {
  id: string
  'aria-controls': string
}

function getA11yProps(index: number): A11yProps {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    }
  }
})

export const Default: Story<TabsProps> = (args): JSX.Element => {
  const classes = useStyles()
  const [value, setValue] = React.useState<number>(0)

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    event.preventDefault()
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          {...args}
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Item One' {...getA11yProps(0)} />
          <Tab label='Item Two' {...getA11yProps(1)} />
          <Tab label='Item Three' {...getA11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography>Item One</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three</Typography>
      </TabPanel>
    </div>
  )
}

export const Disabled: Story<TabsProps> = (args): JSX.Element => {
  const [value, setValue] = React.useState(2)

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    setValue(newValue)
  }

  return (
    <Paper square>
      <Tabs
        {...args}
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}
        aria-label='disabled tabs example'
      >
        <Tab label='Active' />
        <Tab label='Disabled' disabled />
        <Tab label='Active' />
      </Tabs>
    </Paper>
  )
}
