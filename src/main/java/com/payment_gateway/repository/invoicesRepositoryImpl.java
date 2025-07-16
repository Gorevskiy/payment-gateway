package com.payment_gateway.repository;
import java.util.ArrayList; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 
import com.payment_gateway.db_model.invoices;
import com.payment_gateway.services.invoicesService; 

@Service
public class invoicesRepositoryImpl implements invoicesService {
	@Autowired
	invoicesRepository InvoicesRepository; 
	@Override
	public ArrayList<invoices> findAllInvoices() { 
		return (ArrayList<invoices>) InvoicesRepository.findAll(); 
	} 
    //*********************************************
	@Override
    public void addInvoices(invoices Invoices) {
		InvoicesRepository.save(Invoices);
	}		
    //*********************************************
    @Override
	public void deleteInvoices(invoices Invoices) {
		InvoicesRepository.delete(Invoices);
	} 	
    //*********************************************
	@Override
	public invoices getInvoicesById(String id) {
		invoices Invoice = InvoicesRepository.getReferenceById(id);
		return Invoice;
    }
    //*********************************************
}
