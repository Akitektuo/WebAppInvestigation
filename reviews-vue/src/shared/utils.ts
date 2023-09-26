export const copy = <T>(object: T): T => JSON.parse(JSON.stringify(object));

export const round = (number: number, decimals: number = 2) => {
    const decimalModifier = 10 ** decimals;

    return Math.round((number + Number.EPSILON) * decimalModifier) / decimalModifier;
}