"server-only";

export async function getMovies () {
    try {
        const req = await fetch("https://api.kinopoisk.dev/v1.4/movie?limit=40",{
            headers: {
                "Content-Type" : "application/json",
                "X-API-KEY" : "HAYV6Y0-HKH4XGD-GPJAQ5C-PAH94S7"
            }
        });
        const res = await req.json();
        return res        
    } catch (error) {
        return error
    }
}

