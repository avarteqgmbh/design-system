import React from 'react'
import { Story } from '@storybook/react'
import { Box, Button } from '../../../index'
import Delete from '@mui/icons-material/Delete'
import Favorite from '@mui/icons-material/Favorite'
import { withDesign } from 'storybook-addon-designs'
import {
  VerticalProductCard,
  VerticalProductCardProps
} from './VerticalProductCard'

export default {
  title: 'Templates/Cards/VerticalProductCard',
  component: VerticalProductCard,
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
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2792%3A65703'
    }
  }
}

const Template: Story<VerticalProductCardProps> = (args) => {
  return (
    <Box sx={{ maxWidth: 700 }}>
      <VerticalProductCard {...args}>
        <Button
          variant='text'
          color='secondary'
          size='small'
          startIcon={<Delete />}
        >
          <span>Löschen</span>
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          sx={{ mb: { xs: 2, sm: 0 } }}
          startIcon={<Favorite />}
        >
          <span>In den Warenkorb</span>
        </Button>
      </VerticalProductCard>
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Apple Computer "iMac" (24 Zoll / M1 Chip )',
  image:
    'https://s3-eu-west-1.amazonaws.com/bum-stage/articles/1315051-thumb_medium-BM-018235_1.jpg',
  points: 1200,
  tags: ['Auf Lager', 'Varianten verfügbar'],
  variant: { label: 'Variante:', value: 'Space-Gray' }
}
