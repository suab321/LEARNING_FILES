#include<iostream>
#include<fstream>
#include<string>
#include<map>
#include<sstream>

char find_key(std::string line){
    const char *a=line.c_str();
    return a[6];
}

int main(){
  const std::string name="text";
  std::map<int,std::string> stu;
  std::map<int,std::string>::iterator r;
  for(int i=0;i<10;i++){
      std::ostringstream str1;
      str1<<i;
      stu.insert(std::pair<int,std::string>(i,(name+str1.str())));
  }
  std::ofstream out;
  out.open("record.txt");
  std::string a;
  std::string b;
  for(r=stu.begin();r!=stu.end();r++){
    //std::cout<<r->first<<r->second<<std::endl;
    a=r->first;
    b=r->second;
    out<<"key : "<<r->first<<" value is : "<<r->second<<std::endl;
  }
  a="";
  b="";
  out.close();

  std::ifstream in;
  std::ostringstream line_of_file;
  in.open("record.txt");
  char a1[100];
  int lastkey;
  while(getline(in,a)){
      lastkey=(int)find_key(a)-48;
  }
  in.close();
  std::cout<<"last key is "<<lastkey;

  std::map<int,std::string> txt;
  

    return 0;
}