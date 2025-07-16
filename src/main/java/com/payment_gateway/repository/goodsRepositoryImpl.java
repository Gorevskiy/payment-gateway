package com.payment_gateway.repository;
import java.util.ArrayList; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 
import com.payment_gateway.db_model.goods;
import com.payment_gateway.services.goodsService; 

@Service
public class goodsRepositoryImpl implements goodsService {
	@Autowired
	goodsRepository GoodsRepository; 
	@Override
	public ArrayList<goods> findAllGoods() { 
		return (ArrayList<goods>) GoodsRepository.findAll(); 
	} 
    //*********************************************
	@Override
    public void addGoods(goods Goods) {
		GoodsRepository.save(Goods);
	}		
    //*********************************************
    @Override
	public void deleteGoods(goods Goods) {
		GoodsRepository.delete(Goods);
	} 	
    //*********************************************
	@Override
	public goods getGoodsById(String id) {
		goods Goods = GoodsRepository.getReferenceById(id);
		return Goods;
    }
    //*********************************************
}
