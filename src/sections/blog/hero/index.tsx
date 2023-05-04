import { BlogWrapper } from "@/components/blogWrapper";
import Quote from "@/components/quote";
import Header from "@/components/header";
import Button from "@/components/button";
import styles from "./hero.module.scss";
import Image from "next/image";
import ProfilePic from "@/assets/images/me.jpg";

export default function HeroSection(): JSX.Element {
  return (
    <BlogWrapper contentClassname={styles.heroContent}>
      <div className={styles.introduction}>
        <Header
          className={"max-w-prose"}
          heading="h1"
          typo="headline1"
          textDecorator="Hello!"
        >
          I’m Laura, Front-end Developer
        </Header>
        <Quote className={`${styles.aboutMe} max-w-prose`}>
          Hi! I&apos;m Laura, a frontend engineer who enjoys designing
          responsive layouts and building clean code. I&apos;m highly interested
          in UX/UI design, web accessibility and improving my skills as a
          frontend developer.
        </Quote>
        <div className={styles.rowAligned}>
          <Button
            href="mailto:devlowri@gmail.com"
            type="primary"
            icon="PaperPlane"
          >
            Let’s talk
          </Button>
          <Button
            type="secondary"
            href="https://github.com/devlowri/portfolio"
            icon="ArrowTopRight"
          >
            Portfolio
          </Button>
        </div>
        <div className={`${styles.rowAligned} ${styles.socialMedia}`}>
          <p className="body1">Check Out My</p>
          <Button
            href="https://github.com/devlowri"
            type="icononly"
            icon="Github"
            label="Link to my Github page"
          />
          <Button
            href="https://www.linkedin.com/in/laurajacas/"
            type="icononly"
            icon="Linkedin"
            label="Link to my Linkedin page"
          />
        </div>
      </div>
      <div className={styles.portrait}>
        <p className={`${styles.floatText} caption`}>
          “ Yes, I make colorful
          <br />
          boxes and much more! “
        </p>
        <div className={styles.styledPortrait}>
          <div className={styles.mask}>
            <Image className={styles.image} src={ProfilePic} alt="" />
          </div>
        </div>
      </div>
    </BlogWrapper>
  );
}
