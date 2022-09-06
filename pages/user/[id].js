import PortfolioHome from '../../components/Portfolio'
import { useRouter } from 'next/router'


export default function Portfolio() {
    const router = useRouter()

    console.log({ router });

    const { id } = router.query
    console.log("here", id)
    return (
        <>
            Hello
            <PortfolioHome id={id} />
        </>
    )
}