import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../public/redux/store";
import { Toaster } from "react-hot-toast";
import PageProvider from "../public/components/context/usercontext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PageProvider>
          <ChakraProvider>
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{ duration: 3000 }}
            />
            <Component {...pageProps} />
          </ChakraProvider>
        </PageProvider>
      </PersistGate>
    </Provider>
  );
}
