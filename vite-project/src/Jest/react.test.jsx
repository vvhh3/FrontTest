import { render, screen, fireEvent } from "@testing-library/react";
import UseRef from "../Components/hooks/UseRef";
import { MemoryRouter } from "react-router-dom";

test("кнопка клика работает", () => {
   render(
    <MemoryRouter>
      <UseRef />
    </MemoryRouter>
  );

  const button = screen.getByText("+ 1 ref");

  fireEvent.click(button);

});