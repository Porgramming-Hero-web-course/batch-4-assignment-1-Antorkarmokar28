{
    //
    const getProperty = <T, Q extends keyof T>(object: T, key: Q): T[Q] => {
        return object[key];
    }
    //
}