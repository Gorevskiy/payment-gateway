package com.payment_gateway.db_model;

import jakarta.persistence.*;

@Entity  
@Table( name = "client_payment_qr_status" )  
public class client_payment_qr_status {
    @Id
    private String status_id;

    @Column
    private String transaction_id;

    @Column
    private String invoice_id;

    @Column
    private String status;

    @Column
    private String date_time;

    //********************************
    public void setStatusId( String status_id ) { this.status_id = status_id; }
    public String getStatusId() { return status_id; }
    //-----------------------------
    public void setTransactionId( String transaction_id) { this.transaction_id = transaction_id; }
    public String getTransactionId() { return transaction_id; }
    //-----------------------------
    public void setInvoiceId( String invoice_id) { this.invoice_id = invoice_id; }
    public String getInvoiceId() { return invoice_id; }
    //-----------------------------
    public void setStatus( String status) { this.status = status; }
    public String getStatus() { return status; }
    //-----------------------------
    public void setDateTime( String date_time ) { this.date_time = date_time; }
    public String getDateTime() { return date_time; }
    //********************************
}  