package com.payment_gateway.services;

import java.util.ArrayList; 
import com.payment_gateway.db_model.client_payment_qr_requests; 
public interface clientPaymentQrRequestsService {
    ArrayList<client_payment_qr_requests> findAllClientPaymentQrRequests();
    void addClientPaymentQrRequests(client_payment_qr_requests Client_payment_qr_requests); 
	void deleteClientPaymentQrRequests(client_payment_qr_requests Client_payment_qr_requests);
    client_payment_qr_requests getClientPaymentQrRequestsById(String id);	
}