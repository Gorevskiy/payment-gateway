package com.payment_gateway.repository;
  
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import com.payment_gateway.db_model.goods_operation_type; 
  
@Repository 
@Transactional
public interface goodsOperationTypeRepository extends JpaRepository<goods_operation_type, Long>{
    ArrayList<goods_operation_type> findAllGoodsOperationType();
    goods_operation_type getGoodsOperationTypeById(long id);	
}