import styles from "./quote.module.scss";

interface QuoteProps {
  children?: string | React.ReactNode;
  typo?: string;
  className?: string;
}
export default function Quote(props: QuoteProps): JSX.Element {
  const { children, typo = "body1", className = "" } = props;
  return <p className={`${styles.quote} ${typo} ${className}`}>{children}</p>;
}
