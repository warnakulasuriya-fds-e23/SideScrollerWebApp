import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Alert,
  Spinner,
} from "flowbite-react";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
export const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { signupBackendCommunication, isLoading, error } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signupBackendCommunication(email, userName, password, rememberMe);
  };
  return (
    <form
      className="h-fit m-auto my-8 py-5 px-20 flex max-w-3xl flex-col gap-10 bg-gray-200 dark:bg-gray-900 "
      onSubmit={handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email:" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="eg: plyer1@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userName" value="UserName:" />
        </div>
        <TextInput
          id="userName"
          type="String"
          placeholder="eg: player123"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
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
        className="text-green-600 hover:underline dark:text-green-500"
        to="/login"
      >
        Already Have an Account? Login
      </Link>
      {error && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Error!</span> {error}
        </Alert>
      )}
      <Button gradientDuoTone="greenToBlue" type="submit" disabled={isLoading}>
        {isLoading ? <Spinner color="success" /> : "Sign up"}
      </Button>
    </form>
  );
};
