def solution(number):
    total = 0
    for i in range(1 , number):
        if number  <  0:
            return 0
        elif i % 3  == 0 or i % 5 == 0:
            total = total + i
    
    return total

a = solution(200)
print(a)
