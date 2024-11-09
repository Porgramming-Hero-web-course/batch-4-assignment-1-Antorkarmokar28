{
    //
    function countWordOccurrences (param1: string, param2: string): number {
        const sentenceLowerCase = param1.toLocaleLowerCase();
        const wordLowerCase = param2.toLocaleLowerCase();
        const perticulerWord = sentenceLowerCase.split(' ');
        return perticulerWord.filter((word) => word === wordLowerCase).length;
    };
    //
}