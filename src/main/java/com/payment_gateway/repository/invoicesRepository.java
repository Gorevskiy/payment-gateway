package com.payment_gateway.repository;
  
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
import com.payment_gateway.db_model.invoices; 
  
@Repository 
@Transactional
public interface invoicesRepository extends JpaRepository<invoices, String>{
    ArrayList<invoices> findAllInvoices();
    void addInvoices(invoices Invoices); 
	void deleteInvoices(invoices Invoices);
    invoices getInvoicesById(String id);	
	//----------------------------------
    @Modifying
    @Query("DELETE FROM invoices i WHERE i.invoice_id=:invoice_id")
    void deleteInvoicesById( String invoice_id );
	//----------------------------------
    @Query("SELECT i FROM invoices i ORDER BY i.full_name,i.service_name")     
    ArrayList<invoices> findAllListsForTxt();
	//----------------------------------
    @Query("SELECT count(i.invoice_id) FROM invoices i")     
    Integer cntAllInvoices();
	//----------------------------------
    @Query("SELECT i.full_name FROM invoices i WHERE i.invoice_id=:invoice_id")     
    String getInvoiceName( String invoice_id );

}