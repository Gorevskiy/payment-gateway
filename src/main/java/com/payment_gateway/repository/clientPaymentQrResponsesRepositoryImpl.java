package com.payment_gateway.repository;
import java.util.ArrayList; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 
import com.payment_gateway.db_model.client_payment_qr_responses;
import com.payment_gateway.services.clientPaymentQrResponsesService; 

@Service
public class clientPaymentQrResponsesRepositoryImpl implements clientPaymentQrResponsesService {
	@Autowired
	clientPaymentQrResponsesRepository ClientPaymentQrResponsesRepository; 
	
	@Override
	public ArrayList<client_payment_qr_responses> findAllClientPaymentQrResponses() { 
		return (ArrayList<client_payment_qr_responses>) ClientPaymentQrResponsesRepository.findAll(); 
	} 
    //*********************************************
	@Override
    public void addClientPaymentQrResponses(client_payment_qr_responses Client_payment_qr_responses) {
		ClientPaymentQrResponsesRepository.save(Client_payment_qr_responses);
	}		
    //*********************************************
    @Override
	public void deleteClientPaymentQrResponses(client_payment_qr_responses Client_payment_qr_responses) {
		ClientPaymentQrResponsesRepository.delete(Client_payment_qr_responses);
	} 	
    //*********************************************
	@Override
	public client_payment_qr_responses getClientPaymentQrResponsesById(String id) {
		client_payment_qr_responses Client_payment_qr_responses = ClientPaymentQrResponsesRepository.getReferenceById(id);
		return Client_payment_qr_responses;
    }
    //*********************************************
}
