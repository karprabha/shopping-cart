import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App component", () => {
    it("renders correct heading", () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(
            screen.getByRole("heading", { name: "CraftHaven" }).textContent
        ).toMatch(/CraftHaven/i);
    });
});
