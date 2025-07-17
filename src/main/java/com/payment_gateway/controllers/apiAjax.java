package com.payment_gateway.controllers;

import org.springframework.stereotype.Controller;

import com.payment_gateway.repository.invoicesRepository;

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

    @PostMapping("/save-new-invoice")
    public void saveNewInvoice( @RequestParam(value="new_invoice[]") List<String> newInvoice, HttpServletResponse response ) throws IOException, ClassNotFoundException, SQLException, JSONException {
        ajaxDisp.saveInvoiceNew( newInvoice, InvoicesRepository, response );
    }
}
