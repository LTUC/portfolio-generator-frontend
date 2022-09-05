import Image from 'next/image';


export default function Header() {
    return (
        <>
            <header>
                <nav className= "bg-gray-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
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
                        <div className="flex items-center lg:order-2">
                            <span className="self-center mr-3 font-semibold text-l whitespace-nowrap dark:text-white">Register</span>

                            <button href="#" className="btn">Log In</button>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}