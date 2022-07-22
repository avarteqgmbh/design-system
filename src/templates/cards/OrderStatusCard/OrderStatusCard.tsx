import React from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { SxProps } from '@mui/material'
import { Points } from '../Points'
import { OrderItem, OrderItemProps } from './OrderItem'
import {
  AnyIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Divider
} from '../../../components'

export interface OrderStatusCardProps {
  id: string
  releasedDate: {
    label: string
    value: string
  }
  orderNumber: string
  points?: number
  pointsInfoLabel: string
  orderAddress: {
    label: string
    company?: string
    salutation: string
    firstName: string
    lastName: string
    street: string
    city: string
    zip: string
    email: string
    phone: string
  }
  orderItems: OrderItemProps[]
  sx?: SxProps
}

export const OrderStatusCard: React.FC<OrderStatusCardProps> = (props) => {
  const {
    id,
    releasedDate,
    orderNumber,
    orderAddress,
    orderItems,
    points,
    pointsInfoLabel,
    sx
  } = props
  const [tooltipOpen, setTooltipOpen] = React.useState(false)

  return (
    <Accordion disableGutters sx={{ bgcolor: 'background.medium', ...sx }}>
      <AccordionSummary
        sx={{ px: 4 }}
        expandIcon={<ExpandMore />}
        aria-controls={id}
        id={id}
      >
        <Box
          className='orderInfo'
          sx={{
            display: 'flex',
            flex: 1.5,
            flexDirection: 'column'
          }}
        >
          <Typography variant='button2'>{orderNumber}</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100%'
            }}
            className='releasedDateInfo'
          >
            <Typography variant='body2' color='text.secondary'>
              {releasedDate.label}:
            </Typography>
            <Typography ml={2} variant='button2'>
              {releasedDate.value}
            </Typography>
          </Box>
        </Box>
        {orderAddress && (
          <Box
            className='userInfo'
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column'
            }}
          >
            <Typography variant='button2'>{orderAddress.label}</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%'
              }}
              onMouseEnter={(): void => {
                setTooltipOpen(true)
              }}
              onMouseLeave={(): void => {
                setTooltipOpen(false)
              }}
            >
              <Typography variant='body2' mr={2}>
                {orderAddress.lastName}
              </Typography>
              <AnyIcon icon='user' />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                visibility: tooltipOpen ? 'visible' : 'hidden',
                opacity: tooltipOpen ? 1 : 0,
                top: 50,
                padding: 4,
                boxShadow: 1,
                borderRadius: '8px',
                transition: '200ms ease-in-out',
                bgcolor: 'background.paper',
                zIndex: 1
              }}
              className='orderAddressInfo'
            >
              <Typography>
                {orderAddress.firstName} {orderAddress.lastName}
              </Typography>
              <Typography color='text.secondary'>
                {orderAddress.company}
              </Typography>
              <Divider sx={{ my: 2, borderColor: 'text.hint' }} />
              <Typography>{orderAddress.street}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography mr={2}>{orderAddress.zip}</Typography>
                <Typography>{orderAddress.city}</Typography>
              </Box>
              {(orderAddress.phone || orderAddress.email) && (
                <Divider sx={{ my: 2, borderColor: 'text.hint' }} />
              )}
              {orderAddress.phone && (
                <Typography>{orderAddress.phone}</Typography>
              )}
              {orderAddress.email && (
                <Typography>{orderAddress.email}</Typography>
              )}
            </Box>
          </Box>
        )}
        <Box
          className='pointsInfo'
          sx={{
            display: 'flex',
            flex: 0.5,
            flexDirection: 'column',
            alignItems: 'flex-end',
            mr: 4
          }}
        >
          <Typography variant='button2'>{pointsInfoLabel}</Typography>
          <Points
            points={
              points ||
              orderItems.reduce((partialSum, a) => {
                return partialSum + a.points
              }, 0) ||
              0
            }
            size='small'
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: 'background.paper', padding: 0 }}>
        {orderItems.map((item) => {
          return <OrderItem key={item.title} {...item} />
        })}
      </AccordionDetails>
    </Accordion>
  )
}
