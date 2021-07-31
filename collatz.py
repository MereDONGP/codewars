def collatz (number):
    if number % 2 == 0:
        print(number / 2)
        return number / 2
    if number % 2 == 1:
        print(3 * number + 1)
        return 3 * number + 1

nums = int(input('please type in a number'))

while nums >= 1:
    nums = collatz(nums)
    if nums == 1:
        break
