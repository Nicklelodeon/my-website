

export const AboutMe = () => {
    return (
        <section id="aboutme" className="flex items-center p-6 bg-gray-100 dark:bg-gray-800">
            <div className="flex-shrink-0">
                <img src="path/to/your-picture.jpg" alt="Your Name" className="w-32 h-32 object-cover rounded-full border-4 border-blue-500" />
            </div>
            <div className="ml-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">About Me</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300 font-style: italic">
                    Hello! I'm Nicholas, a final year student in NUS! I am a passionate Software Engineer with experience in building full stack solutions leveraging on Machine Learning capabilities . I enjoy exercising and hunting for good food during my free time, and I'm always excited to learn new things and take on new challenges. Feel free to connect with me to learn more about my work and experiences.
                </p>
            </div>
        </section>
    )
}