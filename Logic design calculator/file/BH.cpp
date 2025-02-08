// TODO: WRITE YOUR NAME AND ID
// STUDENT NAME: ..............
// STUDENT ID:   ..............

#include <iostream>
#include <string>
using namespace std;

class BrowserHistory  //Dont change this
{

};

/////////////////////////////////////////////////////////////////////
/////////////////////                           /////////////////////
/////////////////////   DON'T CHANGE THIS CODE  /////////////////////
/////////////////////                           /////////////////////
/////////////////////////////////////////////////////////////////////
int main() {
    BrowserHistory history;

    // Test cases including edge cases
    history.visit("https://www.example.com");
    history.visit("https://www.example.com/page1");
    history.visit("https://www.example.com/page2");

    history.getHistory(); // Prints entire history
    /* 
        Should Print:
        https://www.example.com https://www.example.com/page1 https://www.example.com/page2
    */

    // Going back multiple times
    history.back(); // Returns "https://www.example.com/page1"
    history.back(); // Returns "https://www.example.com"
    history.back(); // Returns ""

    history.getHistory(); // Prints entire history
    /* 
        Should Print:
        https://www.example.com
    */

    // Going forward multiple times
    history.forward(); // Returns "https://www.example.com/page1"
    history.forward(); // Returns "https://www.example.com/page2"
    history.forward(); // Returns ""

    history.getHistory(); // Prints entire history
    /* 
        Should Print Empty Line:
        https://www.example.com https://www.example.com/page1 https://www.example.com/page2
    */

    // Visiting a new page after going back
    history.back(); // Returns "https://www.example.com/page1"
    history.visit("https://www.example.com/newpage"); // Resets forward history

    history.getHistory(); // Prints entire history
    /* 
        Output:
        https://www.example.com https://www.example.com/page1 https://www.example.com/newpage
    */

    return 0;
}