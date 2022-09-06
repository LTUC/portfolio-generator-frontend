import { useAuth } from '../contexts/Auth';

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
            <form onSubmit={handleSignup}>
                <input name="email" placeholder="Enter Email" type="email" />
                <input name="firstname" placeholder="Enter First Name" type="text" />
                <input name="lastname" placeholder="Enter Last Name" type="text" />
                <input name="password" placeholder="Enter Password" type="password" />
                <button> Sign Up</button>
            </form>
            <p>Already have an account?
                Login
            </p>
        </>
    )
}