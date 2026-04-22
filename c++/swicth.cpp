#include<iostream>
using namespace std;
int main(){
	int days;
	cout<<"enter number of the day : ";
	cin>>days;
	switch(days){
		case 1:
			cout<<"mo";
			break;
		case 2:
				cout<<"tu";
         		break;
		case 3:
			cout<<"we";
			break;
		case 4:
			cout<<"thu";
			break;
		case 5:
			cout <<"fri";
			break;
		case 6:
			cout <<"satu";
			break;
		case 7:
			cout <<"sun";
			break;
		default:
			cout<<"day not found";
							
			
	}
	return 0;
}
