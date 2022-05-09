import React from 'react'
import { Story } from '@storybook/react'

import { withDesign } from 'storybook-addon-designs'
import { Box } from '../../../index'
import { ProductCard, ProductCardProps } from './ProductCard'

export default {
  title: 'Templates/Cards/ProductCard',
  component: ProductCard,
  decorators: [withDesign],
  argTypes: {
    onClick: {
      action: { type: 'onClick' },
      table: {
        type: { summary: 'func' }
      }
    },
    gridSize: { type: 'number', defaultValue: 4 }
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2792%3A65829'
    },
    muiDocSrc: ''
  }
}
interface ProductCardStoryProps extends ProductCardProps {
  gridSize: number
}

const Template: Story<ProductCardStoryProps> = (args) => {
  const products = [
    {
      name: args.name,
      points: args.points,
      image: args.image,
      tags: args.tags,
      isBgImage: args.isBgImage,
      hoverAnimation: args.hoverAnimation
    },
    {
      name: 'Bart Öl "Hipster"',
      points: 450,
      image:
        'https://images.pexels.com/photos/6693952/pexels-photo-6693952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Nur noch 3 verfügbar'],
      isBgImage: true,
      hoverAnimation: args.hoverAnimation
    },
    {
      name: 'Seifenspender "Bjiörn Malte Matze"',
      points: 790,
      image:
        'https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      tags: ['Auf Lager', 'Varianten verfügbar'],
      isBgImage: true,
      hoverAnimation: args.hoverAnimation
    },
    {
      name: 'Gaderobe "Hang In There"',
      points: 3450,
      image:
        'https://images.pexels.com/photos/4210315/pexels-photo-4210315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Nicht verfügbar'],
      isBgImage: true,
      hoverAnimation: args.hoverAnimation
    }
  ]

  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${args.gridSize}, 1fr)`,
          gap: 4,
          mb: 4
        }}
      >
        {products &&
          products.map((product) => {
            return <ProductCard {...args} {...product} />
          })}
      </Box>
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'Fuji Kamera "Old School/ Vintage"',
  points: 1050,
  image:
    'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  tags: ['Auf Lager', 'Varianten verfügbar']
}
