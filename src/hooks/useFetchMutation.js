import { useState } from "react";

const useFetchMutation = (mutation, onSuccess) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMutation = async (data) => {
        try {
            setLoading(true);
            console.log("MASUK");
            await mutation(data);
            console.log("MASUK BAWAH", onSuccess);
            onSuccess?.();
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, fetchMutation };
};

export default useFetchMutation;