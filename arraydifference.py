def array_diff(a, b):
    final_list = []

    if len(a) == 0 or len(b) == 0:
        return a
    for i in range(len(a)):
        if a[i] in b:
            print("yes")
        else:
            final_list.append(a[i])

    return final_list 
