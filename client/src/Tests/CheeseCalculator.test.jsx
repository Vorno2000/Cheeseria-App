import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheeseCalculator from "../Components/CheeseCalculator";
import { it, expect, describe } from "vitest";

describe("CheeseCalculator component", () => {
  const cheeses = [
    {
      name: "Cheddar",
      description: "Sharp and flavourful",
      pricePerKg: 10,
      colour: "Yellow",
      img: "/Cheddar.jpg",
    },
    {
      name: "Brie",
      description: "Soft and creamy",
      pricePerKg: 14,
      colour: "Pale Yellow",
      img: "/Brie.jpg",
    },
  ];

  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(
      <CheeseCalculator cheeses={cheeses} />
    );
    expect(getByText("Cheese Calculator")).toBeInTheDocument();
    expect(getByLabelText("Select Cheese:")).toBeInTheDocument();
    expect(getByLabelText("Enter Weight (kg):")).toBeInTheDocument();
    expect(getByText("Calculate Total Cost")).toBeInTheDocument();
  });

  it("displays error message when no cheese is selected", () => {
    const { getByText } = render(<CheeseCalculator cheeses={cheeses} />);
    fireEvent.click(getByText("Calculate Total Cost"));
    expect(getByText("Please select a cheese.")).toBeInTheDocument();
  });

  it(`weight displays numbers when non numbers are entered`, () => {
    const { getByText, getByLabelText } = render(
      <CheeseCalculator cheeses={cheeses} />
    );
    fireEvent.change(getByLabelText("Select Cheese:"), {
      target: { value: "Brie" },
    });
    fireEvent.change(getByLabelText("Enter Weight (kg):"), {
      target: { value: "abc+=-@#$%^&*!" },
    });
    fireEvent.click(getByText("Calculate Total Cost"));
    expect(getByLabelText("Enter Weight (kg):").value).toEqual("0");
  });

  it("calculates total cost correctly", () => {
    const { getByText, getByLabelText } = render(
      <CheeseCalculator cheeses={cheeses} />
    );
    fireEvent.change(getByLabelText("Select Cheese:"), {
      target: { value: "Cheddar" },
    });
    fireEvent.change(getByLabelText("Enter Weight (kg):"), {
      target: { value: "2" },
    });
    fireEvent.click(getByText("Calculate Total Cost"));

    expect(getByText("$20.00 AUD")).toBeInTheDocument();
  });
});
