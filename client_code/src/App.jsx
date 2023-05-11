import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "src/scenes/admin/Admin";
import Breakdown from "src/scenes/breakdown/Breakdown";
import Customers from "src/scenes/customers/Customers";
import Daily from "src/scenes/daily/Daily";
import Dashboard from "src/scenes/dashboard/Dashboard";
import Geography from "src/scenes/geography/Geography";
import Layout from "src/scenes/layout/Layout";
import MonthlyChart from "src/scenes/monthlyChart/MonthlyChart";
import Overview from "src/scenes/overview/Overview";
import Performance from "src/scenes/performance/Performance";
import Products from "src/scenes/products/Products";
import Transactions from "src/scenes/transactions/Transactions";
import { themeSettings } from "src/theme";

function App() {
  const mode = useSelector((state) => state.global.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Navigate to={"/dashboard"} replace />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<MonthlyChart />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
