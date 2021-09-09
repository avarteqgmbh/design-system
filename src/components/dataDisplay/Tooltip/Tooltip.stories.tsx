import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TooltipProps } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import Zoom from '@material-ui/core/Zoom'

import { Tooltip } from './Tooltip'
import { FloatingActionButton as Fab } from '../../index'
import AddIcon from '@material-ui/icons/Add'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  argTypes: {
    arrow: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    open: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      }
    },
    placement: {
      control: 'select',
      options: [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top'
      ],
      defaultValue: 'bottom',
      table: {
        type: {
          summary:
            'bottom-end | bottom-start | bottom | left-end | left-start | left | right-end | right-start | right | top-end | top-start | top'
        },
        defaultValue: { summary: 'bottom' }
      }
    },
    disableFocusListener: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disableHoverListener: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disableTouchListener: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    enterDelay: {
      control: 'number',
      defaultValue: 100,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 }
      }
    },
    enterNextDelay: {
      control: 'number',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    },
    enterTouchDelay: {
      control: 'number',
      defaultValue: 700,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 700 }
      }
    },
    interactive: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    leaveDelay: {
      control: 'number',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 }
      }
    },
    leaveTouchDelay: {
      control: 'number',
      defaultValue: 1500,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 }
      }
    },
    onClose: {
      action: { type: 'closed' },
      table: {
        type: { summary: 'func' }
      }
    },
    onOpen: {
      action: { type: 'opended' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}
const FAB = (
  <Fab color='primary'>
    <AddIcon />
  </Fab>
)
const Template: Story<TooltipProps> = (args) => {
  return (
    <Tooltip {...args} aria-label='add' style={{ margin: '80px' }}>
      {FAB}
    </Tooltip>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Add'
}

export const Arrow = Template.bind({})
Arrow.args = {
  title: 'Add',
  arrow: true
}

export const Right = Template.bind({})
Right.args = {
  title: 'Add',
  placement: 'right'
}

export const Top = Template.bind({})
Top.args = {
  title: 'Add',
  placement: 'top'
}

export const Left = Template.bind({})
Left.args = {
  title: 'Add',
  placement: 'left'
}

export const GrowTransition = Template.bind({})
GrowTransition.args = {
  title: 'Grow',
  TransitionProps: {
    timeout: 600
  }
}

export const FadeTransition = Template.bind({})
FadeTransition.args = {
  title: 'Fade',
  TransitionComponent: Fade,
  TransitionProps: {
    timeout: 600
  }
}

export const ZoomTransition = Template.bind({})
ZoomTransition.args = {
  title: 'Zoom',
  TransitionComponent: Zoom
}

export const LightTooltip = Template.bind({})
LightTooltip.args = {
  title: 'Light',
  className: 'classes.LightTooltip'
}
