def firstn(end):
    cur = 0
    while cur < end:
        yield cur
        cur += 1


first100 = firstn(100)
sum_f100 = sum(first100)
print(sum_f100)

