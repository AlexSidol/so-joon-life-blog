import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

import ScreenEgg from "../ScreenEgg"; //щоб іконки виїзжали збоку

const socialNetworks = [
  {
    id: "1",
    href: "https://www.linkedin.com/in/alesia-sidolaka/",
    icon: AiFillLinkedin,
  },
  {
    id: "2",
    href: "https://github.com/AlexSidol",
    icon: AiFillGithub,
  },
  {
    id: "3",
    href: "https://twitter.com/asidolaka_sid",
    icon: AiFillTwitterSquare,
  },
  {
    id: "4",
    href: "https://www.instagram.com/p/BorbODyj7HrmaU9-tpQMWYj_0Eeqy4t9SuAm180/",
    icon: AiFillInstagram,
  },
];

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg type="left">
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map(({ id, href, icon }) => (
          <li key={id} className={styles.listItem}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={styles.listLink}
            >
              {React.createElement(icon, {
                color: "black",
                size: "50",
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
