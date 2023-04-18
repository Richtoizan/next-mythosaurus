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
              src={entity.image}
              alt={entity.name}
              width={300} // Set the desired width
              height={300} // Set the desired height
            />
            {renderAttribute("Mythology", entity.mythology)}
            {renderAttribute("Aliases", entity.aliases.join(", "))}
            {renderAttribute("Domain", entity.domain.join(", "))}
            {renderAttribute("Symbols", entity.symbols.join(", "))}
            {renderAttribute("Parents", entity.parents.join(", "))}
            {renderAttribute("Children", entity.children.join(", "))}
            {renderAttribute("Description", entity.description)}

            {/* ...other god attributes */}
          </>
        );
      case "location":
        return <>{/* ...location attributes */}</>;
      case "event":
        return <>{/* ...event attributes */}</>;
      default:
        return null;
    }
  };

  return <>{renderAttributes()}</>;
};

export default EntityAttributes;
