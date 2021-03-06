import app from "apprun";
import { compose, tokens } from "classy-ui";

export const NavBar = ({ id, label }, children) => {
  const navbarFixedTop = compose(
    tokens.position.FIXED,
    tokens.top.NONE,
    tokens.width.FULL,
    tokens.borderBottomStyle.SOLID,
    tokens.borderBottomWidth.WIDTH_1,
    tokens.borderBottomColor.GRAY_500
  );
  const navClass = compose(
    navbarFixedTop,
    tokens.display.FLEX,
    tokens.alignItems.CENTER,
    tokens.backgroundColor.GRAY_200,
    tokens.paddingTop.SPACING_1,
    tokens.paddingRight.SPACING_4,
    tokens.paddingRight.SPACING_2.sm,
    tokens.paddingBottom.SPACING_1,
    tokens.paddingLeft.SPACING_8,
    tokens.paddingLeft.SPACING_4.sm,
    tokens.zIndex.Z_10
  );
  const aClass = compose(
    tokens.display.INLINE_BLOCK,
    tokens.color.GRAY_800,
    tokens.fontSize.EXTRA_LARGE_2,
    tokens.textDecorationLine.NONE,
    tokens.whitespace.NO_WRAP,
    tokens.paddingRight.SPACING_2
  );
  const ulClass = compose(
    tokens.display.FLEX,
    tokens.flexDirection.ROW,
    tokens.listStyleType.NONE,
    tokens.paddingLeft.NONE,
    tokens.marginTop.NONE,
    tokens.marginBottom.NONE
  );
  return <nav id={id} class={navClass}>
    <a class={aClass} href="#">{label}</a>
    <ul class={ulClass}>
      {children}
    </ul>
  </nav>
}

export const NavItem = (props) => {
  const { label, href } = props;
  const aClass = compose(
    tokens.display.BLOCK,
    tokens.color.GRAY_600,
    //"font-family-roboto",
    tokens.textDecorationLine.NONE,
    tokens.paddingTop.SPACING_2,
    tokens.paddingRight.SPACING_2,
    tokens.paddingBottom.SPACING_2,
    tokens.paddingLeft.SPACING_2
  );
  return <li class={props.active ? "active" : null}>
    <a class={aClass} href={href}>{label}</a>
  </li>
}
