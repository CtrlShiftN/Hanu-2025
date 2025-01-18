export function formatNumber(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 10000) {
        return (number / 1000).toFixed(1) + 'K';
    } else {
        return number.toFixed(2);
    }
}