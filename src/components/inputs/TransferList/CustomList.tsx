import React, { MouseEventHandler } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import { CheckboxProps } from '@mui/material'
import { Checkbox } from '../Checkbox/Checkbox'
import { List } from '../../dataDisplay/index'

export interface CustomListProps {
  items: []
  checked: never[]
  title: React.ReactNode
  checkboxProps?: CheckboxProps
  handleToggleAll: (
    items: []
  ) => React.MouseEventHandler<HTMLButtonElement> | undefined
  numberOfChecked: (items: []) => number
  handleToggle: (value: never) => MouseEventHandler<HTMLDivElement> | undefined
}

export function CustomList({
  items = [],
  checked = [],
  title = 'Choices',
  checkboxProps = {},
  handleToggleAll,
  numberOfChecked,
  handleToggle
}: CustomListProps): JSX.Element {
  return (
    <Card>
      <CardHeader
        sx={{ py: 1, px: 2 }}
        avatar={
          <Checkbox
            {...checkboxProps}
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          bgcolor: 'bg.paper',
          overflow: 'auto'
        }}
        dense
        component='div'
        role='list'
      >
        {items.map((item: never) => {
          const { id, name } = item as never
          const labelId = `transfer-list-all-item-${id}-label`

          return (
            <ListItem
              key={id}
              role='listitem'
              button
              onClick={handleToggle(id)}
            >
              <ListItemIcon>
                <Checkbox
                  {...checkboxProps}
                  checked={checked.indexOf(id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={name} />
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Card>
  )
}
