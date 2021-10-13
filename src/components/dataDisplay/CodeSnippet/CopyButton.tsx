import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CodeSnippetProps } from './CodeSnippetProps'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import makeStyles from '@mui/styles/makeStyles'
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
      <CopyToClipboard text={value}>
        <Tooltip
          title={title}
          aria-label='copy'
          placement='top'
          className={classes.root}
        >
          <button type='button' onClick={changeText}>
            <FileCopyIcon fontSize='small' color='primary' />
          </button>
        </Tooltip>
      </CopyToClipboard>
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
