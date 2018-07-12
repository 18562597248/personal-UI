<template>
    <div>
        <toolbar>
            <hd-button-group slot="right">
                <hd-fullscreen></hd-fullscreen>
                <hd-sidebartoggle></hd-sidebartoggle>
            </hd-button-group>
        </toolbar>
        <section id="styling" style="padding: 60px 0 0 0;">
            <h5 class="row-title before-themeprimary">Styling of BeyondAdmin</h5>

            <!--基本类型-->
            <div class="row">
                <div class="col-lg-3">
                    <h3>基本类型</h3>
                    <p style="font-size: 15px;font-weight: 300;line-height: 25px;">四种基本类型的基础色</p>
                </div>
                <div class="col-lg-9 m-t-20">
                    <ul class="colors-palette pull-left" style="list-style: none; margin: 0; padding-right: 90px;">
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color">
                                    danger
                                </div>
                                <div class="color">
                                    #d73d32
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #d73d32"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color">
                                    success
                                </div>
                                <div class="color">
                                    #53a93f
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #53a93f"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color">
                                    warning
                                </div>
                                <div class="color">
                                    #f4b400
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #f4b400"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color">
                                    info
                                </div>
                                <div class="color">
                                    #57b5e3
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #57b5e3"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <hr>

            <!--皮肤颜色-->
            <div class="row">
                <div class="col-lg-3">
                    <h3>皮肤颜色</h3>
                    <p style="font-size: 15px; font-weight: 300; line-height: 25px;">
                        beyond.css的皮肤功能所支持的几个主色系(默认azure):
                    </p>
                </div>
                <div class="col-lg-9 m-t-20">
                    <ul class="colors-palette  pull-left">
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ed4e2a;">
                                    Blue
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #5db2ff"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #fb6e52;">
                                    Azure
                                </div>

                            </div>
                            <div class="color-main" style="background-color: #2dc3e8"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ed4e2a;">
                                    Teal
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #03b3b2"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ed4e2a;">
                                    Green
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #53a93f"></div>
                        </li>
                        <br>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #7bd148;">
                                    Orange
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ff8f32"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #8cc474;">
                                    Pink
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #cc324b"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #7bd148;">
                                    Dark Red
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ac193d"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #8cc474;">
                                    Purple
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #cc324b"></div>
                        </li>
                        <br>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #fb6e52;">
                                    Dark Blue
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #0072c6"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #fb6e52;">
                                    Gray
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #585858"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #d73d32;">
                                    Black
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #474544"></div>
                        </li>
                        <li data-color="#bdc3c7" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #d73d32;">
                                    Deep Blue
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #001940"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <hr>

            <!--皮肤配色-->
            <div class="row">
                <div class="col-lg-3">
                    <h3 class="red">Skin Colour Matching</h3>
                    <p style="font-size: 15px; font-weight: 300; line-height: 25px;">
                        这里给出皮肤色的配色(默认azure).
                        <br>
                        &nbsp;&nbsp;THEMEPRIMARY为皮肤色其他四种为配色.
                        <br>
                        &nbsp;&nbsp;主要作用:
                        <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;1)用户头像左侧的有色边;
                        <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;2)sidebar-menu在hover时左侧有色边;
                        <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;3)sidebar-menu在hover时左侧logo颜色;
                        <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;4)page-header部分成组出现的按钮底色;
                    </p>
                </div>
                <div class="col-lg-9 m-t-20">
                    <ul class="colors-palette  pull-left">
                        <!--azure-->
                        <li data-color="#2dc3e8" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #2dc3e8;line-height: 22px;">
                                    azure :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #2dc3e8"></div>
                        </li>
                        <li data-color="#fb6e52" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #fb6e52;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #fb6e52;"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <br>
                        <!--black-->
                        <li data-color="#474544" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #474544;line-height: 22px;">
                                    black :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #474544"></div>
                        </li>
                        <li data-color="#d73d32" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #d73d32;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #d73d32;"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <br>
                        <!--blue-->
                        <li data-color="#5db2ff" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #5db2ff;line-height: 22px;">
                                    blue :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #5db2ff"></div>
                        </li>
                        <li data-color="#ed4e2a" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ed4e2a;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ed4e2a;"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <br>
                        <!--darkblue-->
                        <li data-color="#0072c6" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #0072c6;line-height: 22px;">
                                    darkblue :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #0072c6"></div>
                        </li>
                        <li data-color="#fb6e52" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #fb6e52;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #fb6e52;"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <br>
                        <!--darkred-->
                        <li data-color="#ac193d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ac193d;line-height: 22px;">
                                    darkred :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ac193d"></div>
                        </li>
                        <li data-color="#7bd148" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #7bd148;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #7bd148;"></div>
                        </li>
                        <li data-color="#5db2ff" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #5db2ff;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #5db2ff"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <br>
                        <!--deepblue-->
                        <li data-color="#001940" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #001940;line-height: 22px;">
                                    deepblue :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #001940"></div>
                        </li>
                        <li data-color="#d73d32" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #d73d32;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #d73d32;"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <br>
                        <!--gray-->
                        <li data-color="#585858" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #585858;line-height: 22px;">
                                    gray :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #585858"></div>
                        </li>
                        <li data-color="#fb6e52" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #fb6e52;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #fb6e52;"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <br>
                        <!--green-->
                        <li data-color="#53a93f" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #53a93f;line-height: 22px;">
                                    green :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #53a93f"></div>
                        </li>
                        <li data-color="#ed4e2a" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ed4e2a;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ed4e2a;"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <br>
                        <!--orange-->
                        <li data-color="#ff8f32" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ff8f32;line-height: 22px;">
                                    orange :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ff8f32"></div>
                        </li>
                        <li data-color="#7bd148" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #7bd148;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #7bd148;"></div>
                        </li>
                        <li data-color="#5db2ff" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #5db2ff;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #5db2ff"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <br>
                        <!--pink-->
                        <li data-color="#cc324b" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #cc324b;line-height: 22px;">
                                    pink :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #cc324b"></div>
                        </li>
                        <li data-color="#8cc474" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #8cc474;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #8cc474;"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#5db2ff" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #5db2ff;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #5db2ff"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <br>
                        <!--purple-->
                        <li data-color="#8c0095" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #8c0095;line-height: 22px;">
                                    purple :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #8c0095"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55;"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#fb6e52" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #fb6e52;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #fb6e52"></div>
                        </li>
                        <br>
                        <!--teal-->
                        <li data-color="#03b3b2" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #03b3b2;line-height: 22px;">
                                    teal :<br>themeprimary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #03b3b2"></div>
                        </li>
                        <li data-color="#ed4e2a" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ed4e2a;line-height: 22px;">
                                    themesecond<br/>ary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ed4e2a;"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;line-height: 22px;">
                                    themethird<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;line-height: 22px;">
                                    themefourth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;line-height: 22px;">
                                    themefifth<br/>color
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <hr>

            <!--组件颜色-->
            <div class="row">
                <div class="col-lg-3">
                    <h3>Component Colors</h3>
                    <p style="font-size: 15px; font-weight: 300; line-height: 25px;">
                        这里将组件中可以出现的颜色进行列举:
                        <br>
                        (首先组件可以关联皮肤,即使用皮肤的颜色)
                        <br>THEMEPRIMARY
                        <br>THEMESECONDARY
                        <br>THEMETHIRDCOLOR
                        <br>THEMEFOURTHCOLOR
                        <br>THEMEFIFTHCOLOR
                    </p>
                </div>
                <div class="col-lg-9 m-t-20">
                    <ul class="colors-palette  pull-right">
                        <li data-color="#ffffff" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffffff;">
                                    <span style="color: #000000">white</span>
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffffff"></div>
                        </li>
                        <li data-color="#fbfbfb" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #fbfbfb;">
                                    <span style="color: #040404">snow</span>
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #fbfbfb"></div>
                        </li>
                        <li data-color="#f5f5f5" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #f5f5f5;">
                                    <span style="color: #0a0a0a">whitesmoke</span>
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #f5f5f5"></div>
                        </li>
                        <li data-color="#f3f3f3" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #f3f3f3;">
                                    <span style="color: #0c0c0c">seashell</span>
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #f3f3f3"></div>
                        </li>
                        <li data-color="#eeeeee" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #eeeeee;">
                                    <span style="color: #111111">ivory</span>
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #eeeeee"></div>
                        </li>
                        <li data-color="#e5e5e5" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e5e5e5;">
                                    platinum
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e5e5e5"></div>
                        </li>
                        <li data-color="#d0d0d0" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #d0d0d0;">
                                    lightgray
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #d0d0d0"></div>
                        </li>
                        <li data-color="#cccccc" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #cccccc;">
                                    gray
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #cccccc"></div>
                        </li>
                        <li data-color="#999999" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #999999;">
                                    darkgray
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #999999"></div>
                        </li>
                        <li data-color="#777777" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #777777;">
                                    silver
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #777777"></div>
                        </li>
                        <li data-color="#737373" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #737373;">
                                    sonic-silver
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #737373"></div>
                        </li>
                        <li data-color="#666666" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #666666;">
                                    storm-cloud
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #666666"></div>
                        </li>
                        <li data-color="#555555" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #555555;">
                                    lightcarbon
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #555555"></div>
                        </li>
                        <li data-color="#444444" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #444444;">
                                    carbon
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #444444"></div>
                        </li>
                        <li data-color="#333333" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #333333;">
                                    slate-gray
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #333333"></div>
                        </li>
                        <li data-color="#262626" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #262626;">
                                    darkcarbon
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #262626"></div>
                        </li>
                        <li data-color="#5db2ff" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #5db2ff;">
                                    blue
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #5db2ff"></div>
                        </li>
                        <li data-color="#57b5e3" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #57b5e3;">
                                    info
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #57b5e3"></div>
                        </li>
                        <li data-color="#11a9cc" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #11a9cc;">
                                    sky
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #11a9cc"></div>
                        </li>
                        <li data-color="#4374e0" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #4374e0;">
                                    primary
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #4374e0"></div>
                        </li>
                        <li data-color="#2dc3e8" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #2dc3e8;">
                                    azure
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #2dc3e8"></div>
                        </li>
                        <li data-color="#6f85bf" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #6f85bf;">
                                    blueberry
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #6f85bf"></div>
                        </li>
                        <li data-color="#a0d468" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #a0d468;">
                                    palegreen
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #a0d468"></div>
                        </li>
                        <li data-color="#53a93f" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #53a93f;">
                                    success
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #53a93f"></div>
                        </li>
                        <li data-color="#8cc474" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #8cc474;">
                                    green
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #8cc474"></div>
                        </li>
                        <li data-color="#f6d52e" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #f6d52e;">
                                    lightyellow
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #f6d52e"></div>
                        </li>
                        <li data-color="#ffce55" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ffce55;">
                                    yellow
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ffce55"></div>
                        </li>
                        <li data-color="#f4b400" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #f4b400;">
                                    warning
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #f4b400"></div>
                        </li>
                        <li data-color="#f9b256" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #f9b256;">
                                    gold
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #f9b256"></div>
                        </li>
                        <li data-color="#fb6e52" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #fb6e52;">
                                    orange
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #fb6e52"></div>
                        </li>
                        <li data-color="#e46f61" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e46f61;">
                                    lightred
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e46f61"></div>
                        </li>
                        <li data-color="#ed4e2a" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #ed4e2a;">
                                    darkorange
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #ed4e2a"></div>
                        </li>
                        <li data-color="#df5138" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #df5138;">
                                    red
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #df5138"></div>
                        </li>
                        <li data-color="#e75b8d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #e75b8d;">
                                    pink
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #e75b8d"></div>
                        </li>
                        <li data-color="#cc324b" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #cc324b;">
                                    darkpink
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #cc324b"></div>
                        </li>
                        <li data-color="#d73d32" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #d73d32;">
                                    danger
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #d73d32"></div>
                        </li>
                        <li data-color="#bc5679" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #bc5679;">
                                    magenta
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #bc5679"></div>
                        </li>
                        <li data-color="#7e3794" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #7e3794;">
                                    purple
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #7e3794"></div>
                        </li>
                        <li data-color="#981b48" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #981b48;">
                                    maroon
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #981b48"></div>
                        </li>
                        <li data-color="#1f2d3d" class="">
                            <div class="color-name">
                                <div class="color skin" style="background-color: #1f2d3d;">
                                    black(自写)
                                </div>
                            </div>
                            <div class="color-main" style="background-color: #1f2d3d"></div>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
    export default{
        components:{
        },
        props: {
        },
        data () {
            return {
            }
        },
        computed: {
        },
//    beforeCreate:{},
//    created:{},
//    beforeMount:{},
//    mounted:{},
        methods: {
        },
//    ready () {},
        watch:{
        }
    }
