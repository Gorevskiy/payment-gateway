package com.payment_gateway.repository;
import java.util.ArrayList; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payment_gateway.db_model.invoice_status;
import com.payment_gateway.services.invoiceStatusService; 

@Service
public class invoiceStatusRepositoryImpl implements invoiceStatusService {
	@Autowired
	invoiceStatusRepository InvoiceStatusRepository; 
	@Override
	public ArrayList<invoice_status> findAllInvoiceStatus() { 
		return (ArrayList<invoice_status>) InvoiceStatusRepository.findAll(); 
	} 
    //*********************************************
	@Override
	public invoice_status getInvoiceStatusById(long id) {
		invoice_status InvoiceStatus = InvoiceStatusRepository.getReferenceById(id);
		return InvoiceStatus;
    }
    //*********************************************
}
