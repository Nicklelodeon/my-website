'use client'

import { ClickProps } from "./constants";


export const Click:React.FC<ClickProps> = ({scrollId, content}) => {
    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <button onClick={() => scrollToElement(scrollId)}>
            <div className="block py-2 px-3 md: px-0 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                {content}
            </div>
        </button>

    )
}