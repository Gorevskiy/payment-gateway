package com.payment_gateway.methods;

import java.io.*;
import java.util.*;
//import java.text.*;
//import java.lang.*;

/*****/

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.payment_gateway.db_model.*;
import com.payment_gateway.repository.invoicesRepository;
import com.payment_gateway.repository.goodsRepository;

public class mymethods {

   private static final Logger logger = LoggerFactory.getLogger(mymethods.class);
   //****************
   public static List<listInvoicesTxt1> getListInv(invoicesRepository InvoicesRepository, goodsRepository GoodsRepository) throws ClassNotFoundException,IOException {
	  //------------------------------------------------------ 
      List<listInvoicesTxt1> lv = new ArrayList<listInvoicesTxt1>();
      listInvoicesTxt1 listV1;
      List<invoices> invoicesLists = new ArrayList<invoices>( InvoicesRepository.findAllListsForTxt() );
      /*String invoiceId = "0";
      String orderId = "";
	  String fullName = "";
	  String phoneNumber = "";
	  String email = "";
	  String serviceName = "";
	  String linkForPayment = "";
	  String validityPeriod = "";
	  String statusId = "";
	  String createdAt = "";
	  String updatedAt = "";*/
	  for( invoices vList:invoicesLists ){
		 listV1 = new listInvoicesTxt1();
         listV1.setInvoiceId(vList.getInvoiceId());
         listV1.setOrderId(vList.getOrderId());
         listV1.setFullName(vList.getFullName());
         listV1.setPhoneNumber(vList.getPhoneNumber());
         listV1.setEmail(vList.getEmail());
         listV1.setServiceName(vList.getServiceName());
         listV1.setTotalSum(Integer.toString(vList.getTotalSum()));
         listV1.setLinkForPayment(vList.getLinkForPayment());
         listV1.setValidityPeriod(vList.getValidityPeriod());
         listV1.setStatusId(Integer.toString(vList.getStatusId()));
         listV1.setCreatedAt(vList.getCreatedAt());
         listV1.setUpdatedAt(vList.getUpdatedAt());
         listV1.setCountGoods( Integer.toString(GoodsRepository.getCountGoodsInInvoice(vList.getInvoiceId())) );
		 lv.add(listV1);
		 //------------------------------ 
	  }
      logger.info("выгружен список invoices\n");
	  return lv;
   }
   //************************************************************
}