package com.payment_gateway.services;

import java.util.ArrayList;

import com.payment_gateway.db_model.goods_payment_type; 

public interface goodsPaymentTypeService {
    ArrayList<goods_payment_type> findAllGoodsPaymentType();
    goods_payment_type getGoodsPaymentTypeById(long id);	
}