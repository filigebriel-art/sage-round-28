#include<iostream>
using namespace std;
 double sum(double x, double y){
	return x+y;
}
double sub(double x,double y){
	return x-y;
	
}
double product(double x,double y){
	return x*y;
}
double Div(double x,double y){
	return x/y;
	
}

     int main(){
	 
       double x,y;
          
		  char op;
		  
		  do{
		  	cout<<"choose an operation"<<endl;
		  	cout<<"1.. .ADD "<<endl;
		  	cout<<"2.. .MINUS"<<endl;
		  	cout<<"3...MULTIPLY "<<endl;
		  	cout<<"4... DEVIDE "<<endl;
		  	cout<<"5... EXIT"<<endl;
		  	 
          cin>>op;
		  	
		  if( op>='1' && op<='4' ){
		  
        cout<<"enter the first num : "<<endl;
          cin>>x;
      
         cout<<"enter the second num : "<<endl;
          cin>>y;
     }
          
          if(op=='1'){
          	cout<<"sum : "<<sum(x,y)<<endl;
		  }
		  else if(op=='2'){
		  	cout<<"substraction: "<<sub(x,y)<<endl;
		  }
		  else if(op=='3'){
		  	cout<<"product :"<<product(x,y)<<endl;
		  	}else if(op=='4'){
		  		cout<<"division  : "<<Div(x,y)<<endl;
			  }
			  else if (op=='5'){
			  	cout<<"exiting calculator ..."<<endl;
			  }
			  else{
			  	cout<<"undefine";
			  }
		}
		while(op!='5' );
			
		  	
	
return 0;
}
