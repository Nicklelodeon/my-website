import { FTJobExperiences } from "./constants";
import { ExperienceBox } from "./ExperienceBox";

export const FTExperiences = () => {
  return (
    <div id="FTExperiences">
      <div className="font-bold text-xl pt-4 pb-2">
        Full Time Experiences
      </div>

      {FTJobExperiences.map((job, idx) => {
        return <ExperienceBox key={idx} {...job} />;
      })}
    </div>
  );
};
