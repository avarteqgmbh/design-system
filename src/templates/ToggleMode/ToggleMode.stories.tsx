import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { ToggleMode, ToggleModeProps } from './ToggleMode'

export default {
  title: 'Templates/ToggleMode',
  component: ToggleMode,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66401'
    }
  }
}

const Template: Story<ToggleModeProps> = (args) => {
  const [darkMode, setDarkMode] = React.useState(false)

  return <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} {...args} />
}

export const Default = Template.bind({})
