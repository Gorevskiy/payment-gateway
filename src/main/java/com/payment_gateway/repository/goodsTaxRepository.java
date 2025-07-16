package com.payment_gateway.repository;
  
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import com.payment_gateway.db_model.goods_tax; 
  
@Repository 
@Transactional
public interface goodsTaxRepository extends JpaRepository<goods_tax, Long>{
    ArrayList<goods_tax> findAllGoodsTax();
    goods_tax getGoodsTaxById(long id);	
}