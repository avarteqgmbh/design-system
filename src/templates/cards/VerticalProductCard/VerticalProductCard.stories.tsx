import React from 'react'
import { Story } from '@storybook/react'
import { Box, Button } from '../../../index'
import { Favorite, Delete } from '@mui/icons-material'
import { withDesign } from 'storybook-addon-designs'
import {
  VerticalProductCard,
  VerticalProductCardProps
} from './VerticalProductCard'

export default {
  title: 'Templates/Cards/VerticalProduct',
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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1630%3A14396'
    },
    muiDocSrc: ''
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
  name: 'Apple Computer "iMac" (24 Zoll / M1 Chip )',
  image:
    'https://s3-eu-west-1.amazonaws.com/bum-stage/articles/1315051-thumb_medium-BM-018235_1.jpg',
  points: 1200,
  count: 1,
  tags: ['Auf Lager', 'Varianten verfügbar'],
  variant: { label: 'Variante:', value: 'Space-Gray' }
}
