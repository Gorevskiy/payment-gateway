package com.payment_gateway.controllers;

import com.payment_gateway.db_model.*;
/*import com.payment_gateway.repository.clientPaymentQrRequestsRepository;
import com.payment_gateway.repository.clientPaymentQrResponsesRepository;
import com.payment_gateway.repository.clientPaymentQrStatusRepository;
import com.payment_gateway.repository.goodsOperationTypeRepository;
import com.payment_gateway.repository.goodsPaymentTypeRepository;
import com.payment_gateway.repository.goodsRepository;
import com.payment_gateway.repository.goodsTaxRepository;
import com.payment_gateway.repository.invoiceStatusRepository;*/
import com.payment_gateway.repository.invoicesRepository;
import com.payment_gateway.repository.goodsRepository;

import com.payment_gateway.methods.mymethods;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
/*import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;*/

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/*import java.util.Calendar;
import java.util.GregorianCalendar;
import java.text.SimpleDateFormat;

import java.sql.SQLException;
import org.springframework.boot.configurationprocessor.json.JSONException;*/

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;

@Controller
public class payment_gatewayController {

  //private final Logger logger = LoggerFactory.getLogger(this.getClass());

  @Autowired
  private invoicesRepository InvoicesRepository;

  @Autowired
  private goodsRepository GoodsRepository;

  //@Autowired
  //private invoiceStatusRepository InvoiceStatusRepository;

  /*@Autowired
  private goodsRepository GoodsRepository;

  @Autowired
  private goodsOperationTypeRepository GoodsOperationTypeRepository;

  @Autowired
  private goodsPaymentTypeRepository GoodsPaymentTypeRepository;

  @Autowired
  private goodsTaxRepository GoodsTaxRepository;

  @Autowired
  private clientPaymentQrRequestsRepository ClientPaymentQrRequestsRepository;

  @Autowired
  private clientPaymentQrResponsesRepository ClientPaymentQrResponsesRepository;

  @Autowired
  private clientPaymentQrStatusRepository ClientPaymentQrStatusRepository; */

  //****************************************************************
  @RequestMapping(value = {"/main"})
  public String mainPage(Model model, HttpServletRequest request, HttpServletResponse response) throws ClassNotFoundException,IOException, NullPointerException {
//        logger.info("выполнен запрос main\n");
        String message = "";
        List<listInvoicesTxt1> listInvTxt =  new ArrayList<listInvoicesTxt1>();  
        int a = (int) ( Math.random() * 1000 );
        listInvTxt = mymethods.getListInv(InvoicesRepository, GoodsRepository);
        model.addAttribute("listInvTxt", listInvTxt);
        model.addAttribute("rnd", Integer.toString(a));
        model.addAttribute("message", message);
        model.addAttribute("adm_user", "Admin");
        model.addAttribute("razdel", "invoices-list");
        model.addAttribute("users_upd", "yes");
        return "main3";
  }
  //****************************************************************
}
