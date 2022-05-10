import React from 'react'
import TextTruncate from 'react-text-truncate'
import {
  Card,
  CardHeader,
  CardContent,
  Radio,
  Typography
} from '../../../components'

export interface SelectableCardProps {
  children: React.ReactNode
  cardID: string
  title: string
  options?: React.ReactNode
  setSelected: (id: string) => void
  selectedID: string
}

export const SelectableCard: React.FC<SelectableCardProps> = (props) => {
  const { children, cardID, title, options, setSelected, selectedID } = props

  const classes = {
    root: {
      mb: 4,
      boxShadow: selectedID === cardID ? 6 : 1
    },
    cardHeader: {
      borderBottom: '1px solid',
      borderBottomColor: 'background.medium',
      bgcolor: 'background.light',
      display: 'flex',
      alignItems: 'center',
      py: 3,
      px: 4
    },
    cardContent: {
      bgcolor: 'background.paper'
    }
  }
  return (
    <Card sx={classes.root}>
      <CardHeader
        sx={classes.cardHeader}
        avatar={
          <Radio
            checked={selectedID === cardID}
            onClick={(): void => {
              setSelected(cardID)
            }}
            sx={{ p: 0 }}
          />
        }
        action={options && options}
        title={
          <Typography fontWeight={800} sx={{ flex: 1 }}>
            <TextTruncate line={2} truncateText='…' text={title} />
          </Typography>
        }
      />
      <CardContent sx={classes.cardContent}>{children}</CardContent>
    </Card>
  )
}
