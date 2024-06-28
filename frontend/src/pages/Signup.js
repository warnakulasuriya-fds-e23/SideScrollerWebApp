import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
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
      className="h-fit m-auto my-8 py-5 px-20 flex max-w-3xl flex-col gap-14 bg-gray-200 dark:bg-gray-900 "
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
      <Button gradientDuoTone="greenToBlue" type="submit" disabled={isLoading}>
        Sign up
      </Button>
      {error && (
        <div className="border-solid border-2  border-red-600 rounded-lg bg-red-100 text-red-600 my-0 mx-0">
          {error}
        </div>
      )}
    </form>
  );
};
