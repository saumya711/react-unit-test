import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()

describe("AddInput", () => {
  it('should render same text passed into title prop', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type in input', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go Gricery Shop"} })
    expect(inputElement.value).toBe("Go Gricery Shop");
  });

  it('should have empty input when add button is clicked', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i})
    fireEvent.change(inputElement, { target: { value: "Go Gricery Shop"} })
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("");
  });
})