#include<iostream>
using namespace std;
double sum(double x,double y){
	return x+y;
}
double min(double x,double y){
	return x-y;
}
double pro(double x,double y){
	return x*y;
}
double div(double x,double y){
	return x/y;
	
}
int main(){
	double x,y;
	int a;
	char op;
	cout<<"which one do you want"<<endl;
	do{
		
	
		cout<<"1...calculator"<<endl;
		cout<<"2....multiplication table"<<endl;
		cout<<"3....pattern"<<endl;
		cout<<"4.....Exit"<<endl;
		cin>>a;
	
		if(a==1){
		
			cout<<"choose the operator :"<<endl;
			cin>>op;
			if(op=='+'){
				cout<<"enter the first num: "<<endl;
				cin>>x;
				cout<<"enter the second num:" <<endl;
				cin>>y;
				cout<<sum(x,y)<<endl;
				
			}
			else if(op=='-'){
				cout<<"enter the first num: "<<endl;
				cin>>x;
				cout<<"enter the second num:" <<endl;
				cin>>y;
				cout<<min(x,y)<<endl;
				
			}
			else if(op=='*'){
				cout<<"enter the first num: "<<endl;
				cin>>x;
				cout<<"enter the second num:" <<endl;
				cin>>y;
				cout<<pro(x,y)<<endl;
			}
			else if (op=='/'){
				cout<<"enter the first num: "<<endl;
				cin>>x;
				cout<<"enter the second num:" <<endl;
				cin>>y;
				
				if(y!=0){
					cout<<div(x,y)<<endl;
					
				}else{
					cout<<"undefine"<<endl;
				}
			}
			else{
				cout<<"wrong opererator "<<endl;
			}
			
		}
		else if(a==2){
			cout<<"enter the number"<<endl;
			cin>>x;
			for(int i=1; i<=x; i++){
				for(int j=1; j<=x; j++){
					cout<<i*j<<"\t";
				}
				cout<<endl;
			}
			
		}
		else if(a==3){
			cout<<"enter num of pattern "<<endl;
			cin>>x;
			for(int i=1; i<=x; i++){
				
				for(int j=1; j<=i; j++){
					cout<<" *"<<"\t";
				}
				cout<<"  "<<endl;
			}
		}
	
		
	}while (a!=0);	
	return 0;
}