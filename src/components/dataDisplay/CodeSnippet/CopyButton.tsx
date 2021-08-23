import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CodeSnippetProps } from './CodeSnippetProps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { makeStyles } from '@material-ui/core'
import { Tooltip } from '../Tooltip/Tooltip'

export function CopyButton({ value }: CodeSnippetProps): JSX.Element {
  const classes = useStyles()
  const [title, setTitle] = useState('copy')

  const changeText = (): void => {
    setTitle('copied')
  }

  const handleUnHover = (): void => {
    setTitle('copy')
  }

  return (
    <CopyToClipboard text={value}>
      <Tooltip title={title} aria-label='copy' placement='top'>
        <button
          type='button'
          className={classes.button}
          onClick={changeText}
          onMouseLeave={handleUnHover}
        >
          <FileCopyIcon fontSize='small' />
        </button>
      </Tooltip>
    </CopyToClipboard>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {},
    button: {
      cursor: 'pointer'
    }
  }
})
