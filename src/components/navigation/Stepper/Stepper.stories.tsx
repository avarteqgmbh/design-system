import React from 'react'
import { withDesign } from 'storybook-addon-designs'

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
    activeStep: {
      control: { type: 'number' },
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
    },
    connector: {
      control: { type: 'element' },
      defaultValue: '<StepConnector />',
      table: {
        type: { summary: 'element' },
        defaultValue: { summary: '<StepConnector />' }
      }
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
      url: ''
    },
    muiDocSrc: ''
  }
}

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']

function HorizontalLinearStepper(): React.ReactNode {
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
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: {
            optional?: React.ReactNode
          } = {}
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant='caption'>Optional</Typography>
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
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
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

export const Default: React.ReactNode = () => {
  return HorizontalLinearStepper()
}
