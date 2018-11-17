package com.gm.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;
import org.springframework.boot.ApplicationRunner;

@SpringBootApplication
@EnableJpaAuditing
public class AppApplication {
	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}
}
