import classnames from "classnames";
import HeroHead, { IHeroHead } from "./components/HeroHead";
import HeroBody, { IHeroBody } from "./components/HeroBody";
import HeroFoot, { IHeroFoot } from "./components/HeroFoot";
import Element, { ElementProps } from "../Element";
import "./hero.scss";
import { FC } from "react";
import { IColor } from "../modifiers/types";

type ISize = "small" | "medium" | "large" | "fullheight";

interface HeroProps extends ElementProps<"section"> {
  style?: any;
  color?: IColor;
  gradient?: boolean;
  size?: ISize;
  hasNavbar?: boolean;
}

export type IHero = FC<HeroProps>;

const Hero: IHero & {
  Head: IHeroHead;
  Body: IHeroBody;
  Foot: IHeroFoot;
} = ({
  className,
  as = "section",
  color,
  gradient,
  size,
  hasNavbar,
  ...props
}) => {
  return (
    <div
      {...props}
      // as={as}
      className={classnames("hero", className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        "is-bold": gradient,
        "is-fullheight-with-navbar": hasNavbar,
      })}
    />
  );
};

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Foot = HeroFoot;
export default Hero;
