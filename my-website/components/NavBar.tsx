import Link from 'next/link';
import { Button } from './Button';


export const NavBar = () => {


    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Nicholas Cheong
                </span>
                <div
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Button scrollId="top" content="Home" />

                        </li>
                        <li>
                            <Button scrollId="aboutme" content="About Me" />
                        </li>
                        <li>
                            <Button scrollId="experiences" content="Internship Experiences" />
                        </li>
                        <li>
                            <Button scrollId="projects" content="Projects" />
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};