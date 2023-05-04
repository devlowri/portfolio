import Icon from "../icon";
import type { Icons } from "../icon/types";
import styles from "./button.module.scss";
import Link from "next/link";

interface ButtonProps extends Partial<Icons> {
  children?: string;
  type: "primary" | "secondary" | "icononly";
  onClick?: () => void;
  href?: string;
  label?: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  const { children, type, icon, onClick, href = "", label = "" } = props;
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
      aria-label={label}
    >
      <span>{children}</span>
      {icon != null ? <Icon icon={icon} className={styles.icon} /> : null}
    </Tag>
  );
}
