import { useState } from "react";
import Header from "./components/Header";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authView, setAuthView] = useState("login");

  function handleAuthSuccess({ user, token }) {
    setUser(user);
    setToken(token);
  }
  function handleLogout() {
    setUser(null);
    setToken(null);
  }

  return (
    <div className="container text-center py-4">
      <Header user={user} onLogout={handleLogout} />

      {user && token ? (
        <TaskList token={token} />
      ) : authView === "login" ? (
        <LoginForm onAuthSuccess={handleAuthSuccess} />
      ) : (
        <RegisterForm onAuthSuccess={handleAuthSuccess} />
      )}

      {!user && (
        <button
          class="btn btn-primary m-3"
          onClick={() =>
            setAuthView(authView === "login" ? "register" : "login")
          }
        >
          {authView === "login"
            ? "Need an account? Register"
            : "Already have an account? Log in"}
        </button>
      )}
      <Footer />
    </div>
  );
}

export default App;
