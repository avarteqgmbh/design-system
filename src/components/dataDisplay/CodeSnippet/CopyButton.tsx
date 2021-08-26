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
    <Tooltip title={title} aria-label='copy' placement='top'>
      <div onMouseLeave={handleUnHover}>
        <CopyToClipboard text={value}>
          <button type='button' className={classes.button} onClick={changeText}>
            <FileCopyIcon fontSize='small' />
          </button>
        </CopyToClipboard>
      </div>
    </Tooltip>
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
