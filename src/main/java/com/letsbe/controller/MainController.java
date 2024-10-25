package com.letsbe.controller;

import com.letsbe.service.UserService;
import com.letsbe.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class MainController {

    @Autowired
    private UserService userService;

    @GetMapping("/userList")
    public ResponseEntity<List<Map<String, Object>>> getUserList() {
        List<Map<String, Object>> statsList = new ArrayList<>();
        List<UserVo> userList = userService.getUserList();

        Map<String, Object> stats = new HashMap<>();
        if (!userList.isEmpty()) {
            stats.put("title", userList.get(0).getTitle());
            stats.put("bio", userList.get(0).getBio());
            stats.put("today", userList.get(0).getToday_count());
            stats.put("like", userList.get(0).getLikes_count());
        } else {
            stats.put("title", "No title");
            stats.put("today", "No today");
            stats.put("like", "No like");
        }
        statsList.add(stats);

        return ResponseEntity.ok(statsList);
    }
}
