function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (a % b === 0) {
            resolve("I am Even Number")
        } else {
            reject('Sorry Jano')
        }
    })
}
sum(10, 3).then(data => console.log(data)).catch(err => console.log(err))