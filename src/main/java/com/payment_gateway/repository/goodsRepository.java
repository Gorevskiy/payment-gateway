package com.payment_gateway.repository;
  
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
import com.payment_gateway.db_model.goods; 
  
@Repository 
@Transactional
public interface goodsRepository extends JpaRepository<goods, String>{
    ArrayList<goods> findAllGoods();
    void addGoods(goods Goods); 
	void deleteGoods(goods Goods);
    goods getGoodsById(String id);	
	//----------------------------------
    @Modifying
    @Query("DELETE FROM goods g WHERE g.goods_id=:goods_id")
    void deleteGoodsById( String goods_id );
	//----------------------------------
    @Query("SELECT g FROM goods g ORDER BY g.created_at,g.updated_at")     
    ArrayList<goods> findAllGoodsForTxt();
	//----------------------------------
}