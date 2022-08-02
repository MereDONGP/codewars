from ntpath import join
from os import sep


def descending_order(num):

    listing = []

    a = str(num)

    for i in a:
        listing.append(i)

    listing.sort(reverse=True)

    c = "".join(listing)

    return int(c)



descending_order(42145)