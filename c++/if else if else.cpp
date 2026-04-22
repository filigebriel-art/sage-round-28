#include<iostream>
using namespace std;
int main(){
	int score;
	cout<<"enter the score :";
	cin >>score;
	if (score>90){
		cout<<"A+";
		
	}else if(score>80){
		cout<<"A";
		
	}else{
		cout<<"F";
	}
	return 0;
}
