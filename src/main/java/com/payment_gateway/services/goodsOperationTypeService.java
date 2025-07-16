package com.payment_gateway.services;

import java.util.ArrayList;

import com.payment_gateway.db_model.goods_operation_type; 

public interface goodsOperationTypeService {
    ArrayList<goods_operation_type> findAllGoodsOperationType();
    goods_operation_type getGoodsOperationTypeById(long id);	
}