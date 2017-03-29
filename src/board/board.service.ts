import {Jsonp, RequestOptions, RequestMethod, Headers} from '@angular/http';
import {Injectable} from "@angular/core";


@Injectable()
export class BoardService{
  constructor(private jsonp:Jsonp){
    console.log("start");
  }



  getData(){
    let url = 'http://127.0.0.1:9090/ds/query/Group/getGroupList';
    let request:RequestOptions=this.getRequestOption(url)
    this.jsonp.request(request.url,RequestOptions).forEach(function(data){
      console.log(data);
    });
  }


  getRequestOption(url:string):RequestOptions{

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let data={test:"test"};
    let requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      url:  url,
      headers: headers,
      body: JSON.stringify(data)
    });
    return requestoptions;
  }


}
