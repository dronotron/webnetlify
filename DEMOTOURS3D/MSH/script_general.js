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
var script = {"start":"this.init()","data":{"defaultLocale":"es","displayTooltipInTouchScreens":true,"history":{},"name":"Player817","locales":{"es":"locale/es.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1}},"gap":10,"scrollBarColor":"#000000","width":"100%","height":"100%","watermark":false,"children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"layout":"absolute","minHeight":0,"minWidth":0,"propagateClick":false,"backgroundColor":["#000000"],"class":"Player","scripts":{"quizFinish":TDV.Tour.Script.quizFinish,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPixels":TDV.Tour.Script.getPixels,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMapLocation":TDV.Tour.Script.setMapLocation,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizStart":TDV.Tour.Script.quizStart,"translate":TDV.Tour.Script.translate,"getMediaByName":TDV.Tour.Script.getMediaByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"createTween":TDV.Tour.Script.createTween,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"mixObject":TDV.Tour.Script.mixObject,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlays":TDV.Tour.Script.getOverlays,"initQuiz":TDV.Tour.Script.initQuiz,"init":TDV.Tour.Script.init,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"clone":TDV.Tour.Script.clone,"enableVR":TDV.Tour.Script.enableVR,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"toggleVR":TDV.Tour.Script.toggleVR,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"startMeasurement":TDV.Tour.Script.startMeasurement,"unregisterKey":TDV.Tour.Script.unregisterKey,"setLocale":TDV.Tour.Script.setLocale,"disableVR":TDV.Tour.Script.disableVR,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getComponentByName":TDV.Tour.Script.getComponentByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"resumePlayers":TDV.Tour.Script.resumePlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"textToSpeech":TDV.Tour.Script.textToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupImage":TDV.Tour.Script.showPopupImage,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowScore":TDV.Tour.Script.quizShowScore,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"executeJS":TDV.Tour.Script.executeJS,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setValue":TDV.Tour.Script.setValue,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openLink":TDV.Tour.Script.openLink,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"isPanorama":TDV.Tour.Script.isPanorama,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"cloneBindings":TDV.Tour.Script.cloneBindings,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getKey":TDV.Tour.Script.getKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"registerKey":TDV.Tour.Script.registerKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech},"id":"rootPlayer","hash": "9c42b356f802387e8d9d9aa030caa00e8d503e69ded9decac4fb6a06e833e1c0", "definitions": [{"thumbnailUrl":"media/model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8_t.jpg","label":trans('model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8.label'),"surfaceReticleMinRadius":15,"objects":[],"data":{"label":"msh","keepModel3DLoadedWithoutLocation":true,"showOnlyHotspotsLineSight":true,"showOnlyHotspotsLineSightInPanoramas":true},"sphericalHarmonicsMaxDegree":1,"displayEffect":{"denseFadeFactor":0.3,"minimumPointSize":1,"denseTimeDelay":1.7,"sparseFadeFactor":0.2,"class":"RadialModel3DDisplayEffect","speedFactor":0.3},"surfaceReticleRadius":0.02,"floorRadius":5.77,"model":"this.res_7A57EB0A_69B8_7771_41C0_CEB24B698C19","camera":"this.cam_7A5092CA_69B8_16F1_41D8_66652F05333A","backgroundColor":"#333333","surfaceReticleMaxRadius":50,"class":"Model3D","surfaceSelectionCoef":2,"antialiasingLevel":0.3,"lights":[],"environmentIntensity":0.5,"id":"model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8"},{"items":[{"player":"this.MainViewerModel3DPlayer","media":"this.model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer","class":"Model3DPlayer"},{"firstTransitionDuration":0,"subtitlesTop":0,"data":{"name":"Main Viewer"},"toolTipBackgroundColor":"#F6F6F6","toolTipFontSize":"1.11vmin","toolTipTextShadowColor":"#000000","subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"width":"100%","playbackBarHeadHeight":15,"height":"100%","subtitlesFontSize":"3vmin","playbackBarLeft":0,"toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"progressOpacity":0.7,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorDirection":"horizontal","minHeight":50,"subtitlesFontFamily":"Arial","propagateClick":false,"progressBarBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","progressBorderColor":"#000000","playbackBarBottom":5,"progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundOpacity":1,"id":"MainViewer","minWidth":100,"progressBackgroundColor":["#000000"],"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressBottom":10,"toolTipFontColor":"#606060","progressHeight":2,"subtitlesGap":0,"progressBorderSize":0,"playbackBarHeadWidth":6,"progressBarBorderRadius":2,"vrThumbstickRotationStep":20,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"vrPointerColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBackgroundColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"progressLeft":"33%","progressBorderRadius":2,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"playbackBarHeadBorderRadius":0,"class":"ViewerArea","toolTipBorderColor":"#767676","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesBottom":50},{"invertX":true,"invertY":true,"id":"res_7A57EB0A_69B8_7771_41C0_CEB24B698C19","levels":[{"url":"media/model_63577D0D_71A9_DC2E_41D3_DF2B980E61E8/scene.bin","class":"Model3DResourceLevel"}],"class":"Model3DResource"},{"vrEnabled":true,"minY":0.55,"rotationSpeed":2.5,"sequences":["this.seq_538F846D_71E8_CCEE_41C3_49476D789D4B"],"initialX":-2.86,"initialYaw":95.22,"initialSequence":"this.seq_538F846D_71E8_CCEE_41C3_49476D789D4B","keepHeight":false,"initialY":0.85,"far":10,"translationSpeed":0.3,"minX":-3.89,"initialFov":90,"initialZ":-4.52,"near":0.2,"class":"FirstPersonModel3DCamera","initialPitch":-6.72,"minZ":-4.72,"id":"cam_7A5092CA_69B8_16F1_41D8_66652F05333A","maxZ":3.5,"maxX":8.1,"maxY":1.45},{"movements":[{"targetYaw":-143.57,"targetZ":-4.58,"yawPath":"longest","targetPitch":-15.43,"targetY":0.85,"duration":500,"easing":"cubic_in_out","targetX":-2.94,"data":{"name":"Vista 1"},"class":"TargetModel3DCameraMovement"},{"targetYaw":-100.44,"targetZ":1.99,"targetPitch":-3.52,"targetY":0.85,"duration":3000,"easing":"cubic_in","targetX":6.56,"data":{"name":"Vista 2"},"class":"TargetModel3DCameraMovement"}],"id":"seq_538F846D_71E8_CCEE_41C3_49476D789D4B","class":"Model3DCameraSequence"}],"scrollBarMargin":2};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.38, Thu Oct 23 2025