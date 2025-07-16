package com.payment_gateway.services;

import java.util.ArrayList;

import com.payment_gateway.db_model.client_payment_qr_status; 

public interface clientPaymentQrStatusService {
    ArrayList<client_payment_qr_status> findAllClientPaymentQrStatus();
    void addClientPaymentQrStatus(client_payment_qr_status Client_payment_qr_status); 
	void deleteClientPaymentQrStatus(client_payment_qr_status Client_payment_qr_status);
    client_payment_qr_status getClientPaymentQrStatusById(String id);	
}