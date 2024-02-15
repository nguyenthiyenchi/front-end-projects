const APIURL = 'https://api.github.com/users/'

const main = document.getElementById("main");
const form = document.getElementById("profile-input");
const search = document.getElementById("profile-search");

function createProfileCard(user)    {
    const userID = user.name || user.login;
}