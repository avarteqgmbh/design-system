import React, { useState } from 'react'
import { CodeSnippetProps } from './CodeSnippetProps'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { Tooltip } from '../../components/dataDisplay/Tooltip/Tooltip'

export function CopyButton({ value, makeCopy }: CodeSnippetProps): JSX.Element {
  const [title, setTitle] = useState('copy')

  const onCopyClick = (): void => {
    if (makeCopy) {
      makeCopy()
    } else {
      navigator.clipboard.writeText(value)
    }
    setTitle('copied')
  }

  const handleUnHover = (): void => {
    setTimeout(() => {
      setTitle('copy')
    }, 250)
  }

  return (
    <div onMouseLeave={handleUnHover}>
      <Tooltip
        title={title}
        aria-label='copy'
        placement='top'
        sx={{ cursor: 'pointer' }}
      >
        <button type='button' onClick={onCopyClick}>
          <FileCopyIcon fontSize='small' color='primary' />
        </button>
      </Tooltip>
    </div>
  )
}
