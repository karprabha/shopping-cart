const trimString = (input: string, maxLength: number): string => {
    if (input.length > maxLength) {
        return input.slice(0, maxLength - 3) + "...";
    }
    return input;
};

export default trimString;
