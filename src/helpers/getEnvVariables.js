


export const getEnvVariables = () => {

    //import.meta.env; "el codigo aun no funciona en vite al hacer el deploy"

    return {
       // ...import.meta.env
       VITE_API_URL: import.meta.env.VITE_API_URL,
    }
}

