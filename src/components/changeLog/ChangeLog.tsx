import React from 'react'
import { styled } from '@mui/material/styles'
import {
  ContactMail,
  ColorLens,
  Dashboard,
  Error,
  Keyboard,
  List,
  Note,
  Science,
  Settings
} from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography
} from '../index'

export interface Change {
  type: ChangeType
  title: string
  description: string
}

export type Category = 'Fixed' | 'Changed' | 'Added' | 'Removed'
export type ChangeType =
  | 'Input'
  | 'Navigation'
  | 'Surfaces'
  | 'Feedback'
  | 'DataDisplay'
  | 'Lab'
  | 'Template'
  | 'Theme'
  | 'Default'

export interface ChangeLogProps {
  changelog: { [key in Category]?: Change[] }
  isLatestVersion?: boolean
  date: string
  version: string
}

export const ChangeLog: React.FC<ChangeLogProps> = ({
  changelog,
  isLatestVersion = false,
  date,
  version
}) => {
  const renderTypeIcon = (type: ChangeType): JSX.Element => {
    switch (type) {
      case 'Input':
        return <Keyboard color='secondary' />
      case 'Navigation':
        return <List color='secondary' />
      case 'Surfaces':
        return <Note color='secondary' />
      case 'Feedback':
        return <Error color='secondary' />
      case 'DataDisplay':
        return <ContactMail color='secondary' />
      case 'Lab':
        return <Science color='secondary' />
      case 'Template':
        return <Dashboard color='secondary' />
      case 'Theme':
        return <ColorLens color='secondary' />
      default:
        return <Settings color='secondary' />
    }
  }

  const renderChanges = (changes): JSX.Element => {
    return changes.map((change: Change): JSX.Element => {
      return (
        <li>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>{renderTypeIcon(change.type)}</Box>
            <Box sx={{ marginLeft: 4 }}>
              <Typography variant='subtitle2'>{change.title}</Typography>
              <Typography color='textSecondary'>
                {change.description}
              </Typography>
            </Box>
          </Box>
        </li>
      )
    })
  }

  const renderChangelog = (): JSX.Element => {
    return (
      <>
        {Object.keys(changelog).map((category): JSX.Element => {
          return (
            <>
              <Typography variant='h6'>{category}</Typography>
              <ul className='ul'>{renderChanges(changelog[category])}</ul>
            </>
          )
        })}
      </>
    )
  }

  return (
    <StyledChangeLog variant='outlined'>
      <CardHeader
        sx={{ padding: '16px 24px' }}
        title={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='h4'>Storybook v{version}</Typography>
            {isLatestVersion && (
              <Chip
                color='success'
                variant='outlined'
                label='Latest'
                sx={{ marginLeft: 3 }}
              />
            )}
          </Box>
        }
        subheader={date}
      />
      <Divider />
      <CardContent sx={{ padding: '16px 24px' }}>
        {renderChangelog()}
      </CardContent>
    </StyledChangeLog>
  )
}

const StyledChangeLog = styled(Card)(() => {
  return {
    '& ul': {
      marginBottom: '30px',
      listStyle: 'none',
      paddingLeft: '16px',

      li: {
        margin: '16px 0'
      },

      '&:last-child': {
        marginBottom: 0
      }
    }
  }
})
