package com.payment_gateway.repository;
  
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import com.payment_gateway.db_model.goods_payment_type; 
  
@Repository 
@Transactional
public interface goodsPaymentTypeRepository extends JpaRepository<goods_payment_type, Long>{
    ArrayList<goods_payment_type> findAllGoodsPaymentType();
    goods_payment_type getGoodsPaymentTypeById(long id);	
}