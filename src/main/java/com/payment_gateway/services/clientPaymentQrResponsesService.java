package com.payment_gateway.services;

import java.util.ArrayList;

import com.payment_gateway.db_model.client_payment_qr_responses; 

public interface clientPaymentQrResponsesService {
    ArrayList<client_payment_qr_responses> findAllClientPaymentQrResponses();
    void addClientPaymentQrResponses(client_payment_qr_responses Client_payment_qr_responses); 
	void deleteClientPaymentQrResponses(client_payment_qr_responses Client_payment_qr_responses);
    client_payment_qr_responses getClientPaymentQrResponsesById(String id);	
}