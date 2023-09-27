const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
] 

function superbowlWin(array) {
    let object
    function winFinder(element) {
        if (element.result === "W") {
            return true
        } else {
            return undefined
        }
    }
    if (array.find(winFinder) === undefined) {
        object = undefined
        return object
    } else {
        object = array.find(winFinder)
        return object.year
    }
}