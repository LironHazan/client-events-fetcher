var APP = ( function () {
    // using IIFE to avoid putting stuff on global scope

    return {

        clickBtn1 : function () {
            document.getElementById("demo").innerHTML = "Hey There! you clicked btn 1";
        } ,

        clickBtn2 : function() {
            document.getElementById("demo1").innerHTML = "clicked btn 2";
        },

        clickBtn3 : function() {
            document.getElementById("demo2").innerHTML = "clicked btn 3";
        }

    };

})();


