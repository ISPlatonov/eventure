package com.example.eventurejavabackend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.DelegatingPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.security.oauth2.server.resource.introspection.ReactiveOpaqueTokenIntrospector;
import org.springframework.security.oauth2.server.resource.introspection.SpringReactiveOpaqueTokenIntrospector;
import org.springframework.security.web.server.SecurityWebFilterChain;

import java.util.HashMap;
import java.util.Map;


@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Value("${spring.security.oauth2.resourceserver.opaque-token.introspection-uri}")
    private String issuer;

    @Value("${spring.security.oauth2.resourceserver.opaque-token.client-id}")
    private String clientid;

    @Value("${spring.security.oauth2.resourceserver.opaque-token.client-secret}")
    private String clientsecret;

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
        http
                .authorizeExchange((authorize) -> authorize
                        .anyExchange().authenticated()
                )
                .oauth2ResourceServer((oauth2) -> oauth2
                        .opaqueToken(Customizer.withDefaults())
                );
        return http.build();
    }

    @Bean
    public ReactiveOpaqueTokenIntrospector opaqueTokenIntrospector() {
        return new SpringReactiveOpaqueTokenIntrospector(
                issuer, clientid, clientsecret);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        String idForEncode = "bcrypt";
        Map encoders = new HashMap<>();
        encoders.put(idForEncode, new BCryptPasswordEncoder());
        encoders.put("noop", NoOpPasswordEncoder.getInstance());
        encoders.put("sha256", new StandardPasswordEncoder());
        return new DelegatingPasswordEncoder(idForEncode, encoders);
    }

}


//@Configuration
//@EnableWebFluxSecurity
//public class SecurityConfig {
////    @Value("${okta.oauth2.issuer}")
////    private String issuer;
////
////    @Value("${okta.oauth2.client-id}")
////    private String clientid;
////
////    @Value("${okta.oauth2.client-secret}")
////    private String clientsecret;
//
//    @Value("${spring.security.oauth2.resourceserver.opaque-token.introspection-uri}")
//    private String issuer;
//
//    @Value("${spring.security.oauth2.resourceserver.opaque-token.client-id}")
//    private String clientid;
//
//    @Value("${spring.security.oauth2.resourceserver.opaque-token.client-secret}")
//    private String clientsecret;
//
//    @Bean
//    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
//        http
//                .authorizeExchange((authorize) -> authorize
//                        .anyExchange().authenticated()
//                )
//                .oauth2ResourceServer((oauth2) -> oauth2
//                        .opaqueToken(Customizer.withDefaults())
//                );
//        return http.build();
//    }
//
//    @Bean
//    public ReactiveOpaqueTokenIntrospector opaqueTokenIntrospector() {
//        return new SpringReactiveOpaqueTokenIntrospector(
//                issuer, clientid, clientsecret);
//    }
//
//    @Bean
//    PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//}

//    @Bean
//    SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
//        http
//            .authorizeExchange(exchanges -> exchanges
//                    .anyExchange().authenticated()
//            )
//            .oauth2ResourceServer(ServerHttpSecurity.OAuth2ResourceServerSpec::opaqueToken);
//        return http.build();
//    }
//
//    @Bean
//    public ReactiveOpaqueTokenIntrospector introspector() {
//        System.out.println(issuer);
//        System.out.println(clientid);
//        System.out.println(clientsecret);
//        return new NimbusReactiveOpaqueTokenIntrospector(issuer, clientid, clientsecret);
//    }
//
//    @Bean
//    BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}