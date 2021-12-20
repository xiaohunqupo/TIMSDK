package com.tencent.qcloud.tuikit.tuichat.util;

import com.tencent.qcloud.tuicore.util.TUIBuild;

public class DeviceUtil {

    private static String[] huaweiRongyao = {
            "hwH60",    //荣耀6
            "hwPE",     //荣耀6 plus
            "hwH30",    //3c
            "hwHol",    //3c畅玩版
            "hwG750",   //3x
            "hw7D",      //x1
            "hwChe2",      //x1
    };

    public static boolean isHuaWeiRongyao() {
        String device = TUIBuild.getDevice();
        int length = huaweiRongyao.length;
        for (int i = 0; i < length; i++) {
            if (huaweiRongyao[i].equals(device)) {
                return true;
            }
        }
        return false;
    }


    public static boolean isVivoX21() {
        String model = TUIBuild.getModel();
        return "vivo X21".equalsIgnoreCase(model);
    }
}
