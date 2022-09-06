import PhoneInput from 'react-phone-number-input';
import axios from "axios";

import { useStepperContext } from "../../../contexts/StepperContext";
import { useAuth } from '../../../contexts/Auth';

import Layout from "../InputLayout";


export default function UserInfo() {

    const { userData, setUserData } = useStepperContext();
    const { isAuth, tokens, userInfo, refreshToken } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const saveUserInfo = async (e) => {
        e.preventDefault();
        const userInput = {
            first_name: e.target.firstname.value,
            last_name: e.target.lastname.value,
            phone: e.target.phone.value,
            portfolio_email: e.target.email.value,
            about: e.target.about.value,
            theme: e.target.theme.value,
        }
        console.log(userInfo);
        let isUserAuthenticated = isAuth();
        if (!isUserAuthenticated) {
            console.log("Token has Expired, loggin again");
            refreshToken()
            // return;
        }
        let config = {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
        console.log({ config })
        let res = await axios.patch(`https://portfolio-generator-401d09.herokuapp.com/api/v1/user/${userInfo}/`, userInput, config);
        console.log(res.data);
        if (res.status === 200) {
            alert("Data has been saved successfully!")
        }
    }
    return (
        <div className="flex flex-col ">
            <form onSubmit={saveUserInfo}>

                <Layout label="First Name">
                    <input

                        onChange={handleChange}
                        value={userData["firstname"] || ""}
                        name="firstname"
                        placeholder="First Name"
                        className="inputField"
                    />
                </Layout>
                {/* last name  */}
                <Layout label=" Last Name">
                    <input
                        onChange={handleChange}
                        value={userData["lastname"] || ""}
                        name="lastname"
                        placeholder="Last Name"
                        className="inputField"
                    />
                </Layout>
                {/* Phone */}
                <Layout label="Phone">
                    <PhoneInput
                        country="JO"
                        defaultCountry="JO"
                        value={userData["email"] || ""}
                        onChange={(e) => setUserData({ ...userData, "phone": e.target })}
                        name="phone"
                        className="inputField"
                    />
                </Layout>
                {/* Email */}
                <Layout label="Email">
                    <input
                        onChange={handleChange}
                        type="email"
                        value={userData["email"] || ""}
                        name="email"
                        placeholder="Email"
                        className="inputField"
                    />
                </Layout>
                {/* about */}
                <Layout label="About">
                    <input
                        onChange={handleChange}
                        value={userData["about"] || ""}
                        name="about"
                        placeholder="About"
                        className="inputField"
                    />
                </Layout>
                {/* image */}
                <Layout label=" Image URL">
                    <input
                        onChange={handleChange}
                        value={userData["image"] || ""}
                        name="image"
                        type="url"
                        placeholder="Image"
                        className="inputField"
                    />
                </Layout>
                {/* theme */}
                <Layout label="Theme">
                    <input
                        onChange={handleChange}
                        value={userData["theme"] || "dark"}
                        name="theme"
                        placeholder="theme"
                        className="inputField"
                    />
                </Layout>
                <div className="">
                    <button type="submit" className="btn">  Save  </button>
                </div>
            </form>
        </div>
    );
}