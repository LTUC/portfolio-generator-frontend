import Image from 'next/image';
import { useAuth } from '../../contexts/Auth';
import { useRouter } from 'next/router'

export default function Hero() {
    const { tokens } = useAuth();
    const router = useRouter()
    function handleRedirect() {
    
        if (tokens) {
            router.push("/gernerator")
        } else {
            router.push('/login')
        }
    }

    return (
        <>
            <section className="bg-gray-100 dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 font-sans text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Portfolio Generator</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Open-source project used to generate static portfolio website for software/ web developers</p>
                        <p onClick={handleRedirect}> Get Started </p>

                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex">
                        <Image
                            src="/images/hero.png"
                            alt="hero image"
                            // layout="fill"
                            width={700}
                            height={400}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}