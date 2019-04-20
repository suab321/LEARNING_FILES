#include<iostream>
#include<string.h>
#include<fstream>
#include<map>
#include<cstdio>

using namespace std;
int money_withdrawl(float,char *);
void make_changes(float,char *);

class Account{
    public:
        int id;
        char name[50];
        int age;
        float amount;
        void setter();
       
};

void Account::setter(){
    char name[50];int age;float amount;
    cout<<"Enter your age"<<endl;
    cin>>age;
    cout<<"Enter the amount"<<endl;
    cin>>amount;
    cout<<"Enter your name"<<endl;
    cin.ignore();
    cin.get(name,50);
    this->age=age;
    this->amount=amount;
    strncpy(this->name,name,sizeof(Account::name));
}

void save_to_file(Account acc){
    ofstream file;
    file.open("record.dat",ios::app|ios::binary);
    file.write(reinterpret_cast<char *>(&acc),sizeof(Account));
    file.close();
}

//showing ddetails of all account holders//
void show_accounts(){
    Account acc;
    ifstream file;
    file.open("record.dat",ios::in|ios::binary);
    if(!file){
        cout<<"File is not present"<<endl;
        return;
    }
    while(!file.eof()){
        file.read(reinterpret_cast<char *>(&acc),sizeof(Account));
        cout<<"Name is "<<acc.name<<endl;
        cout<<"Age is "<<acc.age<<endl;
        cout<<"Balance is "<<acc.amount<<endl;
    }
    file.close();
}
//function ends//

//withdrawing money functions//
void withdraw_money(){
    cout<<"Enter the name of person"<<endl;
    char name[50];
    cin.ignore();
    cin.get(name,50);
    cout<<"Enter the amount"<<endl;
    float amount;
    cin>>amount;
    map<int,Account> store;
    ifstream file;
    file.open("record.dat",ios::binary|ios::in);
    Account acc;
    while(!file.eof()){
        file.read(reinterpret_cast<char *>(&acc),sizeof(Account));
        if(!strcmp(acc.name,name)){
            cout<<"His name is "<<acc.name<<endl;
            if(acc.amount<amount){
                cout<<"Insufficient balance"<<endl;
                return;
            }
            else
                acc.amount=acc.amount-amount;
        }
        store.insert(pair<int,Account>(1,acc));
    }
    file.close();
    remove("record.dat");
    ofstream file1;
    file1.open("record.dat",ios::app|ios::binary);
    map<int,Account>::iterator r;
    for(r=store.begin();r!=store.end();r++){
        file1.write(reinterpret_cast<char *>(&r->second),sizeof(Account));
    }
    file1.close();
}
//function ends//


//main function//
int main(){
    cout<<"1.Create New Account"<<endl;
    cout<<"2.Search for Account"<<endl;
    cout<<"3.Account Holders List"<<endl;
    cout<<"4.Withdraw from Account"<<endl;
    cout<<"5.Deposit into Account"<<endl;
    cout<<"6.Modify Account"<<endl;
    cout<<"7.Delete Accout"<<endl;
    cout<<"8.Exit"<<endl;
    int ch;
    cout<<"Enter your choice"<<endl;
    cin>>ch;
    switch (ch)
    {
    case 1:{
        Account acc;
        acc.setter();
        save_to_file(acc);
        break;
    }
    case 3:{
        show_accounts();
        break;
    }
    case 4:{
        withdraw_money();
        break;
    }
        
    
    default:
        break;
    }

}