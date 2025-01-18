import { useCallback, useEffect } from 'react';

/**
 * Continuously call the callback function between the given delay
 *
 * callback: The function to cache, this function will be update if any
 * dependency changes
 *
 * dependencies: The list of reactive values are used within the callback
 * function, changes of these values will update the callback function
 */
export default function useInterval(
    callback: Function,
    delay: number,
    pause = false,
    dependencies: any[]
) {
    const callbackMemo = useCallback(callback, dependencies);

    useEffect(() => {
        if (pause) return;

        const loop = setTimeout(callbackMemo, delay);
        return () => clearTimeout(loop);
    }, [callbackMemo, pause]);
}
