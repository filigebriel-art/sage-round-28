#include <iostream>
using namespace std;

int main() {
    int m = 5;

    for (int i = 1; i <= m; i++) {

        
        for (int j = 1; j <= m - i; j++) {
            cout << " ";
        }

        
        for (int k = 1; k <= i; k++) {
            cout << "*";
        }

        cout << endl;
    }

    return 0;
}