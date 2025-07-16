package com.payment_gateway.repository;
import java.util.ArrayList; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payment_gateway.db_model.goods_tax;
import com.payment_gateway.services.goodsTaxService; 

@Service
public class goodsTaxRepositoryImpl implements goodsTaxService {
	@Autowired
	goodsTaxRepository GoodsTaxRepository; 
	@Override
	public ArrayList<goods_tax> findAllGoodsTax() { 
		return (ArrayList<goods_tax>) GoodsTaxRepository.findAll(); 
	} 
    //*********************************************
	@Override
	public goods_tax getGoodsTaxById(long id) {
		goods_tax Goods_tax = GoodsTaxRepository.getReferenceById(id);
		return Goods_tax;
    }
    //*********************************************
}
