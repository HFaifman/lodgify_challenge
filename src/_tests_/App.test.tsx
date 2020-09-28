import React from "react";
import { render, waitForDomChange } from "@testing-library/react";
import App from "../App";
import * as MOCK from "./mocks_objects/mocks_objects";
import * as TEXTS from "../commons/constants/texts";

test("Loads spinner on first load", async () => {
  global.fetch = jest.fn().mockImplementation(() => []);
  const { queryByTestId } = render(<App />);
  const Spinner = queryByTestId("Spinner");
  expect(Spinner).toBeInTheDocument();
  await waitForDomChange();
});

test("Loads error when fetch fails and doesn´t load spinner", async () => {
  global.fetch = jest.fn().mockImplementation(() => Error);
  const { getByText, queryByTestId } = render(<App />);
  await waitForDomChange();
  expect(queryByTestId("Spinner")).toBeFalsy();
  expect(getByText(TEXTS.FETCH_ERROR_TEXT)).toBeInTheDocument();
});

test("Loads booked house", async () => {
  const house = MOCK.MOCK_RESPONSE_BOOKED;
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => house }));
  const { getByText, getByAltText } = render(<App />);
  await waitForDomChange();
  house.map((house) => {
    const tag = getByText(TEXTS.TAG.BOOKED);
    const bookedText = getByText(`Booked for ${house.booked} days`);
    const houseName = getByText(house.name);
    const placeholderImage = getByAltText("placeholder");
    const image = getByAltText(house.name);
    const houseID = getByText(`Id: ${house.id}`);
    expect(tag).toBeInTheDocument();
    expect(houseName).toBeInTheDocument();
    expect(placeholderImage).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(bookedText).toBeInTheDocument();
    return expect(houseID).toBeInTheDocument();
  });
});

test("Loads unaivalable house", async () => {
  const house = MOCK.MOCK_RESPONSE_NOT_BOOKABLE;
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => house }));
  const { getByText, getByAltText, queryByText } = render(<App />);
  await waitForDomChange();
  house.map((house) => {
    const tag = getByText(TEXTS.TAG.UNAVAILABLE);
    const bookedText = queryByText(`Booked for ${house.booked} days`);
    const houseName = getByText(house.name);
    const placeholderImage = getByAltText("placeholder");
    const image = getByAltText(house.name);
    const houseID = getByText(`Id: ${house.id}`);
    const button = getByText(TEXTS.BUTTON.NOT_BOOKABLE);
    expect(tag).toBeInTheDocument();
    expect(houseName).toBeInTheDocument();
    expect(placeholderImage).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(bookedText).toBeFalsy();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    return expect(houseID).toBeInTheDocument();
  });
});

test("Loads available house", async () => {
  const house = MOCK.MOCK_RESPONSE_BOOKABLE;
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => house }));
  const { getByText, getByAltText, queryByText } = render(<App />);
  await waitForDomChange();
  house.map((house) => {
    const tag = getByText(TEXTS.TAG.AVAILABLE);
    const bookedText = queryByText(`Booked for ${house.booked} days`);
    const houseName = getByText(house.name);
    const placeholderImage = getByAltText("placeholder");
    const image = getByAltText(house.name);
    const houseID = getByText(`Id: ${house.id}`);
    const button = getByText(TEXTS.BUTTON.BOOKABLE);
    expect(tag).toBeInTheDocument();
    expect(houseName).toBeInTheDocument();
    expect(placeholderImage).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(bookedText).toBeFalsy();
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    return expect(houseID).toBeInTheDocument();
  });
});
