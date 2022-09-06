// import { UseContextProvider } from "../contexts/StepperContext";
// import { useState } from "react";

// import Link from 'next/link';
// import Stepper from '../components/generator/Stepper';
// import StepperControl from '../components/generator/StepperControl';
// import UserInfo from '../components/generator/Forms/UserInfo';
// import Experience from "../components/generator/Forms/Experience";


// import Payment from "../components/generator/steps/Payment";
// import Final from "../components/generator/steps/Final";


// export default function Gernerator() {
//     const [currentStep, setCurrentStep] = useState(1);
//     // 1. array of steps in my stepper
//     const steps = [
//         "User Info",
//         "Experience",
//         "Education",
//         "Projects",
//     ];
//     // 2. which component to Display with differnet sections:
//     const displayStep = (stepNumber) => {
//         switch (stepNumber) {
//             case 1:
//                 return <UserInfo />;
//             case 2:
//                 return <Experience />;
//             case 3:
//                 return <Payment />;
//             case 4:
//                 return <Final />;
//             default:
//         }

//     };
//     const handleClick = (direction) => {
//         let newStep = currentStep;

//         direction === "next" ? newStep++ : newStep--;
//         // check if steps are within bounds
//         newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
//     };
//     return (
//         <>
//             <h1>Welcome to Portfolio Gernerator</h1>
//             <p>
//                 <Link href="/add/user-info">
//                     <a > Get Started</a>
//                 </Link>
//             </p>
//             <div className="pb-2 mx-auto bg-white shadow-xl rounded-2xl md:w-1/2">
//                 {/* Stepper */}
//                 <div className="container mt-5 horizontal ">
//                     <Stepper steps={steps} currentStep={currentStep} />

//                     <div className="p-10 my-10 ">
//                         <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
//                     </div>
//                 </div>

//                 {/* navigation button */}
//                 {currentStep !== steps.length && (
//                     <StepperControl
//                         handleClick={handleClick}
//                         currentStep={currentStep}
//                         steps={steps}
//                     />
//                 )}
//             </div>
//         </>
//     )
// }
