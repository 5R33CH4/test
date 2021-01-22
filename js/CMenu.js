function CMenu(){
    var _oBg;
    var _oButPlay;
    var _oFade;
    var _oAudioToggle;
    var _oCreditsBut;
    var _oBandLogo;
    var _oSpotLogo;
    var _oYouTubeLogo;
    var _oButFullscreen;
    var _oButDelete;
    
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosAudio;
    var _pStartPosCredits;
    var _pStartPosBand;
    var _pStartPosSpotify;
    var _pStartPosYouTube;
    var _pStartPosFullscreen;
    var _pStartPosDelete;
    
    this._init = function(){
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -360, oSprite, s_oStage);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        _oButPlay.pulseAnimation();
     
        var oSprite = s_oSpriteLibrary.getSprite('logo_menu')
        var oLogo = createBitmap(oSprite);
        oLogo.regX = oSprite.width/2;
        oLogo.regY = oSprite.height/2;
        oLogo.x = CANVAS_WIDTH/2;
        oLogo.y = CANVAS_HEIGHT/2-70;
        s_oStage.addChild(oLogo);
        
        var oSprite = s_oSpriteLibrary.getSprite('band_logo');
        _pStartPosBand = {x: (CANVAS_WIDTH/2), y: (oSprite.height/2) + 80};
        _oBandLogo = new CGfxButton(_pStartPosBand.x,_pStartPosBand.y,oSprite, s_oStage);
        
        //var oSprite = s_oSpriteLibrary.getSprite('band_logo');
        //_oBandLogo = new CGfxButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -820, oSprite, s_oStage);
        
        var oSprite = s_oSpriteLibrary.getSprite('spotify_logo');
        _pStartPosSpotify = {x: (oSprite.width/2) + 160, y: (oSprite.height/2) + 24};            
        _oSpotLogo = new CGfxButton(_pStartPosSpotify.x,_pStartPosSpotify.y,oSprite, s_oStage);
        _oSpotLogo.addEventListener(ON_MOUSE_UP, this._onSpotLogoBut, this);
        
        var oSprite = s_oSpriteLibrary.getSprite('youtube_logo');
        _pStartPosYouTube = {x: (oSprite.width/2) + 270, y: (oSprite.height/2) + 24};            
        _oYouTubeLogo = new CGfxButton(_pStartPosYouTube.x,_pStartPosYouTube.y,oSprite, s_oStage);
        _oYouTubeLogo.addEventListener(ON_MOUSE_UP, this._onYouTubeLogoBut, this);
     
        var iX = CANVAS_WIDTH;
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.width/4) - 12, y: (oSprite.height/2) + 16};            
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this); 
            
            iX = _pStartPosAudio.x - oSprite.width/4;
        }

        if(s_oLocalStorage.isDirty()){
            var oSprite = s_oSpriteLibrary.getSprite('but_delete_saving');
            _pStartPosDelete = {x: iX - (oSprite.width/2) - 12, y: (oSprite.height/2) + 16};            
            _oButDelete = new CGfxButton(_pStartPosDelete.x,_pStartPosDelete.y,oSprite, s_oStage);
            _oButDelete.addEventListener(ON_MOUSE_UP, this._onDeleteBut, this);
        }
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.enabled){
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {x:(oSprite.width/4) + 12, y: (oSprite.height/2) + 16};   
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreenRelease,this);
        }
        
        

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0}, 1000).call(function(){_oFade.visible = false;});  
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
        
        if(!s_oLocalStorage.isUsed()){
            new CMsgBox(TEXT_IOS_PRIVATE);
        }

    };
    
    this.unload = function(){
        _oButPlay.unload(); 
        _oButPlay = null;
        _oFade.visible = false;
        

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
                _oButFullscreen.unload();
        }
        
        s_oStage.removeChild(_oBg);
        _oBg = null;
        s_oMenu = null;
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
        _oBandLogo.setPosition(_pStartPosBand.x + iNewX,iNewY + _pStartPosBand.y);
        if (_fRequestFullScreen && screenfull.enabled){
                _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX, _pStartPosFullscreen.y + iNewY);
        }
        _oSpotLogo.setPosition(_pStartPosSpotify.x + iNewX,iNewY + _pStartPosSpotify.y);
        if (_fRequestFullScreen && screenfull.enabled){
                _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX, _pStartPosFullscreen.y + iNewY);
        }
        _oYouTubeLogo.setPosition(_pStartPosYouTube.x + iNewX,iNewY + _pStartPosYouTube.y);
        if (_fRequestFullScreen && screenfull.enabled){
                _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX, _pStartPosFullscreen.y + iNewY);
        }

        if(_oButDelete && s_oLocalStorage.isDirty()){
            _oButDelete.setPosition(_pStartPosDelete.x - iNewX, _pStartPosDelete.y + iNewY);
        }
    };
    
    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.enabled){
		_oButFullscreen.setActive(s_bFullscreen);
	}
    };
    
    // New Addition //
    this._onSpotLogoBut = function(){
        window.open("https://open.spotify.com/album/062nA0eccZmiiLkPV6lzHm?si=cYonxFhhTKWM5ztLeSjvmA");
    };
    
     this._onYouTubeLogoBut = function(){
        window.open("https://youtu.be/_zKXvXbZNis");
    };
    
        
    this._onFullscreenRelease = function(){
	if(s_bFullscreen) { 
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };
    
    this._onCreditsBut = function(){
        new CCreditsPanel();
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onDeleteBut = function(){
        var oPanel = new CAreYouSurePanel(s_oMenu.deleteSavings);
        oPanel.changeMessage(TEXT_SAVE_REMOVE, 24);
    };
    
    this.deleteSavings = function(){
        s_oLocalStorage.deleteData();
        s_oLocalStorage.resetData();
        _oButDelete.unload();
    };
    
    this._onButPlayRelease = function(){
        
        this.unload();

        $(s_oMain).trigger("start_session");

        s_oMain.gotoWorldMenu();
        
    };
	
    s_oMenu = this;
    
    this._init();
}

var s_oMenu = null;