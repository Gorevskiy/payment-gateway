package com.payment_gateway.db_model;

public class listInvoicesTxt1 {
    private String invoice_id;
    private String order_id;
    private String full_name;
    private String phone_number;
    private String email;
    private String service_name;
    private String total_sum;
    private String link_for_payment;
    private String validity_period;
    private String status_id;
    private String created_at;
    private String updated_at;
    private String count_goods;
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
    public void setTotalSum( String total_sum ) { this.total_sum = total_sum; }
    public String getTotalSum() { return total_sum; }
    //-----------------------------
    public void setLinkForPayment( String link_for_payment ) { this.link_for_payment = link_for_payment; }
    public String getLinkForPayment() { return link_for_payment; }
    //-----------------------------
    public void setValidityPeriod( String validity_period ) { this.validity_period = validity_period; }
    public String getValidityPeriod() { return validity_period; }
    //-----------------------------
    public void setStatusId( String status_id ) { this.status_id = status_id; }
    public String getStatusId() { return status_id; }
    //-----------------------------
    public void setCreatedAt( String created_at ) { this.created_at = created_at; }
    public String getCreatedAt() { return created_at; }
    //-----------------------------
    public void setUpdatedAt( String updated_at ) { this.updated_at = updated_at; }
    public String getUpdatedAt() { return updated_at; }
    //-----------------------------
    public void setCountGoods( String count_goods ) { this.count_goods = count_goods; }
    public String getCountGoods() { return count_goods; }
    //********************************
}  