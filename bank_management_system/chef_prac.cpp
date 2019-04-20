#include<iostream>
#include<string>

using namespace std;

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        long int arr[1000000];
        for(long int i=1;i<=n;i++)
            cin>>arr[i];
            int xt=0;
        for(long int i=1;i<n;i+2){
            if(i+i+1 == arr[i]+arr[i+1])
                continue;
            else{
                xt=1;
                break;
            }
        }
        if(xt)
            cout<<"NO";
        else
            cout<<"YES";
    }
    return 0;
}