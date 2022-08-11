import Login from "./Pages/Login";
import { useAuthState } from "./Context/auth-context";
import Dashboard from "./Pages/Dashboard";

function App() {
  const { token } = useAuthState();
  return <>{token ? <Dashboard /> : <Login />}</>;
}

export default App;
