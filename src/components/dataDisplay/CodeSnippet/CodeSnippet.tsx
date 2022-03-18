import React from 'react'
import { CodeSnippetProps } from './CodeSnippetProps'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Typography } from '../Typography/Typography'
import { Paper } from '../../surfaces/index'
import { Box, Grid } from '../../layout/index'
import { CopyButton } from './CopyButton'

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  value = '',
  language = '',
  syntaxHighlighterStyle = SyntaxHighlighterStyle,
  fileName = 'Code Example'
}) => {
  const lines = value.split('\n').length
  const chars = value.length - lines + 1

  return (
    <Paper
      sx={{
        background: 'palette.background.light',
        borderRadius: 'radius.button',
        my: 2,
        '& pre': {
          p: '0 !important',
          maxWidth: '-webkit-fill-available'
        }
      }}
    >
      <Grid container direction='column'>
        <Grid
          item
          container
          sx={{
            p: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            '& span::first-letter': {
              textTransform: 'uppercase'
            },
            '& button': {
              border: 'none',
              background: 'transparent'
            }
          }}
        >
          <Typography variant='body2' fontWeight={600}>
            {fileName}
          </Typography>
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
        <Grid item container sx={{ p: 1, justifyContent: 'space-between' }}>
          <Typography variant='overline' color='textSecondary'>
            {language}
          </Typography>
          <Box
            sx={{
              '& span': {
                textTransform: 'none',
                paddingLeft: 3
              }
            }}
          >
            <Typography variant='overline' color='textSecondary'>
              {chars} chars
            </Typography>
            <Typography variant='overline' color='textSecondary'>
              {lines} lines
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

const SyntaxHighlighterStyle = {
  margin: '-1px 0px',
  background: '#131f37'
}
const codeStyleProps = {
  display: 'inline-table',
  width: '-webkit-fill-available',
  background: '#0D1424',
  padding: '10px 5px'
}
