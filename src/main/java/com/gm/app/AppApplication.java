package com.gm.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;
import org.springframework.boot.ApplicationRunner;

@SpringBootApplication
public class AppApplication {
	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

	@Bean
	ApplicationRunner init(Garden garden) {
		return args -> {
			Stream.of("Tuja", "Modrzew", "Roza", "Tulipan", "Brzoza").forEach(name -> {
				Plant plant = new Plant();
				plant.setName(name);
				garden.save(plant);
			});
			garden.findAll().forEach(System.out::println);
		};
	}
}
