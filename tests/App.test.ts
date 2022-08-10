import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import event from "@testing-library/user-event";
import App from "./src/App.vue";

describe("Render app correctly", () => {
  test('Render button', async () => {
    render(App);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("count is 0");

    await event.click(button);

    expect(button).toHaveTextContent("count is 1");
  });
});
