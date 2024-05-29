// link : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstring(s: string): number {
  let result: number = 1;
  if (s.length === 0) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  for (let i = 0; i < s.length; i++) {
    let loop = 1;
    let saved: Set<string> = new Set([s[i]]);
    for (let j = i + 1; j < s.length; j++) {
      if (saved.has(s[j])) {
        break;
      } else {
        saved.add(s[j]);
        if (loop + 1 > result) {
          result = loop + 1;
        }
      }
      loop++;
    }
  }
  return result;
}

console.log(lengthOfLongestSubstring("au"));
