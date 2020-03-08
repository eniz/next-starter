import App from "next/app";
import { withRouter } from "next/router";

class GetirApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return <Component router={router} {...pageProps} />;
  }
}

export default withRouter(GetirApp);
