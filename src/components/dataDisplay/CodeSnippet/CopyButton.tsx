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
        className={classes.root}
      >
        <CopyToClipboard text={value}>
          <button type='button' onClick={changeText}>
            <FileCopyIcon fontSize='small' />
          </button>
        </CopyToClipboard>
      </Tooltip>
    </div>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {
      cursor: 'pointer'
    }
  }
})
