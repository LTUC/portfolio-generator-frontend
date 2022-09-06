import { useAuth } from "../../../contexts/Auth";
import Link from 'next/link'
import jwt_decode from 'jwt-decode'

export default function Final() {
    const { tokens } = useAuth();
    console.log("Coming form context", tokens, access, id)
    const access = jwt_decode(tokens.access);
    const id = access.user_id


    return (
        <div className="container md:mt-10">
            <div className="flex flex-col items-center">
                <div className="wrapper">
                    <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                    >
                        <circle
                            className="checkmark__circle"
                            cx="26"
                            cy="26"
                            r="25"
                            fill="none"
                        />
                        <path
                            className="checkmark__check"
                            fill="none"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                    </svg>
                </div>

                <div className="mt-3 text-xl font-semibold text-green-500 uppercase">
                    Congratulations!
                </div>
                <div className="text-lg font-semibold text-gray-500">
                    Your Account has been created.
                </div>
                <Link href={`user/${id}`}> See Result</Link>

                <a className="mt-10" href="/user/dashboard">
                    <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
                        Close
                    </button>
                </a>
            </div>
        </div>
    );
}
