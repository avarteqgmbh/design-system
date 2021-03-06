import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import {
  HighlightProductCard,
  HighlightProductCardProps
} from './HighlightProductCard'
import { Button } from '../../../components'

export default {
  title: 'Templates/Cards/HighlightProductCard',
  component: HighlightProductCard,
  decorators: [withDesign],
  argTypes: {
    onClick: {
      action: { type: 'onClick' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2792%3A65863'
    }
  }
}

const Template: Story<HighlightProductCardProps> = (args) => {
  return <HighlightProductCard {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Duftkerze "Forest"',
  subtitle: '1.200 Punkte',
  image:
    'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  children: <Button>Zeige Mehr</Button>
}
