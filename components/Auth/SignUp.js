import { useAuth } from '../../contexts/Auth';
import InputLayout from '../Forms/InputLayout'

export default function Signup() {

    const { signup } = useAuth();
    console.log("I am in the sign up page");

    function handleSignup(e) {
        e.preventDefault();
        let userInput = {
            email: e.target.email.value,
            password: e.target.password.value,
            first_name: e.target.firstname.value,
            last_name: e.target.lastname.value
        }
        console.log(userInput);
        signup(userInput);
    }
    return (
        <>
            <div className="bg-gray-500">
                <form onSubmit={handleSignup}>
                    <div className="flex flex-col ">
                        < InputLayout label="Email">
                            <input name="email" placeholder="Enter Email" type="email" />
                        </InputLayout>
                        <input name="firstname" placeholder="Enter First Name" type="text" />
                        <input name="lastname" placeholder="Enter Last Name" type="text" />
                        <input name="password" placeholder="Enter Password" type="password" />
                        <button className="btn"> Sign Up</button>
                    </div>
                </form>
                <p>Already have an account?
                    Login
                </p>

            </div>

        </>
    )
}