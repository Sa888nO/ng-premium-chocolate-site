import SocialLink from "@components/SocialLink";
import classNames from "classnames";

import {headerSVG, footerSVG, HREF} from "./const";
import styles from "./SocialLinksBlock.module.scss";

const SocialLinksBlock = ({type}) => {
    let SVG;
    type === "header" ? (SVG = headerSVG) : (SVG = footerSVG);
    return (
        <div
            className={classNames(
                {
                    [styles["header-link-block"]]: type === "header",
                },
                {
                    [styles["footer-link-block"]]: type === "footer",
                }
            )}
        >
            <SocialLink
                href={HREF.telegram}
                svg={SVG.instagram}
            />
            <SocialLink
                href={HREF.instagram}
                svg={SVG.telegram}
            />
            <SocialLink
                href={HREF.youtube}
                svg={SVG.youtube}
            />
            <SocialLink
                href={HREF.vk}
                svg={SVG.vk}
            />
        </div>
    );
};
export default SocialLinksBlock;
