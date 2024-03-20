import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestMenu from "../components/RestMenu";
import MENU_DATA from "../Mock Data/RESTCARD_MOCK_DATA.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

it("Should render the RestMenu container", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestMenu />
      </Provider>
    );
  });
});
