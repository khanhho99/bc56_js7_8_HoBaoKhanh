var array = [];
var array_2 = [];
// const chung
const Result_1 = '#result_1';
const Result_2 = '#result_2';
const Result_3 = '#result_3';
const Result_4 = '#result_4';
const Result_5 = '#result_5';
const Result_7 = '#result_7';
const Result_8 = '#result_8';
const Result_10 = '#result_10';
const Array_1 = '#array';
const Array_2 = '#array_2';

/**Function*/
function addNumber(type) {
    switch (type) {
        case 'array':
            handleAddNumber(array, '#number', Array_1);
            break;
        default:
            handleAddNumber(array_2, '#number_2', Array_2);
            break;
    }
}

function handleAddNumber(arr, selector, arrLocation) {
    var number = document.querySelector(selector).value * 1;
    arr.push(number);
    document.querySelector(selector).value = '';
    renderArray(arrLocation, arr);
}

function renderArray(selector, arr) {
    document.querySelector(`${selector}`).innerHTML = arr;
}


function renderResult(str, result, selector) {
    document.querySelector(`${selector}`).innerHTML =
        `
        <p>${str}: ${result}</p>
    `
}

/**Function chung Bai 1, 2 */
function handlePositiveNumber() {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
            count++;
        }
    }
    return { sum, count };
}

/**Bai 1 */
function getSumOfPositiveNumbers() {
    var result = handlePositiveNumber().sum;
    var str = "Tính Tổng"
    renderResult(str, result, Result_1);

}

/**Bai 2 */
function getCountOfPositiveNumber() {
    var result = handlePositiveNumber().count;
    var str = "Đếm Số Dương"
    renderResult(str, result, Result_2);

}

/**Function chung Bai 3, 4 */
function isPositive(n) {
    if (n > 0) {
        return true;
    }
    return false;
}

function getPositiveArray() {
    return newArr = array.filter(function (arr) {
        return arr > 0;
    })
}


function findPositiveMin() {
    var newArr = getPositiveArray();

    var min = newArr[0];
    for (var i = 1; i < newArr.length; i++) {
        if (newArr[i] < min) {
            min = newArr[i]
        }
    }
    return min;
}

function findMin() {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function handleFindMin(type) {
    switch (type) {
        case 'positive':
            return findPositiveMin();
        default:
            return findMin();
    }
}

/**Bai 3 */
function findMinimumNumber() {
    var result = handleFindMin('');
    var str = 'Số nhỏ nhất '
    renderResult(str, result, Result_3);
}

/**Bai 4 */
function findMinimumPositiveNumber() {
    var result = handleFindMin('positive');
    var str = 'Số dương nhỏ nhất '
    renderResult(str, result, Result_4);
}

/**Bai 5*/
function getEvenArray() {
    return newArr = array.filter(function (arr) {
        return arr % 2 == 0
    })
}
function getLastOfEvenNumber() {
    var newArr = getEvenArray();
    console.log("🚀 ~ file: app.js:114 ~ getLastOfEvenNumber ~ newArr:", newArr)
    var result = 0;
    if (newArr == '') {
        result = -1;
    } else {
        result = newArr[newArr.length - 1];
    }
    var str = "Số chẵn cuối cùng"
    renderResult(str, result, Result_5);
}

/**Bai 8 */
function handleGetFirstPrimeNum() {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 1) {
            if (array[i] == 2) {
                return 2;
            }
            if (array[i] == 3) {
                return 3;
            }
            if (array[i] % 2 == 0)
                continue;
            else {
                if (array[i] % 3 == 0)
                    continue;
                else
                    return array[i];
            }
        }
    }
}

function getFirstPrimeNum() {
    var str = "Số nguyên tố"
    var result = handleGetFirstPrimeNum();
    renderResult(str, result, Result_8);
}


/**Bai 10 */
function compareOddAndEven() {
    var str = "";
    var sumOfPosNum = getPositiveArray().length;
    var sumOfNegNum = getNegativeArray().length;
    if (sumOfPosNum > sumOfNegNum)
        str = "Số dương > Số âm";
    else if (sumOfPosNum < sumOfNegNum)
        str = "Số âm > Số dương"
    else
        str = "Số dương = Số âm"
    renderResult("Kết quả", str, Result_10);
}

function getNegativeArray() {
    return array.filter(function (arr) {
        return arr < 0
    })
}


/**Bai 7 */
function getSortArray() {
    var newArr = [];
    // console.log("🚀 ~ file: index.js:156 ~ getSortArray ~ newArr:", newArr)
    for (var i = 0; i < array.length; i++) {
        newArr[i] = array[i];
    }

    newArr.sort(function (a, b) {
        return a - b;
    });
    // var str = "Sắp xếp theo thứ tự tăng dần"
    renderArray(Result_7, newArr);
}
