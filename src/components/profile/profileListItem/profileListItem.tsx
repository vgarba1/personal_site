import React from "react";
import styles from "../../../../styles/profile.module.css";

interface Props {
  Icon?: React.ComponentType<{className: string}>;
  src?: string;
  text: string;
  href: string;
}

export const ProfileListItem = ({
  Icon,
  text,
  href,
  src
}: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={styles.profileListitemWrapper}
  >
    {
      Icon && <Icon className={styles.profileListitemIcon}/>
    }
    {
      src && <img src={src} className={styles.profileListitemIcon}/>
    }
    <p className={styles.profileListitemText}>
      {text}
    </p>
  </a>
);

export default ProfileListItem;