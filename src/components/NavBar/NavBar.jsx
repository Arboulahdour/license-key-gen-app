import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Raleway',
    paddingLeft: '10px',
    fontWeight: '800',
    background: '#7559FF',
    background: '-webkit-linear-gradient(to right, #7559FF 31%, #AA72CF 57%)',
    background: '-moz-linear-gradient(to right, #7559FF 31%, #AA72CF 57%)',
    background: 'linear-gradient(to right, #7559FF 31%, #AA72CF 57%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navBarColor: {
    background: '#2c3049',
  },
  textFont: {
    fontFamily: 'Raleway',
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

/*  const handleChange = (event) => {
    setAuth(event.target.checked);
  };*/

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
     {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>*/}
      <AppBar position="static" className={classes.navBarColor}>
        <Toolbar>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>*/}
          <Typography variant="h5" className={classes.title}>
            ChatIn
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} className={classes.textFont}>My account</MenuItem>
                <MenuItem onClick={handleClose} className={classes.textFont}>Login</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}