//enahced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("gmx", 23, "MX", 1));