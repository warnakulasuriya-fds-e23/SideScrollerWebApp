import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { UseLogin } from "../hooks/useLogin";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginBackendCommunication } = UseLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginBackendCommunication(email, password);
  };
  return (
    <form
      className="flexr max-w-lg flex-col space-y-10 gap-4"
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
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button gradientDuoTone="greenToBlue" type="submit">
        Log In
      </Button>
    </form>
  );
};
