import Icon from "../icon";
import type { Icons } from "../icon/types";
import styles from "./button.module.scss";
import Link from "next/link";

interface ButtonProps extends Partial<Icons> {
  children?: string;
  type: "primary" | "secondary" | "icononly";
  onClick?: () => void;
  href?: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  const { children, type, icon, onClick, href = "" } = props;
  const buttonStyle = {
    primary: `${styles.button} ${styles.primary}`,
    secondary: `${styles.button} ${styles.secondary}`,
    icononly: styles.icononly,
  };

  const Tag = href !== "" ? Link : "button";
  return (
    <Tag
      onClick={onClick}
      className={`${buttonStyle[type]} button`}
      href={href}
      target="_blank"
    >
      <span>{children}</span>
      {icon != null ? <Icon icon={icon} className={styles.icon} /> : null}
    </Tag>
  );
}