</script>
<style>
    .colors-palette > li {
        background-clip: padding-box;
        border-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 120px;
        list-style: none;
        margin: 8px;
        -moz-background-clip: padding;
        -moz-border-radius: 50%;
        overflow: hidden;
        position: relative;
        transition-duration: .2s;
        -webkit-background-clip: padding-box;
        -webkit-border-radius: 50%;
        width: 120px;
    }

    .colors-palette > li .color-name {
        text-align: center;
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        color: #fff;
        height: 120px;
        width: 120px;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        text-transform: uppercase;
    }

    .colors-palette > li .color-name > .color {
        height: 20px;
    }

    .colors-palette > li .color-name > .color.skin {
        height: 40px;
        line-height:40px;
    }

    .colors-palette > li .color-name > .color:first-child {
        background-color: rgba(255,255,255,.1);
    }

    .colors-palette > li .color-name > .color:not(:last-child):not(:first-child) {
        border-bottom: 1px solid #ccc;
    }

    .colors-palette > li .color-main {
        -webkit-border-radius: 2px;
        -webkit-background-clip: padding-box;
        -moz-border-radius: 2px;
        -moz-background-clip: padding;
        border-radius: 2px;
        background-clip: padding-box;
        height: 120px;
        width: 120px;
    }

</style>
