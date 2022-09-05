import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="https://github.com/LTUC" className="flex items-center">
                                <Image
                                    priority
                                    src="/images/logo.png"
                                    className="h-6 pt-3 mr-3 sm:h-9"
                                    height={100}
                                    width={250}
                                    alt="ASAC logo"
                                />
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a href="https://nextjs.org/" className="hover:underline">Next JS</a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a href="https://github.com/LTUC" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/WbwsvhPP" className="hover:underline">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Source Code</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a href="https://github.com/LTUC/portfolio-generator-frontend" className="hover:underline">Front End</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/LTUC/portfolio-generator-backend" className="hover:underline">Back End</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-center">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" className="hover:underline">ASAC Team™</a> Made with ❤
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}