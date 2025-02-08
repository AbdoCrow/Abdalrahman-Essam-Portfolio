// TODO: WRITE YOUR NAME AND ID
// STUDENT NAME: ..............
// STUDENT ID:   ..............

#include <iostream>
#include <string>
using namespace std;

class TextEditor  //Dont change this
{

};

/////////////////////////////////////////////////////////////////////
/////////////////////                           /////////////////////
/////////////////////   DON'T CHANGE THIS CODE  /////////////////////
/////////////////////                           /////////////////////
/////////////////////////////////////////////////////////////////////
int main() {
    TextEditor editor;

    // Insert characters
    editor.insert('H');     // H
    editor.insert('e');     // He
    editor.insert('l');     // Hel
    editor.insert('l');     // Hell
    editor.insert('o');     // Hello

    editor.getText();       // Should Print: Hello

    // Move the cursor left
    editor.left();
    editor.left();

    // Insert character at cursor
    editor.insert(',');     // Hel,lo

    editor.getText();       // Should Print: Hel,lo


    // Remove character before cursor
    editor.remove();        // Hello

    editor.getText();       // Should Print: Hello

    // Move cursor to the beginning
    editor.left();
    editor.left();
    editor.left();
    editor.left();
    
    // Attempt to remove from the beginning
    editor.remove();

    editor.getText();       // Should Print: Hello

    // Attempt to move cursor further left
    editor.left();

    editor.getText();       // Should Print: Hello

    // Move cursor to the end
    editor.right();
    editor.right();
    editor.right();
    editor.right();
    editor.right();

    // Remove character at the end
    editor.remove();        // Hell

    editor.getText();       // Should Print: Hell

    // Attempt to move cursor further right
    editor.right();

    // Print final text
    editor.getText();       // Should Print:  Hell

    editor.insert('o');     // Hello

    editor.getText();       // Should Print:  Hello

    return 0;
}

