for i in range (1,16):
    if i % 2 == 0:
        if i % 3 == 0:  
            print(i,"divisible by 2 and 3")
        else:
            print(i,"divisible by 2")
    if i % 3 == 0: 
        print(i,"divisible by 3")
    