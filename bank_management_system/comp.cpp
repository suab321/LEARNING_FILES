#include<iostream>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        long int n,s;
        long int arr[100000];
        cin>>n>>s;
        long int sum=1;
        arr[0]=1;
        long int same_index;
        //int n=arr[0];
        for(long int i=1;i<n;i++){
            if(!(s-sum)%(n-i)){
               same_index=i;
               break;
            }
            else{
                arr[i]=(s-sum)/(n-i);
                sum=sum+arr[i];
            }
        }
        int t;
        for(int i=0;i<n-1;i++){
            if(arr[i] == arr[i+1]){
                t=1;
                same_index=i;
                break;
            }
        }
        if(t)
            cout<<n-same_index-1<<endl;
        else
        {
            cout<<0<<endl;
        }
        
    }

}