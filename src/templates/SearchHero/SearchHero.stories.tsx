import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SearchHero, SearchHeroProps } from './SearchHero'

export default {
  title: 'Templates/SearchHero',
  component: SearchHero,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66401'
    }
  }
}

const Template: Story<SearchHeroProps> = (args) => {
  return <SearchHero {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Lorem Ipsum',
  breadcrumbs: [
    {
      label: 'Shop'
    },
    {
      label: 'Multimedia'
    }
  ],
  search: true
}
