// Este archivo cominicara mi frontend con mi backend sin que el navegador lo bloquee por puertos diferentes
package com.example.busapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
              // Permite CORS en todas las rutas del backend
                registry.addMapping("/**") // Aplica a todos los endpoints
                        // Acepta solicitudes solamente desde tu app React que corre en ese origen.
                        .allowedOrigins("http://localhost:3000") // Permite tu frontend
                        // Permite todos los métodos HTTP: GET, POST, PUT, DELETE, etc.
                        .allowedMethods("*") // GET, POST, PUT, DELETE, etc.
                        // Permite que se envíen cualquier tipo de encabezados en las peticiones.
                        .allowedHeaders("*");
            }
        };
    }
}