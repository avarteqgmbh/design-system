import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import { CheckboxProps } from '@material-ui/core'
import { Button } from '../Button/Button'
import { Checkbox } from '../Checkbox/Checkbox'
import { Grid } from '../../layout/Grid/Grid'
import { List } from '../../dataDisplay/List/List'

export interface TransferListProps {
  leftList: []
  rightList: []
  checkboxProps?: CheckboxProps
  checkKey?: string
  onChange: (leftList: [], rightList: []) => void
}

// eslint-disable-next-line
function not(a: never[], b: any[]): never[] {
  return a.filter((value) => {
    return b.indexOf(value) === -1
  })
}

// eslint-disable-next-line
function intersection(a: any[], b: any[]): any[] {
  return a.filter((value) => {
    return (
      b.findIndex((item) => {
        return item.id === value
      }) !== -1
    )
  })
}

// eslint-disable-next-line
function union(a: never[], b: never[]): never[] {
  return [...a, ...not(b, a)]
}

export function TransferList({
  leftList = [],
  rightList = [],
  checkboxProps = {},
  // checkKey = 'id',
  onChange
}: TransferListProps): JSX.Element {
  const classes = useStyles()
  const [checked, setChecked] = React.useState<never[]>([])
  const [left, setLeft] = React.useState<[]>(leftList)
  const [right, setRight] = React.useState<[]>(rightList)

  React.useEffect(() => {
    onChange(left, right)
  }, [left, onChange, right])

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = (id: never) => {
    return (): void => {
      const currentIndex = checked.indexOf(id)
      const newChecked: never[] = [...checked]

      if (currentIndex === -1) {
        newChecked.push(id)
      } else {
        newChecked.splice(currentIndex, 1)
      }
      setChecked(newChecked)
    }
  }

  const numberOfChecked = (items: never[]): number => {
    return intersection(checked, items).length
  }

  const handleToggleAll = (items: never[]) => {
    return (): void => {
      const c: any = items.map((value: any) => { // eslint-disable-line
        return value.id
      })

      if (numberOfChecked(items) === items.length) {
        setChecked(not(checked, c))
      } else {
        setChecked(union(checked, c))
      }
    }
  }

  const handleCheckedRight = (): void => {
    const r: any = right // eslint-disable-line
    const c: any = left.filter((value: any) => { // eslint-disable-line
      return leftChecked.indexOf(value.id) !== -1
    })
    setRight(r.concat(c))
    setLeft(not(left, c) as any) // eslint-disable-line
    setChecked(not(checked, leftChecked))
  }

  const handleCheckedLeft = (): void => {
    const l: any = left // eslint-disable-line
    const c: any = right.filter((value: any) => { // eslint-disable-line
      return rightChecked.indexOf(value.id) !== -1
    })
    setLeft(l.concat(c))
    setRight(not(right, c) as any) // eslint-disable-line
    setChecked(not(checked, rightChecked))
  }

  const customList = (title: React.ReactNode, items: []): JSX.Element => {
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
          {items.map((item: any) => { // eslint-disable-line
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
                <ListItemText id={labelId} primary={`List item ${name}`} />
              </ListItem>
            )
          })}
          <ListItem />
        </List>
      </Card>
    )
  }

  return (
    <Grid
      container
      spacing={2}
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Grid item>{customList('Choices', left)}</Grid>
      <Grid item>
        <Grid container direction='column' alignItems='center'>
          <Button
            variant='outlined'
            size='small'
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label='move selected right'
          >
            &gt;
          </Button>
          <Button
            variant='outlined'
            size='small'
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label='move selected left'
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Chosen', right)}</Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      margin: 'auto'
    },
    cardHeader: {
      padding: theme.spacing(1, 2)
    },
    list: {
      width: 200,
      height: 230,
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto'
    },
    button: {
      margin: theme.spacing(0.5, 0)
    }
  })
})
