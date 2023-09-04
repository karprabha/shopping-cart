const capitalizeEachWord = (input: string): string => {
    return input
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

export default capitalizeEachWord;
