import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { Formik, useFormik } from 'formik'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { loginSchema } from './AuthValidationSchema'
import { Link } from 'react-router-dom';

type loginData={
    email:string,
    password:string
}

const Loging = () => {


    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: loginSchema,
        
        onSubmit: (values) => {
            
            
          alert(JSON.stringify(values, null, 2));
        },
      });
   
    
  return (
    <Container component="main" maxWidth="xs">
<Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              error={formik.touched.password && Boolean(formik.errors.password)}

              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={"/"} >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/signup"} >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
  </Container>
  )
}

export default Loging