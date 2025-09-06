import { gridServicesItems } from "@/data";
import { BentoGridService, BentoGridServiceItem } from "./ui/BentoGridService";

const GridServices = () => {
  return (
    <section
      id="about"
      aria-label="Services de comptabilité et gestion en Tunisie"
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Solutions complètes en comptabilité, finance, RH, audit et juridique
            pour les entreprises tunisiennes
          </p>
        </div>
        <BentoGridService className="w-full">
          {gridServicesItems.map((item, i) => (
            <BentoGridServiceItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className="h-full"
              titleClassName="text-center"
              headingLevel={item.headingLevel}
              metaDescription={item.metaDescription}
              onClick={() => {
                // TODO: Add navigation to service detail page
                console.log(`Navigate to service: ${item.title}`);
              }}
            />
          ))}
        </BentoGridService>
      </div>
    </section>
  );
};

export default GridServices;
