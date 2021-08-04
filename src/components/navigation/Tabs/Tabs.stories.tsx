import React from 'react'
import { Story } from '@storybook/react'
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
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper
    }
  }
})

const useVerticalStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }
})

export const Default: Story<TabsProps> = (args): JSX.Element => {
  const classes = useStyles()
  const [value] = React.useState<number>(0)

  // const handleChange = (
  //   // eslint-disable-next-line @typescript-eslint/ban-types
  //   event: ChangeEvent<{}>,
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   newValue: any
  // ): void => {
  //   event.preventDefault()
  //   setValue(newValue)
  // }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          {...args}
          value={value}
          // onChange={handleChange}
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
  const [value] = React.useState(2)

  // const handleChange = (
  //   event: React.ChangeEvent<Record<string, unknown>>,
  //   newValue: number
  // ): void => {
  //   setValue(newValue)
  // }

  return (
    <Paper square>
      <Tabs
        {...args}
        value={value}
        indicatorColor='primary'
        textColor='primary'
        aria-label='disabled tabs example'
      >
        <Tab label='Active' />
        <Tab label='Disabled' disabled />
        <Tab label='Active' />
      </Tabs>
    </Paper>
  )
}

export const Scrollable: Story<TabsProps> = (args): JSX.Element => {
  const classes = useStyles()
  const [value] = React.useState(0)

  // const handleChange = (
  //   event: React.ChangeEvent<Record<string, unknown>>,
  //   newValue: number
  // ): void => {
  //   setValue(newValue)
  // }

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          {...args}
          value={value}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >
          <Tab label='Item One' {...getA11yProps(0)} />
          <Tab label='Item Two' {...getA11yProps(1)} />
          <Tab label='Item Three' {...getA11yProps(2)} />
          <Tab label='Item Four' {...getA11yProps(3)} />
          <Tab label='Item Five' {...getA11yProps(4)} />
          <Tab label='Item Six' {...getA11yProps(5)} />
          <Tab label='Item Seven' {...getA11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  )
}

export const Vertical: Story<TabsProps> = (args): JSX.Element => {
  const classes = useVerticalStyles()
  const [value] = React.useState(0)

  // const handleChange = (
  //   event: React.ChangeEvent<Record<string, unknown>>,
  //   newValue: number
  // ): void => {
  //   setValue(newValue)
  // }

  return (
    <div className={classes.root}>
      <Tabs
        {...args}
        orientation='vertical'
        variant='scrollable'
        value={value}
        aria-label='Vertical tabs example'
        className={classes.tabs}
      >
        <Tab label='Item One' {...getA11yProps(0)} />
        <Tab label='Item Two' {...getA11yProps(1)} />
        <Tab label='Item Three' {...getA11yProps(2)} />
        <Tab label='Item Four' {...getA11yProps(3)} />
        <Tab label='Item Five' {...getA11yProps(4)} />
        <Tab label='Item Six' {...getA11yProps(5)} />
        <Tab label='Item Seven' {...getA11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  )
}
