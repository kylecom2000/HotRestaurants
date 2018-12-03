let object = {
    
    tables: [],

    add: function(data){
        console.log(data);
        if (object.tables.length<5){
            console.log("You have a reservation");
        } else {
            console.log("you are on the waitlist");
        }
        object.tables.push(data);
    }
};

module.exports = object;
