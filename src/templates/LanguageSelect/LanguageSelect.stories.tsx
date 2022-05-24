import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { LanguageSelect } from './LanguageSelect'
import { AnyIcon } from '../../components'

export default {
  title: 'Templates/LanguageSelect',
  component: LanguageSelect,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66401'
    }
  }
}

const Template: Story = (args) => {
  return <LanguageSelect languages={args.languages} />
}

export const Default = Template.bind({})
Default.args = {
  languages: [{
    value: 'de',
    icon: <AnyIcon icon='LangDE' size='large' />
  },
  {
    value: 'en',
    icon: <AnyIcon icon='LangEN' size='large' />
  }]
}
