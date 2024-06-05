// link : https://leetcode.com/problems/longest-palindromic-substring/description/

function longestPalindrome(s: string): string {
  let result = "";
  if (s.length === 1) {
    return s;
  }
  if (s.length == 2) {
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  }
  for (let i = 0; i < s.length; i++) {
    const longestCenter = checkLongestPalindrome(i, i, s);
    const longestSide = checkLongestPalindrome(i, i + 1, s);
    result =
      result.length > longestCenter.length && result.length > longestSide.length
        ? result
        : longestCenter.length > longestSide.length
        ? longestCenter
        : longestSide;
  }
  return result;
}

function checkLongestPalindrome(left: number, right: number, str: string) {
  while (left >= 0 && right <= str.length - 1 && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.slice(left + 1, right);
}

console.log(longestPalindrome("babaddtattarrattatddetartrateedredividerb"));
