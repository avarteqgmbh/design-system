import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CardProps, Avatar, IconButton, Collapse } from '@mui/material'
import { Check, Share, Favorite, ExpandMore } from '@mui/icons-material'

import { Typography, Button } from '../../index'
import Card from './Card'
import { CardContent } from './CardContent'
import { CardActions } from './CardActions'
import { CardActionArea } from './CardActionArea'
import { CardHeader } from './CardHeader'
import { CardMedia } from './CardMedia'

export default {
  title: 'Surfaces/Card',
  component: Card,
  argTypes: {
    raised: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export const Default: Story<CardProps> = (args) => {
  return (
    <Card {...args}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant='h5'>Lorem Ipsum</Typography>
        <Typography color='textSecondary'>adjective</Typography>
        <Typography variant='body2'>
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}

export const Media: Story<CardProps> = (args) => {
  return (
    <Card {...args}>
      <CardActionArea>
        <CardMedia
          image='https://img.freepik.com/free-photo/green-chameleon-branch_73152-1609.jpg?size=626&ext=jpg'
          title='Contemplative Reptile'
          sx={{ height: 194 }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Lizard
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export const ComplexInteraction: Story<CardProps> = (args) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = (): void => {
    setExpanded(!expanded)
  }

  return (
    <Card {...args}>
      <CardHeader
        avatar={<Avatar aria-label='recipe'>R</Avatar>}
        action={
          <IconButton aria-label='settings'>
            <Check />
          </IconButton>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia
        image='https://www.sainsburysmagazine.co.uk/uploads/media/2400x1800/06/10696-Smoky_Prawn_Paella_2.jpg?v=1-0'
        title='Paella dish'
        sx={{ height: 194 }}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Favorite />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
