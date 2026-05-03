#include<iostream>
using namespace std;
int main(){
	int n;
	cout<<"enter the size of multiplication table you want "<<endl;
	cin>>n;
	
	for(int i=1;  i<=n; i++){
		for(int j=1; j<=n; j++){
			cout<<i*j<<"\t";
			}
			cout<<endl;
		}
	return 0;
}
