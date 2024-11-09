{
    //
    const validateKeys = <T>(object: T, keys: (keyof T)[]): boolean => {
        const getBooleanValue = keys.filter((key) => !(key in  object));
        return getBooleanValue.length === 0;
    }

    //
}