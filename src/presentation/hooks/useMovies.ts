import { useEffect, useState } from "react"
import * as UseCases from '../../core/use-cases'
import { movieDBFetecher } from "../../config/adapters/movieDB.adapter";
import { Movie } from "../../core/entities/movie.entity";

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetecher);
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetecher);
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetecher);
        const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetecher);

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies,
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setIsLoading(false);

    };

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,
    };
};

