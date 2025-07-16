package com.payment_gateway.db_model;

import jakarta.persistence.*;

@Entity  
@Table( name = "client_payment_qr_responses" )  
public class client_payment_qr_responses {
    @Id
    private String response_id;

    @Column
    private String qr;

    @Column
    private String order_id;

    @Column
    private String transaction_id;

    @Column
    private String invoice_id;

    @Column
    private String date_time;
    //********************************
    public void setResponseId( String response_id ) { this.response_id = response_id; }
    public String getResponseId() { return response_id; }
    //-----------------------------
    public void setQr( String qr ) { this.qr = qr; }
    public String getQr() { return qr; }
    //-----------------------------
    public void setOrderId( String order_id) { this.order_id = order_id; }
    public String getOrderId() { return order_id; }
    //-----------------------------
    public void setTransactionId( String transaction_id) { this.transaction_id = transaction_id; }
    public String getTransactionId() { return transaction_id; }
    //-----------------------------
    public void setInvoiceId( String invoice_id) { this.invoice_id = invoice_id; }
    public String getInvoiceId() { return invoice_id; }
    //-----------------------------
    public void setDateTime( String date_time ) { this.date_time = date_time; }
    public String getDateTime() { return date_time; }
    //********************************
}  