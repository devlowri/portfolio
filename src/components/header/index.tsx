import styles from "./header.module.scss";

interface HeaderProps {
  children?: string | React.ReactNode;
  textDecorator?: string;
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  srOnly?: boolean;
  typo?: string;
}

export default function Header(props: HeaderProps): JSX.Element {
  const {
    children,
    textDecorator,
    heading,
    className = "",
    srOnly = false,
    typo = "headline1",
  } = props;
  const Heading = heading;
  return (
    <Heading
      className={`${styles.header} ${className} ${typo} ${
        srOnly ? "sr-only" : ""
      }`}
      data-decorator={textDecorator}
    >
      {children}
    </Heading>
  );
}
