import React from 'react'
import { CodeSnippetProps } from './CodeSnippetProps'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Typography } from '../Typography/Typography'
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
    <Box
      sx={{
        borderRadius: (theme): string => {
          return `${theme.radius.button}px`
        },
        bgcolor: 'bg.light',
        color: 'text.primary'
      }}
    >
      <Grid container direction='column'>
        <Grid
          item
          container
          p={1}
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='body2' sx={{ fontWeight: 900 }}>
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
        <Grid item container p={1} justifyContent='space-between'>
          <Typography variant='overline'>{language}</Typography>
          <Box>
            <Typography variant='overline'>{chars} chars</Typography>
            <Typography ml={2} variant='overline'>
              {lines} lines
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const SyntaxHighlighterStyle = {
  margin: '-1px 0px',
  background: '#131f37'
}

const codeStyleProps = {
  display: 'inline-table',
  width: '-webkit-fill-available'
}
