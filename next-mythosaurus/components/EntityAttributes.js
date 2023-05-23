import Image from "next/image";
const EntityAttributes = ({ entityType, entity }) => {
  const renderAttribute = (label, value) => {
    return (
      <div>
        <strong>{label}:</strong> {value}
      </div>
    );
  };

  const renderAttributes = () => {
    switch (entityType) {
      case "gods":
        return (
          <>
            <h1>{entity.name}</h1>
            <Image
              src={entity.images[0]}
              alt={entity.name}
              width={300}
              height={300}
            />
            {renderAttribute("Mythology", entity.mythology)}
            {renderAttribute("Aliases", entity.aliases.join(", "))}
            {renderAttribute("Domain", entity.domain.join(", "))}
            {renderAttribute("Symbols", entity.symbols.join(", "))}
            {renderAttribute("Parents", entity.parents.join(", "))}
            {renderAttribute("Children", entity.children.join(", "))}
            {renderAttribute("Description", entity.description)}
          </>
        );
      case "locations":
        return <>{/* ...location attributes */}</>;
      case "events":
        return <>{/* ...event attributes */}</>;
      case "heroes":
        return (
          <>
            <h1>{entity.name}</h1>
            <Image
              src={entity.images[0]}
              alt={entity.name}
              width={300}
              height={300}
            />
            {renderAttribute("Mythology", entity.mythology)}
            {renderAttribute("Parents", entity.parents.join(", "))}
            {renderAttribute("Quests", entity.quests.join(", "))}
            {renderAttribute("Powers", entity.powers.join(", "))}
            {renderAttribute("Children", entity.children.join(", "))}
            {renderAttribute("Description", entity.description)}
          </>
        );
      case "giants":
        return (
          <>
            <h1>{entity.name}</h1>
            <Image
              src={entity.images[0]}
              alt={entity.name}
              width={300}
              height={300}
            />
            {renderAttribute("Mythology", entity.mythology)}
            {renderAttribute(
              "Notable Actions",
              entity.notable_actions.join(", ")
            )}
            {renderAttribute("Enemies", entity.enemies.join(", "))}
            {renderAttribute("Description", entity.description)}
          </>
        );
      default:
        return null;
    }
  };

  return <>{renderAttributes()}</>;
};

export default EntityAttributes;
