import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const newRequest = request.clone({
            setParams: {
                api_key: '85204a8cc33baf447559fb6d51b18313',
                language:  'en-US' 
            }
        })
        return next.handle(newRequest)
        .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
              let errorMessage = '';
              if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
              } else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
              }
              window.alert(errorMessage);
              return throwError(errorMessage);
            })
          )

    }

}