import { useState } from 'react';
import Link from 'next/link'
import Layout from "../InputLayout";

export default function Experience() {
    const [inputFields, setInputFields] = useState([
        {
            id: '',
            jobtitle: '',
            company: '',
            startdate: '',
            enddate: '',
            description: '',
        }
    ])
    // create a state as array of objects where object is one experience
    // when I click add more, I will expand the old experience and add another object to it
    // to render the form, loop through the state and for each object create a form
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    const addFields = () => {
        let newfield = {
            jobtitle: '',
            company: '',
            startdate: '',
            enddate: '',
            description: '',
        }

        setInputFields([...inputFields, newfield])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(111, 2222222222222, inputFields)
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    return (
        <div className="flex flex-col ">
            <form onSubmit={handleSubmit}>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <Layout label="Job Title">
                                <input
                                    name='jobtitle'
                                    placeholder='jobtitle'
                                    value={input.jobtitle}
                                    onChange={event => handleFormChange(index, event)}
                                    className="inputField"
                                />
                            </Layout>
                            <Layout label="Company">
                                <input
                                    name='company'
                                    placeholder='company'
                                    value={input.company}
                                    onChange={event => handleFormChange(index, event)}
                                    className="inputField"
                                />
                            </Layout>
                            <Layout label="Start Date">
                                <input
                                    type="date"
                                    name='startdate'
                                    placeholder="YY/MM/DD"
                                    value={input.startdate}
                                    onChange={event => handleFormChange(index, event)}
                                    className="inputField"
                                />
                            </Layout>
                            <Layout label="End Date">
                                <input
                                    type="date"
                                    name='enddate'
                                    placeholder="YY/MM/DD"
                                    value={input.enddate}
                                    onChange={event => handleFormChange(index, event)}
                                    className="inputField"
                                />
                            </Layout>
                            <Layout label="Description">

                                <input
                                    name='description'
                                    placeholder='description'
                                    value={input.description}
                                    onChange={event => handleFormChange(index, event)}
                                    className="inputField"
                                />
                            </Layout>
                            <button onClick={() => removeFields(index)} className="btn"> Remove</button>
                        </div>
                    )
                })}

                <div className="btnContainer">
                    <button type="submit" className="btn" > Save </button>
                    <button onClick={addFields} className="btn">  Add More  </button>
                </div>
            </form >
            <Link href="portfolio/3"> See Result</Link>
        </div >
    );
}