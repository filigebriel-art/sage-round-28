#include<iostream>
using namespace std;
double sum(double x,double y){
return x+y;
}
double substract(double x,double y){
	return x-y;
}
double product(double x, double y){
	return x*y;
}
double divide (double x, double y){
	return x/y;
}


int main(){
	double x,y;
	char op;
     
     do{
	 
	  cout<<"chousse the operation"<<endl;
	  cout<<"1...sumation"<<endl;
	  cout<<"2....substraction>>"<<endl;
	  cout<<"3....product"<<endl;
	  cout<<"4....divide"<<endl;
	  
	  
	  cin>>op;
	  if(op>='1' && op<='4'){
	  	cout<<"enter the first num"<<endl;
	  	cin>>x;
	  	
	  	cout<<"enter the second num"<<endl;
	  	cin>>y;
	  }
	  
	  if(op=='1'){
	  	cout<<sum(x,y)<<endl;
	  	}else if(op=='2'){
	  		cout<<substract(x,y)<<endl;
		  }else if(op=='3'){
		  	cout<<product(x,y)<<endl;
		  }
		  else if(op=='4'){
		  	if(y!=0){
		  		cout<<divide(x,y)<<endl;
			  }
			  else{
			  	cout<<"undifine"<<endl;
			  }
		  }
	  }
	  
	  
	  
	
while(op!=4);
	
	return 0;
}