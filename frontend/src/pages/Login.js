import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
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
      className="h-fit m-auto my-8 py-20 px-20 flex max-w-3xl flex-col gap-16 bg-gray-200 dark:bg-gray-900 "
      onSubmit={handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
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
          <Label htmlFor="password1" value="Your password" />
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
      <Button gradientDuoTone="greenToBlue" type="submit" disabled={isLoading}>
        Log In
      </Button>
      {error && (
        <div className="border-solid border-2  border-red-600 rounded-lg bg-red-100 text-red-600 my-0 mx-0">
          {error}
        </div>
      )}
    </form>
  );
};
