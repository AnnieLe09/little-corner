// LoginForm.js
import React from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AuthService from "../../services/AuthService";
import { Form, Formik } from "formik";
import * as Yup from "yup";

// Custom Styles with MUI's makeStyles
const useStyles = makeStyles({
  formContainer: {
    fontFamily: "'Sofia', cursive",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "2rem",
    "@media (max-width: 738px)": {
      width: "90%",
    },
  },
  title: {
    fontFamily: "'Sofia', cursive",
    color: "#ff9494",
    textShadow: "0.1em 0.1em 0 hsl(200 50% 30%)",
  },
  button: {
    backgroundColor: "#73bbc9 !important",
    color: "#fff !important",
    "&:hover": {
      backgroundColor: "#5aa7b2 !important",
    },
  },
  link: {
    color: "#73bbc9",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (data) => {
    console.log(data);
    try {
      const response = await AuthService.login(data);
      console.log("Login successful:", response);

      localStorage.setItem("token", response.token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container className="flex items-center justify-center min-h-screen bg-[#f9f5f6]">
      <Box className={classes.formContainer + " glass-bg max-w-md"}>
        <Typography
          variant="h4"
          align="center"
          className={classes.title + " text-2xl mb-6"}
        >
          Welcome Back
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleLogin}>
          {(props) => {
            const { handleSubmit, handleChange } = props;
            return (
              <Form className="space-y-4" onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  className="bg-gray-100"
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontFamily: "'Roboto', sans-serif",
                      color: "#333",
                    },
                  }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  className="bg-gray-100"
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontFamily: "'Roboto', sans-serif",
                      color: "#333",
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className={classes.button + " mt-4 py-2"}
                >
                  Log In
                </Button>
              </Form>
            );
          }}
        </Formik>
        <Typography align="center" className="text-sm text-gray-600 mt-4">
          <span className={classes.link}>Forgot password?</span>
        </Typography>
        <Typography align="center" className="text-sm text-gray-600 mt-2">
          Don’t have an account?{" "}
          <span className={classes.link + " text-blue-500"}>Sign up</span>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
