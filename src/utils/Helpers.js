// Get 4k
export function get4k(target) {
    const vwContext = 2201 * 0.01 * 1;
    return (target / vwContext) * 1 + "vw";
}