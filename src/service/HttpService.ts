/**
 * Created by bethd on 2017-03-30.
 */
import 'rxjs/Rx';
import {RequestOptions, RequestMethod, Headers, Http, Response, Request} from '@angular/http';
import {Injectable} from "@angular/core";

const REQUEST_METHOD  = {
  [RequestMethod.Get] : 'get',
  [RequestMethod.Post] : 'post',
  [RequestMethod.Put] : 'put',
  [RequestMethod.Delete] : 'delete'
};

export abstract  class HttpService{

  constructor(public http:Http, public GROUP:Object){}

  public makeRequest(requestQuery:string,  requestType:number, sendData:Object={}):Promise<Object>{
    let options =this.makeRequestOption(requestQuery, requestType );

    let request = new Request(options);
    let method=REQUEST_METHOD[requestType];

    return this.http[method](request.url,sendData)
      .map(res => Array.from(res.json()))
      .toPromise();
  }



  private makeRequestOption(requestQuery:string, requestMethod:number):RequestOptions{

    let headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return  new RequestOptions({
      url:  this.makeUrl(requestQuery),
      headers: headers
    });;
  }

  private makeUrl(groupId:string):string{
    return `http://192.168.219.91:9090/ds/query/${this.GROUP['name']}/`+groupId;
    //return `http://127.0.0.1:9090/ds/query/${this.GROUP['name']}/`+groupId;
  }

  protected abstract getData();




}





