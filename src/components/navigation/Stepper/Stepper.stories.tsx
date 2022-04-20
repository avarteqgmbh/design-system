import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { StepperProps } from '@mui/material'

import { Stepper, Step, StepLabel, Typography, Button, Box } from '../../index'

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  argTypes: {
    children: {
      control: { type: 'node' },
      table: { type: { summary: 'node' } }
    },
    classes: {
      control: { type: 'object' },
      table: { type: { summary: 'object' } }
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
    },
    alternativeLabel: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    nonLinear: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=405%3A6928'
    },
    muiDocSrc: 'https://mui.com/material-ui/react-stepper/'
  }
}

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']

export const Default: Story<StepperProps> = (args): JSX.Element => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())

  const isStepOptional = (step: number): boolean => {
    return step === 1
  }

  const isStepSkipped = (step: number): boolean => {
    return skipped.has(step)
  }

  const handleNext = (): void => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1
    })
    setSkipped(newSkipped)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep - 1
    })
  }

  const handleSkip = (): void => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1
    })
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = (): void => {
    setActiveStep(0)
  }

  return (
    <>
      <Stepper {...args} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: {
            optional?: React.ReactNode
          } = {}
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant='caption'
                color='textPrimary'
                sx={{
                  display: 'flex',
                  justifyContent: args.alternativeLabel
                    ? 'center'
                    : 'flex-start'
                }}
              >
                Optional
              </Typography>
            )
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }} color='textPrimary'>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }} color='textPrimary'>
            Step {activeStep + 1}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color='inherit'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </>
  )
}
