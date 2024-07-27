export function generateClassNames(standarClass,objeto) {
    let classes = standarClass + ' ';

    for (const key in objeto) {
        if (objeto[key]) {
            classes += key + ' ';
        }
    }
    return classes.trim();
}