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
    href: "https://www.youtube.com/channel/UCk1dX69iPze48_Pp-Ko_9Vw",
    icon: AiFillLinkedin,
  },
  {
    id: "2",
    href: "https://www.youtube.com/channel/UCk1dX69iPze48_Pp-Ko_9Vw",
    icon: AiFillGithub,
  },
  {
    id: "3",
    href: "https://www.youtube.com/channel/UCk1dX69iPze48_Pp-Ko_9Vw",
    icon: AiFillTwitterSquare,
  },
  {
    id: "4",
    href: "https://www.youtube.com/channel/UCk1dX69iPze48_Pp-Ko_9Vw",
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
