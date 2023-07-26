export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        let mid = Math.floor(lo + (hi - lo)/2);

        if (haystack[mid] === needle){
            return true;
        } else if (needle < haystack[mid]){
            hi = mid;
        } else {
            lo = mid + 1; 
        }
    }
    return false;
}
