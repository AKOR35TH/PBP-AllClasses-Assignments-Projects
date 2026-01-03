const tmdbAPI = require('../config/tmdb');
const cache = require('../config/node-cache');
const parseMovie = require('../models/movie-model');

const searchMovie = async (req, res) => {
    const query = req.query.query;

    // DATA VALIDATION
    if (!query) {
        return res.status(400).json({
            error: "Query parameter 'query' is required"
        });
    }

    if (typeof query !== "string") {
        return res.status(400).json({
            error: "'query' must be a string"
        });
    }

    if (query.trim().length < 3) {
        return res.status(400).json({
            error: "'query' must be at least 3 characters long"
        });
    }

    // CACHE
    if (cache.has(query)) {
        console.log("Fetch data from cache");
        return res.status(200).json(cache.get(query));
    }

    try {
        // CALL PUBLIC API
        const response = await tmdbAPI.get('/search/movie', {
            params: { query }
        });

        const movies = response.data.results.map(parseMovie);

        cache.set(query, movies);
        return res.status(200).json(movies);

    } catch (error) {

        // ERROR HANDLING
        if (error.response) {
            return res.status(502).json({
                error: "Failed to fetch data from TMDb API"
            });
        }

        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

module.exports = { searchMovie };
