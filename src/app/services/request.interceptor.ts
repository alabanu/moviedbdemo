import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

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

    }

}