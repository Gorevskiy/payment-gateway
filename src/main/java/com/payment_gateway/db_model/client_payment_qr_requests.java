package com.payment_gateway.db_model;

import jakarta.persistence.*;

@Entity  
@Table( name = "client_payment_qr_requests" )  
public class client_payment_qr_requests {
    @Id
    private String request_id;

    @Column(nullable = false)
    private String order_id;

    @Column
    private String bank_name;

    @Column
    private int total_amount;

    @Column
    private String date_time;
    //********************************
    public void setRequestId( String request_id ) { this.request_id = request_id; }
    public String getRequestId() { return request_id; }
    //-----------------------------
    public void setOrderId( String order_id ) { this.order_id = order_id; }
    public String getOrderId() { return order_id; }
    //-----------------------------
    public void setBankName( String bank_name ) { this.bank_name = bank_name; }
    public String getBankName() { return bank_name; }
    //-----------------------------
    public void setTotalAmount( int total_amount ) { this.total_amount = total_amount; }
    public int getArticleNumber() { return total_amount; }
    //-----------------------------
    public void setDateTime( String date_time ) { this.date_time = date_time; }
    public String getDateTime() { return date_time; }
    //********************************
}  