import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";
import GoToStore from "./GoToStore";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <div className="hidden sm:block">
        <Routes />
      </div>
      <div className="sm:hidden">
        <GoToStore />
      </div>
    </UserContextProvider>
  );
}

export default App;
