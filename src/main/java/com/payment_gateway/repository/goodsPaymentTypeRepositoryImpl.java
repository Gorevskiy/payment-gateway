package com.payment_gateway.repository;
import java.util.ArrayList; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payment_gateway.db_model.goods_payment_type;
import com.payment_gateway.services.goodsPaymentTypeService; 

@Service
public class goodsPaymentTypeRepositoryImpl implements goodsPaymentTypeService {
	@Autowired
	goodsPaymentTypeRepository GoodsPaymentTypeRepository; 
	@Override
	public ArrayList<goods_payment_type> findAllGoodsPaymentType() { 
		return (ArrayList<goods_payment_type>) GoodsPaymentTypeRepository.findAll(); 
	} 
    //*********************************************
	@Override
	public goods_payment_type getGoodsPaymentTypeById(long id) {
		goods_payment_type Goods_payment_type = GoodsPaymentTypeRepository.getReferenceById(id);
		return Goods_payment_type;
    }
    //*********************************************
}
