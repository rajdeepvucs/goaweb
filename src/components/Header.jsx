import React,{useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch} from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem} from '../Reducer/cartSlice';
import{Link } from 'react-router-dom';
import { motion } from "framer-motion"
const pages = ['Home', 'Shop', 'Home Decor', 'Art', 'Accessories', 'Clothing','Checkout', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const[price,setPrice]=React.useState(0)
  
const cart= useSelector((state) => state.cart?.items);
const dispatch = useDispatch();
const removeCart = (item) => {
  console.log("item",item)
  dispatch(removeItem(item));
};
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenCartMenu = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };
  const total = ()=>{
    let price = 0;
     cart.map((ele,k)=>{
         price = ele.newPrice * ele.quantity + price
     });
    setPrice(price);
};
useEffect(()=>{
  total();
  
},[total])
  return (
    <AppBar position="static" sx={{backgroundColor:'#2E236C'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}>
        <img 
            src="whatsapp-image-20240709-at-131550-531e98bc-1@2x.png" 
            alt="Logo" 
            style={{ display: { xs: 'none', md: 'flex' }, marginRight: '8px', height: 40, width: 40 }} 
          />
    </motion.div>
        
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
              SWYAMPURNA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
        SWYAMPURNA
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Search sx={{ borderRadius: '16px' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Cart">
  <IconButton onClick={handleOpenCartMenu} sx={{ p: 0 }}>
    <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <ShoppingCartIcon
        sx={{
          display: { md: 'flex' },
          mr: 5,
          backgroundColor: 'white',
          borderRadius: '50%',
          height: 40,
          width: 40,
        }}
      />
      {cart?.length > 0 && (
        <Typography
          sx={{
            position: 'absolute',
            top: 0,
            right: 30,
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            width: 20,
            height: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 12,
          }}
        >
          {cart?.length}
        </Typography>
      )}
    </Box>
  </IconButton>
</Tooltip>

          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElCart}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElCart)}
              onClose={handleCloseCartMenu}
            >
              
              <MenuItem onClick={handleCloseCartMenu}>
  {cart?.length > 0 ? (
    
    <div  style={{width:"20rem",padding:10}}>
    <table>
        <thead>
            <tr>
                <th>Photo</th>
                <th>Product Name</th>
            </tr>
        </thead>
        <tbody>
            {
                cart.map((e)=>{
                    return (
                        <>
                            <tr>
                                <td>
                                {/* <NavLink to={`/parchaseProductDetail/${e.id[0].randomId}`}  onClick={handleClose}> */}
                                <img src={e.image} style={{width:"5rem",height:"5rem"}} alt="" />
                                {/* </NavLink>    */}
                                </td>
                                <td>
                                    <p>{e.title}</p>
                                    <p>Price : ₹{e.newPrice}</p>
                                    
                                </td>

                                <td style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>{ if (window.confirm('Are you sure you want to delete?')) {removeCart(e)}}}>
                                < DeleteIcon />
                                </td>
                            </tr>
                        </>
                    )
                })
            }
          
            <tr> <td><p className='text-center'>Total :₹ {price}</p></td>
            <td><Button variant="contained" >Checkout</Button></td>
            
            </tr>
        </tbody>
    </table>
</div>
  ) : (
    <Typography textAlign="center">No items in cart</Typography>
  )}
</MenuItem>

              
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Box sx={{ backgroundColor: '#433D8B',  }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {pages.map((page) => (
  <Link to={`/${page.toLowerCase()}`} key={page}>
    <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
      {page}
    </Button>
  </Link>
))}
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
}

export default Header;
