package com.payment_gateway.repository;
import java.util.ArrayList; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 
import com.payment_gateway.db_model.client_payment_qr_status;
import com.payment_gateway.services.clientPaymentQrStatusService; 

@Service
public class clientPaymentQrStatusRepositoryImpl implements clientPaymentQrStatusService {
	@Autowired
	clientPaymentQrStatusRepository ClientPaymentQrStatusRepository; 
	@Override
	public ArrayList<client_payment_qr_status> findAllClientPaymentQrStatus() { 
		return (ArrayList<client_payment_qr_status>) ClientPaymentQrStatusRepository.findAll(); 
	} 
    //*********************************************
	@Override
    public void addClientPaymentQrStatus(client_payment_qr_status Client_payment_qr_status) {
		ClientPaymentQrStatusRepository.save(Client_payment_qr_status);
	}		
    //*********************************************
    @Override
	public void deleteClientPaymentQrStatus(client_payment_qr_status Client_payment_qr_status) {
		ClientPaymentQrStatusRepository.delete(Client_payment_qr_status);
	} 	
    //*********************************************
	@Override
	public client_payment_qr_status getClientPaymentQrStatusById(String id) {
		client_payment_qr_status Client_payment_qr_status = ClientPaymentQrStatusRepository.getReferenceById(id);
		return Client_payment_qr_status;
    }
    //*********************************************
}
