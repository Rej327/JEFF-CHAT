import { useContext, useState } from "react";
import axios, { AxiosError } from "axios";
import { UserContext } from "./UserContext.jsx";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  const [isError, setIsError] = useState(false);

  function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    axios
      .post(url, { username, password })
      .then((res) => {
        setLoggedInUsername(username);
        setId(res.data.id);
      })
      .catch((err) => {
        if (err.response.status !== 200) {
          setIsError(true);
        }
      });
  }
  return (
    <div className="bg-green-100 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-green-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
          <h1 className="styleHead styleText">Jeff-Chat</h1>
        </div>
        <h1 className="text-center text-red-500">
          {isError && "Invalid User or Pass"}
        </h1>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="Username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="Password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-green-500 hover:bg-green-700 duration-300 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === "register" && (
            <div>
              Already a member?
              <button
                className="ml-1"
                onClick={() => setIsLoginOrRegister("login")}
              >
                <span className="underline underline-offset-auto hover:no-underline">
                  Login
                </span>
              </button>
            </div>
          )}
          {isLoginOrRegister === "login" && (
            <div>
              Dont have an account?
              <button
                className="ml-1"
                onClick={() => setIsLoginOrRegister("register")}
              >
                <span className="underline underline-offset-auto hover:no-underline">
                  Register
                </span>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
