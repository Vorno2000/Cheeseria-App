import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheeseCard from "../Components/CheeseCard";
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
    },
  ];

  const cheddar = cheeses.find((cheese) => cheese.name === "Cheddar");
  const brie = cheeses.find((cheese) => cheese.name === "Brie");

  it("renders cheese details correctly", () => {
    const { getByText } = render(<CheeseCard cheese={cheddar} />);
    expect(getByText("Cheddar")).toBeInTheDocument();
    expect(getByText("Sharp and flavourful")).toBeInTheDocument();
    expect(getByText("Price per Kg: $10")).toBeInTheDocument();
    expect(getByText("Colour: Yellow")).toBeInTheDocument();
  });

  it("renders default image if provided image is an empty string", async () => {
    const noImgBrie = { ...brie, img: "" };
    const { getByAltText } = render(<CheeseCard cheese={noImgBrie} />);
    const image = getByAltText(noImgBrie.name);
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("/Default.jpg");
  });

  it("renders default image if provided image is null", () => {
    const noImgBrie = { ...brie, img: null };
    const { getByAltText } = render(<CheeseCard cheese={noImgBrie} />);
    const image = getByAltText(noImgBrie.name);
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("/Default.jpg");
  });
});
