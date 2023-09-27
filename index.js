const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function batteries() {
    let totalBatteries = 0
    totalBatteries = batteryBatches.reduce((accumulator, item) => accumulator + item, 0)
    return totalBatteries
}

console.log(batteries())



// the above lines of code can be reduced to look as shown below

const totalBatteries = batteryBatches.reduce((accumulator, item) => accumulator + item, 0) // dont forget to add the intial value