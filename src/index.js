// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArr = [];
    if (!matrix) return newArr;
    matrix.forEach((arr, index) => {
        if (index % 2 == 0) newArr.push(...arr);
        else newArr.push(...arr.reverse());
    });
    return newArr;
};
