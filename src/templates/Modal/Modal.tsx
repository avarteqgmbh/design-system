import React from 'react'
import {
  DialogProps,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Button, Dialog, MobileStepper } from '../../components'

export interface SlideItem {
  bgImage?: string
  title: string
  description: string
  actions?: JSX.Element
}

export interface ModalProps extends DialogProps {
  slides: SlideItem[]
}

export const Modal = (props: ModalProps): JSX.Element => {
  const { children, slides } = props
  const [activeStep, setActiveStep] = React.useState(0)

  const changeStep = (number: number): void => {
    setActiveStep(activeStep + number)
  }

  return (
    <Dialog {...props}>
      {slides[activeStep].bgImage && (
        <Box
          sx={{
            backgroundImage: `url(${slides[activeStep].bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 200
          }}
        />
      )}
      <DialogTitle id='alert-dialog-title'>
        {slides[activeStep].title}
      </DialogTitle>
      <DialogContent sx={{ minWidth: { sm: 450 } }}>
        <DialogContentText id='alert-dialog-description'>
          {slides[activeStep].description}
          {children}
        </DialogContentText>
      </DialogContent>
      {slides[activeStep].actions && (
        <DialogActions sx={{ justifyContent: 'center' }}>
          {slides[activeStep].actions}
        </DialogActions>
      )}
      {slides.length > 1 && (
        <MobileStepper
          variant='dots'
          steps={slides.length}
          position='static'
          activeStep={activeStep}
          nextButton={
            <Button
              size='small'
              onClick={(): void => {
                return changeStep(1)
              }}
              disabled={activeStep === slides.length - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size='small'
              onClick={(): void => {
                return changeStep(-1)
              }}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      )}
    </Dialog>
  )
}
