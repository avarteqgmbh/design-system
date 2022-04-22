import React, { MouseEventHandler } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import { CheckboxProps, SxProps } from '@mui/material'
import { Theme } from '../../../theme/types'
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
  sx?: SxProps<Theme>
}

export function CustomList({
  items = [],
  checked = [],
  title = 'Choices',
  checkboxProps = {},
  handleToggleAll,
  numberOfChecked,
  handleToggle,
  sx
}: CustomListProps): JSX.Element {
  return (
    <Card sx={{ ...sx, ...styles }}>
      <CardHeader
        className='cardHeader'
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
      <List className='list' dense component='div' role='list'>
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

const styles = {
  '& .cardHeader': {
    padding: 2
  },
  '& .list': {
    width: 200,
    height: 230,
    bgcolor: 'background.paper',
    overflow: 'auto'
  }
}
