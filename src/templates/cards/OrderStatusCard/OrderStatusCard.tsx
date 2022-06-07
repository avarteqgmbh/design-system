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
  Typography
} from '../../../components'

export interface OrderStatusCardProps {
  orderDate: string
  orderNumber: string
  userInfo: {
    fullName: string
  }
  orderItems: OrderItemProps[]
}

export const OrderStatusCard: React.FC<OrderStatusCardProps> = (props) => {
  const { orderDate, orderNumber, userInfo, orderItems } = props

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
            <Typography variant='label2' color='text.secondary'>
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
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Typography variant='label2' mr={2}>
              {userInfo.fullName}
            </Typography>
            <AnyIcon icon='user' />
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
