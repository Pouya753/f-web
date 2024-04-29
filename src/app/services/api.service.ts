import {Injectable} from "@angular/core";
import {GlobalVariableService} from "./global-variable.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private gvs: GlobalVariableService,
    private http: HttpClient
  ) {
  }

//admins-------------------------------------------------------------------------------------------------------------
  getAdmins() {
    return this.http.get(this.gvs.admin)

  }

  getAdmin(adminId: any) {
    return this.http.get(this.gvs.admin + '/' + adminId)

  }

//products------------------------------------------------------------------------------------------------------
  getProducts() {
    return this.http.get(this.gvs.protects)
  }

  getProduct(productId: any) {
    return this.http.get(this.gvs.protects + '/' + productId)
  }

//users------------------------------------------------------------------------------
  getUsers() {
    return this.http.get(this.gvs.users)
  }

  getUser(userId: any) {
    return this.http.get(`${this.gvs.users}/${userId}`);
  }

  searchUser(text: string) {
    return this.http.get(`${this.gvs.users}/search?text=${text}`);
  }
//===================================================================================================================================

  serviceManage(){
    return this.http.get(`${this.gvs.service}/list`)
  }

  servicesManage(serviceId:any){
    return this.http.get(`${this.gvs.service}+/get/${serviceId}`)
  }
  postService(body:any){
    return this.http.post(`${this.gvs.service}/post`,body)
}
   putService(Id:any ,body:any){
    return this.http.put(`${this.gvs.service}/put/${Id}`, body)
}

   deleteService(Id:any){
    return this.http.delete(`${this.gvs.service}/${Id}`)
}
// project=======================================

  postProject(body:any){
    return this.http.post(`${this.gvs.project}/post`,body)
  }
  getProject(){
    return this.http.get(`${this.gvs.project}/list`)
  }
  putProject(Id:any, body:any){
    return this.http.put(`${this.gvs.project}/put/${Id}`, body)
  }

  deleteProject(Id:any){
    return this.http.delete(`${this.gvs.project}/delete/${Id}`)
  }
  listProject(Id:any){
    return this.http.get(`${this.gvs.project}/get/${Id}`)
  }
  // web/bootcamp============================================================
  likeBootcamp(id:any, body:any){
    return this.http.patch(`${this.gvs.web}/like/${id}`, body)
  }
}
