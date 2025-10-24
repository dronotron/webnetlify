(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"data":{"defaultLocale":"es","history":{},"name":"Player817","displayTooltipInTouchScreens":true,"locales":{"es":"locale/es.txt"},"textToSpeechConfig":{"pitch":1,"volume":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1}},"gap":10,"propagateClick":false,"width":"100%","defaultMenu":["fullscreen","mute","rotation"],"height":"100%","layout":"absolute","children":["this.MainViewer","this.Button_3C40B9FD_183D_A7B2_41B7_62F5493AC54B"],"backgroundColorRatios":[0],"scrollBarMargin":2,"hash": "666b93ab729cb5c93dfee29a85f60fb2e826a71baa8be1ca29d352a3bcbe7b8e", "definitions": [{"viewerArea":"this.MainViewer","class":"Model3DPlayer","id":"MainViewerModel3DPlayer"},{"arrowKeysAction":"translate","class":"PanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","aaEnabled":true,"displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true},{"label":trans('model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8.label'),"thumbnailUrl":"media/model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8_t.jpg","displayEffect":{"denseFadeFactor":0.3,"speedFactor":0.3,"sparseFadeFactor":0.2,"minimumPointSize":1,"denseTimeDelay":1.7,"class":"RadialModel3DDisplayEffect"},"objects":[],"floorRadius":5.77,"data":{"label":"msh-hi","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"keepModel3DLoadedWithoutLocation":true},"surfaceReticleMaxRadius":50,"model":"this.res_7A57EB0A_69B8_7771_41C0_CEB24B698C19","camera":"this.cam_7A5092CA_69B8_16F1_41D8_66652F05333A","backgroundColor":"transparent","antialiasingLevel":0.3,"sphericalHarmonicsMaxDegree":3,"class":"Model3D","lights":[],"surfaceReticleMinRadius":15,"id":"model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8","environmentIntensity":0.53,"surfaceReticleRadius":0.02,"surfaceSelectionCoef":2},{"playbackBarBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","progressBarBorderSize":0,"toolTipFontSize":"1.11vmin","toolTipPaddingTop":4,"playbackBarProgressBorderRadius":0,"playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"class":"ViewerArea","data":{"name":"Main Viewer"},"playbackBarProgressBorderSize":0,"playbackBarHeadShadow":true,"toolTipPaddingBottom":4,"playbackBarBackgroundColorDirection":"vertical","subtitlesTop":0,"toolTipShadowColor":"#333138","progressBorderRadius":2,"subtitlesBottom":50,"toolTipTextShadowColor":"#000000","width":"100%","progressLeft":"33%","height":"100%","toolTipFontFamily":"Arial","vrThumbstickRotationStep":20,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarHeight":10,"subtitlesFontSize":"3vmin","subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionColor":"#FF6600","surfaceReticleSelectionColor":"#FFFFFF","minHeight":50,"subtitlesBackgroundOpacity":0.2,"minWidth":100,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"id":"MainViewer","playbackBarHeadBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontFamily":"Arial","toolTipFontColor":"#606060","vrPointerSelectionTime":2000,"playbackBarBottom":5,"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"playbackBarHeadBorderRadius":0,"progressBackgroundColorRatios":[0],"propagateClick":false,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","playbackBarRight":0,"progressRight":"33%","subtitlesGap":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderColor":"#767676","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingRight":6,"progressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"progressBackgroundColor":["#000000"],"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundColor":"#000000","playbackBarLeft":0,"progressBottom":10,"subtitlesFontColor":"#FFFFFF","progressHeight":10,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":2,"progressBorderSize":0,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"]},{"label":trans('model_032D3BF0_1750_1E1A_41B0_16780FDEAC72.label'),"thumbnailUrl":"media/model_032D3BF0_1750_1E1A_41B0_16780FDEAC72_t.jpg","displayEffect":{"denseFadeFactor":0.3,"speedFactor":0.3,"sparseFadeFactor":0.2,"minimumPointSize":1,"denseTimeDelay":1.7,"class":"RadialModel3DDisplayEffect"},"objects":[],"floorRadius":5.77,"data":{"label":"msh-lo","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"keepModel3DLoadedWithoutLocation":true},"surfaceReticleMaxRadius":50,"model":"this.res_05AA2842_16EC_B5EA_419D_0784355E33FB","camera":"this.cam_05AAD842_16EC_B5EA_41AA_7E306A3B9B47","backgroundColor":"transparent","antialiasingLevel":1,"class":"Model3D","lights":[],"surfaceReticleMinRadius":15,"id":"model_032D3BF0_1750_1E1A_41B0_16780FDEAC72","environmentIntensity":0.5,"surfaceReticleRadius":0.02,"surfaceSelectionCoef":2},{"vfov":180,"label":trans('panorama_000DF001_16F4_7566_41B2_611EC11EDB5B.label'),"frames":[{"cube":{"class":"ImageResource","levels":[{"colCount":60,"height":5120,"class":"TiledImageResourceLevel","rowCount":10,"width":30720,"tags":"ondemand","url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/0/{row}_{column}.webp"},{"colCount":30,"height":2560,"class":"TiledImageResourceLevel","rowCount":5,"width":15360,"tags":"ondemand","url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/1/{row}_{column}.webp"},{"colCount":18,"height":1536,"class":"TiledImageResourceLevel","rowCount":3,"width":9216,"tags":"ondemand","url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/2/{row}_{column}.webp"},{"colCount":12,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"width":6144,"tags":"ondemand","url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/3/{row}_{column}.webp"},{"colCount":6,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"width":3072,"tags":["ondemand","preload"],"url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/4/{row}_{column}.webp"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_t.webp"}],"thumbnailUrl":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_t.webp","hfov":360,"data":{"label":"FONDO NEGRO"},"hfovMax":130,"class":"Panorama","id":"panorama_000DF001_16F4_7566_41B2_611EC11EDB5B"},{"items":[{"player":"this.MainViewerModel3DPlayer","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","media":"this.model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8"}],"class":"PlayList","id":"playList_3DC664C4_182D_ADD2_4194_F88471F26708"},{"items":[{"player":"this.MainViewerModel3DPlayer","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","media":"this.model_032D3BF0_1750_1E1A_41B0_16780FDEAC72"}],"class":"PlayList","id":"playList_3DC644C4_182D_ADD2_41B2_3685105B4462"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_camera","enterPointingToHorizon":true,"class":"PanoramaCamera"},{"bottom":"1.77%","iconWidth":0,"verticalAlign":"middle","pressedRollOverBackgroundColor":["#666666"],"backgroundOpacity":0.57,"pressedRollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#000000"],"propagateClick":false,"iconHeight":0,"data":{"name":"Button house info"},"paddingLeft":0,"fontWeight":"bold","width":110,"pressedBackgroundColorRatios":[0],"height":40,"layout":"horizontal","paddingRight":0,"borderColor":"#000000","fontSize":12,"backgroundColorRatios":[0],"pressedBackgroundColor":["#666666"],"horizontalAlign":"center","rollOverBackgroundOpacity":1,"label":trans('Button_3C40B9FD_183D_A7B2_41B7_62F5493AC54B.label'),"click":"try{eval('window.open(\\'https://api.whatsapp.com/send?phone=51932001785&text=\\'+encodeURIComponent(ua),\\'_blank\\')')}catch(e){console.log(e)}","minHeight":1,"rollOverShadow":false,"paddingTop":0,"minWidth":1,"backgroundColor":["#000000"],"pressedBackgroundOpacity":1,"fontColor":"#FFFFFF","rollOverBackgroundColorRatios":[0],"class":"Button","tabIndex":0,"paddingBottom":0,"left":"47.09%","fontFamily":"Montserrat","id":"Button_3C40B9FD_183D_A7B2_41B7_62F5493AC54B"},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_000DF001_16F4_7566_41B2_611EC11EDB5B","begin":"try{eval('ua=navigator.userAgent||navigator.vendor||window.opera;isMobile=/android|iphone|ipad|ipod/i.test(ua);score=0;if(isMobile){if(/iphone/i.test(ua))score+=3;else if(/snapdragon\\s*(8|gen\\s*2|gen\\s*3|gen\\s*4|gen\\s*5)/i.test(ua))score+=3;else if(/dimensity\\s*(9200|9300|9400|9500)/i.test(ua))score+=3;else score+=1;deviceTier=score>=2?\\'high\\':\\'low\\';console.log(\\'deviceTier =\\',deviceTier,\\'(mobile score=\\'+score+\\')\\');}else{mem=navigator.deviceMemory||4;cores=navigator.hardwareConcurrency||2;rend=\\'\\';try{c=document.createElement(\\'canvas\\');g=c.getContext(\\'webgl\\')||c.getContext(\\'experimental-webgl\\');if(g){dbg=g.getExtension(\\'WEBGL_debug_renderer_info\\');rend=dbg?g.getParameter(dbg.UNMASKED_RENDERER_WEBGL):g.getParameter(g.RENDERER);}}catch(e){}rend=(rend||\\'\\').toLowerCase();if(mem>=16)score+=3;else if(mem>=8)score+=2;else if(mem>=4)score+=1;if(cores>=8)score+=3;else if(cores>=4)score+=2;else if(cores>=2)score+=1;if(/nvidia|geforce|radeon|amd|rx|rtx|quadro|vega/i.test(rend))score+=3;else if(/apple\\s*m1|m2|m3|m4/i.test(rend)||(/macintosh|mac os/i.test(ua)&&/apple|metal/i.test(rend)))score+=2;else if(/intel|uhd|hd graphics|iris|angle/i.test(rend))score-=1;if(score<=4)deviceTier=\\'low\\';else deviceTier=\\'high\\';console.log(\\'deviceTier =\\',deviceTier,\\'(desktop score=\\'+score+\\', GPU=\\'+rend+\\')\\');} msg=document.createElement(\\'div\\');msg.textContent=\\'deviceTier: \\'+deviceTier;msg.style=\\'position:fixed;top:10px;left:10px;background:rgba(0,0,0,0.7);color:white;padding:6px 10px;border-radius:6px;z-index:9999;font-family:sans-serif;font-size:14px;\\';document.body.appendChild(msg);setTimeout(()=>msg.remove(),5000);if(deviceTier===\\'high\\'){tour.setMediaByName(\\'msh-hi\\');console.log(\\'Cargando modelo:(high tier)\\');}else{tour.setMediaByName(\\'msh-lo\\');console.log(\\'Cargando modelo: (low tier)\\');}')}catch(e){console.log(e)}","camera":"this.panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"invertY":true,"id":"res_7A57EB0A_69B8_7771_41C0_CEB24B698C19","invertX":true,"class":"Model3DResource","levels":[{"url":"media/model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8/scene.bin","class":"Model3DResourceLevel"}]},{"far":15,"maxY":1.45,"initialYaw":95.22,"rotationSpeed":2.5,"near":0.2,"sequences":["this.seq_538F846D_71E8_CCEE_41C3_49476D789D4B"],"minY":0.55,"initialPitch":-6.72,"vrEnabled":true,"initialFov":90,"keepHeight":false,"minX":-3.89,"initialSequence":"this.seq_538F846D_71E8_CCEE_41C3_49476D789D4B","initialY":0.85,"maxZ":3.5,"translationSpeed":0.3,"class":"FirstPersonModel3DCamera","initialZ":-4.52,"id":"cam_7A5092CA_69B8_16F1_41D8_66652F05333A","minZ":-4.72,"maxX":8.1,"initialX":-2.86},{"invertY":true,"id":"res_05AA2842_16EC_B5EA_419D_0784355E33FB","invertX":true,"class":"Model3DResource","levels":[{"url":"media/model_032D3BF0_1750_1E1A_41B0_16780FDEAC72/scene.bin","class":"Model3DResourceLevel"}]},{"far":5,"maxY":1.45,"initialYaw":-100.44,"rotationSpeed":2.5,"near":0.2,"sequences":["this.seq_05A70843_16EC_B5EA_41AE_AC9EF5C8AB16"],"minY":0.55,"initialPitch":-3.52,"vrEnabled":true,"initialFov":90,"keepHeight":false,"minX":-3.89,"initialY":0.85,"maxZ":3.5,"translationSpeed":0.3,"class":"FirstPersonModel3DCamera","initialZ":1.99,"id":"cam_05AAD842_16EC_B5EA_41AA_7E306A3B9B47","minZ":-4.72,"maxX":8.1,"initialX":6.56},{"class":"Model3DCameraSequence","id":"seq_538F846D_71E8_CCEE_41C3_49476D789D4B","movements":[{"targetPitch":-15.43,"targetY":0.85,"targetZ":-4.58,"targetX":-2.94,"duration":500,"easing":"cubic_in_out","targetYaw":-143.57,"yawPath":"longest","data":{"name":"Vista 1"},"class":"TargetModel3DCameraMovement"},{"targetPitch":-3.52,"targetY":0.85,"targetZ":1.99,"targetX":6.56,"duration":3000,"easing":"cubic_in","targetYaw":-100.44,"data":{"name":"Vista 2"},"class":"TargetModel3DCameraMovement"}]},{"class":"Model3DCameraSequence","id":"seq_05A70843_16EC_B5EA_41AE_AC9EF5C8AB16","movements":[{"targetPitch":-15.43,"targetY":0.85,"targetZ":-4.58,"targetX":-2.94,"duration":500,"easing":"cubic_in_out","targetYaw":-143.57,"yawPath":"longest","data":{"name":"Vista 1"},"class":"TargetModel3DCameraMovement"},{"targetPitch":-3.52,"targetY":0.85,"targetZ":1.99,"targetX":6.56,"duration":3000,"easing":"cubic_in","targetYaw":-100.44,"data":{"name":"Vista 2"},"class":"TargetModel3DCameraMovement"}]}],"scripts":{"getOverlays":TDV.Tour.Script.getOverlays,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeJS":TDV.Tour.Script.executeJS,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"toggleVR":TDV.Tour.Script.toggleVR,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPixels":TDV.Tour.Script.getPixels,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"clone":TDV.Tour.Script.clone,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"playAudioList":TDV.Tour.Script.playAudioList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"translate":TDV.Tour.Script.translate,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"createTween":TDV.Tour.Script.createTween,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"init":TDV.Tour.Script.init,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showWindow":TDV.Tour.Script.showWindow,"initQuiz":TDV.Tour.Script.initQuiz,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"existsKey":TDV.Tour.Script.existsKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setLocale":TDV.Tour.Script.setLocale,"initAnalytics":TDV.Tour.Script.initAnalytics,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizFinish":TDV.Tour.Script.quizFinish,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getComponentByName":TDV.Tour.Script.getComponentByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMapLocation":TDV.Tour.Script.setMapLocation,"enableVR":TDV.Tour.Script.enableVR,"downloadFile":TDV.Tour.Script.downloadFile,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"shareSocial":TDV.Tour.Script.shareSocial,"getKey":TDV.Tour.Script.getKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"disableVR":TDV.Tour.Script.disableVR,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer},"minHeight":0,"minWidth":0,"scrollBarColor":"#000000","backgroundColor":["#000000"],"watermark":false,"start":"this.init()","id":"rootPlayer","class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.38, Fri Oct 24 2025