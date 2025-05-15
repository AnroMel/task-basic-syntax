export function romanToInteger(str) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        const currentVal = romanMap[str[i]];
        const nextVal = romanMap[str[i + 1]] || 0;

        if (currentVal < nextVal) {
            result += nextVal - currentVal;
            i++; // Пропускаем следующий символ, так как он уже учтён
        } else {
            result += currentVal;
        }
    }

    return result;
}
