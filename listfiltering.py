def filter_list(l):
    final = []
    for i in l:
        if type(i) != str:
            final.append(i)
    
    return final


a  = filter_list([1,2,'a','b'])

print(a)