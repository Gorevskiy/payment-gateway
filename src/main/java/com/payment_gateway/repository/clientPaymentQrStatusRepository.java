package com.payment_gateway.repository;
  
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
import com.payment_gateway.db_model.client_payment_qr_status; 
  
@Repository 
@Transactional
public interface clientPaymentQrStatusRepository extends JpaRepository<client_payment_qr_status, String>{
    ArrayList<client_payment_qr_status> findAllClientPaymentQrStatus();
    void addClientPaymentQrStatus(client_payment_qr_status Client_payment_qr_status); 
	void deleteClientPaymentQrStatus(client_payment_qr_status Client_payment_qr_status);
    client_payment_qr_status getClientPaymentQrStatusById(String id);	
	//----------------------------------
    @Modifying
    @Query("DELETE FROM client_payment_qr_status c WHERE c.status_id=:status_id")
    void deleteClientPaymentQrStatusById( String status_id );
	//----------------------------------
    @Query("SELECT c FROM client_payment_qr_status c ORDER BY c.date_time")     
    ArrayList<client_payment_qr_status> findAllClientPaymentQrStatusForTxt();
	//----------------------------------
}