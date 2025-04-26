import type { Meta } from "@storybook/react";
import { RiMapPinLine, RiSettings4Line, RiShoppingCart2Line } from "react-icons/ri";
import { Button, ButtonProps } from "../src";

const buttonDefaultProps: ButtonProps = {
  color: "default",
  variant: "filled",
  size: "md",
  radius: "md",
  loading: false,
  disabled: false,
  fullWidth: false,
  icon: undefined,
  iconPosition: "start",
  children: "Button",
  className: "",
  ripple: true,
};

const propLabels: any = {
  sm: "Small",
  md: "Medium",
  lg: "Large",
  full: "Full",
  none: "None",
};

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: buttonDefaultProps,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "success", "danger", "warning", "info"],
      },
      description: "Button color",
      table: {
        type: {
          summary: "string",
          detail: "default | primary | secondary | success | danger | warning | info",
        },
        defaultValue: {
          summary: "default",
          detail: "default",
        },
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["filled", "outlined", "ghost", "link"],
      },
      description: "Button variant",
      table: {
        type: {
          summary: "string",
          detail: "filled | outlined | ghost | link",
        },
        defaultValue: {
          summary: "filled",
          detail: "filled",
        },
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
      description: "Button size",
      table: {
        type: {
          summary: "string",
          detail: "sm | md | lg",
        },
        defaultValue: {
          summary: "md",
          detail: "md",
        },
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "full", "none"],
      },
      description: "Button radius",
      table: {
        type: {
          summary: "string",
          detail: "sm | md | lg | full | none",
        },
        defaultValue: {
          summary: "md",
          detail: "md",
        },
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
      description: "Button loading state",
      table: {
        type: {
          summary: "boolean",
          detail: "true | false",
        },
        defaultValue: {
          summary: "false",
          detail: "false",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "Button disabled state",
      table: {
        type: {
          summary: "boolean",
          detail: "true | false",
        },
        defaultValue: {
          summary: "false",
          detail: "false",
        },
      },
    },
    fullWidth: {
      layout: "fullscreen",
      control: {
        type: "boolean",
      },
      description: "Button full width state",
      table: {
        type: {
          summary: "boolean",
          detail: "true | false",
        },
        defaultValue: {
          summary: "false",
          detail: "false",
        },
      },
    },
    icon: {
      control: {
        type: "select",
        options: [],
      },
      description: "Button icon",
      table: {
        type: {
          summary: "react node",
          detail: "react node",
        },
        defaultValue: {
          summary: "undefined",
          detail: "undefined",
        },
      },
    },
    iconPosition: {
      control: {
        type: "radio",
        options: ["start", "end"],
      },
      description: "Button icon position",
      table: {
        type: {
          summary: "string",
          detail: "start | end",
        },
        defaultValue: {
          summary: "start",
          detail: "start",
        },
      },
    },
    ripple: {
      control: {
        type: "boolean",
      },
      description: "Button ripple effect",
      table: {
        type: {
          summary: "boolean",
          detail: "true | false",
        },
        defaultValue: {
          summary: "true",
          detail: "true",
        },
      },
    },
    className: {
      control: {
        type: "text",
      },
      description: "Button class name",
      table: {
        type: {
          summary: "string",
          detail: "string",
        },
        defaultValue: {
          summary: "",
          detail: "",
        },
      },
    },

    children: {
      control: {
        type: "text",
      },
      description: "Button text",
      table: {
        type: {
          summary: "string | react node",
          detail: "string | react node",
        },
        defaultValue: {
          summary: "Button",
          detail: "Button",
        },
      },
    },
    onClick: {
      control: {
        type: "function",
      },
      description: "Button click event",
      table: {
        type: {
          summary: "function",
          detail: "function",
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export const Default = {
  args: {
    ...buttonDefaultProps,
  },
};

export const Colors = {
  args: {
    ...buttonDefaultProps,
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex gap-4">
        {["default", "primary", "secondary", "success", "danger", "warning", "info"].map(
          (color) => (
            <Button key={color} {...args} color={color as ButtonProps["color"]}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ),
        )}
      </div>
    );
  },
};

export const Variants = {
  args: {
    ...buttonDefaultProps,
    color: "primary",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex gap-4">
        {["filled", "outlined", "ghost", "link"].map((variant) => (
          <Button key={variant} {...args} variant={variant as ButtonProps["variant"]}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        ))}
      </div>
    );
  },
};

export const Sizes = {
  args: {
    ...buttonDefaultProps,
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex gap-4">
        {["sm", "md", "lg"].map((size) => (
          <Button key={size} {...args} size={size as ButtonProps["size"]}>
            {propLabels[size]}
          </Button>
        ))}
      </div>
    );
  },
};

export const Radius = {
  args: {
    ...buttonDefaultProps,
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex gap-4">
        {["sm", "md", "lg", "full", "none"].map((radius) => (
          <Button key={radius} {...args} radius={radius as ButtonProps["radius"]}>
            {propLabels[radius]}
          </Button>
        ))}
      </div>
    );
  },
};

export const Loading = {
  args: {
    ...buttonDefaultProps,
    loading: true,
    color: "primary",
    children: "Loading Button",
  },
};

export const Disabled = {
  args: {
    ...buttonDefaultProps,
    disabled: true,
    color: "primary",
    children: "Disabled Button",
  },
};

export const FullWidth = {
  args: {
    ...buttonDefaultProps,
    fullWidth: true,
    color: "primary",
    children: "Full Width Button",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const WithIcon = {
  args: {
    ...buttonDefaultProps,
    color: "primary",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex gap-4">
        <Button {...args} icon={<RiMapPinLine size={24} />}>
          Location
        </Button>
        <Button {...args} icon={<RiSettings4Line size={24} />} variant="outlined">
          Settings
        </Button>
        <Button
          {...args}
          color="default"
          icon={<RiShoppingCart2Line size={24} />}
          iconPosition="end"
        >
          Buy Now
        </Button>
      </div>
    );
  },
};

export const DisabledAnimation = {
  args: {
    ...buttonDefaultProps,
    ripple: false,
    children: "Disabled Animation",
  },
};

export const WithClassName = {
  args: {
    className:
      "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
    size: "lg",
  },
};
