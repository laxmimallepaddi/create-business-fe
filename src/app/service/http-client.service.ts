import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Business } from '../business';
import { Customer } from '../customer';
import { map } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject} from 'rxjs';
import { retry, catchError, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private currentBusinessSubject: BehaviorSubject<Business>;
  public currentBusiness: Observable<Business>;
  private currentCustomerSubject: BehaviorSubject<Customer>;
  public currentCustomer: Observable<Customer>;

  constructor(private httpClient:HttpClient) {
    this.currentBusinessSubject = new BehaviorSubject<Business>(JSON.parse(localStorage.getItem('currentBusiness')));
    this.currentBusiness = this.currentBusinessSubject.asObservable();
    this.currentCustomerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('currentCustomer')));
    this.currentCustomer= this.currentCustomerSubject.asObservable();
   }
  
   public get currentBusinessValue(): Business {
    return this.currentBusinessSubject.value;
  } 

  public get currentCustomerValue(): Customer {
    return this.currentCustomerSubject.value;
  } 

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAllBusiness()
  {
    return this.httpClient.get<Business[]>('/api/business');
  }

 CreateBusiness(data): Observable<Business> {
  return this.httpClient.post<Business>('/api/business/', JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}  

SearchFilter(data): Observable<Business> {
  return this.httpClient.post<Business>('/api/business/search/', JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}  

LoginBusiness(data): Observable<Business> {
  console.log(data);
  return this.httpClient.post<Business>('/api/business/login/', JSON.stringify(data), this.httpOptions)
  .pipe(map(user => {
    if (user) {
        // store user details in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentBusiness', JSON.stringify(user[0]));
        this.currentBusinessSubject.next(user[0]);
    }
    return user;
  }));
}  

CreateCustomer(data): Observable<Customer> {
  return this.httpClient.post<Customer>('/api/customer/', JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}  

LoginCustomer(data): Observable<Customer> {
  return this.httpClient.post<Customer>('/api/customer/login/', JSON.stringify(data), this.httpOptions)
  .pipe(map(user => {
    if (user) {
        // store user details in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentCustomer', JSON.stringify(user[0]));
        this.currentCustomerSubject.next(user[0]);
    }
    return user;
  }));
} 

// Error handling
errorHandl(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentBusiness');
    this.currentBusinessSubject.next(null);
    localStorage.removeItem('currentCustomer');
    this.currentCustomerSubject.next(null);
  }

 UpdateBusiness(data): Observable<Business> {
  localStorage.removeItem('currentBusiness');
  localStorage.setItem('currentBusiness',JSON.stringify(data));
  return this.httpClient.put<Business>('/api/business/', JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl),
    
  )
}  

ChangeBusinessPassword(data): Observable<Business> {
  localStorage.setItem('currentBusiness',JSON.stringify(data));
  return this.httpClient.put<Business>('/api/business/', JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl),
    
  )
} 

SMSVerification(data) {
  return this.httpClient.post('/api/phonenumber/+'+data+'/otp/',JSON.stringify({}),{ responseType: 'text'});
}  
GetVerificationCode(data){
  let data_code = {otp: data.otp};
  let phone_number = data.phone_no +"";
  return this.httpClient.put('/api/phonenumber/+'+phone_number+'/otp/',JSON.stringify(data_code),{headers: new HttpHeaders({'Content-Type':'application/json'}), responseType:'text'})
  } 
  
AddRating(userdata): Observable<any> {
  return this.httpClient.put<any>('/api/business/'+userdata.businessid+'/rating/'+userdata.rate+'/',{}, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl),
  )
  }

AddFeedback(data){
  return this.httpClient.post('/api/phonenumber/+13617205898/message/',data,{responseType:'text'})
    }   
}