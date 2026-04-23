#include<iostream>
using namespace std;
int main(){
	int num[5];
	int smallnumber;
	cout<<"enter 5 numbers"<<endl;
	for (int i=1; i<=4; i++){
		cin>>num[i];
		
		
	}
	smallnumber=num[0];
	for (int i=1; i<4; i++){
		if(smallnumber>num[i]){
			smallnumber=num[i];
		}
	}
	
	cout<<"small number : "<<smallnumber;
	return 0;
}
