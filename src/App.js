import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <LoginPage style={styles.loginPage} />
            </PageLayout>
          }
        />
        <Route
          path="/registration"
          element={
            <PageLayout>
              <Registration />
            </PageLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PageLayout>
              <Dashboard />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const styles = {
  loginPage: {
    overflow: "hidden",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
};
