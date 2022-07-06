import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Search, SearchProps } from './Search'

export default {
  title: 'Templates/Search',
  component: Search,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66401'
    }
  }
}

const Template: Story<SearchProps> = (args) => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  return <Search
    {...args}
    searchValue={searchQuery}
    searchPlaceholder='Produkt Suchen'
    onSearchValueChange={handleSearch}
  />
}

export const Default = Template.bind({})
