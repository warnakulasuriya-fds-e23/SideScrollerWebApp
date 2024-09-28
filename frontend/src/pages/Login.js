import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Alert,
  Spinner,
} from "flowbite-react";
import { useState } from "react";
import { useLogin } from "../hooks";
import { Link } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { loginBackendCommunication, isLoading, error } = useLogin();
  const handleSubmit = async (e) => {
    setEmail(email.toLowerCase());
    e.preventDefault();
    await loginBackendCommunication(email, password, rememberMe);
  };
  return (
    <div className="h-[84vh] flex flex-col py-0 sm:py-4 overflow-auto">
      <form
        className="w-auto sm:w-[20%] md:w-[60%] sm:grow m-auto rounded-xl py-16 px-[10%] sm:px-[5%] flex flex-col gap-3 sm:gap-5 md:gap-6 lg:gap-10 bg-gray-200 dark:bg-gray-900 "
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
    </div>
  );
};
