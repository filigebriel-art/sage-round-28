#include<iostream>
using namespace std;
double sum(double x, double y){
	 return x+y;
}

 double sub(double x, double y){
 	return x-y;
 }
 double pro(double x ,double y){
 	return x*y;
 }
 double divide(double x,double y){
 	return x/y;
 }
int main(){
	double x,y,a,b,c;
	char op,choice;
	cout<<"Which one do you want"<<endl;
	
	cout<<"a....calculator"<<endl;
	cout<<"b....multiplication table"<<endl;
	cout<<"c....star"<<endl;
	cin>>choice;
	if(choice=='a'){
	
	
	
	
	
	do{
		cout<<"choose the "<<endl;
		cout<<"1....adding"<<endl;
		cout<<"2....substraction"<<endl;
		cout<<"3....production"<<endl;
		cout<<"4....divide"<<endl;
		cout<<"5....Exit"<<endl;
		cin>>op;
		
		if(op>='1' && op<='4'){
			cout<<"enter the first num"<<endl;
			cin>>x;
			cout<<"enter the second num"<<endl;
			cin>>y;
		}
		if(op=='1'){
			cout<<"sum  :"<<sum(x,y)<<endl;
		}
		else if(op=='2'){
			cout<<"sabstraction  :"<<sub(x,y)<<endl;
		}
		else if(op=='3'){
			cout<<"product  :"<<pro(x,y)<<endl;
		}
		else if(op=='4'){
			if(y!=0){
				cout<<"divide  :"<<divide(x,y)<<endl;
		}else{
			cout<<"undefine"<<endl;
		}
		}else if(op=='5'){
			cout<<"Exiting......"<<endl;
		}else{
			cout<<"unsupport"<<endl;
		}
			
			
	}while(op!='5');
	}
	else if(choice=='b'){
        cout<<"what no you want "<<endl;
        cin>>x;
        for(int i=0; i<=x; i++){
        	for(int j=0; j<=x; j++){
        		cout<<i*j<<"\t";
			}
			cout<<endl;
		}
	}
	else if(choice=='c'){
		cout<<"put stars you want"<<endl;
		cout<<"a....rectangle"<<endl;
		cout<<"b...tringle"<<endl;
		cout<<"c...pyramid"<<endl;
		cin>>choice;
		if(choice=='a'){
			cout<<"Enter the length"<<endl;
			cin>>x;
			for(int i=0; i<=x; i++){
				for(int j=0; j<=x; j++){
					cout<<"*"<<"\t";
				}
				cout<<endl;
			}
			
		}
		else if(choice=='b'){
			cout<<"enter the length"<<endl;
			cin>>x;
			for(int i=0; i<=x; i++){
				for(int j=0; j<=i; j++){
					cout<<" *"<<"\t";
				}
				cout<<""<<endl;
		}
	}
	   else if(choice=='c'){
	   	cout<<"Enter the length"<<endl;
	   	cin>>x;
	   	for(int i=0; i<=x; i++){
	   		for(int j=0; j<=x; j++){
	   			cout<<" *"<<"\t";
			   }
			   cout<<endl;
		   }
	   }
}
	return 0;
}