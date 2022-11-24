# def max(lst): # returns the maximum element in the list, do not use python builtin, use for Loop
lst = [1,5,7,12,-3,1,65,-8,8,3,6,45,1,75,18,6,64,27, -2, -3,-45,-14,-6,-7,6,6,4,4,2,1,1]
def max(lst): 
    max_value = lst[0]
    for i in lst: 
        if i > max_value: 
            max_value = i
    return max_value 
print(max(lst))

# def min(lst): # returns the min element in the list, do not use python builtin, use for Loop
lst = [1,5,7,12,-3,1,65,-8,8,3,6,45,1,75,18,6,64,27, -2, -3,-45,-14,-6,-7,6,6,4,4,2,1,1]
def min(lst): 
    min_value = lst[0]
    for i in lst: 
        if i < min_value: 
            min_value = i
    return min_value 
print(min(lst))

# def largerThan(lst, threshold): # returns a list of all the numbers which are > threshold
lst = [1,5,7,12,-3,1,65,-8,8,3,6,45,1,75,18,6,64,27, -2, -3,-45,-14,-6,-7,6,6,4,4,2,1,1]
def largerThan(lst, threshold): 
    larger_value = []
    for i in lst: 
        if i > threshold: 
            larger_value.append(i)
    return larger_value 
exceed_num = largerThan(lst, threshold = 0)
print(exceed_num)

# def smallerThan(lst, threshold): # returns a list of all the numbers which are < threshold
lst = [1,5,7,12,-3,1,65,-8,8,3,6,45,1,75,18,6,64,27, -2, -3,-45,-14,-6,-7,6,6,4,4,2,1,1]
def smallerThan(lst, threshold): 
    smaller_value = []
    for i in lst: 
        if i < threshold: 
            smaller_value.append(i)
    return smaller_value 
below_num = smallerThan(lst, threshold = 0)
print(below_num)

# def countOccurance(lst, n): # return the number of times that n occurs in lst
lst = [1,5,7,12,-3,1,65,-8,8,3,6,45,1,75,18,6,64,27, -2, -3,-45,-14,-6,-7,6,6,4,4,2,1,1]
def countOccurance(lst, n): 
    count = 0
    for i in lst: 
        if i == n: 
            count = count + 1 
    return count
num_times = countOccurance(lst, n = 1)
print(num_times)

# def findDuplicate(lst): # return a list of all duplicate terms that appear more than once, for instance, for the input [1,1,2,3], return [1]. Use countOccurance
lst = [1,5,7,12,-3,1,65,-8,8,3,6,45,1,75,18,6,64,27, -2, -3,-45,-14,-6,-7,6,6,4,4,2,1,1]
new_value = []
def findDuplicate(lst): 
    for i in lst: 
        if i not in new_value and countOccurance(lst, i) > 1:
            new_value.append(i)
    return new_value
num_list = findDuplicate(lst)
print("These are the duplicates",num_list)

# def findFactors(n) # return a list of all factors of n
def findFactors(n):
    for i in range(1,n + 1):
        if n % i == 0: 
            print(i)
print(findFactors(n = 12))


