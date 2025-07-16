package com.payment_gateway.repository;
import java.util.ArrayList; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 
import com.payment_gateway.db_model.client_payment_qr_requests;
import com.payment_gateway.services.clientPaymentQrRequestsService; 

@Service
public class clientPaymentQrRequestsRepositoryImpl implements clientPaymentQrRequestsService {
	@Autowired
	clientPaymentQrRequestsRepository ClientPaymentQrRequestsRepository; 
	
	@Override
	public ArrayList<client_payment_qr_requests> findAllClientPaymentQrRequests() { 
		return (ArrayList<client_payment_qr_requests>) ClientPaymentQrRequestsRepository.findAll(); 
	} 
    //*********************************************
	@Override
    public void addClientPaymentQrRequests(client_payment_qr_requests Client_payment_qr_requests) {
		ClientPaymentQrRequestsRepository.save(Client_payment_qr_requests);
	}		
    //*********************************************
    @Override
	public void deleteClientPaymentQrRequests(client_payment_qr_requests Client_payment_qr_requests) {
		ClientPaymentQrRequestsRepository.delete(Client_payment_qr_requests);
	} 	
    //*********************************************
	@Override
	public client_payment_qr_requests getClientPaymentQrRequestsById(String id) {
		client_payment_qr_requests Client_payment_qr_requests = ClientPaymentQrRequestsRepository.getReferenceById(id);
		return Client_payment_qr_requests;
    }
    //*********************************************
}
