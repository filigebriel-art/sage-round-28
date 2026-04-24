#include<iostream>
using namespace std;

int main(){
	double x,y;
cout<<"enter the score : ";
cin>>x,y;
	if(x>=90){
		cout<<"A+";
		
	}
	else if(x>=85){
		cout<<"A";
		
		
	}
	else if(x>=80){
		cout<<"A-";
		
	}
	else if(x>=70){
		cout<<"B";
	}
	else if (x>=60){
		cout<<"C";
		
	}
	else {
		cout<<"F";
	}
	return 0;
}
