import { makeStyles } from '@material-ui/core';

export function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Design System 2.0</h1>
        <p>
          The next level anynines Design System providing a new Storybook package powered by Material UI.
        </p>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default,
  }
}))