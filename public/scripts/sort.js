let toSort = [9,4,2,8,5,10,3,7,6,123,21,33,56,54,43,66,88,77,99,65,34,65,23,564,23];
console.log(toSort);
// bubbleSortEasy(toSort);
// bubbleSort(toSort);
// selectionSort(toSort);
// insertionSort(toSort);
// mergeSort(toSort);
quickSort(toSort, 0, toSort.length-1);
console.log(toSort.toString());


function bubbleSort(array){

    let iterations = 1;

    do{
        swap=false;

        for(let i = 0; i < array.length-iterations; i++){
            if(array[i] > array[i+1]){
                
                let tempValue = array[i];
                array[i] = array[i+1];
                array[i+1] = tempValue;


                swap=true;
            }
        }
        iterations++;

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

function mergeSort(array){


    let inputLength = array.length;
    
    if(inputLength < 2){
        return;
    }

    let midIndex = Math.floor(inputLength/2);

    let leftHalf = Array(midIndex).fill(0);
    let rightHalf = Array(inputLength - midIndex).fill(0);

    for(let i = 0; i < midIndex; i++){
        leftHalf[i] = array[i];
    }

    for(let i = midIndex; i < inputLength; i++){
        rightHalf[i - midIndex] = array[i];
    }

    // console.log(leftHalf.toString());
    // console.log(rightHalf.toString());

    mergeSort(leftHalf);
    mergeSort(rightHalf);

    let result = merge(array, leftHalf, rightHalf);
    // console.log(result.toString());
}

function merge(array, leftArray, rightArray){

    let leftSize = leftArray.length;
    let rightSize = rightArray.length;

    // console.log(leftArray.toString());
    // console.log(rightArray.toString());

    let i = 0, j = 0, k = 0;

    while( i < leftSize && j < rightSize){
        if(leftArray[i] <= rightArray[j]){
            array[k] = leftArray[i];
            i++;
        } else{
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while(i < leftSize){
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while(j < rightSize){
        array[k] = rightArray[j];
        j++;
        k++;
    }

    // console.log(array.toString());
    return array;
}


function quickSort(array, lowIndex, highIndex){

    if(lowIndex >= highIndex){
        return;
    }


    let pivot = array[highIndex];

    let leftPointer = partition(array, lowIndex, highIndex, pivot);

    quickSort(array, lowIndex, leftPointer - 1);
    quickSort(array, leftPointer + 1, highIndex);

}

function partition(array, lowIndex, highIndex, pivot){
    let leftPointer = lowIndex;
    let rightPointer = highIndex - 1;

    while(leftPointer < rightPointer){

        while (array[leftPointer] <= pivot && leftPointer < rightPointer){
            leftPointer++;
        }

        while (array[rightPointer] >= pivot && rightPointer > leftPointer){
            rightPointer--;
        }

        swap(array, leftPointer, rightPointer);

    }

    if(array[leftPointer] > array[highIndex]){
        swap(array, leftPointer, highIndex);
    } 
    else {
        leftPointer = highIndex;
    }

    return leftPointer;

}

function swap(array, leftPointer, rightPointer){
    let temp = array[leftPointer];
    array[leftPointer] = array[rightPointer];
    array[rightPointer] = temp;
}
