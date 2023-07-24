package com.anushka.jwt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anushka.jwt.entities.User;

public interface UserRepository extends JpaRepository<User, String> {

    public Optional<User> findByEmailId(String email);
}
