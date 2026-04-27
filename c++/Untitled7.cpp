#include<iostream>
using namespace std;
int sum (int x,int y){
	return x+y;
}
int sum (int x,int y,int k){
	return x+y+k;
}

int main(){
cout<<"sum : "<<sum(4,5,6);
	return 0;
}
