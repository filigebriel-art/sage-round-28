#include<iostream>
using namespace std;
int main(){
	int num[5];
	int largenumber;
	cout<<"enter 5 numbers"<<endl;
	for (int i=0; i<=4; i++){
		cin>>num[i];
		
		
	}
	largenumber=num[0];
	for (int i=0; i<=4; i++){
		if(largenumber<num[i]){
			largenumber=num[i];
		}
	}
	
	cout<<"large number : "<<largenumber;
	return 0;
}
