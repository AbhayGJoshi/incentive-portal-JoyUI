import { Box, Button, Card, Input, Stack, Typography } from "@mui/joy";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  type LoginForm = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  // ✅ Put it HERE
  console.log(errors);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginForm) => {
    console.log("Login Data:", data);

    // simulate success
    navigate("/dashboard");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Typography level="h3">Login</Typography>

          <Input
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
          />

          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            endDecorator={
              <Button
                variant="plain"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {" "}
                {showPassword ? "🙈" : "👁"}
              </Button>
            }
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}

            
          />

          <Button type="submit" fullWidth>
            Login
          </Button>
        </Stack>
        {/* Add your login form here */}
      </form>
    </Box>
  );
};

export default Login;
