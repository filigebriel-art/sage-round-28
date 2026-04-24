#include <iostream>
using namespace std;
int sum(int x, int y, int k){
	return x+y+k;
	
}

int main(){
	int x,y,k;
	cout<<"enter the first num ";
	cin>>x;
	cout<<"enter the second num: ";
	cin>>y;
		cout<<"enter the third num: ";
	cin>>k;
	cout<<"sum : "<<sum(x,y,k);
	return 0;
}
