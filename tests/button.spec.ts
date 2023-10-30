// @vitest-environment happy-dom
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Button from "../src/components/Button.vue";

describe("Test Button", () => {
  it("testing default props", async () => {
    expect(Button.props.typeBtn.default).toBe("primary");
    expect(Button.props.type.default).toBe("button");
    expect(Button.props.size.default).toBe("large");
  });

  it("button should exists", () => {
    const testOnClick = () => {
      console.log("prueba");
    };

    const wrapper = mount(Button, {
      props: {
        onClick: testOnClick,
      },
    });

    expect(wrapper.find("button").exists()).toBe(true);
  });
});
