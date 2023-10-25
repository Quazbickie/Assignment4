let toSort = [100,65,78,92,63,84,9,4,3,6,5,1,2,8,7,11,21,33,10,19,15,16,22,50,34,40,46,42,36,38,34,33];
console.log(toSort);
// bubbleSortEasy(toSort);
// bubbleSort(toSort);
// selectionSort(toSort);
insertionSort(toSort);

function bubbleSort(array){

    let returnArray = [];
    let iterations = 1;

    do{
        swap=false;
        console.log("while");

        for(let i = 0; i < array.length-iterations; i++){
            if(array[i] > array[i+1]){
                
                let tempValue = array[i];
                array[i] = array[i+1];
                array[i+1] = tempValue;

                console.log(array.toString());

                swap=true;
            }
        }
        iterations++;
        console.log(array.toString());

    } while(swap);
}

function bubbleSortEasy(array){

    let n = array.length;
    let temp = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-i; j++){
            if(array[j] > array[j+1]){
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
            console.log(array.toString());
        }
    }
    console.log(array.toString());

}


function selectionSort(array){

    let index, smallest;

    for(let i = 0; i < array.length; i++){

        let index = i;

        for(let j = i + 1; j < array.length; j++){
            console.log(array.toString());

            if(array[j] < array[index]){
                index = j;

            }

        }

        smallest = array[index];
        array[index] = array[i];
        array[i] = smallest;
        console.log(array.toString());
        
    }

    console.log(array.toString());

}

function insertionSort(array){

    for (let i = 1; i < array.length; i++){
        let currentValue = array[i];
        let j = i-1;

        while( j >= 0 && array[j] > currentValue){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = currentValue;

    }

    console.log(array.toString());

}