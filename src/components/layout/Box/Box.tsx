import {
    Box as MuiBox,
    BoxProps as MuiBoxProps,
    makeStyles,
  } from '@material-ui/core';
  import { Theme } from '../../../theme/types';
  
  export function Box(props: MuiBoxProps) {
    const classes = useStyles();
    return (
      <MuiBox
        className={`${classes.root}`}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles<Theme>((theme) => ({
    root: {
      
    },
  }));
  