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
var script = {"hash": "0acb0c43069fe23369b14c7cf9cbcd30be95953ce8c64bf960ea059bfbaa7850", "definitions": [{"id":"panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_camera","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera"},{"firstTransitionDuration":0,"playbackBarBorderSize":0,"subtitlesBottom":50,"subtitlesTop":0,"data":{"name":"Main Viewer"},"toolTipFontSize":"1.11vmin","toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"width":"100%","toolTipFontFamily":"Arial","height":"100%","playbackBarHeadHeight":15,"subtitlesFontSize":"3vmin","playbackBarLeft":0,"toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"progressOpacity":0.7,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"toolTipShadowColor":"#333138","playbackBarHeadShadow":true,"subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"surfaceReticleSelectionColor":"#FFFFFF","minHeight":50,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBarBackgroundColorDirection":"horizontal","progressBorderColor":"#000000","id":"MainViewer","minWidth":100,"propagateClick":false,"progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundOpacity":1,"progressBarBackgroundColorRatios":[0],"toolTipFontColor":"#606060","progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":10,"subtitlesGap":0,"progressBorderSize":0,"vrPointerColor":"#FFFFFF","playbackBarHeadWidth":6,"progressBarBorderRadius":2,"vrThumbstickRotationStep":20,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressBorderRadius":2,"progressLeft":"33%","vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"class":"ViewerArea","playbackBarProgressBorderColor":"#000000","toolTipPaddingBottom":4,"playbackBarHeadBorderRadius":0,"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"toolTipBorderColor":"#767676","playbackBarHeadBorderColor":"#000000"},{"thumbnailUrl":"media/model_032D3BF0_1750_1E1A_41B0_16780FDEAC72_t.jpg","environmentIntensity":0.5,"label":trans('model_032D3BF0_1750_1E1A_41B0_16780FDEAC72.label'),"data":{"label":"msh-lo","keepModel3DLoadedWithoutLocation":true,"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"surfaceReticleMinRadius":15,"objects":[],"model":"this.res_05AA2842_16EC_B5EA_419D_0784355E33FB","surfaceReticleRadius":0.02,"displayEffect":{"sparseFadeFactor":0.2,"speedFactor":0.3,"denseFadeFactor":0.3,"denseTimeDelay":1.7,"class":"RadialModel3DDisplayEffect","minimumPointSize":1},"backgroundColor":"transparent","floorRadius":5.77,"class":"Model3D","surfaceSelectionCoef":2,"surfaceReticleMaxRadius":50,"id":"model_032D3BF0_1750_1E1A_41B0_16780FDEAC72","camera":"this.cam_05AAD842_16EC_B5EA_41AA_7E306A3B9B47","antialiasingLevel":1,"lights":[]},{"thumbnailUrl":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_t.webp","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":10,"height":5120,"colCount":60,"width":30720,"tags":"ondemand","url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel"},{"rowCount":5,"height":2560,"colCount":30,"width":15360,"tags":"ondemand","url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel"},{"rowCount":3,"height":1536,"colCount":18,"width":9216,"tags":"ondemand","url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel"},{"rowCount":2,"height":1024,"colCount":12,"width":6144,"tags":"ondemand","url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel"},{"rowCount":1,"height":512,"colCount":6,"width":3072,"tags":["ondemand","preload"],"url":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel"}]},"thumbnailUrl":"media/panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_t.webp","class":"CubicPanoramaFrame"}],"hfovMax":130,"hfov":360,"data":{"label":"FONDO NEGRO"},"label":trans('panorama_000DF001_16F4_7566_41B2_611EC11EDB5B.label'),"class":"Panorama","id":"panorama_000DF001_16F4_7566_41B2_611EC11EDB5B","vfov":180},{"items":[{"player":"this.MainViewerModel3DPlayer","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","media":"this.model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8"}],"class":"PlayList","id":"playList_0AC1471B_1775_31A2_41A9_D9DCE34809DD"},{"aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true},{"items":[{"player":"this.MainViewerModel3DPlayer","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","media":"this.model_032D3BF0_1750_1E1A_41B0_16780FDEAC72"}],"class":"PlayList","id":"playList_0AC1571B_1775_31A2_41B7_44E9842E6D67"},{"viewerArea":"this.MainViewer","class":"Model3DPlayer","id":"MainViewerModel3DPlayer"},{"thumbnailUrl":"media/model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8_t.jpg","environmentIntensity":0.53,"label":trans('model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8.label'),"data":{"label":"msh-hi","keepModel3DLoadedWithoutLocation":true,"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"surfaceReticleMinRadius":15,"objects":[],"model":"this.res_7A57EB0A_69B8_7771_41C0_CEB24B698C19","surfaceReticleRadius":0.02,"sphericalHarmonicsMaxDegree":3,"displayEffect":{"sparseFadeFactor":0.2,"speedFactor":0.3,"denseFadeFactor":0.3,"denseTimeDelay":1.7,"class":"RadialModel3DDisplayEffect","minimumPointSize":1},"backgroundColor":"transparent","floorRadius":5.77,"class":"Model3D","surfaceSelectionCoef":2,"surfaceReticleMaxRadius":50,"id":"model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8","camera":"this.cam_7A5092CA_69B8_16F1_41D8_66652F05333A","antialiasingLevel":0.3,"lights":[]},{"items":[{"media":"this.panorama_000DF001_16F4_7566_41B2_611EC11EDB5B","camera":"this.panorama_000DF001_16F4_7566_41B2_611EC11EDB5B_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"try{eval('ua=navigator.userAgent||navigator.vendor||window.opera;isMobile=/android|iphone|ipad|ipod/i.test(ua);score=0;if(isMobile){if(/iphone/i.test(ua))score+=3;else if(/snapdragon\\s*(8|gen\\s*2|gen\\s*3|gen\\s*4|gen\\s*5)/i.test(ua))score+=3;else if(/dimensity\\s*(9200|9300|9400|9500)/i.test(ua))score+=3;else score+=1;deviceTier=score>=2?\\'high\\':\\'low\\';console.log(\\'deviceTier =\\',deviceTier,\\'(mobile score=\\'+score+\\')\\');}else{mem=navigator.deviceMemory||4;cores=navigator.hardwareConcurrency||2;rend=\\'\\';try{c=document.createElement(\\'canvas\\');g=c.getContext(\\'webgl\\')||c.getContext(\\'experimental-webgl\\');if(g){dbg=g.getExtension(\\'WEBGL_debug_renderer_info\\');rend=dbg?g.getParameter(dbg.UNMASKED_RENDERER_WEBGL):g.getParameter(g.RENDERER);}}catch(e){}rend=(rend||\\'\\').toLowerCase();if(mem>=16)score+=3;else if(mem>=8)score+=2;else if(mem>=4)score+=1;if(cores>=8)score+=3;else if(cores>=4)score+=2;else if(cores>=2)score+=1;if(/nvidia|geforce|radeon|amd|rx|rtx|quadro|vega/i.test(rend))score+=3;else if(/apple\\s*m1|m2|m3|m4/i.test(rend)||(/macintosh|mac os/i.test(ua)&&/apple|metal/i.test(rend)))score+=2;else if(/intel|uhd|hd graphics|iris|angle/i.test(rend))score-=1;if(score<=4)deviceTier=\\'low\\';else deviceTier=\\'high\\';console.log(\\'deviceTier =\\',deviceTier,\\'(desktop score=\\'+score+\\', GPU=\\'+rend+\\')\\');}msg=document.createElement(\\'div\\');msg.textContent=\\'deviceTier: \\'+deviceTier;msg.style=\\'position:fixed;top:10px;left:10px;background:rgba(0,0,0,0.7);color:white;padding:6px 10px;border-radius:6px;z-index:9999;font-family:sans-serif;font-size:14px;\\';document.body.appendChild(msg);setTimeout(()=>msg.remove(),5000);if(deviceTier===\\'high\\'){tour.setMediaByName(\\'msh-hi\\');console.log(\\'Cargando modelo:(high tier)\\');}else{tour.setMediaByName(\\'msh-lo\\');console.log(\\'Cargando modelo: (low tier)\\');}')}catch(e){console.log(e)}"}],"class":"PlayList","id":"mainPlayList"},{"invertX":true,"id":"res_05AA2842_16EC_B5EA_419D_0784355E33FB","levels":[{"url":"media/model_032D3BF0_1750_1E1A_41B0_16780FDEAC72/scene.bin","class":"Model3DResourceLevel"}],"invertY":true,"class":"Model3DResource"},{"initialPitch":-3.52,"maxX":8.1,"maxY":1.45,"rotationSpeed":2.5,"minY":0.55,"sequences":["this.seq_05A70843_16EC_B5EA_41AE_AC9EF5C8AB16"],"initialX":6.56,"class":"FirstPersonModel3DCamera","initialY":0.85,"minX":-3.89,"keepHeight":false,"initialYaw":-100.44,"far":5,"translationSpeed":0.3,"minZ":-4.72,"initialFov":90,"initialZ":1.99,"id":"cam_05AAD842_16EC_B5EA_41AA_7E306A3B9B47","vrEnabled":true,"maxZ":3.5,"near":0.2},{"invertX":true,"id":"res_7A57EB0A_69B8_7771_41C0_CEB24B698C19","levels":[{"url":"media/model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8/scene.bin","class":"Model3DResourceLevel"}],"invertY":true,"class":"Model3DResource"},{"initialPitch":-6.72,"maxX":8.1,"maxY":1.45,"rotationSpeed":2.5,"minY":0.55,"sequences":["this.seq_538F846D_71E8_CCEE_41C3_49476D789D4B"],"initialX":-2.86,"class":"FirstPersonModel3DCamera","initialY":0.85,"minX":-3.89,"keepHeight":false,"initialYaw":95.22,"far":15,"translationSpeed":0.3,"initialSequence":"this.seq_538F846D_71E8_CCEE_41C3_49476D789D4B","minZ":-4.72,"initialFov":90,"initialZ":-4.52,"near":0.2,"id":"cam_7A5092CA_69B8_16F1_41D8_66652F05333A","vrEnabled":true,"maxZ":3.5},{"id":"seq_05A70843_16EC_B5EA_41AE_AC9EF5C8AB16","movements":[{"targetYaw":-143.57,"yawPath":"longest","targetPitch":-15.43,"targetY":0.85,"duration":500,"targetZ":-4.58,"data":{"name":"Vista 1"},"class":"TargetModel3DCameraMovement","targetX":-2.94,"easing":"cubic_in_out"},{"targetYaw":-100.44,"targetPitch":-3.52,"targetY":0.85,"duration":3000,"targetZ":1.99,"data":{"name":"Vista 2"},"class":"TargetModel3DCameraMovement","targetX":6.56,"easing":"cubic_in"}],"class":"Model3DCameraSequence"},{"id":"seq_538F846D_71E8_CCEE_41C3_49476D789D4B","movements":[{"targetYaw":-143.57,"yawPath":"longest","targetPitch":-15.43,"targetY":0.85,"duration":500,"targetZ":-4.58,"data":{"name":"Vista 1"},"class":"TargetModel3DCameraMovement","targetX":-2.94,"easing":"cubic_in_out"},{"targetYaw":-100.44,"targetPitch":-3.52,"targetY":0.85,"duration":3000,"targetZ":1.99,"data":{"name":"Vista 2"},"class":"TargetModel3DCameraMovement","targetX":6.56,"easing":"cubic_in"}],"class":"Model3DCameraSequence"}],"data":{"locales":{"es":"locale/es.txt"},"history":{},"name":"Player817","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"rate":1},"defaultLocale":"es","displayTooltipInTouchScreens":true},"start":"this.init()","width":"100%","scrollBarColor":"#000000","height":"100%","children":["this.MainViewer"],"gap":10,"watermark":false,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","minHeight":0,"layout":"absolute","minWidth":0,"backgroundColorRatios":[0],"scripts":{"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getKey":TDV.Tour.Script.getKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMapLocation":TDV.Tour.Script.setMapLocation,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"translate":TDV.Tour.Script.translate,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"shareSocial":TDV.Tour.Script.shareSocial,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"createTween":TDV.Tour.Script.createTween,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"init":TDV.Tour.Script.init,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"clone":TDV.Tour.Script.clone,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"disableVR":TDV.Tour.Script.disableVR,"showPopupImage":TDV.Tour.Script.showPopupImage,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setLocale":TDV.Tour.Script.setLocale,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getMediaByName":TDV.Tour.Script.getMediaByName,"toggleVR":TDV.Tour.Script.toggleVR,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"enableVR":TDV.Tour.Script.enableVR,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizFinish":TDV.Tour.Script.quizFinish,"playAudioList":TDV.Tour.Script.playAudioList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"unregisterKey":TDV.Tour.Script.unregisterKey,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"existsKey":TDV.Tour.Script.existsKey,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setValue":TDV.Tour.Script.setValue,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"executeJS":TDV.Tour.Script.executeJS,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"initQuiz":TDV.Tour.Script.initQuiz,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getOverlays":TDV.Tour.Script.getOverlays,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"openLink":TDV.Tour.Script.openLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"downloadFile":TDV.Tour.Script.downloadFile,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"isPanorama":TDV.Tour.Script.isPanorama,"registerKey":TDV.Tour.Script.registerKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPixels":TDV.Tour.Script.getPixels,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility},"backgroundColor":["#000000"],"id":"rootPlayer","propagateClick":false,"scrollBarMargin":2};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.38, Fri Oct 24 2025