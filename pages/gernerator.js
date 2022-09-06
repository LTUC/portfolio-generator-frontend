import { useState } from "react";
import Stepper from "../components/Steppers/Stepper";
import StepperControl from "../components/Steppers/StepperControl";
import { UseContextProvider } from "../contexts/StepperContext";

import BasicInfo from '../components/Steppers/steps/BasicInfo';
import Experience from "../components/Steppers/steps/Experience";
import Final from "../components/Steppers/steps/Final";



function App() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Basic Info",
        "Experience",
        "Education",
        "Complete",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <BasicInfo />;
            case 2:
                return <Experience />;
            case 3:
                return <p>To be added</p>;
            case 4:
                return <Final />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className="pb-2 mx-auto bg-white shadow-xl rounded-2xl md:w-1/2">
            {/* Stepper */}
            <div className="container mt-5 horizontal ">
                <Stepper steps={steps} currentStep={currentStep} />

                <div className="p-10 my-10 ">
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                </div>
            </div>

            {/* navigation button */}
            {currentStep !== steps.length && (
                <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />
            )}
        </div>
    );
}

export default App;