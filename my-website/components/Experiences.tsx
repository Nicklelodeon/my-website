import { JobExperiences } from "./constants"
import { ExperienceBox } from "./ExperienceBox"


export const Experiences = () => {
    return (
        <div id="Experiences">
            <div className="font-bold text-xl underline pb-4">
                Internship Experiences
            </div>


            {JobExperiences.map(x => {
                return (
                    <ExperienceBox
                        {...x} />
                )
            })}
        </div>
    )
}