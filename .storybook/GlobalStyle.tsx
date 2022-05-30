import { GlobalStyles } from '@mui/material'

import { Theme } from '../src/theme/types'

interface Props {
    theme: Theme
}

export const GlobalStyle: React.FC<Props> = ({ theme }) => {
    return <GlobalStyles styles={{
        // Global Body reset
        'body': {
            padding: '0 !important',
        },

        // Scrollbar Styles
        '& ::-webkit-scrollbar': {
            width: 8,
            height: 8
        },
        '& ::-webkit-scrollbar-thumb': {
            background: theme.palette.background.medium,
            borderRadius: 20
        },
        '& ::-webkit-scrollbar-track': {
            background: 'transparent',
        },

        // Storybook Docs overrides
        '.sbdocs.sbdocs-wrapper': {
            backgroundColor: theme.palette.background.paper,
            '& .sbdocs-title, .sbdocs-h2, .sbdocs-h3': {
                color: theme.palette.text.primary
            },
            '& .os-padding': {
                backgroundColor: theme.palette.background.light,
                '& svg': {
                    color: theme.palette.text.primary
                }
            },
            '& .docblock-code-toggle': {
                backgroundColor: theme.palette.background.medium,
                color: theme.palette.text.primary
            }
        },
        '& .docblock-argstable': {
            '& *': {
                color: theme.palette.text.primary
            },
            '& td': {
                backgroundColor: `${theme.palette.background.default} !important`,

                '& button': {
                    color: theme.palette.text.primary
                }
            },
            '& tr': {
                borderColor: `${theme.palette.background.medium} !important`,
                '& td:nth-of-type(3) div span': {
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.medium
                }
            },
            '& div > span': {
                backgroundColor: 'transparent',
                border: 'none',
                color: theme.palette.text.primary
            },
            '& code': {
                backgroundColor: `${theme.palette.background.medium} !important`,
                border: `${theme.palette.background.medium} !important`,
                color: `${theme.palette.text.primary} !important`
            },
            '& span.rejt-value': {
                color: theme.palette.text.primary
            },
            '& div > div > span': {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.medium,
                border: 'none'
            },
            '& button': {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.medium,
                border: 'none',
                '&:hover': {
                    backgroundColor: theme.palette.background.light
                }
            },
            '& select, input, textarea': {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.medium,
                border: 'none',
                '&:hover': {
                    backgroundColor: theme.palette.background.light
                }
            }
        },
        '.sbdocs.sbdocs-preview': {
            backgroundColor: theme.palette.background.light,
            color: theme.palette.text.primary
        }
    }} />
}
