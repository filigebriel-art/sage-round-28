#include<iostream>
using namespace std;
int main(){
	double score;
	cout<<"enter the score :";
	cin >>score;
	if (score>90){
		cout<<"A+";
		
	}else if(score>80){
		cout<<"A";
		
	}else if(score>75){
		cout<<"B+";
	}
		else if(score>65){
	cout<<"B";
	}
	
	else{
		cout<<"F";
	}
	return 0;
}
