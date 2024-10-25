package com.letsbe.vo;

import lombok.Data;
import java.util.Date;

@Data
public class UserVo {
    private Integer user_id;
    private String user_name;
    private String nickname;
    private String password;
    private String email;
    private String phone;
    private Date created_at;
    private Date updated_at;
    private Integer profile_id;
    private String title;
    private String bio;
    private String profile_picture;
    private Integer today_count;
    private Integer likes_count;
    private String theme_color;
}
