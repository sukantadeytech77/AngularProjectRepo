import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  private baseAPIURL : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.baseAPIURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseAPIURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseAPIURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseAPIURL)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }
}