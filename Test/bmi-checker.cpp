#include<iostream>
using namespace std;
int main(){
	double weight,height,BMI;
	
	cout<<"enter your weight"<<endl;
	cin>>weight;
	cout<<"enter your height"<<endl;
	cin>>height;
	BMI=weight*height;
	if(BMI<18.5){
		cout<<"underweight"<<endl;
		
	}else if(BMI>18.5 && BMI<24.9){
		cout<<"Normal"<<endl;
	}else if(BMI>25 && BMI<29.9){
		cout<<"Overweight"<<endl;
	}else{
		cout<<"Obese";
	}
	
	return 0;
}
