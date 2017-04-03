import 'rxjs/Rx';
import {Injectable} from "@angular/core";
import { HttpService } from '../../service/HttpService';
import {RequestMethod, Http} from '@angular/http';
import {QUERY_GROUP} from '../../environments/query.config';

const GROUP:Object=QUERY_GROUP.GROUP;

@Injectable()
export class BoardService extends HttpService{

  constructor(public http:Http){
    super(http, GROUP);
  }


  //@Override
  public getData() {
     return super.makeRequest(GROUP["select"], RequestMethod.Post);
  }

}
