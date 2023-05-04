import styles from "./blogwrapper.module.scss";

interface BlogWrapperProps {
  children?: React.ReactNode;
  wrapperClassname?: string;
  contentClassname?: string;
}

export function BlogWrapper(props: BlogWrapperProps): JSX.Element {
  const { children, wrapperClassname = "", contentClassname = "" } = props;

  return (
    <div className={`${styles.blogWrapper} ${wrapperClassname}`}>
      <div className={`${styles.blogContent} ${contentClassname}`}>
        {children}
      </div>
    </div>
  );
}
