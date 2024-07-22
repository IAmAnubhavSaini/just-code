// related: 159, 340, 904

// fastest; 0ms, beats 100%

func lengthOfLongestSubstringKDistinct(s string, k int) int {
	distinct := k
	length := len(s)
	if length <= k {
		return length
	}
	var freq [128]int
	uniq := 0
	maxLen := 0
	left := 0
	for right := 0; right < length; right += 1 {
		if freq[s[right]] == 0 {
			uniq += 1
		}
		freq[s[right]] += 1
		if uniq > distinct {
			freq[s[left]] -= 1
			if freq[s[left]] == 0 {
				uniq -= 1
			}
			left += 1
		}
		maxLen = max(maxLen, right+1-left)
	}
	return maxLen
}
