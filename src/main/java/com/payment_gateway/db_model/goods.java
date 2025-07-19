package com.payment_gateway.db_model;

import jakarta.persistence.*;

@Entity  
@Table( name = "goods" )  
public class goods {
    @Id
    private String goods_id;

    @Column(nullable = false)
    private String invoice_id;

    @Column
    private String goods_name;

    @Column
    private String article_number;

    @Column
    private int goods_tax_id;

    @Column
    private float price;

    @Column
    private int count;

    @Column
    private int goods_operation_type_id;

    @Column
    private int goods_payment_id;

    @Column
    private String created_at;

    @Column
    private String updated_at;
    //********************************
    public void setGoodsId( String goods_id ) { this.goods_id = goods_id; }
    public String getGoodsId() { return goods_id; }
    //-----------------------------
    public void setInvoiceId( String invoice_id ) { this.invoice_id = invoice_id; }
    public String getInvoiceId() { return invoice_id; }
    //-----------------------------
    public void setGoodsName( String goods_name ) { this.goods_name = goods_name; }
    public String getGoodsName() { return goods_id; }
    //-----------------------------
    public void setArticleNumber( String article_number ) { this.article_number = article_number; }
    public String getArticleNumber() { return article_number; }
    //-----------------------------
    public void setGoodsTaxId( int goods_tax_id ) { this.goods_tax_id = goods_tax_id; }
    public int getGoodsTaxId() { return goods_tax_id; }
    //-----------------------------
    public void setPrice( float price ) { this.price = price; }
    public float getPrice() { return price; }
    //-----------------------------
    public void setCount( int count ) { this.count = count; }
    public int getCount() { return count; }
    //-----------------------------
    public void setGoodsOperationTypeId( int goods_operation_type_id ) { this.goods_operation_type_id = goods_operation_type_id; }
    public int getGoodsOperationTypeId() { return goods_operation_type_id; }
    //-----------------------------
    public void setGoodsPaymentId( int goods_payment_id ) { this.goods_payment_id = goods_payment_id; }
    public int getGoodsPaymentId() { return goods_payment_id; }
    //-----------------------------
    public void setCreatedAt( String created_at ) { this.created_at = created_at; }
    public String getCreatedAt() { return created_at; }
    //-----------------------------
    public void setUpdatedAt( String updated_at ) { this.updated_at = updated_at; }
    public String getUpdatedAt() { return updated_at; }
    //********************************
}  