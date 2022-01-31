import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CodeSnippetProps } from './CodeSnippetProps'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { Tooltip } from '../Tooltip/Tooltip'
import { Box } from '@mui/material'

export function CopyButton({ value }: CodeSnippetProps): JSX.Element {
  const [title, setTitle] = useState('copy')

  const changeText = (): void => {
    setTitle('copied')
  }

  const handleUnHover = (): void => {
    setTimeout(() => {
      setTitle('copy')
    }, 250)
  }

  return (
    <div onMouseLeave={handleUnHover}>
      <CopyToClipboard text={value}>
        <Tooltip title={title} aria-label='copy' placement='top'>
          <Box
            sx={{
              cursor: 'pointer',
              '& .MuiSvgIcon-root': {
                color: 'text.primary'
              }
            }}
            onClick={changeText}
          >
            <FileCopyIcon fontSize='small' />
          </Box>
        </Tooltip>
      </CopyToClipboard>
    </div>
  )
}
