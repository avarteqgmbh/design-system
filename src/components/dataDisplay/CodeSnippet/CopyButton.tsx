import React, { useState } from 'react'
import { CodeSnippetProps } from './CodeSnippetProps'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { Tooltip } from '../Tooltip/Tooltip'

export function CopyButton({ value }: CodeSnippetProps): JSX.Element {
  const [title, setTitle] = useState('copy')

  const makeCopy = (): void => {
    navigator.clipboard.writeText(value)
    setTitle('copied')
  }

  const handleUnHover = (): void => {
    setTimeout(() => {
      setTitle('copy')
    }, 250)
  }

  return (
    <div onMouseLeave={handleUnHover}>
      <Tooltip title={title} aria-label='copy' placement='top'>
        <button type='button' onClick={makeCopy}>
          <FileCopyIcon
            fontSize='small'
            sx={{ color: 'palette.text.secondary', cursor: 'pointer' }}
          />
        </button>
      </Tooltip>
    </div>
  )
}
