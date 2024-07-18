import React from 'react';
import './banner.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../Reducer/cartSlice';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {  Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { motion } from "framer-motion"
const popularItems = [
    { id: 1, title: 'Black Dates from Goa', image: 'link--12500x500jpg@2x.png', price: 2100, discount: '10%', newPrice: 1890,quantity:1 },
    { id: 2, title: 'Shimmering bangles', image: 'image-2@2x.png', price: 899, discount: '20%', newPrice: 719,quantity:1 },
    { id: 3, title: 'Shimmering Earrings', image: 'link--130500x500jpg@2x.png', price: 500, discount: '15%', newPrice: 425 ,quantity:1},
    { id: 4, title: 'Organic Raisins', image: 'link--1500x500jpg@2x.png', price: 400, discount: '5%', newPrice: 380 ,quantity:1},
    { id: 5, title: 'Hand Bags-Medium', image: 'link--112500x500jpg@2x.png', price: 200, discount: '25%', newPrice: 150,quantity:1 },
    { id: 6, title: 'Cashew Nuts', image: 'link--19500x500jpg@2x.png', price: 1000, discount: '30%', newPrice: 700,quantity:1 },
    { id: 7, title: 'Traditional Konkani Jewellery', image: 'Konkani-Traditional-Jwellery.png', price: 1000, discount: '30%', newPrice: 700,quantity:1 },
    { id: 8, title: 'Goan Hawaii Hat', image: 'Goan-Traditional-Hat.jpg', price: 1000, discount: '30%', newPrice: 700,quantity:1 },
  ];
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
const DiscountBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'red',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
}));
const StrikethroughText = styled(Typography)(({ theme }) => ({
    textDecoration: 'line-through',
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
const Banner = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log("item",item)
    dispatch(addItem(item));
  };
  
  return (
    <>
     <div className="banner">
      <div className="banner-content">
        <h1>Shopping with us for better quality and best price </h1>
        <p>We have prepared special discounts for you on all products.
            Don't miss these opportunities...
        </p>
      </div>
    </div>
    <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
    <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        mt={2} 
        gap={2} 
        flexWrap="wrap" // Allows wrapping on smaller screens
      >
        
        <Avatar 
          alt="Description of image" 
          src="link--188500x500jpg@2x.png" // Adjust path
          sx={{ width: { xs: 100, sm: 150, md: 200 }, height: { xs: 100, sm: 150, md: 200 } }} // Responsive sizes
        />
        <Avatar 
          alt="Description of image" 
          src="list05@2x.png" // Adjust path
          sx={{ width: { xs: 100, sm: 150, md: 200 }, height: { xs: 100, sm: 150, md: 200 } }} // Responsive sizes
        />
        <Avatar 
          alt="Description of image" 
          src="list08@2x.png" // Adjust path
          sx={{ width: { xs: 100, sm: 150, md: 200 }, height: { xs: 100, sm: 150, md: 200 } }} // Responsive sizes
        />
        <Avatar 
          alt="Description of image" 
          src="list11@2x.png" // Adjust path
          sx={{ width: { xs: 100, sm: 150, md: 200 }, height: { xs: 100, sm: 150, md: 200 } }} // Responsive sizes
        />
        <Avatar 
          alt="Description of image" 
          src="list14@2x.png" // Adjust path
          sx={{ width: { xs: 100, sm: 150, md: 200 }, height: { xs: 100, sm: 150, md: 200 } }} // Responsive sizes
        />
        <Avatar 
          alt="Description of image" 
          src="list17@2x.png" // Adjust path
          sx={{ width: { xs: 100, sm: 150, md: 200 }, height: { xs: 100, sm: 150, md: 200 } }} // Responsive sizes
        />
      </Box>
    </motion.div>
    <div >
    <Box sx={{ padding: 10 }}>
      <Typography variant="h4" gutterBottom>
        Most Popular
      </Typography>
      <Grid container spacing={4}>
        {popularItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card sx={{ position: 'relative' }}>
              <DiscountBadge>{item.discount} OFF</DiscountBadge>
              <CardMedia
          
                component="img"
                height="140"
                image={item.image} // Image path
                alt={item.title}
                sx={{borderRadius:10,width:200}}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <StrikethroughText variant="body2">₹{item.price}</StrikethroughText>
                  <Typography variant="body2" color="red">
                  ₹{item.newPrice}
                  </Typography>
                </Box>
                <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)}>
          +
        </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div> 
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Typography variant="h4" gutterBottom>
        New Arrival
      </Typography>
    </Box>
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
   
    <ImageList sx={{ width: 1000, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
   
    </>
   

  );
};

export default Banner;
