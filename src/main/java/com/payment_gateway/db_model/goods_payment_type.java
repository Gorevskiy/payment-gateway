package com.payment_gateway.db_model;

import jakarta.persistence.*;

@Entity  
@Table( name = "goods_payment_type" )  
public class goods_payment_type {
    @Id
    private long id;

    @Column
    private String name;

    //********************************
    public void setId( long id ) { this.id = id; }
    public long getId() { return id; }
    //-----------------------------
    public void setName( String name) { this.name = name; }
    public String getName() { return name; }
    //********************************
}  