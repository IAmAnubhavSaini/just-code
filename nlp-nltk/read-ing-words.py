#!/usr/bin/env python

for line in open("words.txt"):
    for word in line.split():
        if word.endswith("ing"):
            print(word)


