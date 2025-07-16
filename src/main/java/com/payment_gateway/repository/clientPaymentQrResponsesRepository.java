package com.payment_gateway.repository;
  
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
import com.payment_gateway.db_model.client_payment_qr_responses; 
  
@Repository 
@Transactional
public interface clientPaymentQrResponsesRepository extends JpaRepository<client_payment_qr_responses, String>{
    ArrayList<client_payment_qr_responses> findAllClientPaymentQrResponses();
    void addClientPaymentQrResponses(client_payment_qr_responses Client_payment_qr_responses); 
	void deleteClientPaymentQrResponses(client_payment_qr_responses Client_payment_qr_responses);
    client_payment_qr_responses getClientPaymentQrResponsesById(String id);	
	//----------------------------------
    @Modifying
    @Query("DELETE FROM client_payment_qr_responses c WHERE c.response_id=:response_id")
    void deleteClientPaymentQrResponsesById( String response_id );
	//----------------------------------
    @Query("SELECT c FROM client_payment_qr_responses c ORDER BY c.date_time")     
    ArrayList<client_payment_qr_responses> findAllClientPaymentQrResponsesForTxt();
	//----------------------------------
}