import React from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'
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
  orderDate: string
  orderNumber: string
  orderAddress: {
    name: string
    company?: string
    street: string
    zip: string
    city: string
    phone?: string
    mail?: string
  }
  orderItems: OrderItemProps[]
}

export const OrderStatusCard: React.FC<OrderStatusCardProps> = (props) => {
  const { orderDate, orderNumber, orderAddress, orderItems } = props
  const [tooltipOpen, setTooltipOpen] = React.useState(false)

  return (
    <Accordion disableGutters sx={{ bgcolor: 'background.medium' }}>
      <AccordionSummary
        sx={{ px: 4 }}
        expandIcon={<ExpandMore />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Box
          className='orderInfo'
          sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}
        >
          <Typography variant='button2'>{orderNumber}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Typography variant='body2' color='text.secondary'>
              Bestellung vom:
            </Typography>
            <Typography ml={2} variant='button2'>
              {orderDate}
            </Typography>
          </Box>
        </Box>
        <Box
          className='userInfo'
          sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}
        >
          <Typography variant='button2'>Versandadresse</Typography>
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
              {orderAddress.name}
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
              bgcolor: 'background.paper'
            }}
          >
            <Typography>{orderAddress.name}</Typography>
            <Typography color='text.secondary'>
              {orderAddress.company}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography>{orderAddress.street}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
              <Typography mr={2}>{orderAddress.zip}</Typography>
              <Typography>{orderAddress.city}</Typography>
            </Box>
            {(orderAddress.phone || orderAddress.mail) && (
              <Divider sx={{ my: 2 }} />
            )}
            {orderAddress.phone && (
              <Typography>{orderAddress.phone}</Typography>
            )}
            {orderAddress.mail && <Typography>{orderAddress.mail}</Typography>}
          </Box>
        </Box>
        <Box
          className='pointsInfo'
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
            mr: 4
          }}
        >
          <Typography variant='button2'>Summe</Typography>
          <Points
            points={orderItems.reduce((partialSum, a) => {
              return partialSum + a.points
            }, 0)}
            size='small'
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: 'background.paper', padding: 0 }}>
        {orderItems.map((item) => {
          return <OrderItem {...item} />
        })}
      </AccordionDetails>
    </Accordion>
  )
}
