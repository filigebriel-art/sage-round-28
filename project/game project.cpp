#include<iostream>
#include<cstdlib>  
#include<ctime> 
using namespace std;
int main(){
	int secret,guess;
	
	int attempt=0;
	srand(time(0));
	secret=rand()%100+1;
	cout<<"welcome to guessing name "<<endl;
	do{
		cout<<"guess numbers from  1-100   :"<<endl;
		cin>>guess;
		attempt++;
		if(guess<secret){
			cout<<"too low"<<endl;
		}
		else if(guess>secret){
			cout<<"too high "<<endl;
			
		}
		else{
			cout<<"correct you got it at "<<attempt<<" trials"<<endl;
			
		}
	}while(guess!=secret);
	cout<<"thank you for having fun with ua ....."<<endl;
	return 0;
}