const fetch = require('node-fetch')
const readline = require('readline-sync')


const GithubInfo = (username) => new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`, {

    })
        .then(res => res.json())
        .then(result => resolve(result))
        .catch(err => reject(err))

});

(async () => {
    try {
        const username = readline.question('Username Github: ')
        const GetInfo = await GithubInfo(username)
        if (!GetInfo.login) return console.log('Username Tidak ada!')
        console.log(`\n+++++ GET GITHUB INFO @${GetInfo.login} +++++\n`)
        console.log(`Username: ${GetInfo.login}`)
        console.log(`Nama: ${GetInfo.name}`)
        console.log(`Following: ${GetInfo.following}`)
        console.log(`Followers: ${GetInfo.followers}`)

    }
    catch (e) {
        console.log(`Terdapat masalah: ${e}`)
    }
})();