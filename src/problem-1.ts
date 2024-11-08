{
    //
    const sumArray = (param: number[]): number[] => {
        return param.reduce((accu, element) => accu + element, 0);
    }
    console.log(sumArray([1, 2, 3, 4, 5]))
    //
}