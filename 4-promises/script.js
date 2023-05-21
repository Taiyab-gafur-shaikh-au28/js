//! Synchronous vs asynchronous
/*

//* Synchronous 

console.log("Start")

console.log("Subscribed to Road side coder")

console.log("Finish")

//* Asynchronous

//? ex:- 1
console.log("Start")

setTimeout(() => {
    console.log("Subscribed to Road side coder")
},1000)

console.log("Finish")

//? ex:- 2

console.log("Start")

function importantAction(username) {
    
    setTimeout(() => {
        return `Subscribe to ${username}`
    }, 1000)
}

const message = importantAction(`Roadside coder`);      //* here it is async code it doesn't return instantly
console.log(message);

console.log("Finish")

//? ex:- 3  (to run this code we used callback)

console.log("Start")

function importantAction(username,cb) {
    
    setTimeout(() => {
        cb(`Subscribe to ${username}`)
    }, 1000)
}

// todo: when a fun take another fun as argument is called as callback

const message = importantAction(`Roadside coder`,(message) => {
    console.log(message)
});

console.log("Finish")
*/

const { async } = require("q")

/*


//? ex:- 4 (to run this code we used callback)

console.log("Start")

function importantAction(username,cb) {
    
    setTimeout(() => {
        cb(`Subscribe to ${username}`)
    }, 1000)
}

function likeTheVideo(video,cb) {
    setTimeout(() => {
        cb(`Subscribe to ${video}`)
    }, 1000)
}

function SubscribeToChannel(subscribe,cb) {
    setTimeout(() => {
        cb(`Subscribe to ${subscribe}`)
    }, 1000)
}

// todo: when a fun take another fun as argument is called as callback

const message = importantAction(`Roadside coder`,(message) => {
    console.log(message);
    likeTheVideo(`Javascript Interview Series` , (video) => {
        console.log(video);
        SubscribeToChannel(`Subscribe to the channel` ,(subscribe) => {
            console.log(subscribe)
        })
    })
});

console.log("Finish")

// todo: this concept is call callback Hell
*/

/*

//! Promises => it represent the upcoming completion or a failure of an asynchronous event & its resulting value

console.log('start')

// todo: we had a promise class in js & we create new instance for this promise class with new keyword

const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = true;
        if (result) {
            resolve(`Subscribe to road side coder`);
        } else {
            reject(new Error(`Why Aren't yo had Subscribe to road side coder`))
        }
        
    }, 2000)
})

//* to execute a promise

sub
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
})

console.log('finish')
*/

/*
//! Resolve by Promise

console.log("Start")

function importantAction(username) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000)
    })
}

function likeTheVideo(video) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${video}`)
        }, 1000)
    })
}


// todo: when a fun take another fun as argument is called as callback

importantAction(`Road side coder`).then((res) => {
    console.log(res);
    likeTheVideo(`Javascript video`).then((res) => {
        console.log(res);
    })
}).catch((err) => {
    console.log(err)
})

console.log("Finish")
*/

/*
//! Promise chaining


console.log("Start")

function importantAction(username) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000)
    })
}

function likeTheVideo(video) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${video}`)
        }, 1000)
    })
}

// todo: to avoid primed like structure we can return the result the fun is (new promise) 

importantAction(`Road side coder`).then((res) => {
    console.log(res);
    return likeTheVideo(`Javascript video`)
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err)
});

console.log("Finish")

*/

//! Promise Combinator :- help use to execute more than one promise at one time then return result accordingly

//* Four type of promise Combinator 

/*
//? Promise.all => if we provide multiple promises it will run all in parallel & at end it will 
//? return array with all the fulfilled promises but if any one fail then its gonna fail all 

console.log("Start")

function importantAction(username) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000)
    })
}

function likeTheVideo(video) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${video}`)
        }, 1000)
    })
}

Promise.all([
    importantAction(`Road side coder`),
    likeTheVideo("Javascript video")
]).then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

console.log("Finish")

*/

/*
//? Promise.race => it give first promise that get fulfilled or rejected 

console.log("Start")

function importantAction(username) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000)
    })
}

function likeTheVideo(video) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${video}`)
        }, 0)
    })
}

Promise.race([
    importantAction(`Road side coder`),
    likeTheVideo("Javascript video")
]).then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

console.log("Finish")
*/

/*
//? Promise.allSettled => it return fail promise as well as fulfilled promise 

console.log("Start")

function importantAction(username) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000)
    })
}

function likeTheVideo(video) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(`Subscribe to ${video}`)
        }, 0)
    })
}

Promise.allSettled([
    importantAction(`Road side coder`),
    likeTheVideo("Javascript video")
]).then((res) => {
    console.log(res);
}).catch(err => {
    console.log( `Error Promise Failed`,err);
})

console.log("Finish")
*/

/*
//? Promise.any => it only return fulfills promise and ignores all rejected promise   

console.log("Start")

function importantAction(username) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000)
    })
}

function likeTheVideo(video) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(`Subscribe to ${video}`)
        }, 0)
    })
}

Promise.any([
    importantAction(`Road side coder`),
    likeTheVideo("Javascript video")
]).then((res) => {
    console.log(res);
}).catch(err => {
    console.log( `Error Promise Failed`,err);
})

console.log("Finish")
*/


//! Async Await => best and modern approach to execute promises one after the other

console.log("Start")

function importantAction(username) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000)
    })
}

function likeTheVideo(video) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${video}`)
        }, 0)
    })
}

// todo: await wait until this promise returns fulfilled state & then we get value to this variable
//? to handel error if fail we use try catch block

const result = async() => {

    try {        
        const message = await importantAction(`Road Side Coder`);   // it will return promise obj we don't want we use hear await
        const message1 = await likeTheVideo(`Javascript Video`);
        console.log({message,message1});
    } catch (error) {
        console.error(`Promise Failed ` , error);
    }

}

result();

console.log("Finish");










































