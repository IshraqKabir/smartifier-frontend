import { useEffect, useState } from "react";

const SECONDS_TO_WAIT = 30
export default function useResendMail() {
    const [showResendLink, setShowResendLink] = useState(false);
    const [secondsRemaining, setSecondsRemaining] = useState(SECONDS_TO_WAIT);

    useEffect(() => {
        setInterval(() => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(second => second - 1);
            }
        }, 1000)
    }, [])

    useEffect(() => {
        if (secondsRemaining < 2) {
            setShowResendLink(true)
        }
    }, [secondsRemaining])

    const handleSend = () => {
        setShowResendLink(false);
        setSecondsRemaining(SECONDS_TO_WAIT)
    }

    return {
        showResendLink,
        secondsRemaining,
        handleSend
    }

}