import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("should have Docs text", () => {
  render(<Home />); //ARANGE

  const myElem = screen.getByText("Docs"); // ACT

  expect(myElem).toBeInTheDocument(); // ASSERT
});
