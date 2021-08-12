import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BoardProvider } from "../../context/boardContext";
import { AddTodoForm } from "./AddTodoForm";

//TODO: Czy powinienem zadbać o typy w testach? Czy nie koniecznie?
//      Czy da się zrobić ten provider lepiej i czy zawsze warto to robić.
/*
function renderWithProviders(ui, {theme = 'light', ...options} = {}) {
  const Wrapper = ({children}) => (
    <ThemeProvider value={[theme, () => {}]}>{children}</ThemeProvider>
  )
  return render(ui, {wrapper: Wrapper, ...options})
}
*/
const renderWithProvider = (ui: any) => {
  const Wrapper = ({ children }: any) => (
    <BoardProvider>{children}</BoardProvider>
  );
  return render(ui, { wrapper: Wrapper });
};

describe("AddTodoForm component", () => {
  it("adds new project", () => {
    const handleSubmit = jest.fn();
    renderWithProvider(<AddTodoForm columnId="testId" />);

    const OpenFormBtn = screen.getByRole("button", { name: /Add project/i });
    userEvent.click(OpenFormBtn);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    //TODO: Jak działa ten act i w jaki sposób to zasymulować. Może masz jakieś real world examples?
    act(() => {
      userEvent.type(input, "Example Project");
    });
    screen.debug();
  });

  it("handle closing the form", () => {
    renderWithProvider(<AddTodoForm columnId="testId" />);

    const OpenFormBtn = screen.getByRole("button", { name: /Add project/i });
    userEvent.click(OpenFormBtn);

    const closeBtn = screen.getByRole("button", { name: /close card/i });
    const input = screen.getByRole("textbox");
    expect(closeBtn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    userEvent.click(closeBtn);
    expect(closeBtn).not.toBeInTheDocument();
    expect(input).not.toBeInTheDocument();
  });
});
