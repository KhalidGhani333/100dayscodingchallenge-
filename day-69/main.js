"use strict";
//Enum
//Print the index number of Enum
var Days;
(function (Days) {
    Days[Days["monday"] = 0] = "monday";
    Days[Days["tuesday"] = 1] = "tuesday";
    Days[Days["wednesday"] = 2] = "wednesday";
    Days[Days["thrusday"] = 3] = "thrusday";
    Days[Days["friday"] = 4] = "friday";
    Days[Days["saturday"] = 5] = "saturday";
    Days[Days["sunday"] = 6] = "sunday";
})(Days || (Days = {}));
let today = Days.thrusday;
console.log(today);
//Print the value of Enum
var days;
(function (days) {
    days["mon"] = "Monday";
    days["tues"] = "Tuesday";
    days["wed"] = "Wednesday";
    days["thrus"] = "Thrusday";
    days["fri"] = "Friday";
    days["sat"] = "Saturday";
    days["sun"] = "Sunday";
})(days || (days = {}));
let Today = days.thrus;
console.log(Today);
