const rewire = require("rewire")
const index = rewire("./index")
const playSound = index.__get__("playSound")
// @ponicode
describe("playSound", () => {
    test("0", async () => {
        await playSound()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Anas", "Edmond"], ["George", "Jean-Philippe", "Jean-Philippe"], ["George", "Edmond", "George"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUnmount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "George", "Edmond"], ["Pierre Edouard", "Edmond", "Pierre Edouard"], ["Pierre Edouard", "Jean-Philippe", "Anas"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("goToHappy", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Jean-Philippe", "Pierre Edouard"], ["Michael", "George", "Anas"], ["George", "George", "Michael"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.goToHappy()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("goToNeutral", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Pierre Edouard", "Anas"], ["Anas", "Michael", "Anas"], ["Anas", "Anas", "Anas"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.goToNeutral()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("goToSad", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Jean-Philippe", "Jean-Philippe"], ["Michael", "Jean-Philippe", "Jean-Philippe"], ["Jean-Philippe", "Michael", "Pierre Edouard"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.goToSad()
        }
    
        expect(callFunction).not.toThrow()
    })
})
