import SocialLink from "@components/SocialLink";
import classNames from "classnames";

import { SVG, HREF } from "./const";
import styles from "./SocialLinksBlock.module.scss";

const SocialLinksBlock = () => {
  return (
    <div className={classNames(styles["social-link-block"])}>
      <SocialLink href={HREF.instagram} svg={SVG.instagram} />
      <SocialLink href={HREF.telegram} svg={SVG.telegram} />
      <SocialLink href={HREF.youtube} svg={SVG.youtube} />
      <SocialLink href={HREF.vk} svg={SVG.vk} />
    </div>
  );
};
export default SocialLinksBlock;
