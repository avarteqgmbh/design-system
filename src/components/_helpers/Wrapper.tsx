import { Container, ContainerProps, makeStyles } from '@material-ui/core';

export function Wrapper(props: ContainerProps) {
  const classes = useStyles();
  return <Container className={classes.root} {...props}></Container>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
}));
