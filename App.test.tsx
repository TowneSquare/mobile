jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("expo-linking", () => {
  const module: typeof import("expo-linking") = {
    ...jest.requireActual("expo-linking"),
    createURL: jest.fn(),
  };

  return module;
});
jest.mock("@react-navigation/native");
jest.mock("@react-navigation/bottom-tabs", () => {
  const module: typeof import("@react-navigation/bottom-tabs") = {
    ...jest.requireActual("@react-navigation/bottom-tabs"),
    createBottomTabNavigator: jest.fn(),
  };

  return module;
});

import React from "react";
import { create, act } from "react-test-renderer";

import App from "./App";

beforeAll(() => {});

describe("<App /> Basics", () => {
  it("has 1 child", async () => {
    let tree: any;
    act(() => {
      tree = create(<App />);
    });
    expect(tree.toJSON().children.length).toBe(1);
  });
});
