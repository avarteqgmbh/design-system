import React from 'react'
import { styled } from '@mui/material/styles'
import { CodeSnippetProps } from './CodeSnippetProps'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Typography } from '../../components/dataDisplay/Typography/Typography'
import { Paper } from '../../components/surfaces/index'
import { Box, Grid } from '../../components/layout/index'
import { CopyButton } from './CopyButton'

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  value = '',
  language = '',
  syntaxHighlighterStyle = SyntaxHighlighterStyle,
  fileName = 'Code Example',
  makeCopy
}) => {
  const lines = value.split('\n').length
  const chars = value.length - lines + 1

  return (
    <StyledCodeSnippet>
      <Grid container direction='column'>
        <Grid item container className='header'>
          <Typography variant='body2' sx={{ fontWeight: 900 }}>
            {fileName}
          </Typography>
          <CopyButton value={value} makeCopy={makeCopy} />
        </Grid>
        <SyntaxHighlighter
          language={language}
          style={vs2015}
          wrapLines
          wrapLongLines={false}
          showLineNumbers
          showInlineLineNumbers
          customStyle={syntaxHighlighterStyle}
          codeTagProps={{ style: codeStyleProps }}
        >
          {value}
        </SyntaxHighlighter>
        <Grid item container className='footer'>
          <Typography variant='overline' color='textSecondary'>
            {language}
          </Typography>
          <Box className='stats'>
            <Typography variant='overline' color='textSecondary'>
              {chars} chars
            </Typography>
            <Typography variant='overline' color='textSecondary'>
              {lines} lines
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </StyledCodeSnippet>
  )
}
const StyledCodeSnippet = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.light,
    borderRadius: theme.radius.card,
    margin: '20px 0px',
    '& .header': {
      padding: theme.spacing(2),
      justifyContent: 'space-between',
      alignItems: 'center',
      '& span::first-letter': {
        textTransform: 'uppercase'
      },
      '& button': {
        border: 'none',
        background: 'transparent'
      }
    },
    '& .footer': {
      padding: theme.spacing(2),
      justifyContent: 'space-between'
    },
    '& .lang': {
      textTransform: 'uppercase'
    },
    '& .stats': {
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
