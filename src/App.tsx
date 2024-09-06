import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import i18n from "./locales/i18n";
import { RootState } from "./store/store";
import { theme } from "./theme";

const App = () => {
  const language = useSelector((state: RootState) => state.locale.language);
  
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <ModalsProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;