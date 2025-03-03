import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetecher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '26b8cbe138be85b35936fadf0d3ba423',
        language: 'es',
    },
});
