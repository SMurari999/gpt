MUI (Material-UI) Components Overview

MUI (Material-UI) is a React UI framework that follows Google’s Material Design principles. It provides pre-built, customizable React components to build responsive and modern web applications.

1. Installation

To use MUI in a React project, install it via npm or yarn:

npm install @mui/material @emotion/react @emotion/styled
or

yarn add @mui/material @emotion/react @emotion/styled
2. Core MUI Components

MUI provides a variety of components, categorized into different sections like Layout, Inputs, Navigation, Feedback, etc. Below are the most commonly used ones.

(A) Layout Components
These help structure your UI.

1. Box

A wrapper component similar to <div>, but with CSS properties directly as props.
Useful for flexbox and grid layouts.
import { Box } from "@mui/material";

export default function LayoutExample() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <h1>Hello MUI</h1>
    </Box>
  );
}
2. Container

Provides consistent spacing and responsive behavior.
import { Container, Typography } from "@mui/material";

export default function ContainerExample() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4">This is a Container</Typography>
    </Container>
  );
}
3. Grid

Provides a responsive 12-column grid system.
import { Grid, Paper } from "@mui/material";

export default function GridExample() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Box 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Box 2</Paper>
      </Grid>
    </Grid>
  );
}
(B) Inputs & Form Components
Used for handling user input.

1. Button

Supports different variants (text, contained, outlined) and colors.
import { Button } from "@mui/material";

export default function ButtonExample() {
  return (
    <Button variant="contained" color="primary">
      Click Me
    </Button>
  );
}
2. TextField (Input Field)

import { TextField } from "@mui/material";

export default function InputExample() {
  return (
    <TextField label="Enter Name" variant="outlined" fullWidth />
  );
}
3. Checkbox

import { Checkbox, FormControlLabel } from "@mui/material";

export default function CheckboxExample() {
  return (
    <FormControlLabel control={<Checkbox />} label="I agree to the terms" />
  );
}
4. Radio Button

import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

export default function RadioExample() {
  return (
    <RadioGroup row>
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="female" control={<Radio />} label="Female" />
    </RadioGroup>
  );
}
5. Switch

import { Switch, FormControlLabel } from "@mui/material";

export default function SwitchExample() {
  return (
    <FormControlLabel control={<Switch />} label="Enable Notifications" />
  );
}
6. Select (Dropdown)

import { Select, MenuItem } from "@mui/material";

export default function SelectExample() {
  return (
    <Select defaultValue="apple">
      <MenuItem value="apple">Apple</MenuItem>
      <MenuItem value="banana">Banana</MenuItem>
    </Select>
  );
}
(C) Navigation Components
Used for menus and navigation.

1. AppBar (Top Navbar)

import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavbarExample() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
    </AppBar>
  );
}
2. Drawer (Sidebar Navigation)

import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function DrawerExample() {
  return (
    <Drawer open={true} variant="permanent">
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
    </Drawer>
  );
}
(D) Feedback Components
These are used to provide feedback to users.

1. Snackbar (Toast Notification)

import { Snackbar, Button } from "@mui/material";
import { useState } from "react";

export default function SnackbarExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Notification</Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message="Action Successful!" />
    </>
  );
}
2. Alert

import { Alert } from "@mui/material";

export default function AlertExample() {
  return (
    <Alert severity="success">This is a success message!</Alert>
  );
}
(E) Cards & Media Components
Used to display structured content.

1. Card

import { Card, CardContent, Typography } from "@mui/material";

export default function CardExample() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Card Title</Typography>
        <Typography variant="body2">Card content goes here.</Typography>
      </CardContent>
    </Card>
  );
}
2. Avatar

import { Avatar } from "@mui/material";

export default function AvatarExample() {
  return (
    <Avatar alt="User" src="https://via.placeholder.com/150" />
  );
}
(F) Data Display Components
1. Table

import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function TableExample() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
3. Theming & Customization

MUI allows customization of its components using theme overrides.

Example: Customizing the theme
import { createTheme, ThemeProvider, Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#ff5722" },
    secondary: { main: "#03a9f4" },
  },
});

export default function CustomThemeExample() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant="contained">Themed Button</Button>
    </ThemeProvider>
  );
}
Conclusion

MUI simplifies UI development by providing ready-to-use, customizable React components. It helps create modern, responsive, and consistent web applications efficiently.

Would you like me to guide you on MUI styling techniques (SX, styled-components, makeStyles)? 🚀
