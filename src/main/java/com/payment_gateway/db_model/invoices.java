package com.payment_gateway.db_model;

import jakarta.persistence.*;

@Entity  
@Table( name = "invoices" )  
public class invoices {
    @Id
    private String invoice_id;

    @Column(nullable = false)
    private String order_id;

    @Column
    private String full_name;

    @Column
    private String phone_number;

    @Column
    private String email;

    @Column
    private String service_name;

    @Column
    private int total_sum;

    @Column
    private String link_for_payment;

    @Column
    private String validity_period;

    @Column
    private int status_id;

    @Column
    private String created_at;

    @Column
    private String updated_at;
    //********************************
    public void setInvoiceId( String invoice_id ) { this.invoice_id = invoice_id; }
    public String getInvoiceId() { return invoice_id; }
    //-----------------------------
    public void setOrderId( String order_id ) { this.order_id = order_id; }
    public String getOrderId() { return order_id; }
    //-----------------------------
    public void setFullName( String full_name ) { this.full_name = full_name; }
    public String getFullName() { return full_name; }
    //-----------------------------
    public void setPhoneNumber( String phone_number ) { this.phone_number = phone_number; }
    public String getPhoneNumber() { return phone_number; }
    //-----------------------------
    public void setEmail( String email ) { this.email = email; }
    public String getEmail() { return email; }
    //-----------------------------
    public void setServiceName( String service_name ) { this.service_name = service_name; }
    public String getServiceName() { return service_name; }
    //-----------------------------
    public void setTotalSum( int total_sum ) { this.total_sum = total_sum; }
    public int getTotalSum() { return total_sum; }
    //-----------------------------
    public void setLinkForPayment( String link_for_payment ) { this.link_for_payment = link_for_payment; }
    public String getLinkForPayment() { return link_for_payment; }
    //-----------------------------
    public void setValidityPeriod( String validity_period ) { this.validity_period = validity_period; }
    public String getValidityPeriod() { return validity_period; }
    //-----------------------------
    public void setStatusId( int status_id ) { this.status_id = status_id; }
    public int getStatusId() { return status_id; }
    //-----------------------------
    public void setCreatedAt( String created_at ) { this.created_at = created_at; }
    public String getCreatedAt() { return created_at; }
    //-----------------------------
    public void setUpdatedAt( String updated_at ) { this.updated_at = updated_at; }
    public String getUpdatedAt() { return updated_at; }
    //********************************
}  