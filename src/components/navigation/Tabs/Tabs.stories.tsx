import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AppBar, Box, TabsProps } from '@mui/material'

import { Tabs } from './Tabs'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'
import { Typography } from '../../index'

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=405%3A12085'
    },
    muiDocSrc: 'https://mui.com/components/tabs/'
  }
}

const Template: Story<TabsProps> = (args) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent, newValue: number): void => {
    setValue(newValue)
  }

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar sx={{ bgcolor: 'background.medium' }} position='static'>
        <Tabs {...args} value={value} onChange={handleChange}>
          <Tab label='Item One' id='simple-tab-0' key='simple-tab-0' />
          <Tab label='Item Two' id='simple-tab-1' key='simple-tab-1' />
          <Tab label='Item Three' id='simple-tab-2' key='simple-tab-2' />
          {args.variant === 'scrollable' && (
            <Tab label='Item Four' id='simple-tab-3' key='simple-tab-3' />
          )}
          {args.variant === 'scrollable' && (
            <Tab label='Item Five' id='simple-tab-4' key='simple-tab-4' />
          )}
          {args.variant === 'scrollable' && (
            <Tab label='Item Six' id='simple-tab-5' key='simple-tab-5' />
          )}
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
      {args.variant === 'scrollable' && (
        <TabPanel value={value} index={3}>
          <Typography>Item Four</Typography>
        </TabPanel>
      )}
      {args.variant === 'scrollable' && (
        <TabPanel value={value} index={4}>
          <Typography>Item Five</Typography>
        </TabPanel>
      )}
      {args.variant === 'scrollable' && (
        <TabPanel value={value} index={5}>
          <Typography>Item Six</Typography>
        </TabPanel>
      )}
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  variant: 'fullWidth'
}

export const Scrollable = Template.bind({})
Scrollable.args = {
  variant: 'scrollable'
}
