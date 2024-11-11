# dumping leetcode code here...

```javascript


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const answers = temperatures.map(_ => 0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop();
            answers[index] = i - index;
        }
        stack.push(i);
    }
    return answers;
};

/** works but fails for long input [9999 *99, 100]
 * https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} ts
 * @return {number[]}
 */
var dailyTemperatures = function (ts) {
    const len = ts.length;
    const answers = [];
    for(let i = 0; i < len; i++) {
        if(ts[i] < ts[i+1]) {
            answers[i] = 1;
        } else {
            let found = false;
            let j = i + 1;
            while(!found && j < len) {
                if(ts[i] < ts[j]) {
                    found = true;
                }
                j++;
            }
            answers[i] = found ? j - i - 1 : 0;
        }
    }
    return answers;
};

StockSpanner.prototype.next = function (price) {
    let span = 1;

    while (this.store.length > 0 && this.store[this.store.length - 1][1] <= price) {
        const [lastSpan, lastPrice] = this.store.pop();
        span += lastSpan;
    }
    this.store.push([span, price]);
    return span;
};

var StockSpanner = function () {
    //https://leetcode.com/problems/online-stock-span
    this.store = [Infinity];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    // save the value
    this.store.push(price);

    let i = this.store.length - 1;
    while (i >= 0 && this.store[i] <= price) {
        i--;
    }
    return this.store.length - 1 - i;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

/**
 * https://leetcode.com/problems/max-number-of-k-sum-pairs
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums = nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let count = 0;
    while(left < right) {
        if(nums[left] + nums[right] === k) {
            count++;
            left++;
            right--;
        } else if(nums[left] + nums[right] > k) {
            right--;
        } else {
            left++;
        }
    }
    return count;
};

/**
 * https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let si = 0;
    let ti = 0;
    while(si < s.length && ti < t.length) {
        if(s[si] === t[ti]) {
            ti++;
        }
        si++;
    }
    return t.length - ti;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    if(t.length === 1) {
        return s.includes(t) ? 0 : 1;
    }
    let count = 0;
    let index = 0;
    
    for (const ch of t) {
        const foundIndex = s.indexOf(ch, index);
        // console.log({ch, foundIndex, index, count})
        if(foundIndex >= index) {
            index = foundIndex + 1;
            count += 1;
        } else {
            break;
        }
    }
    return t.length - count;
};

/** https://leetcode.com/problems/number-of-matching-subsequences/
 * @param {string} target
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(target, words) {
    let count = 0;
    for(const word of words) {
        if(isSubsequence(word, target)) {
            count++;
        }
    }
    return count;
};

/**
 * https://leetcode.com/problems/is-subsequence/
 * @param {string} source
 * @param {string} target
 * @return {boolean}
 */
var isSubsequence = function (source, target) {
    if (source === "") {
        return true;
    }
    let searchIndex = 0;
    let foundCount = 0;

    for (const ch of source) {
        const foundIndex = target.indexOf(ch, searchIndex);
        if (foundIndex >= searchIndex) {
            searchIndex = foundIndex + 1;
            foundCount += 1;
        } else {
            return false;
        }
    }
    return foundCount === source.length;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (t === s) { return true; }
    if (t.length === 0) {
        return false;
    }
    if (s.length === 0) {
        return true;
    }
    if (s.length === 1) {
        return t.includes(s);
    }

    const splitted = t.split(s[0]).filter(x => !!x && x.length >= (s.length - 1));
    return splitted.some((split) => {
        let ti = 0;
        let si = 1;
        while (ti < split.length && si < s.length) {
            if (split[ti] === s[si]) {
                si++;
            }
            ti++;
        }
        if (si === s.length) {
            return true;
        }
    });
};

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    return [celsius + 273.15, (celsius * 1.8) + 32.00]
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let largest = -Infinity;
    let smallest = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const c = nums[i];
        largest = Math.max(largest, c);
        smallest = Math.min(smallest, c);
    }

    while (smallest !== 0) {
        [largest, smallest] = [smallest, largest % smallest];
    }
    return largest;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    const r = Math.sqrt(n);
    if (Math.floor(r) !== r) {
        return false;
    }

    for (let i = 2; i * i <= r; i += 1) {
        if (n % i === 0) { return false; }
    }

    return r > 1;

};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) { return ""; }
    if(str2 === "") { return str1; }
    return gcdOfStrings(str2, str1.slice(0, str1.length % str2.length));
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) { return ""; }
    if (str2 === "") { return str1; }
    const l1 = str1.length;
    const l2 = str2.length;
    // if (l1 === l2) { return str1 === str2 ? str1 : ""; }
    // if (l1 < l2) { return gcdOfStrings(str2, str1); }
    return gcdOfStrings(str2, str1.slice(0, l1 % l2));
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let smallest = Infinity;
    let largest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) { largest = nums[i]; }
        if (nums[i] < smallest) { smallest = nums[i]; }
    }
    return gcd(largest, smallest);
};

function gcd(l, s) {
    while (s !== 0) {
        [l, s] = [s, l % s];
    }
    return l;
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    if(!word1 && !word2) {
        return "";
    }
    if(!word1) {
        return word2;
    }
    if(!word2) {
        return word1;
    }
    const l1 = word1.length;
    const l2 = word2.length;
    const less = l1 < l2 ? l1 : l2;
    const out = [];
    for(let i = 0; i < less; i+=1) {
        out.push(word1[i]);
        out.push(word2[i]);
    }
    return out.join('') + word1.slice(less) + word2.slice(less);
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    if(!word1 && !word2) {
        return "";
    }
    if(!word1) {
        return word2;
    }
    if(!word2) {
        return word1;
    }
    return zip(word1.split(''), word2.split('')).join('');
};

function zip(a1, a2) {
    const l1 = a1.length;
    const l2 = a2.length;
    const l = l1 < l2 ? l1 : l2;
    const out = [];
    for(let i = 0; i < l; i += 1) {
        out.push(a1[i]); 
        out.push(a2[i]); 
    }
    return out.concat(a1.slice(l)).concat(a2.slice(l));
}
```

