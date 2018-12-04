let object = {
    tableData: [{
    "customerName": "Kyle 1.",
    "phoneNumber": "409-939-7554",
    "customerEmail": "kbauertx@gmail.com",
    "customerID": "1"
    },
    {
    "customerName": "Kyle 2.",
    "phoneNumber": "409-939-7554",
    "customerEmail": "kbauertx@gmail.com",
    "customerID": "1"
    },
    {
    "customerName": "Kyle 3.",
    "phoneNumber": "409-939-7554",
    "customerEmail": "kbauertx@gmail.com",
    "customerID": "1"
    },
    {
    "customerName": "Kyle 4.",
    "phoneNumber": "409-939-7554",
    "customerEmail": "kbauertx@gmail.com",
    "customerID": "1"
    }
    ],

    add: function(data){
        console.log(data);
        if (object.tableData.length<5){
            console.log("You have a reservation");
        } else {
            console.log("you are on the waitlist");
        }
        object.tableData.push(data);
    }
};

module.exports = object;