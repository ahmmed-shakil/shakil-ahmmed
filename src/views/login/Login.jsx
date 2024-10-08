import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  return <div>Login</div>;
};

Login.getLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
