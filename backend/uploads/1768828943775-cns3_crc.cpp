#include <iostream>
using namespace std;

// Function to perform XOR division for CRC calculation
void performDivision(int temp[], int fs, int gs, int g[]) {
    for (int i = 0; i < fs; i++) {
        if (temp[i] == 1) {  // Only divide if MSB is 1
            for (int j = 0; j < gs; j++) {
                temp[i + j] = temp[i + j] ^ g[j];
            }
        }
    }
}

int main() {
    int fs, gs;
    
    // Get Frame from user
    cout << "Enter Frame size: ";
    cin >> fs;
    int f[fs + 20];  // Extra space for appended bits
    
    cout << "Enter Frame bits (space separated): ";
    for (int i = 0; i < fs; i++) {
        cin >> f[i];
    }

    // Get Generator polynomial from user
    cout << "Enter Generator size: ";
    cin >> gs;
    int g[gs];
    
    cout << "Enter Generator bits (space separated): ";
    for (int i = 0; i < gs; i++) {
        cin >> g[i];
    }

    // Display input frame and generator
    cout << "\nSender Side:";
    cout << "\nOriginal Frame: ";
    for (int i = 0; i < fs; i++) {
        cout << f[i] << " ";
    }
    
    cout << "\nGenerator Polynomial: ";
    for (int i = 0; i < gs; i++) {
        cout << g[i] << " ";
    }

    // Append zeros to the frame (equal to generator size - 1)
    int rs = gs - 1;
    for (int i = fs; i < fs + rs; i++) {
        f[i] = 0;
    }

    cout << "\nFrame after appending " << rs << " zeros: ";
    for (int i = 0; i < fs + rs; i++) {
        cout << f[i] << " ";
    }

    // Create a temporary array for division
    int temp[fs + rs];
    for (int i = 0; i < fs + rs; i++) {
        temp[i] = f[i];
    }

    // Perform CRC division
    performDivision(temp, fs, gs, g);

    // Extract CRC bits (remainder)
    int crc[rs];
    for (int i = 0, j = fs; i < rs; i++, j++) {
        crc[i] = temp[j];
    }

    cout << "\nCRC bits: ";
    for (int i = 0; i < rs; i++) {
        cout << crc[i] << " ";
    }

    // Create transmitted frame (original data + CRC)
    int tf[fs + rs];
    for (int i = 0; i < fs; i++) {
        tf[i] = f[i];
    }
    for (int i = fs, j = 0; i < fs + rs; i++, j++) {
        tf[i] = crc[j];
    }

    cout << "\nTransmitted Frame: ";
    for (int i = 0; i < fs + rs; i++) {
        cout << tf[i] << " ";
    }

    // Simulate transmission with possible error
    cout << "\n\nReceiver Side:";
    cout << "\nEnter received frame (with possible errors): ";
    int received[fs + rs];
    for (int i = 0; i < fs + rs; i++) {
        cin >> received[i];
    }

    // Check for errors
    for (int i = 0; i < fs + rs; i++) {
        temp[i] = received[i];
    }

    // Perform division on received frame
    performDivision(temp, fs, gs, g);

    // Check remainder
    bool errorDetected = false;
    for (int i = fs; i < fs + rs; i++) {
        if (temp[i] != 0) {
            errorDetected = true;
            break;
        }
    }

    if (!errorDetected) {
        cout << "\nNo errors detected. Frame is correct.";
    } else {
        cout << "\nError detected in the received frame!";
        cout << "\nRemainder: ";
        for (int i = fs; i < fs + rs; i++) {
            cout << temp[i] << " ";
        }
    }

    return 0;
}