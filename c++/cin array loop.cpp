#include <iostream>
using namespace std;
int main(){
	int num[5];
	cout<<"enter 5 numbers"<<endl;
	for (int i=1; i<=5; i++){
		cin>>num[i];
	}
	for (int i=1; i<=5; i++){
		cout<<num[i]<<endl;
	}
	return 0;
}
