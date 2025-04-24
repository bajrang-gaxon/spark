import ButtonComp from "./button";
import ButtonGroup from "./button-group";
import IconButton  from "./button-icon";

export type { ButtonGroupProps } from "./button-group";
export type { IconButtonProps as ButtonIconProps } from "./button-icon";
export type { ButtonProps } from "./button";

const Button = Object.assign(ButtonComp, {
    Group: ButtonGroup,
    Icon: IconButton,
});

export { Button, ButtonGroup, IconButton as ButtonIcon };


export default Button;