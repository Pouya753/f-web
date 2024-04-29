import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
  })

export class GlobalVariableService{

  EMAIL_REGEX = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  PHONE_REGEX = '(\\+98|0)?9\\d{9}';
  PHONE_INPUT_REGEX = '^[0]{1}[0-9]{0,10}$';
  OTP_INPUT_REGEX = '^[0-9]{0,4}$';
  NUMBER_REGEX = '^[0-9]+$';
  AMOUNT_REGEX = '^[1-9]{1}[0-9]{0,14}$';
  PERCENTAGE_REGEX = '^[1-9][0-9]?$|^100$';
  TIME_REGEX = '^([0-1]?[0-9]|2[0-3])(?::([0]{0,2}))?$';
  PASSWORD_REGEX = '^.{4,25}$';
  USER_NAME_REGEX = '^[a-z0-9_-]+$';
  ENGLISH_REGEX = '^[a-zA-Z\\s]+$';
  PERSIAN_REGEX = '^[ا-یءئأإ\\s]+$';


  API_URL: string ='https://localhost:4376';
  admin:string = this.API_URL +'manage/admin';
  protects:string = this.API_URL +'manage/products';
  users:string = this.API_URL +'manage/users';
  service:string=this.API_URL+'manage/service';
  project:string=this.API_URL+'manage/project';
  web:string=this.API_URL+'web/bootcamp'

}
