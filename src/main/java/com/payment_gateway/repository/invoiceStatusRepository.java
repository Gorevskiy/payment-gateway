package com.payment_gateway.repository;
  
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import com.payment_gateway.db_model.invoice_status; 
  
@Repository 
@Transactional
public interface invoiceStatusRepository extends JpaRepository<invoice_status, Long>{
    ArrayList<invoice_status> findAllInvoiceStatus();
    invoice_status getInvoiceStatusById(long id);	
}