// src/ProductGrid.js
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { addItem ,removeItem} from '../Reducer/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';


const products = [
    {
        id: 1,
        title: "Brooch",
        price: 3200,
        discount: 2,
        description: "Wow",
        newPrice: 3000,
        image: "https://images-static.nykaa.com/media/catalog/product/d/1/d161dc4YCFJBRCH-18FLW-WH_1.jpg",
        quantity:1
    },
    {
        id: 2,
        title: "Charm",
        price: 899,
        discount: 5,
        description: "Wow",
        newPrice: 800,
        image: "https://m.media-amazon.com/images/I/613jyGjV2FL.jpg",
        quantity:1
    },
    {
        id: 3,
        title: "Sunglasses",
        price: 1999,
        discount: 50,
        description: "Wow",
        newPrice: 1599,
        image: "https://i.pinimg.com/736x/29/06/8c/29068c4d5871cb0c551d3c68579d9915.jpg",
        quantity:1
    },
    {
        id: 4,
        title: "Bag",
        price: 3200,
        discount: 50,
        description: "Wow",
        newPrice: 1600,
        image: "https://image.made-in-china.com/2f0j00IgycaOAzrrkn/New-Designer-Bag-Ladies-Purse-Handbags-for-Women-Luxury-Purse-Leather-Designer-Purses-and-Handbags.webp",
        quantity:1
    }
];

const ProductPage = () => {
    const dispatch = useDispatch();
    const cart= useSelector((state) => state.cart?.items);
  const handleAddToCart = (item) => {
    console.log("item",item)
    dispatch(addItem(item));
  };
  const handleRemoveFromCart = (item) => {
    console.log("item",item)
    dispatch(removeItem(item));
  };
    return (
        
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="h6">
                                ₹{product.newPrice}
                            </Typography>
                        </CardContent >
                        <CardActions >
                        {cart.some(item => item.id === product.id) ? (
                                // <Button variant="contained" color="denger" onClick={() => handleRemoveFromCart(product)}>
                                //     Remove from Cart
                                // </Button>
                                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleRemoveFromCart(product)}>
  Delete
</Button>
                            ) : (
                                <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </Button>
                            )}
                            <Button variant="outlined" color="primary">
                                Show Details
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductPage;
