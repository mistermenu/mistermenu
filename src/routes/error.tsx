import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorRoute() {
  const error = useRouteError();
  console.error(error);

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Page not found!</p>
      <p>
        <i>{error.statusText || error.data.message}</i>
      </p>
    </div>
  );
}
