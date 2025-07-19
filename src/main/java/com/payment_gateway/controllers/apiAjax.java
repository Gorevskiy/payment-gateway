package com.payment_gateway.controllers;

import org.springframework.stereotype.Controller;

import com.payment_gateway.repository.invoicesRepository;
import com.payment_gateway.repository.goodsRepository;

//import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;

//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.boot.configurationprocessor.json.JSONException;
import java.io.IOException;
import java.sql.SQLException;
//import java.util.ArrayList;
import java.util.List;

//import com.payment_gateway.methods.mymethods;
import com.payment_gateway.methods.ajaxDisp;


@Controller
public class apiAjax {

   @Autowired
   private invoicesRepository InvoicesRepository;

   @Autowired
   private goodsRepository GoodsRepository;

    @PostMapping("/save-new-invoice")
    public void saveNewInvoice( @RequestParam(value="new_invoice[]") List<String> newInvoice, HttpServletResponse response ) throws IOException, ClassNotFoundException, SQLException, JSONException {
        ajaxDisp.saveInvoiceNew( newInvoice, InvoicesRepository, response );
    }
    /************************************/
    @PostMapping("/get_invoice_name")
    public void getInvoiceName( @RequestParam(value="invoice_id") String invoiceId, HttpServletResponse response ) throws IOException, ClassNotFoundException, SQLException, JSONException {
        ajaxDisp.getInvoiceName( invoiceId, InvoicesRepository, response );
    }
    /************************************/
    @PostMapping("/save-new-good")
    public void saveNewGood( @RequestParam(value="new_good[]") List<String> newGood, HttpServletResponse response ) throws IOException, ClassNotFoundException, SQLException, JSONException {
        ajaxDisp.saveGoodNew( newGood, GoodsRepository, response );
    }
}
