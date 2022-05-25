import React from 'react'
import { Story } from '@storybook/react'
import MoreVert from '@mui/icons-material/MoreVert'
import { withDesign } from 'storybook-addon-designs'
import { SelectableCard, SelectableCardProps } from './SelectableCard'
import { Box, IconButton, Typography, Divider } from '../../../index'

export default {
  title: 'Templates/Cards/SelectableCard',
  component: SelectableCard,
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
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2795%3A65046'
    }
  }
}

const adressChildren = (
  <>
    <Typography>Firma</Typography>
    <Typography fontWeight={800}>Max Muster </Typography>
    <Typography>Heinrich-str. 42</Typography>
    <Typography>12345 Musterhausen </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography>Max.Muster@mail.de</Typography>
    <Typography>01234/567891011</Typography>
  </>
)

const options = (
  <IconButton border={false} size='small'>
    <MoreVert />
  </IconButton>
)

const Template: Story<SelectableCardProps> = (args) => {
  const [selected, setSelected] = React.useState('1')

  return (
    <Box>
      <SelectableCard
        {...args}
        cardID='1'
        selectedID={selected}
        setSelected={setSelected}
      />
      <SelectableCard
        {...args}
        cardID='2'
        selectedID={selected}
        setSelected={setSelected}
      />
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Adresse Zuhause',
  children: adressChildren,
  options
}
