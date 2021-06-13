def narcissistic( value ):
    strings = str(value)

    sum = 0 

    for i in range(len(strings)):
        sum = sum + int(strings[i])**len(strings)

    if value == sum:
        return True

    return False


a = narcissistic(1938)

print(a)