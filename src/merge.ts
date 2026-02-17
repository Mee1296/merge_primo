export function merge(collection_1: number[], 
                    collection_2: number[], 
                    collection_3: number[]): number[] {
    const result: number[] = [];

    let i = 0;
    let j = 0;
    let k = collection_3.length - 1;

    while (i < collection_1.length || j < collection_2.length || k >= 0)
    {
        const a = i < collection_1.length ? collection_1[i] : Infinity;
        const b = j < collection_2.length ? collection_2[j] : Infinity;
        const c = k >= 0 ? collection_3[k] : Infinity;

        const min = Math.min(a, b, c);

        result.push(min);

        if (min == a) i++;
        else if(min == b) j++;
        else k--
    }

    return result;
}

// demo
if (require.main === module) {
  const r = merge(
    [1, 4, 7],
    [2, 5, 8],
    [9, 6, 3]
  );
  console.log(r);
}