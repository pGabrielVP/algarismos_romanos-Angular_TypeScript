export const ROMAN_DECIMAL_MAP: Map<string, number> = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
    ["_I", 1000],
    ["_V", 5000],
    ["_X", 10000],
    ["_L", 50000],
    ["_C", 100000],
    ["_D", 500000],
    ["_M", 1000000],
])
export const VALID_ALGARISMS_REGEX = /^(_M){0,3}((_C_M)|(_C_D)|(_D)?(_C){0,3})((_X_C)|(_X_L)|(_L)?(_X){0,3})((_I_X)|(_I_V)|(_V)?)M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
