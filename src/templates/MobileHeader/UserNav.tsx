import React from 'react'
import { Sidebar } from './Sidebar'
import {
  AnyIcon,
  Avatar,
  Chip,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography
} from '../../components'

export interface UserNavProps {
  isActive: boolean
  setIsActive: (isActive: boolean) => void
}

type SidebarItemType = 'contact' | 'info' | 'profile' | 'change_password'

export const UserNav: React.FC<UserNavProps> = ({ isActive, setIsActive }) => {
  return (
    <Sidebar sx={classes.root} className={isActive ? 'active' : ''}>
      {core.motto && (
        <Typography style={{ marginBottom: 20 }} variant='h5'>
          {core.motto}
        </Typography>
      )}

      <SidebarDivider label={localizedWelcome} />
      <div sx={classes.avatarContainer}>
        <Chip
          avatar={<Avatar alt={me.fullName} src={me.avatarUrl} />}
          label={me.fullName}
        />
        {core.languages.length > 1 && <LanguageSelect />}
      </div>

      <SidebarDivider label={localizedStatus} />
      <MenuItem
        sx={classes.menuItem}
        onClick={(): void => {
          onToggle('/points')
        }}
      >
        <ListItemIcon>
          <AnyIcon icon='coin' />
        </ListItemIcon>
        <ListItemText>{localizedPointsAccount}</ListItemText>
        <Chip
          color='primary'
          label={pointsCounter}
          size='small'
          sx={{ '& *': { color: 'white' }, fontWeight: 'bold' }}
        />
      </MenuItem>
      <MenuItem
        sx={classes.menuItem}
        onClick={(): void => {
          onToggle('/shop/wishlist')
        }}
      >
        <ListItemIcon>
          <AnyIcon icon='heart' />
        </ListItemIcon>
        <ListItemText>{localizedWishlist}</ListItemText>
        {me.statusBar.wishlistCount && me.statusBar.wishlistCount > 0 ? (
          <Chip
            color='primary'
            label={me.statusBar.wishlistCount}
            size='small'
            sx={{ '& *': { color: 'white' }, fontWeight: 'bold' }}
          />
        ) : (
          <></>
        )}
      </MenuItem>
      <MenuItem
        sx={classes.menuItem}
        onClick={(): void => {
          onToggle('/shop/cart')
        }}
      >
        <ListItemIcon>
          <AnyIcon icon='cart' size='md' />
        </ListItemIcon>
        <ListItemText>{localizedShoppingCart}</ListItemText>
        {me.statusBar.cartCount && me.statusBar.cartCount > 0 ? (
          <Chip
            color='primary'
            label={me.statusBar.cartCount}
            size='small'
            sx={{ '& *': { color: 'white' }, fontWeight: 'bold' }}
          />
        ) : (
          <></>
        )}
      </MenuItem>
      <MenuItem
        sx={classes.menuItem}
        onClick={(): void => {
          onToggle('/shop/orders')
        }}
      >
        <ListItemIcon>
          <AnyIcon icon='orders' />
        </ListItemIcon>
        <ListItemText>{localizedOrders}</ListItemText>
      </MenuItem>

      <SidebarDivider label={localizedOthers} />
      {core.sidebar.items.map((item) => {
        return (
          <MenuItem
            className={classes.menuItem}
            key={item.label}
            onClick={(): void => {
              onToggleWebview(item.path)
            }}
          >
            <ListItemIcon>
              <AnyIcon icon={item.icon} />
            </ListItemIcon>
            <ListItemText>
              {localizedSidebarItems[
                item.label.toLowerCase() as SidebarItemType
              ] || item.label}
            </ListItemText>
          </MenuItem>
        )
      })}
      <MenuItem sx={classes.menuItem} onClick={onLogout}>
        <ListItemIcon>
          <AnyIcon icon='logout' />
        </ListItemIcon>
        <ListItemText>{localizedLogout}</ListItemText>
      </MenuItem>

      <Typography sx={classes.version} color='textSecondary' variant='body2'>
        {config.environments[currentEnvironment].otaVersion}
      </Typography>
    </Sidebar>
  )
}

const classes = {
  root: {
    borderLeftColor: 'background.border',
    borderRightColor: 'transparent',
    left: 'auto',
    right: 'calc((100% - 60px) * -1)',
    top: 0,
    transition: 'transform ease-in-out 300ms',

    '&.active': {
      transform: 'translateX(calc(100% * -1))'
    },

    '& svg': {
      height: 16,
      width: 16,
      minHeight: 16,
      minWidth: 16
    }
  },

  avatarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2
  },

  avatar: {
    display: 'flex',
    alignItems: 'center'
  },

  menuItem: {
    background: 'background.default',
    padding: 3,
    marginBottom: 3,
    borderRadius: 'radius.medium',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'background.border'
  },

  version: {
    position: 'absolute',
    right: 4,
    bottom: 4
  }
}
