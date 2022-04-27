import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { MobileStepperProps } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

import { MobileStepper, Button } from '../../index'

export default {
  title: 'Navigation/Mobile Stepper',
  component: MobileStepper,
  decorators: [withDesign],
  argTypes: {
    onClick: {
      action: { type: 'onClick' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=405%3A6928'
    },
    muiDocSrc: 'https://mui.com/material-ui/react-stepper/'
  }
}

export const DotStepper: Story<MobileStepperProps> = (args): JSX.Element => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1
    })
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep - 1
    })
  }

  return (
    <MobileStepper
      {...args}
      variant='dots'
      steps={6}
      position='static'
      activeStep={activeStep}
      nextButton={
        <Button size='small' onClick={handleNext} disabled={activeStep === 5}>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  )
}

export const ProgressStepper: Story<MobileStepperProps> = (
  args
): JSX.Element => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1
    })
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep - 1
    })
  }

  return (
    <MobileStepper
      {...args}
      variant='progress'
      steps={6}
      position='static'
      activeStep={activeStep}
      nextButton={
        <Button size='small' onClick={handleNext} disabled={activeStep === 5}>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  )
}
