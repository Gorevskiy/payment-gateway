package com.payment_gateway.services;

import java.util.ArrayList; 
import com.payment_gateway.db_model.goods; 
public interface goodsService {
    ArrayList<goods> findAllGoods();
    void addGoods(goods Goods); 
	void deleteGoods(goods Goods);
    goods getGoodsById(String id);	
}