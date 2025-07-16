package com.payment_gateway.db_model;

import jakarta.persistence.*;

@Entity  
@Table( name = "invoice_status" )  
public class invoice_status {
    @Id
    private long id;

    @Column
    private String value;

    @Column
    private String name;

    //********************************
    public void setId( long id ) { this.id = id; }
    public long getId() { return id; }
    //-----------------------------
    public void setValue( String value) { this.value = value; }
    public String getValue() { return value; }
    //-----------------------------
    public void setName( String name) { this.name = name; }
    public String getName() { return name; }
    //********************************
}  