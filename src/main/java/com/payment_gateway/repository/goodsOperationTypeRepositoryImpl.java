package com.payment_gateway.repository;
import java.util.ArrayList; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payment_gateway.db_model.goods_operation_type;
import com.payment_gateway.services.goodsOperationTypeService; 

@Service
public class goodsOperationTypeRepositoryImpl implements goodsOperationTypeService {
	@Autowired
	goodsOperationTypeRepository GoodsOperationTypeRepository; 
	@Override
	public ArrayList<goods_operation_type> findAllGoodsOperationType() { 
		return (ArrayList<goods_operation_type>) GoodsOperationTypeRepository.findAll(); 
	} 
    //*********************************************
	@Override
	public goods_operation_type getGoodsOperationTypeById(long id) {
		goods_operation_type Goods_operation_type = GoodsOperationTypeRepository.getReferenceById(id);
		return Goods_operation_type;
    }
    //*********************************************
}
