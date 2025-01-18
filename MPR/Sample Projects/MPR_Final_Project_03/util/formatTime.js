export function formatTime(timeString) {
    const time = parseInt(timeString);
    if(time >= 720000) {
        return `${(time / 720000).toFixed(1)} years`;
    }
    if(time >= 60000) {
        return `${(time / 60000).toFixed(1)} months`;
    }
    if(time >= 14000) {
        return `${(time / 14000).toFixed(1)} weeks`;
    }
    if(time > 0 && time < 14000) {
        return `${(time / 2000).toFixed(1)} days`;
    }
}