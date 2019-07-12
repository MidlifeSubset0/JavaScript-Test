var today = new Date()
// console.log(today)

// var previousDate = new Date()
// previousDate.setDate( previousDate.getDate() - 2)
// previousDate = previousDate.toISOString().substring(0,10)
// console.log(previousDate))

function changeToString(date) {
    return date.toISOString().substring(0,10);
};
changeToString(today)