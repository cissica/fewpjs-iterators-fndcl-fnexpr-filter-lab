// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(function(o){
        return o.toLowerCase().indexOf(string.toLowerCase()) !== -1
        //still fuzzy on this indexOf concept
    })
}

function fuzzyMatch(drivers, string){
    return drivers.filter((driver) => driver.startsWith(string))
}

function matchName(drivers, string){
    return drivers.filter((driver) => driver.name === string)
}