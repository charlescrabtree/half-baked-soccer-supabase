const SUPABASE_URL = 'https://hxnmyoamqkyeaybcgtum.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4bm15b2FtcWt5ZWF5YmNndHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2MzgzNzEsImV4cCI6MTk3NTIxNDM3MX0.M74QbOVkzdaVOrVsLNfuxBZhMbtfI4HGVFx138-KZqI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/*
assumptions you can make:

The table name in supabase is `games`

The games are stored in the database using this data model:
{
    name1: ,
    name2: ,
    score1: ,
    score2: ,
}
*/

export async function createGame(game) {
    // create a single new game in the games table using the above object
    const response = await client.from('games').insert({ name1: game.name1, name2: game.name2, score1: game.score1, score2: game.score2 });

    return checkError(response);
}

export async function getGames() {
    // select all games from the games table
    const response = await client.from('games').select('*');

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
