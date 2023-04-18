import Link from "next/link";
import { useState } from "react";
import styles from "./EntityDropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const EntityDropdown = ({ entityType, entities, mythologyId }) => {
  const [expanded, setExpanded] = useState(false);
  const title = entityType.charAt(0).toUpperCase() + entityType.slice(1);

  if (entities.length === 0) {
    return null;
  }

  return (
    <div className={styles.dropdown}>
      <h2
        className={styles.dropdownTitle}
        onClick={() => setExpanded(!expanded)}
      >
        {title}
        <FontAwesomeIcon
          icon={expanded ? faChevronUp : faChevronDown}
          className={styles.arrow}
        />
      </h2>
      <ul className={`${styles.entityList} ${expanded ? styles.showList : ""}`}>
        {entities.slice(0, 5).map((entity) => (
          <li key={entity._id} className={styles.entityListItem}>
            <Link
              href={`/mythologies/${mythologyId}/${entityType}/${entity._id}`}
            >
              {entity.name}
            </Link>
          </li>
        ))}
        {entities.length > 1 &&
          expanded && ( // Add the "expanded" condition here
            <li className={styles.seeAll}>
              <Link href={`/mythologies/${mythologyId}/${entityType}`}>
                See all {title.toLowerCase()}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.seeAllArrow}
                />
              </Link>
            </li>
          )}
      </ul>
    </div>
  );
};

export default EntityDropdown;