candies
```javascript
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const mostCandies = Math.max.apply(null, candies);
    return candies.map(c => c + extraCandies >= mostCandies);
};
```

candies placement
```javascript
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let placed = 0;

    for(let i = 0; i < flowerbed.length; i+=1) {
        if(flowerbed[i-1] === 1 || flowerbed[i+1] === 1 || flowerbed[i] === 1) {
            continue;
        }
        placed += 1;
        flowerbed[i] = 1;
    }
    
    return placed >= n;
};
```

The trick here is that #javascript doesn't throw error when array access index is out of bounds.

Reverse vowels
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0;
    let right = s.length - 1;
    const out = s.split('');
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    while(left < right) {
        while(!vowels.includes(s[left]) && left < right) {
            left += 1;
        }
        while(!vowels.includes(s[right]) && left < right) {
            right -= 1;
        }
        if(left >= right) {
            break;
        }
        const tmp = out[left];
        out[left] = out[right];
        out[right] = tmp;
        left += 1;
        right -= 1;
    }

    return out.join('');
};
```

Reverse words
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().replace(/[ ]{2,}/g, ' ').split(" ").reverse().join(' ');
};
```

This again is due to #javascript being helpful here. `/[ ]{2,}/g` means 2 or more spaces, globally in the string.

array product except self
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;
    const left = [nums[0]];
    const right = new Array(len);
    right[len - 1] = nums[len - 1];
    for(let i = 1; i < len; i += 1) {
        left[i] = left[i-1] * nums[i];
    }
    for(let j = len - 2; j >= 0; j -= 1) {
        right[j] = right[j+1] * nums[j];
    }
    console.log({left, right});
    return nums.map((n, i) => {
        if(i > 0 && i < len - 1) {
            return left[i-1] * right[i+1];
        } else if(i === 0) {
            return right[i+1];
        } else {
            return left[i-1];
        }
    });
};
```

Increasing triplet subsequence
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    const len = nums.length;
    const left = [nums[0]];
    const right = new Array(len);
    right[len - 1] = nums[len - 1];

    for (let i = 1; i < len; i += 1) {
        left[i] = Math.min(left[i - 1], nums[i]);
    }
    for (let j = len - 2; j >= 0; j -= 1) {
        right[j] = Math.max(right[j + 1], nums[j]);
    }
    for (let i = 1; i < len - 1; i += 1) {
        if (left[i - 1] < nums[i] && nums[i] < right[i + 1]) {
            return true;
        }
    }
    return false;
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    const len = nums.length;
    
    let a = Number.MAX_SAFE_INTEGER;
    let b = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
        if (nums[i] <= a) {
            a = nums[i];
        } else if (nums[i] <= b) {
            b = nums[i];
        } else {
           return true;
        }
    }
    return false;
};
```

compress string
```javascript
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let writingIndex = 0;
    let previousChar = chars[0];
    let count = 1;
    const len = chars.length;

    for (let readingIndex = 1; readingIndex < len; readingIndex++) {
        if (chars[readingIndex] !== previousChar) {
            chars[writingIndex++] = previousChar;
            if (count > 1) {
                count = count.toString();
                for (let i = 0; i < count.length; i++) {
                    chars[writingIndex++] = count[i];
                }
            }
            previousChar = chars[readingIndex];
            count = 1;
        } else {
            count += 1;
        }
    }
    chars[writingIndex++] = previousChar;
    if (count > 1) {
        count = count.toString();
        for (let i = 0; i < count.length; i++) {
            chars[writingIndex++] = count[i];
        }
    }
    return writingIndex
};
```
