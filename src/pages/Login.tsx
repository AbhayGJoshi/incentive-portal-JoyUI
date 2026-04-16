import { Box, Button, Card, Input, Stack, Typography } from "@mui/joy";
import { useForm } from "react-hook-form";

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

  const onSubmit = (data: LoginForm) => {
    console.log("Login Data:", data);
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

          <Input placeholder="Email" {...register("email")} />

          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
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
