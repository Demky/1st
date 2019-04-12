# The bubble sort makes multiple passes through a list. 

# It compares adjacent items and exchanges those that are out of order.
# Each pass through the list places the next largest value in its proper place. 

lst = [919, 15, 1, 4, 56, 32, 25, 85, 10, 3]

needSorting = True
i2 = 0

while needSorting :
    needSorting = False  
    for c in range (0, len(lst)):
        for i2 in range (0, len(lst) - 1 - c): # a sorted number is no more checked
            if lst[i2] > lst[i2+1]:                    
                lst[i2], lst[i2+1] = lst[i2+1], lst[i2] #bubble'd
                needSorting = True                          
                print("sorting in progress -> {}".format(lst)) # numbers moving the their right place
        
print("Sorted list : {}".format(lst))
