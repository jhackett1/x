import React from "react"
import renderer from "react-test-renderer"
import LocationField from "./index"

it("renders correctly", () => {
    const tree = renderer
        .create(<LocationField/>)
        .toJSON()
    expect(tree).toMatchSnapshot()
})