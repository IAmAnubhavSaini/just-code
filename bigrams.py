def bigrams(words):
    cur, end = 0, len(words) - 1
    while cur < end:
        yield (words[cur], words[cur + 1])
        cur += 1

print(list(bigrams(['more', 'is', 'said', 'than', 'done'])))


