import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders TxTag application", () => {

  render(<App />);

  const titleElement = screen.getByText(/TxTag/i);

  expect(titleElement).toBeInTheDocument();

});
