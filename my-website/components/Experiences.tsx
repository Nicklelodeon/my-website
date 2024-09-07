import { JobExperiences } from "./constants";
import { ExperienceBox } from "./ExperienceBox";

export const Experiences = () => {
  return (
    <div id="Experiences">
      <div className="font-bold text-xl underline pt-4 pb-2">
        Internship Experiences
      </div>

      {JobExperiences.map((job, idx) => {
        return <ExperienceBox key={idx} {...job} />;
      })}
    </div>
  );
};
