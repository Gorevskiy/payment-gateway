package com.payment_gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class Payment_gatewayApplication extends SpringBootServletInitializer {

  @Override
  protected SpringApplicationBuilder configure(SpringApplicationBuilder Payment_gatewayApplication) {
    return Payment_gatewayApplication.sources(Payment_gatewayApplication.class);
  }

  public static void main(String[] args) {
    SpringApplication.run(Payment_gatewayApplication.class, args);
  }
}