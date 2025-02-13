
import React from "react"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material"

interface FoodItem {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface CartItem extends FoodItem {
  quantity: number
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
    price: 8.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection, served with seasonal vegetables",
    price: 18.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Chocolate Brownie",
    description: "Rich, fudgy brownie served with vanilla ice cream",
    price: 6.99,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const FoodMenu: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (item: FoodItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0)

  const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Our Menu
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartIcon />}
        onClick={() => setIsCartOpen(true)}
        sx={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}
      >
        <Badge badgeContent={getTotalItems()} color="error">
          Cart
        </Badge>
      </Button>
      <Grid container spacing={4}>
        {foodItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="200" image={item.image} alt={item.name} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography>{item.description}</Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  ${item.price.toFixed(2)}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => addToCart(item)} sx={{ mt: 2 }}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <DialogTitle>Your Cart</DialogTitle>
        <DialogContent>
          {cart.length === 0 ? (
            <Typography>Your cart is empty</Typography>
          ) : (
            <List>
              {cart.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.name}
                    secondary={`Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`}
                  />
                  <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
                </ListItem>
              ))}
            </List>
          )}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${getTotalPrice().toFixed(2)}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsCartOpen(false)}>Close</Button>
          <Button variant="contained" color="primary" onClick={() => alert("Checkout functionality not implemented")}>
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default FoodMenu

