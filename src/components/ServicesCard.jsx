import { ExpandableCard } from "./ui/expandable-card";

export default function ServicesCard({ title, description, details , image}) {
  return (
    <ExpandableCard
      title={title}
      src={image}
      description={description}
      classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-black [&_h4]:font-medium"
    >
      {details.map((point, index) => (
        <p key={index} className="mb-2">• {point}</p>
      ))}
    </ExpandableCard>
  );
}
