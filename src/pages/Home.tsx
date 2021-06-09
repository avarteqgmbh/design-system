import { makeStyles, Button, Typography } from '@material-ui/core';

export function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Design System 2.0</Typography>
      <Typography>The next level anynines Design System providing a new Storybook package powered by Material UI.</Typography>
      <Button variant="contained">Something</Button>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {}
}))
