package leetcode

import "math"

func lengthOfLongestSubstringTwoDistinct(s string) int {
	/* WORST PERFORMING */
	distinctCount := 2
	length := len(s)
	if length <= distinctCount {
		return length
	}
	hashmap := make(map[byte]int)
	maxLen := 0
	left := 0

	for right := 0; right < length; right += 1 {
		hashmap[s[right]] = right

		if len(hashmap) > distinctCount {
			minValue := math.MaxInt
			for _, value := range hashmap {
				if value < minValue {
					minValue = value
				}
			}
			delete(hashmap, s[minValue])
			left = minValue + 1
		}
		possibleMax := right + 1 - left
		if possibleMax > maxLen {
			maxLen = possibleMax
		}
	}
	return maxLen
}

func lengthOfLongestSubstringTwoDistinct(s string) int {
	/* BEST PERFORMING: beats 100% */
	distinctCount := 2
	length := len(s)
	if length <= distinctCount {
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

		if uniq > distinctCount {
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
