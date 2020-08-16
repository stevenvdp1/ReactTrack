import { useEffect, useState }  from 'react';

export function useFetch(url) {
    const [request, setRequest] = useState({ loading: false, data: null, error: false })
    useEffect(() => {
        setRequest({ loading: true, data: null, error: false })
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRequest({
                    loading: false,
                    data: data,
                    error: false
                })
            })
            .catch(error => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request
}

