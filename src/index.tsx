import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { queryClient } from "./lib/queryClient";
import { persistor, store } from "./redux/store";

import "./styles/global.scss";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <AppRoutes />
          </Router>

          <Toaster position="top-center" reverseOrder={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
