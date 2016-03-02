//Helper Function
function checkPal(string) {
    var back = string.length;
    for (var idx = 0; idx <= back; idx++) {
        back -= 1;
        if (idx >= back) {
            return true
        }
        if (string[idx] != string[back]) {
            return false;
        }
    }
}


//Function to find the largest palindrome.
function largestPalindrome(string) {
    string = string.toLowerCase() + " ";
    var counter = 0;
    var pal = ""
    var largest = 0;
    var answer = ""

    for (var idx = 0; idx < string.length; idx++) {
        if (string[idx] != " ") {
            pal += string[idx];
            counter++
            console.log(counter)
        } else {
            if (pal.length && checkPal(pal)) {
                if (counter > largest) {

                    largest = counter;
                    console.log(largest)
                    answer = pal;
                    counter = 0;
                    pal = "";
                }
            } else {
                counter = 0;
                pal = "";
            }
        }
    }
    return answer
}

largestPalindrome("abba madam oooooooo")