import { shallow } from "enzyme";
import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

describe("Home", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders the home page", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("[data-test='home-page']")).toHaveLength(1);
  });
});

describe("About", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders the about page", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find("[data-test='about-page']")).toHaveLength(1);
  });
});

describe("Contact", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders the contact page", () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find("[data-test='contact-page']")).toHaveLength(1);
  });
});
