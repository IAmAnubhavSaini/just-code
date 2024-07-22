func maxSubarrayLength(nums []int, k int) int {
	freq := make(map[int]int)
	maxLen := 0
	left := 0

	for right, value := range nums {
		freq[value] += 1

		for freq[value] > k {
			freq[nums[left]] -= 1
			left += 1
		}

		maxLen = max(maxLen, right+1-left)
	}

	return maxLen
}

func maxSubarrayLength(nums []int, k int) int {
	freq := make(map[int]int)
	left := 0
	right := 0
	value := -1
	countGreaterThanK := 0

	for right, value = range nums {
		freq[value] += 1
		if freq[value] == k+1 {
			countGreaterThanK += 1
		}

		if countGreaterThanK > 0 {
			freq[nums[left]] -= 1
			if freq[nums[left]] == k {
				countGreaterThanK -= 1
			}
			left += 1
		}
	}

	return right + 1 - left
}
