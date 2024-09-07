import { Card, Kbd, CardBody, CardFooter, Stack, Button, Heading, Text, Image, Code, UnorderedList, ListItem, Divider } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react';
import { ExperienceBoxProps } from './constants';



export const ExperienceBox: React.FC<ExperienceBoxProps> = ({ imgSrc,
    alt,
    imgLink,
    company,
    jobTitle,
    techStack,
    experience }) => {
    return (
        <div className="pb-6">
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Link href={imgLink} className='flex items-center justify-center min-h-[200px]'>
                    <Image
                        boxSize="200px"
                        objectFit="cover"
                        borderRadius="md"
                        minW="200px"
                        src={imgSrc}
                        alt={alt}
                    />
                </Link>
                <Stack>
                    <CardBody>
                        <Heading size='md'>{company}</Heading>

                        <Code className="mt-2">
                            {jobTitle}
                        </Code>

                        <div className="flex space-x-2 mt-2">
                            <div className="flex flex-wrap justify-between gap-2">

                                {techStack.map((x, idx) => {
                                    return (
                                        <Kbd className="px-2" key={idx}>
                                            {x}
                                        </Kbd>
                                    )
                                })}
                            </div>
                        </div>
                        <UnorderedList className='mt-2'>
                            {experience.map((x, idx) => {
                                return (
                                    <ListItem key={idx}>
                                        {x}
                                    </ListItem>
                                )
                            })}
                        </UnorderedList>
                    </CardBody>
                </Stack>
            </Card>
        </div>
    )
}