let resultFinal = [];

const stateInitial = [
    [5,3,2], [1,8,6], [4,7,null]
]

function start(){

    var count = 0
   
    for(i = 0; i < 3; i++) {

        var containsNull = valueContainsNull(stateInitial[i]);;

        if(containsNull){
            orderArray(stateInitial[i]);
        }
       
    }

    while(!valueContainsNull(stateInitial[count])) {

        joinsArrays(stateInitial[count], resultFinal[0]);

        count++;
    }

    console.log(resultFinal)

}

function joinsArrays(arrayInitial, newArray){

    if(newArray === undefined){
        orderArray(arrayInitial);
    } else {
        orderArray(arrayInitial.concat(newArray));
    }
}


function orderArray(valuesArray) {

    if(resultFinal.length > 0){
        resultFinal = [];
    }

    resultFinal.push(valuesArray.sort());

}


function valueContainsNull(positionMovie){

    return positionMovie.includes(null);

}
