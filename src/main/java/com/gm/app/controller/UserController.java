package com.gm.app.controller;


import com.gm.app.model.User;
import com.gm.app.service.EmailService;
import com.gm.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private EmailService emailService;

    @GetMapping(path="/add-user") // Map ONLY GET Requests
    public @ResponseBody String addNewUser (@RequestParam String name
            , @RequestParam String email) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        User n = new User();
        n.setName(name);
        n.setEmail(email);
        userService.save(n);
        return "Saved";
    }

    @GetMapping(path="/all-users")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userService.findAll();
    }

    @RequestMapping(value="/user", method = RequestMethod.GET)
    public List<User> listUser(){
        return userService.findAll();
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public Optional<User> getOne(@PathVariable(value = "id") Long id){
        return userService.findById(id);
    }

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public User saveUser(@RequestBody User user){
        User userExists = userService.findByEmail(user.getEmail());
        if (userExists != null) {
        }
        user.setEnabled(false);

        // Generate random 36-character string token for confirmation link
        user.setConfirmationToken(UUID.randomUUID().toString());

        userService.save(user);

        //String appUrl = request.getScheme() + "://" + request.getServerName();

        SimpleMailMessage registrationEmail = new SimpleMailMessage();
        registrationEmail.setTo(user.getEmail());
        registrationEmail.setSubject("Registration Confirmation");
        registrationEmail.setText("To confirm your e-mail address, please click the link below:\n"
                 + "localhost:4200/confirm/" + user.getConfirmationToken());
        registrationEmail.setFrom("lukasz.broll@wp.pl");

        emailService.sendEmail(registrationEmail);
        return user;
    }

    @RequestMapping(value="/confirm/{token}", method = RequestMethod.POST)
    public User processConfirmationForm(@PathVariable(value = "token") String token) {

        // Find the user associated with the reset token
        User user = userService.findByConfirmationToken(token);

        // Set user to enabled
        user.setEnabled(true);

        // Save user
       return userService.save(user);

    }

}