import React from 'react'
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '../../../theme/types'
import { CodeSnippetProps } from './CodeSnippetProps'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Typography } from '../Typography/Typography'
import { Paper } from '../../surfaces/index'
import { Grid } from '../../layout/index'
import { CopyButton } from './CopyButton'

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  value = '',
  language = '',
  syntaxHighlighterStyle = SyntaxHighlighterStyle,
  fileName = 'Code Example'
}) => {
  const lines = value.split('\n').length
  const chars = value.length - lines + 1
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Grid container direction='column'>
        <Grid container className={classes.header}>
          <Typography variant='caption'>{fileName}</Typography>
          <CopyButton value={value} />
        </Grid>
        <SyntaxHighlighter
          language={language}
          style={vs2015}
          customStyle={syntaxHighlighterStyle}
          wrapLines
          wrapLongLines={false}
          showLineNumbers
          showInlineLineNumbers
          codeTagProps={{ style: codeStyleProps }}
        >
          {value}
        </SyntaxHighlighter>
        <Grid container className={classes.footer}>
          <Typography variant='overline' color='textSecondary'>
            {language}
          </Typography>
          <div className={classes.stats}>
            <Typography variant='overline' color='textSecondary'>
              {chars} chars
            </Typography>
            <Typography variant='overline' color='textSecondary'>
              {lines} lines
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      background: theme.palette.background.light,
      borderRadius: theme.radius.card
    },
    header: {
      padding: theme.spacing(2),
      justifyContent: 'space-between',
      '& span::first-letter': {
        textTransform: 'uppercase'
      },
      '& button': {
        border: 'none',
        background: 'transparent'
      }
    },
    footer: {
      padding: theme.spacing(2),
      justifyContent: 'space-between'
    },
    lang: {
      textTransform: 'uppercase'
    },
    stats: {
      '& span': {
        textTransform: 'none',
        paddingLeft: theme.spacing(3)
      }
    }
  }
})

const SyntaxHighlighterStyle = {
  margin: '-1px 0px',
  background: '#131f37'
}
const codeStyleProps = {
  display: 'inline-table',
  width: '-webkit-fill-available'
}
