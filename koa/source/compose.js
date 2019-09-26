const add = (x, y) => x + y
const square = z => z * z

// const compose = (...[first, ...rest]) => (...args) => {
//     let ret = first(...args)
//     rest.forEach(fn => {
//         ret = fn(ret)
//     })

//     return ret
// }
// const fn = compose(add, square, square, square)
// console.log(fn(1, 2))

// async compose
function compose(middlewares) {
    return function () {
        return dispatch(0)
        
        function dispatch(i) {
            let fn = middlewares[i]
            if (!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1)
                })
            )
        }
    }
}

async function fn1(next) {
    console.log('fn1')
    await next()
    console.log('end fn1')
}

async function fn2(next) {
    console.log('fn2')
    await delay()
    await next()
    console.log('end fn2')
}

async function fn3(next) {
    console.log('fn3')
}

function delay() {
    return Promise.resolve(resolve => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

const middleware = [fn1, fn2, fn3]
const finalFn = compose(middleware)
finalFn()