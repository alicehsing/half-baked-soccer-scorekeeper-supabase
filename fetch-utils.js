const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createGame(name1, name2, score1, score2) {
    // const newGame = { ...game };
  // create a single new game in the games table using an object
    const response = await client
        .from('games')
        .insert([{
            name1: name1,
            score1: score1,
            name2: name2,
            score2: score2
        }]);
  
    return checkError(response);
}

export async function getGames() {
    // select all games from the games table
    const response = await client
        .from('games')
        .select();

    return checkError(response);    
}

export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectToGames() {
    if (await getUser()) {
        location.replace('./games');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });

    return response.data;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.data;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}
