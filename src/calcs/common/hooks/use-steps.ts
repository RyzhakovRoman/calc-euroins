import {useCallback, useState} from 'react'

const useSteps = () => {
    const [currentStep, setCurrentStep] = useState<number>(0),
        nextStep = useCallback(() => {
            setCurrentStep(prState => prState + 1)
        }, []),
        prevStep = useCallback(() => {
            setCurrentStep(prState => prState - 1)
        }, [])

    return {
        currentStep,
        nextStep,
        prevStep,
    }
}

export default useSteps
