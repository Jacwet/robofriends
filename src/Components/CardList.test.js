import React from "react";
import {render, screen} from '@testing-library/react'
import CardList from "./CardList";

const user = [{
  id: 1,
  name: "Jane Doe",
  email: "aaa@aaa.com"
}]

describe("CardList test", () => {
  const renderCardList = () =>
    render(
    < CardList
        robots={user}
    />
    )
  
  test("renders CardList", () => {
    renderCardList();
    expect(screen.getByText(/Jane Doe/)).toBeInTheDokument
  })
})

