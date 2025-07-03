# luhns-algorithm
Luhn's algorith checks if a number is a valid credit card.

[ 4 ][ 1 ][ 3 ][ 7 ][ 8 ][ 9 ][ 4 ][ 7 ][ 1 ][ 1 ][ 7 ][ 5 ][ 5 ][ 9 ][ 0 ][ 4 ]

Step 1: Double the value of every second digit

[ **8** ][ 1 ][ **6** ][ 7 ][ **16** ][ 9 ][ **8** ][ 7 ][ **2** ][ 1 ][ **14** ][ 5 ][ **10** ][ 9 ][ **0** ][ 4 ]

Step 2: If the resulting doubled number is more than 9, add its two digits together, eg. 14 bcomes 1 + 4 = 5

[ 8 ][ 1 ][ 6 ][ 7 ][ **7** ][ 9 ][ 8 ][ 7 ][ 2 ][ 1 ][ **5** ][ 5 ][ **1** ][ 9 ][ 0 ][ 4 ]

Step 3: Sum the final numbers together.

8 + 1 + 6 + 7 + 7 + 9 + 8 + 7 + 2 + 1 + 5 + 5 + 1 + 9 + 0 + 4 = 80

Step 4: If the sum ends in zero, the number is a valid card number, if not, it is an invalid card number.
