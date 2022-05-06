import React from 'react'
import TextTruncate from 'react-text-truncate'
import { Card, CardContent, Radio, Typography } from '../../../index'

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

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent
        sx={{
          borderBottom: '1px solid',
          borderBottomColor: 'background.medium',
          bgcolor: 'background.light',
          display: 'flex',
          alignItems: 'center',
          py: 3,
          px: 4
        }}
      >
        <Radio
          checked={selectedID === cardID}
          onClick={(): void => {
            setSelected(cardID)
          }}
          sx={{ p: 0, mr: 2 }}
        />
        <Typography fontWeight={800} sx={{ flex: 1 }}>
          <TextTruncate line={2} truncateText='…' text={title} />
        </Typography>
        {options && options}
      </CardContent>
      <CardContent sx={{ bgcolor: 'background.paper' }}>{children}</CardContent>
    </Card>
  )
}
