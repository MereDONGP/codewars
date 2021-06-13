def solution(s):
    final = []
    counter = 0

    while True:
        if len(s) % 2 == 1:
            if counter == len(s) - 1:
                final.append(s[counter] + "_")
                break
            else:
                final.append(s[counter]+s[counter+1])
                counter += 2
        else:
            if counter - 1 == len(s) -1:
                break
            else:
                final.append(s[counter] + s[counter+1])
                counter += 2

    return final


