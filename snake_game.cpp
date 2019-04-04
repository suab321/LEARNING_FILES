#include<iostream>
#include<stdlib.h>
#include<stdio.h>
#include <cstdlib>
#include <unistd.h>
#include <term.h>
#include<ncurses.h>

using namespace std;
void check();

bool game_over=false;
enum direction{STOP=0,LEFT,RIGHT,TOP};
direction dir;
int x,y,x_f,y_f;
int snake[10];

int x1,x2,x3,y1,y2,y3;
char prev_ver;
char prev_hor;
int point=0;

const int width=20;
const int height=20;

void initialize_snake(){
    x1=3;
    x2=3;
    x3=3;
    y1=1,y2=2,y3=3;
}

void setup(){


    game_over=false;
    dir=STOP;
    x=width/2;
    y=height/2;

    x_f=rand() % width;
    y_f=rand() % height;

}

void draw(){

	system("clear");

    for(int i=0;i<width;i++)
        cout<<"#";
    cout<<endl;

    for(int i=0;i<height;i++){
    	for(int j=0;j<width;j++){
    		if(j == 0 || j == width-1)
    			cout<<"#";
    		else if(i == x_f && j == y_f)
    			cout<<"0";
		 else if(i == x3  && j == y1)
			cout<<"*";
		 else if(i == x2  && j == y2)
                        cout<<"*";
		 else if(i == x1  && j == y3)
                        cout<<"*";
    		else
    			cout<<" ";
    	}
    	cout<<endl;
    }

    for(int i=0;i<width;i++)
            cout<<"#";
        cout<<endl;
}

void logic(char a){
	if(snake[0] == x_f && snake[0] == y_f){
		setup();
		return;
	}
	else{
	switch(a){
		case 'w':
		if(y1 == y2 && y2 == y3){
		  x3=x2;
		  x2=x1;
		  x1--;
		}
		else if(x1 == x2 && x2 == x3){
		   x1--;
		}
		else if(x2 == x3 && y2 !=y3){
		   y1=y2;
		   y2=y3;
		}
		else if(y3 == y2 && x1 != x3){
		   x2=x1;
		   x1--;
		   y1=y2;
		}
		else if( x1 == x2 && x1 != x3){
		   x3=x2;y1=y2;y2=y3;x1++;
		}
		check();
		break;


		case  's':
		if(y1 == y2 && y2 == y3){
                  x3=x2;
                  x2=x1;
                  x1++;
                }
                else if(x1 == x2 && x2 == x3){
                   x1++;
                }
                else if(x2 == x3 && y2 !=y3){
                   y1=y2;
                   y2=y3;
                }
                else if(y3 == y2 && x1 != x3){
                   x2=x1;
                   x1++;
                   y1=y2;
                }
                check();
		break;


		case 'd':
		if(x1 == x2 && x3==x1){
		  y1=y2;y2=y3;y3++;
		}
		else if(y1 == y2 && y3 == y1){
		  x2=x1;y2=y3;y3++;x3=x2;
		}
		else if(y1 == y2 && y3 != y1){
		  x3=x2;
		  y1=y2;y2=y3;y3++;
		}
		else if(x3 == x2 && x2 != x1){
		  x2=x1;
		  y2=y3;
		  y1=y2;
		  y3++;
		}
		check();
		break;


		case 'a':
		if(x1 == x2 && x3==x1){
                  y1=y2;y2=y3;y3--;
                }
                else if(y1 == y2 && y3 == y1){
                  x2=x1;y2=y3;y3--;x3=x2;
                }
                else if(y1 == y2 && y3 != y1){
                  x3=x2;
                  y1=y2;y2=y3;y3--;
                }
                else if(x3 == x2 && x2 != x1){
                  x2=x1;
                  y2=y3;
                  y1=y2;
                  y3--;
                }
		check();
		break;
		case 'c':
		game_over=true;
		break;

	}
	}
}

void check(){
	if(x1 == x_f && y3 == y_f){
	  point++;
	  setup();
	}
	if(x1 < 0)
	  x1=height-1;
	if(x2< 0)
	  x2=height-1;
	if(x3 < 0)
	  x3=height-1;
	if(x1 > height)
          x1=0;
        if(x2 > height)
          x2=0;
        if(x3 > height)
          x3=0;
	if(y1 < 0)
	  y1=width-1;
	if(y2 < 0)
	 y2=width-1;
	if(y3 < 0)
	 y3=width-1;
	if(y1 > width)
	 y1=1;
	if(y2 > width)
	 y2=1;
	if(y3 >width)
	 y3=1;


}

int main(){
	initialize_snake();
	setup();
    while(!game_over){
        draw();
	initscr();
	raw();
	keypad(stdscr,TRUE);
	noecho();
	char ch=getch();
	logic(ch);
	refresh();
	endwin();

	cout<<"Your point is: "<<point<<endl;

    }
    return 0;
}



