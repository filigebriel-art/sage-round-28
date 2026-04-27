#include<iostream>
using namespace std;

string clacgrade(double x){
		if(x>=90){
		return "A+";
		
	}
	else if(x>=85){
		return "A";
		
		
	}
	else if(x>=80){
		return "A-";
		
	}
	else if(x>=70){
		return "B";
	}
	else if (x>=60){
		return "C";
		
	}
	else {
		return "F";
	}
	
}

int main(){
	double scoreabebe;
	double scorekebede;
cout<<"enter the score of abebe: ";
cin>>scoreabebe;
cout<<"enter score of kebede";
cin>>scorekebede;
cout<<"score of Abebe: "<<clacgrade(scoreabebe)<<endl;
cout<<"score of Kebede: "<<clacgrade(scorekebede)<<endl;
	
	return 0;
}
