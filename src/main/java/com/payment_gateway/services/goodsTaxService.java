package com.payment_gateway.services;

import java.util.ArrayList;

import com.payment_gateway.db_model.goods_tax; 

public interface goodsTaxService {
    ArrayList<goods_tax> findAllGoodsTax();
    goods_tax getGoodsTaxById(long id);	
}