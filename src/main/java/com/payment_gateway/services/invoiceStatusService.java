package com.payment_gateway.services;

import java.util.ArrayList;

import com.payment_gateway.db_model.invoice_status; 

public interface invoiceStatusService {
    ArrayList<invoice_status> findAllInvoiceStatus();
    invoice_status getInvoiceStatusById(long id);	
}