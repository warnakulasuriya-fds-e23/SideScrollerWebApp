import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Alert,
  Spinner,
} from "flowbite-react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { loginBackendCommunication, isLoading, error } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginBackendCommunication(email, password, rememberMe);
  };
  return (
    <form
      className="h-fit m-auto my-8 py-20 px-20 flex max-w-3xl flex-col gap-12 bg-gray-200 dark:bg-gray-900 "
      onSubmit={handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email:" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Password:" />
        </div>
        <TextInput
          id="password1"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="remember"
          checked={rememberMe}
          onChange={(e) => {
            setRememberMe(e.target.checked);
          }}
        />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Link
        className="text-cyan-600 hover:underline dark:text-cyan-500"
        to="/signup"
      >
        Dont have an account? Sign Up
      </Link>
      {error && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Error!</span> {error}
        </Alert>
      )}
      <Button gradientDuoTone="cyanToBlue" type="submit" disabled={isLoading}>
        {isLoading ? <Spinner color="info" /> : "Log In"}
      </Button>
    </form>
  );
};
