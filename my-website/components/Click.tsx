'use client'

import { Button } from "@chakra-ui/react";
import { ClickProps } from "./constants";


export const Click:React.FC<ClickProps> = ({scrollId, content}) => {
    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <Button onClick={() => scrollToElement(scrollId)}>
            <div>
                {content}
            </div>
        </Button>

    )
}