import fs from 'fs';

// regex for spaces or newlines
let regex = /\s+|\n+/g;

let dataSet = fs.readFileSync('dataSet.txt', 'utf-8').toLowerCase().split(regex);

export function runContext(seed: string[]) {

    let occurrenceIndex: number[] = []
    let occurrences = dataSet.filter((token, index) => {

        if (token !== seed[0]) {
            return false;
        }

        let tokenIndex = index;
        let matches = false;
        for (let i = 0; i < seed.length; i++) {
            if (dataSet[tokenIndex] === seed[i]) {
                matches = true;
            } else {
                matches = false;
                break;
            }
            tokenIndex++;
        }


        if (matches) {
            occurrenceIndex.push(index + seed.length - 1);
            return true;
        }

        return matches;
    });

    let nextToken = dataSet[occurrenceIndex[Math.floor(Math.random() * occurrenceIndex.length)] + 1];

    return nextToken;

}

export function runEntire(context: string[]) {
    let info = "";
    let seed = context.join(" ").toLowerCase();
    let stop = false;
    let iterations = 0;
    while (!stop) {
        let foundContext = false
        let v = 6;
        let nextToken
        let context
        while (foundContext == false) {
            context = seed.split(' ').splice(-v, v);
            nextToken = runContext(context);
            if (nextToken != undefined || v == 1) {
                foundContext = true;
            }
            v--;
        }

        if (nextToken === undefined) {
            console.log("[end] Seed is undefined!");
            stop = true;
            break;
        }
        let indexRegex = /\d+:\d+/g;
        if (seed.match(indexRegex)) {
            console.log("[end] Seed contains a number:number!");
            stop = true;
            break;
        } else {
            if (context)
                info += `[ ${context.join(", ")} ]: ${nextToken}\n`;

            seed += " " + nextToken
            iterations += 1;
            if (seed.includes(".")) {
                stop = true;
            }
        }
    }
    console.log(info);
    console.log("====================================");
    console.log(`Iterations: ${iterations}`);
    console.log(seed);
    return {
        string: seed,
        iterations: iterations,
        info: info
    }
}