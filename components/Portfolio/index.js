import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PortfolioHome({ id }) {
    const [userInfo, setInfo] = useState()

    console.log("inside comp", id);

    async function getData() {
        const res = await axios.get(`https://portfolio-generator-401d09.herokuapp.com/api/v1/user/${id}`)
        console.log("res", res);
        const userInfo = res.data;
        setInfo(userInfo)
        console.log("getting data", { userInfo });
    }

    useEffect(
        () => {
            getData();
        }
        , [])
    return (
        <>
            <p>{userInfo?.email}</p>
            <p>{userInfo?.first_name}</p>
            Here
        </>

    )
}
