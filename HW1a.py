# using append write a function which creates a double nested list of 9x9 zeros and return it
# ex: [[0,0,..,0],[0,0,..,0],...[0,0,..,0]]

nested_list = [[0 for i in range(0,9)] for i in range(0,9)]
nested_list[0][0] = 5
nested_list[0][1] = 3 
nested_list[0][2] = 4
nested_list[1][0] = 6
nested_list[1][1] = 7
nested_list[1][2] = 2
nested_list[2][0] = 1
# nested_list[2][1] = 9
nested_list[2][2] = 8 

row = range(3)
col = range(3)

def isNumberPresent(board, n):
    for r in row:
        for c in col: 
            if board[r+3][c+3] == n:
                print(n, "is present") 
            print(r, c)
            print(board[r][c])
print(isNumberPresent(nested_list, n = 8))

# for i in range(0,9): 
#     print(str(nested_list[i]))

# using the string addition operator ("a" + "b" => "ab"), and the newline operator "\n"
# write a function that takes the previous double array and print out one new line per single array

result = ""
for i in range(0,9): 
    result = result + str(nested_list[i]) + "\n"
print(result) 

