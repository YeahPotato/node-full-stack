const test = {
    info: {
        name: "joke",
        age: 18
    },
    get name() {
        return this.info.name
    },
    set name(value){
        this.info.name = value
    }
}

console.log(test.name)
test.name = 'new name'
console.log(test.name)