export function checkProperty(obj: any, prop: string): boolean {
  return prop in obj;
}

export function sortByProperty(property: string): (a: any, b: any) => number {
    return function(a: any, b: any): number {
        if (typeof a[property] === 'string') {
            return a[property].localeCompare(b[property]);
        }
        return a[property] - b[property];
    };
}
