#include<iostream>
#include<climits>
using namespace std;

int kadane(int arr[], int n)
{
    int currsum = 0;
    int maxsum = INT_MIN;
    for(int i=0; i<n; i++){
        currsum += arr[i];
        if (currsum<0){
            currsum = 0;
        }
        maxsum = max(maxsum, currsum);
    }
    return maxsum;
}

int main()
{
    int n;
    cout<<"Enter number of elements in array: ";
    cin>>n;
    int a[n];
    cout<<"Enter array elements: "<<endl;
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    cout<<"\nArray is: ";
    for(int i=0; i<n; i++){
        cout<<" "<<a[i];
    }
    cout<<endl;

    int wrapsum;
    int nonwrapsum;                 //Kadane's algorithm
    nonwrapsum = kadane(a,n);
    int totalsum = 0;
    for(int i=0; i<n; i++){
        totalsum += a[i];
        a[i] = -a[i];
    }

    wrapsum = totalsum + kadane(a,n);

    cout<<"\nMaximum circular subarray sum is: "<<max(wrapsum, nonwrapsum)<<endl;

    return 0;
}