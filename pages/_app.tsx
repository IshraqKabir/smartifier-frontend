import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

import "../src/reset.css";
import "../src/style.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Executing the below commented code breaks some of the styles after render
    // i dont know why but i have a slight guess
    // Remove the server-side injected CSS.
    // const jssStyles = document.querySelector('#jss-server-side');
    // if (jssStyles) {
    // jssStyles.parentElement.removeChild(jssStyles);
    // }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="google-signin-client_id"
          content="540083931812-7bt05mqtrriog1f1kdpvotbvnr01iien.apps.googleusercontent.com"
        />

        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
