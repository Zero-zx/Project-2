'use strict';

function makeMultiFilter(originalArray) {
    var currentArray = originalArray;
    function arrayFilter (filterCriteria, callback) {
        //check if filterCriteria is a function or not
        if (typeof filterCriteria !== "function") {
            return currentArray;
        }        
        
        currentArray = currentArray.filter(filterCriteria);
        if (typeof callback === "function") {
            callback.call(originalArray, currentArray);
        }
        return arrayFilter;
    }
    return arrayFilter;
}

window.makeMultiFilter = makeMultiFilter;