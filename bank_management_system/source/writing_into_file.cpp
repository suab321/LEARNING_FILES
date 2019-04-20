#include<iostream>
#include<string>
#include<map>
#include<fstream>
#include<sstream>

class Write{
   public:
    std::string name;
    int age;
    float initial_amount;

    Write(std::string name,int age,float initial_amount){
        this->age=age;
        this->initial_amount=initial_amount;
        this->name=name;
    }
    void writeToFile(Write *d){
        std::fstream file;
        file.open("./record.txt");
        std::string name;
        int last_index=0;
        while(getline(file,name)){
           last_index=(int)name[0]-48;
        }
        std::cout<<"last index is : "<<last_index<<std::endl;
        file<<last_index+1<<" "<<"Name : "<<d->name<<"Age : "<<d->age<<"Amount : "<<d->initial_amount;
    }
};