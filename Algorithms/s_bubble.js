// The bubble sort makes multiple passes through a list. 

// It compares adjacent items and exchanges those that are out of order.
// Each pass through the list places the next largest value in its proper place. 

// ------------------------------------
// I made this file when i was learning js; will convert it to a function later

var tab = [15, 1, 53, 5, 56, 32, 25, 919, 85, 6];
var isChanged = true;
var i2 = 0;

while (isChanged) {
    isChanged = false
    for ( c = 0; c <= tab.length; c++) {
        for (i2 = 0; i2 <= (tab.length-1-c); i2++) {
            if (tab[i2] < tab[i2+1]) {
                var tempX = tab[i2];
                var tempY = tab[i2+1];
                tab[i2] = tempY;
                tab[i2+1] = tempX;
                isChanged = true;
            }
        console.log("tab en cour de tri -> " + tab);
        }
    }
}
console.log("tab final -> " + tab)
