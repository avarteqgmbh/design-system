import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { Tabs } from './Tabs'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  args: {},
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=405%3A12085'
    },
    muiDocSrc: 'https://mui.com/components/tabs/'
  }
}

function Template(): React.ReactNode {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent, newValue: number): void => {
    setValue(newValue)
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label='Item One' id='simple-tab-0' key='simple-tab-0' />
        <Tab label='Item Two' id='simple-tab-1' key='simple-tab-1' />
        <Tab label='Item Three' id='simple-tab-2' key='simple-tab-2' />
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
    </>
  )
}

export const Default = Template
