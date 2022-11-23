#  write a function that checks if a number is a prime using the signiture "def isPrime(n)".
# using the isPrime function, write a function that prints out all the primes up to 500

def isPrime(n): 
    actual_potential_factors = range(2,n)
    for i in actual_potential_factors: 
        if n % i == 0: 
            return False
    return True 
print(isPrime(573))    

def printPrimes(n):
    prime = []
    for i in range(2,n + 1): 
        if isPrime(i):
            prime.append(i)
    return prime
prime_list = printPrimes(500)
print(prime_list) 

# number of hot days 
temperatures = [78,76,45,99,104,83,82]
def number_of_hot_days(temperatures, limit):
    count = 0 
    for i in temperatures: 
        if i >= limit: 
            count = count + 1
    return count 
count_temp = number_of_hot_days(temperatures, limit = 80)
print(count_temp)

# outside function 
x = 10
y = x*2
x = y*2 
print(x)
