import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<MovieDBMoviesResponse>('/top-rated');
        return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        throw new Error('Error fetching movies - PopularUseCase');
    }
}