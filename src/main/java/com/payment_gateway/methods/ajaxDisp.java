package com.payment_gateway.methods;

import java.io.*;
/*****/
import java.util.*;
//import java.text.*;
//import java.lang.*;
/*****/
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.ResultSet;
import java.sql.SQLException;
//import java.sql.Statement;
/*****/
import jakarta.servlet.http.HttpServletResponse;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.Cookie;
//import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.boot.configurationprocessor.json.JSONObject;
//import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.boot.configurationprocessor.json.JSONException;

import java.text.SimpleDateFormat;
/**********************************************/
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.payment_gateway.db_model.*;
import com.payment_gateway.repository.invoicesRepository;

public class ajaxDisp {
   private static final Logger logger = LoggerFactory.getLogger(ajaxDisp.class);
   //****************
   public static void saveInvoiceNew( List<String> newInvoice, invoicesRepository InvoicesRepository, HttpServletResponse response ) throws ClassNotFoundException,SQLException,IOException,JSONException {

	  SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm");
      Calendar cal = new GregorianCalendar();	
  	  String datToday = dateFormat.format(cal.getTime());

	  UUID randomUuid = UUID.randomUUID();

	  invoices Invoice = new invoices();
      Invoice.setFullName(newInvoice.get(0));	  
      Invoice.setPhoneNumber(newInvoice.get(1));	  
      Invoice.setEmail(newInvoice.get(2));	  
      Invoice.setServiceName(newInvoice.get(3));	  
      Invoice.setTotalSum( Integer.parseInt(newInvoice.get(4)) );	  
      Invoice.setValidityPeriod(newInvoice.get(5));	  
      Invoice.setInvoiceId(randomUuid.toString());	  
      Invoice.setOrderId("");	  
      Invoice.setLinkForPayment("");	  
      Invoice.setStatusId(0);	  
      Invoice.setCreatedAt(datToday);	  
      Invoice.setUpdatedAt(datToday);	  

	  InvoicesRepository.addInvoices(Invoice);

	  logger.info("добавлен новый invoice  " + newInvoice.get(0) + "\n" );

	  JSONObject jsonTmp = new JSONObject();
	  response.setContentType("application/json");
	  response.setCharacterEncoding("UTF-8");
	  PrintWriter out = response.getWriter();
	  jsonTmp.put("status", "ok" );
	  out.print(jsonTmp);
	  out.flush();
   }
   //************************************************************
}