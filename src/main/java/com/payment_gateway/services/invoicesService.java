package com.payment_gateway.services;

import java.util.ArrayList; 
import com.payment_gateway.db_model.invoices; 
public interface invoicesService {
    ArrayList<invoices> findAllInvoices();
    void addInvoices(invoices Invoices); 
	void deleteInvoices(invoices Invoices);
    invoices getInvoicesById(String id);	
}