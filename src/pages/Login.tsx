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
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();
  // ✅ Put it HERE
  console.log(errors);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: LoginForm) => {
    console.log("Login Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // ✅ store login state
    localStorage.setItem("isAuthenticated", "true");

    // simulate success
    navigate("/dashboard", { replace: true });
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

          <Stack spacing={1}>
            <Input
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <Typography color="danger" level="body-sm">
                {errors.email.message}
              </Typography>
            )}
          </Stack>

          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            endDecorator={
              <Button
                type="button"
                variant="plain"
                onClick={() => setShowPassword((prev) => !prev)}
              >
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

          {/* 👇 Helper text */}
          <Typography level="body-xs" color="neutral">
            Must be at least 6 characters
          </Typography>

          {/* 👇 Error */}
          {errors.password && (
            <Typography color="danger" level="body-sm">
              {errors.password.message}
            </Typography>
          )}

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
