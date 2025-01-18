export function getRandomInt({min, max}: {min: number, max: number}): number {
	  return Math.floor(Math.random() * ( 1 + max - min)) + min;
}

export function getRandomElement(list: any[]): any {
	  const randomIdx = getRandomInt({min: 0, max: list.length -1});
	  return list[randomIdx];
}

/**
   * Fisher-Yates Shuffle
   * this wont modify the original array
   */
export function shuffleList(list: any[]): any[] {
    const copy = [...list];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = getRandomInt({min: 0, max: i});
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }

    return copy;
}
