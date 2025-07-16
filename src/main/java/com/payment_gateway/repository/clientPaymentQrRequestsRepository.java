package com.payment_gateway.repository;
  
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
import com.payment_gateway.db_model.client_payment_qr_requests; 
  
@Repository 
@Transactional
public interface clientPaymentQrRequestsRepository extends JpaRepository<client_payment_qr_requests, String>{
    ArrayList<client_payment_qr_requests> findAllClientPaymentQrRequests();
    void addClientPaymentQrRequests(client_payment_qr_requests Client_payment_qr_requests); 
	void deleteClientPaymentQrRequests(client_payment_qr_requests Client_payment_qr_requests);
    client_payment_qr_requests getClientPaymentQrRequestsById(String id);	
	//----------------------------------
    @Modifying
    @Query("DELETE FROM client_payment_qr_requests c WHERE c.request_id=:requests_id")
    void deleteClientPaymentQrRequestsById( String requests_id );
	//----------------------------------
    @Query("SELECT c FROM client_payment_qr_requests c ORDER BY c.date_time")     
    ArrayList<client_payment_qr_requests> findAllClientPaymentQrRequestsForTxt();
	//----------------------------------
}