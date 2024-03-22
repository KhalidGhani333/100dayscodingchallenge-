"use strict";
//Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age
let userProfile = (function () {
    let name = "Khalid";
    let age = 24;
    return {
        userInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.userInfo();
