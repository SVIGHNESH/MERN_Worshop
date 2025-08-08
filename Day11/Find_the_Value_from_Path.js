// let obj = {a:{b:{c:10}}}
// path = [a,b,c]
function getValue(obj, path) {
    let current = obj;
    for (let i = 0; i < path.length; i++) {
        if (current && typeof current === 'object' && current.hasOwnProperty(path[i])) {
            current = current[path[i]];
        } else {
            return undefined;
        }
    }
    return current;
}
