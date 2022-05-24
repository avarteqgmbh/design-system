/* eslint-disable prettier/prettier */
import React from 'react'
import { Slide, SlideItem } from './Slide'
import { Carousel } from 'react-responsive-carousel'
import { Box } from '../../components'

export interface SliderProps {
  fullWidth?: boolean
  slides: SlideItem[]
}

export const Slider = (props: SliderProps): JSX.Element => {
  const { fullWidth = false, slides } = props

  return (
    <Box sx={{ maxWidth: fullWidth ? '100%' : 1200, ...styles }}>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        showArrows={false}
        showStatus={false}
      >
        {slides &&
          slides.map((slide) => {
            return <Slide fullWidth={fullWidth} {...slide} />
          })}
      </Carousel>
    </Box>
  )
}

const styles = {
  '& .carousel-root': {
    outline: 'none'
  },

  '& .carousel': {
    position: 'relative',
    width: '100%',

    '& *': {
      boxSizing: 'border-box'
    },

    '& img': {
      width: '100%',
      display: 'inline-block',
      pointerEvents: 'none'
    },

    '& .carousel': {
      position: 'relative'
    },

    '& .control-arrow, &.carousel-slider .control-arrow': {
      transition: 'all 0.25s ease-in',
      opacity: 0.4,
      filter: 'alpha(opacity=40)',
      position: 'absolute',
      zIndex: 2,
      top: '20px',
      background: 'none',
      border: 0,
      fontSize: '32px',
      cursor: 'pointer'
    },

    '& .control-arrow': {
      outline: 0,
      border: 0,
      background: 'none',
      top: '50%',
      mt: '-13px',
      fontSize: '18px',

      '&:focus, &:hover': {
        opacity: 1,
        filter: 'alpha(opacity=100)'
      }
    },

    '& .control-disabled.control-arrow': {
      opacity: 0,
      filter: 'alpha(opacity=0)',
      cursor: 'inherit',
      display: 'none'
    },

    '& .control-prev.control-arrow': {
      left: 0,

      '&:before': {
        borderRight: '8px solid #fff'
      }
    },

    '& .control-next.control-arrow': {
      right: 0,

      '&:before': {
        right: 0
      }
    },

    '& .control-arrow:before, &.carousel-slider .control-arrow:before':
    {
      margin: '0 5px',
      display: 'inline-block',
      borderTop: '8px solid transparent',
      borderBottom: '8px solid transparent',
      content: '""'
    },

    '& .thumbs-wrapper': {
      m: '20px',
      overflow: 'hidden'
    },

    '& .thumbs': {
      transition: 'all 0.15s ease-in',
      transform: 'translate3d(0, 0, 0)',
      position: 'relative',
      listStyle: 'none',
      whiteSpace: 'nowrap'
    },

    '& .thumb': {
      transition: 'border 0.15s ease-in',
      display: 'inline-block',
      mr: '6px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      border: '3px solid #fff',
      padding: '2px',

      '&:focus': {
        border: '3px solid #ccc',
        outline: 'none'
      },

      '&.selected, &:hover': {
        border: '3px solid #333'
      },

      '& img': {
        verticalAlign: 'top'
      }
    },

    '&.carousel-slider': {
      position: 'relative',
      margin: 0,
      overflow: 'hidden',

      '& .control-arrow': {
        top: 0,
        color: '#fff',
        fontSize: '26px',
        bottom: 0,
        mt: 0,
        padding: '5px',

        '&:hover': {
          background: 'rgba(0, 0, 0, 0.2)'
        }
      }
    },

    '& .slider-wrapper': {
      overflow: 'hidden',
      margin: 'auto',
      width: '100%',
      transition: 'height 0.15s ease-in',

      '&.axis-horizontal .slider': {
        display: 'flex',

        '& .slide': {
          flexDirection: 'column',
          flexFlow: 'column'
        }
      },

      '&.axis-vertical .slider': {
        flexDirection: 'column'
      }
    },

    '& .slider': {
      margin: 0,
      padding: 0,
      position: 'relative',
      listStyle: 'none',
      width: '100%',

      '&.animated': {
        transition: 'all 0.35s ease-in-out'
      }
    },

    '& .slide': {
      minWidth: '100%',
      margin: 0,
      position: 'relative',
      textAlign: 'center',

      '& img': {
        width: '100%',
        verticalAlign: 'top',
        border: 0
      },

      '& iframe': {
        display: 'inline-block',
        width: 'calc(100% - 80px)',
        margin: '0 40px 40px',
        border: 0
      },

      '& .legend': {
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        marginLeft: '-45%',
        width: '90%',
        borderRadius: '10px',
        background: '#000',
        color: '#fff',
        padding: '10px',
        fontSize: '12px',
        textAlign: 'center',
        opacity: '0.25',
        transition: 'opacity 0.35s ease-in-out'
      }
    },

    '& .control-dots': {
      position: 'absolute',
      bottom: 0,
      margin: '10px 0',
      padding: 0,
      textAlign: 'center',
      width: '100%',
      zIndex: 1,

      '& .dot': {
        transition: 'opacity 0.25s ease-in',
        opacity: 0.3,
        filter: 'alpha(opacity=30)',
        boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
        background: '#fff',
        borderRadius: '50%',
        width: '8px',
        height: '8px',
        cursor: 'pointer',
        display: 'inline-block',
        margin: '0 8px',

        '&.selected, &:hover': {
          opacity: 1,
          filter: 'alpha(opacity=100)'
        }
      }
    },

    '& .carousel-status': {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: '5px',
      fontSize: '10px',
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)',
      color: '#fff'
    },

    '&:hover': {
      '& .slide .legend': {
        opacity: 1
      }
    }
  }

}
