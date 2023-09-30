import React from "react";
import { Page } from "../../components";

const NotFound = () => {
  return (
    <Page>
      <div className="not-found">
        <h1>404</h1>
        <p>Page not found</p>
        <img src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" alt="404 Not Found" />
      </div>
    </Page>
  );
}