import type React from "react"
import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material"

interface FoodItem {
  id: number
  name: string
  description: string
  price: number
  image: string
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
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Our Menu
      </Typography>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default FoodMenu

