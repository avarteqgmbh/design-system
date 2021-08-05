import React, { MouseEventHandler } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import { CheckboxProps } from '@material-ui/core'
import { Checkbox } from '../Checkbox/Checkbox'
import { List } from '../../dataDisplay/List/List'

export interface CustomListProps {
  items: Item[]
  checked: never[]
  title: React.ReactNode
  checkboxProps?: CheckboxProps
  handleToggleAll: (
    items: []
  ) => React.MouseEventHandler<HTMLButtonElement> | undefined
  numberOfChecked: (items: []) => number
  handleToggle: (value: never) => MouseEventHandler<HTMLDivElement> | undefined
}

export interface Item {
  id: string
  name: string
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
  const classes = useStyles()

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
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
      <List className={classes.list} dense component='div' role='list'>
        {items.map((item: Item) => {
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

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    cardHeader: {
      padding: theme.spacing(1, 2)
    },
    list: {
      width: 200,
      height: 230,
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto'
    }
  })
})
