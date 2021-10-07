import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { StepperProps, MobileStepperProps } from '@mui/material'
import { Theme, useTheme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon
} from '@mui/icons-material'
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  StepButton,
  Paper,
  StepContent,
  MobileStepper
} from '../../index'

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
    }
  }
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: '100%'
    },
    button: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    completed: {
      display: 'inline-block'
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    }
  })
})

function getSteps(): string[] {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad']
}

function getStepContent(step: number): string {
  switch (step) {
    case 0:
      return 'Select campaign settings...'
    case 1:
      return 'What is an ad group anyways?'
    case 2:
      return 'This is the bit I really care about!'
    default:
      return 'Unknown step'
  }
}

export const HorizontalLinearStepper: Story<StepperProps> = (
  args
): JSX.Element => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())
  const steps = getSteps()

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
    <div className={classes.root}>
      <Stepper {...args} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: { optional?: React.ReactNode } = {}
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
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}
              <Button
                variant='contained'
                color='primary'
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const HorizontalLinearAlternativeStepper: Story<StepperProps> = (
  args
): JSX.Element => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

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

  const handleReset = (): void => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper {...args} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant='contained' color='primary' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const HorizontalNonLinearStepper: Story<StepperProps> = (
  args
): JSX.Element => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({})
  const steps = getSteps()

  const totalSteps = (): number => {
    return steps.length
  }

  const completedSteps = (): number => {
    return Object.keys(completed).length
  }

  const isLastStep = (): boolean => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = (): boolean => {
    return completedSteps() === totalSteps()
  }

  const handleNext = (): void => {
    let newActiveStep = activeStep + 1
    if (isLastStep() && !allStepsCompleted()) {
      newActiveStep = steps.findIndex((step, i) => {
        return !(i in completed)
      })
    }
    setActiveStep(newActiveStep)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep - 1
    })
  }

  const handleStep = (step: number): (() => void) => {
    return (): void => {
      setActiveStep(step)
    }
  }

  const handleComplete = (): void => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = (): void => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <div className={classes.root}>
      <Stepper {...args} nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepButton onClick={handleStep(index)}>{label}</StepButton>
            </Step>
          )
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant='caption' className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const HorizontalNonLinearAlternativeStepper: Story<StepperProps> = (
  args
): JSX.Element => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState(new Set<number>())
  const [skipped, setSkipped] = React.useState(new Set<number>())
  const steps = getSteps()

  const totalSteps = (): number => {
    return getSteps().length
  }

  const isStepOptional = (step: number): boolean => {
    return step === 1
  }

  const handleSkip = (): void => {
    if (!isStepOptional(activeStep)) {
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

  const skippedSteps = (): number => {
    return skipped.size
  }

  const completedSteps = (): number => {
    return completed.size
  }

  const allStepsCompleted = (): boolean => {
    return completedSteps() === totalSteps() - skippedSteps()
  }

  const isLastStep = (): boolean => {
    return activeStep === totalSteps() - 1
  }

  const handleNext = (): void => {
    let newActiveStep = activeStep + 1
    if (isLastStep() && !allStepsCompleted()) {
      newActiveStep = steps.findIndex((step, i) => {
        return !completed.has(i)
      })
    }
    setActiveStep(newActiveStep)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep - 1
    })
  }

  const handleStep = (step: number): (() => void) => {
    return (): void => {
      setActiveStep(step)
    }
  }

  const handleComplete = (): void => {
    const newCompleted = new Set(completed)
    newCompleted.add(activeStep)
    setCompleted(newCompleted)
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext()
    }
  }

  const handleReset = (): void => {
    setActiveStep(0)
    setCompleted(new Set<number>())
    setSkipped(new Set<number>())
  }

  const isStepSkipped = (step: number): boolean => {
    return skipped.has(step)
  }

  return (
    <div className={classes.root}>
      <Stepper {...args} alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}
          const buttonProps: { optional?: React.ReactNode } = {}
          if (isStepOptional(index)) {
            buttonProps.optional = (
              <Typography variant='caption'>Optional</Typography>
            )
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton onClick={handleStep(index)} {...buttonProps}>
                {label}
              </StepButton>
            </Step>
          )
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {isStepOptional(activeStep) && !completed.has(activeStep) && (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}
              {activeStep !== steps.length &&
                (completed.has(activeStep) ? (
                  <Typography variant='caption' className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function getVerticalStepContent(step: number): string {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.`
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.'
    case 2:
      return `Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.`
    default:
      return 'Unknown step'
  }
}

export const VerticalLinearAlternativeStepper: Story<StepperProps> = (
  args
): JSX.Element => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

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

  const handleReset = (): void => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper {...args} activeStep={activeStep} orientation='vertical'>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getVerticalStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div className={classes.buttonContainer}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  )
}

const useDotStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
})

export const DotStepper: Story<MobileStepperProps> = (args): JSX.Element => {
  const classes = useDotStyles()
  const theme = useTheme()
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
      className={classes.root}
      nextButton={
        <Button size='small' onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeftIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </Button>
      }
      backButton={
        <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRightIcon />
          ) : (
            <KeyboardArrowLeftIcon />
          )}
          Back
        </Button>
      }
    />
  )
}

export const ProgressStepper: Story<MobileStepperProps> = (
  args
): JSX.Element => {
  const classes = useDotStyles()
  const theme = useTheme()
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
      className={classes.root}
      nextButton={
        <Button size='small' onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeftIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </Button>
      }
      backButton={
        <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRightIcon />
          ) : (
            <KeyboardArrowLeftIcon />
          )}
          Back
        </Button>
      }
    />
  )
}
