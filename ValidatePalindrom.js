function validatePalindrome(str) {
    str = str.toLowerCase();
    let len = str.length;
    console.log(str);

var newString = str.replace(/[^A-Z0-9]/ig, "");
    console.log(newString)
    let i = 0;
    let j = str.length - 1;
    let flag = false;
    while (i < j)
    {
        console.log(str[i]);
        console.log(str[j]);
        
    }  
    if (flag == true) {
        console.log(false)
    }
    else console.log(true);
}

//For the purpose of user debugging.
validatePalindrome("A man, a plan, a canal: Panama");

module.exports = validatePalindrome