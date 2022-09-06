import { useAuth } from '../contexts/Auth';


export default function Login() {
    const { login } = useAuth()
    function handleLogin(e) {
        e.preventDefault();
        login(e.target.email.value, e.target.password.value);
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <input name="email" placeholder="Enter Email" type="email" />

                <input name="password" placeholder="Enter Password" type="password" />
                <button> Login</button>
            </form>
        </>
    )
}