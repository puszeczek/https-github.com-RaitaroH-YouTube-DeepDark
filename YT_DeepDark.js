// ==UserScript==
// @name          YouTube DeepDark
// @namespace     https://github.com/
// @author        RaitaroH
// @homepage      https://github.com/RaitaroH/YouTube-DeepDark
// @include       http://youtube.com/* 
// @include       https://youtube.com/* 
// @include       http://*.youtube.com/* 
// @include       https://*.youtube.com/* 
// @include       http://apis.google.com/* 
// @include       https://apis.google.com/* 
// @include       http://*.apis.google.com/* 
// @include       https://*.apis.google.com/*
// @run-at        document-start
// @version       1.2.1
// @grant         GM_getValue
// @grant         GM_setValue
// ==/UserScript==
(function() {var css = "";
if (false || (new RegExp("^https?://apis.google.com/.*/hovercard.*$")).test(document.location.href) || (new RegExp("^https?://www.youtube.(com|([a-z]{2}))(.[a-z]{2})?/((\\?|channel|results|feed|playlist|feature|watch|user|hovercard|upload|my_videos|view_all_playlists|subscription_manager|dashboard|subscribers|c|#|messages|analytics).*)$")).test(document.location.href) || (new RegExp("^https?://www.youtube.(com|([a-z]{2}))(.[a-z]{2})?.$")).test(document.location.href) || (new RegExp("^https?://apis.google.com/u/b/.*$")).test(document.location.href))
	css += [
  "/*Hiding some crap*/",
	"	.yt-uix-button-subscribe-branded::before,.comment-simplebox-arrow .arrow-inner, .comment-simplebox-arrow .arrow-outer,.yt-uix-clickcard-card-reverse .yt-uix-card-body-arrow-vertical{",
	"			display:none !important;",
	"	}",
	"	/*Changing liked button color + other stuff*/",
	"		 #player-playlist .yt-uix-button-toggled.yt-uix-playlistlike::before,#pl-header .yt-uix-button-toggled.yt-uix-playlistlike::before,.like-button-renderer-like-button.yt-uix-button.yt-uix-button-toggled::before{",
	"			background-image: url(https://i.imgur.com/iNxIReU.png) !important;",
	"	}",
	"		body,#yt-masthead-container,#appbar-nav,.share-panel-url,.share-panel-start-at-time,.share-embed-code,.share-email .share-email-recipients, .share-email .share-email-note {",
	"			background: #181818 !important;",
	"	}",
	"	/*Youtube logo*/",
	"#masthead-logo, #yt-masthead #logo-container .logo, #footer-logo .footer-logo-icon, .footer-logo{",
	"    background: no-repeat url(https://i.imgur.com/9wGydcv.png) !important;",
	"    background-size: 100% !important;",
	"    opacity: 0.65 !important;",
	"}",
	"	/*Many many things*/",
	"		.yt-dialog-fg, .yt-uix-overlay-fg ,.yt-ui-menu-item,.pl-video,.watch-stage-mode #player-playlist .player-height,#player-playlist .playlist-header,#player-playlist .playlist-videos-list,.yt-uix-button-c4-view-action,.show-guide #appbar-guide-menu,.yt-uix-button-nakedicon,#player-playlist .playlist-videos-list li,.channel-header .secondary-header-contents,.channel-header .primary-header-contents, #guide-container,.branded-page-v2-primary-col .branded-page-box.video-player-view-component:last-child, .branded-page-v2-primary-col .branded-page-box.c4-featured-content:last-child, .branded-page-v2-primary-col .branded-page-box.c4-featured-content-editor:last-child, .branded-page-v2-primary-col .branded-page-box.welcome:last-child,.branded-page-v2-secondary-col .yt-card,#browse-items-primary .item-section > li > .yt-lockup-tile, #browse-items-primary .item-section > li > .multirow-shelf, .browse-list-item-container.feed-item-container.branded-page-box, .compact-shelf.branded-page-box,.guide-pinned .guide-pinning-enabled #appbar-guide-menu,body #footer-container,.branded-page-v2-top-row #channel-subheader,.yt-uix-expander-collapsed .yt-ui-ellipsis.yt-ui-ellipsis-10,.video-player-view-component .description,.yt-lockup-title a, .yt-lockup:hover a, .yt-lockup:hover .yt-lockup-meta a, .yt-lockup:hover .yt-lockup-description a,.video-player-view-component .video-detail .title,.branded-page-v2-subnav-container,#channels-browse-content-grid.grid-lockups-container,.yt-card,.yt-ui-ellipsis,#watch8-action-buttons, .yt-card .yt-uix-expander .yt-uix-button-expander,.comment-simplebox-renderer-collapsed-content,.exp-comments-refresh .comment-thread-renderer:not(:last-of-type) .comment-replies-renderer,.sitewide-consent-visible .yt-consent-banner,.comment-simplebox-renderer,.yt-uix-button-menu,.yt-ui-menu-content,.search-header,.yt-masthead-account-picker.yt-uix-clickcard-card-content,.yt-uix-clickcard-card-border, .yt-uix-hovercard-card-border,.yt-masthead-picker-footer,.iv-card-content,.ytp-ce-expanding-overlay-background{",
	"			background: #111 !important;",
	"			border-color: #444 !important;",
	"	}",
	"    .comment-simplebox,.comment-simplebox-text, .comment-simplebox-prompt,.share-email-preview-container,#player-playlist :not(.watch-queue-nav) .playlist-videos-list li.currently-playing,#pl-header .pl-header-title:hover,.add-to-widget .create-playlist-item:hover,#pl-header .pl-header-description-text:hover{",
	"			background: #222 !important;",
	"	}",
  "     #player-playlist .playlist-videos-list li:hover,.add-to-widget .addto-playlist-item:hover,.yt-ui-menu-item:active{",
	"			background: #3a3a3a !important;",
	"	}",
	"		.yt-lockup-playlist-item,.ytp-cards-teaser .ytp-cards-teaser-box,#c4-header-bg-container,#footer-main,div.about-metadata-label:nth-child(7),div.about-metadata-label:nth-child(9),.yt-card .yt-uix-tabs{",
	"		  border-color: #444 !important;",
	"	}",
	"		#player-console{",
	"			top: 20px !important;",
	"	}",
	"		.yt-card.yt-uix-expander .yt-uix-button-expander{",
	"			border-top: 1px solid #444 !important;",
	"	}", 
	"	/*Buttons*/",
	"		a.yt-uix-button{",
	"			border-color: rgb(0,0,0) !important;",
	"	}",
	"		#gh-playlist-save,.yt-lockup-thumbnail .blacklist,.yt-uix-button-default, .yt-uix-button-default[disabled],.yt-uix-livereminder-main-button,.browse-items-load-more-button,.yt-uix-button.addto-watch-later-button-success,body .addto-watch-later-button,.edit-button,.remove-watched-button,#gh-playlist-add-video,.ytp-cards-teaser .ytp-cards-teaser-text,.pl-video-list-editable .pl-video:hover .pl-video-handle, .yt-uix-dragdrop-cursor-follower .pl-video-handle,.pl-video-edit-more, .pl-video-edit-remove, .pl-video-edit-remove-liked-video,.thumb-wrapper .blacklist,.thumb-wrapper .popoutmode,.yt-lockup-thumbnail .popoutmode,.yt-uix-button.yt-uix-button-subscribe-unbranded, .yt-uix-button.yt-uix-button-subscribed-unbranded,.yt-uix-button.yt-uix-button-subscribe-branded, .yt-uix-button.yt-uix-button-subscribed-branded,.yt-uix-shelfslider .yt-uix-shelfslider-prev, .yt-uix-shelfslider .yt-uix-shelfslider-next,.comment-section-sort-menu > button:nth-child(1),#upload-btn,.related-list-item .video-actions,#masthead-search .search-btn-component, #masthead-search .search-btn-component .start,.shelf-item .branded-page-module-title .shelves-play,.subnav-sort-menu,.branded-page-v2-subnav-container .subnav-flow-menu,.subnav-view-menu,.sub-menu-back-button,#yt-picker-language-button,#yt-picker-country-button,#yt-picker-safetymode-button,a.yt-uix-button:nth-child(3),#google-help,.playlist-play-all,.playlist-share,.yt-uix-subscription-preferences-button,.share-panel-playlist-options > button:nth-child(3),a.yt-masthead-picker-button:nth-child(1),a.yt-masthead-picker-button:nth-child(2),a.yt-masthead-picker-button:nth-child(4){",
	"			background: linear-gradient(rgb(50,50,50), rgb(40,40,40)) !important;",
	"			border-color: rgb(0,0,0) !important;",
	"	}",
	"	/*Inverting icon images*/",
	"		.yt-dialog-base .yt-dialog-header .yt-dialog-close .yt-uix-button-content,.appbar-guide-notification-icon,.add-to-widget .private-icon,.add-to-widget .public-icon,.pl-header-privacy-everyone,.pl-video-annotation-icon,.yt-uix-button-empty.yt-uix-button-has-icon.no-icon-markup::before,.header-action-icon.vm-icon,.yt-uix-button .yt-uix-button-arrow,.pl-header-privacy-only-me,.compact-shelf .yt-uix-shelfslider-next-arrow, .rtl .compact-shelf .yt-uix-shelfslider-prev-arrow,.yt-uix-button-has-icon.no-icon-markup::before,.comment-section-sort-menu > button:nth-child(1) > span:nth-child(2),#search-btn > span:nth-child(1),.yt-uix-button-default::before,.subnav-sort-menu > span:nth-child(2),.subnav-view-menu > span:nth-child(2),.subnav-flow-menu > span:nth-child(2),.yt-uix-button-icon-channel-back,.yt-uix-button-icon-footer-language,span.yt-uix-button-arrow:nth-child(3),#yt-picker-country-button > span:nth-child(2),#yt-picker-safetymode-button > span:nth-child(2),.yt-uix-button-icon-footer-history,.yt-uix-button-icon-questionmark,#player-playlist .yt-uix-playlistlike::before, #yt-masthead-user #yt-masthead-notifications-button,.yt-uix-subscription-preferences-button.yt-uix-subscription-notifications-all::before,.share-panel-playlist-options > button:nth-child(3) > span:nth-child(2),.yt-uix-button-has-icon::before,.yt-ui-menu-item.has-icon::before,.filter-button > span:nth-child(2),.yt-uix-button-default::before, .yt-uix-button-default .yt-uix-button-icon,.yt-uix-menu-top-level-flow-button .yt-uix-button-opacity[disabled],.yt-uix-button-icon-view-list,.gsst_a,.autoplay-bar .autoplay-info-icon{",
	"			filter: invert(100%)",
	"	}",
	"		  #subscription-playlist{",
	"			border-color: #ED3F00 !important;",
	"	}",
	"	/*Some buttons don't need to be inverted because they will be orange*/",
	"	#comment-section-renderer .sprite-like[data-action-on]::before,.yt-uix-button-subscribed-branded::before,.addto-watch-later-button-success::before,#player-playlist .yt-uix-button-toggled.yt-uix-playlistlike::before,#pl-header .yt-uix-button-toggled.yt-uix-playlistlike::before,.like-button-renderer-like-button.yt-uix-button.yt-uix-button-toggled::before,.exp-comments-refresh #comment-section-renderer .comment-renderer .sprite-comment-actions[data-action-on]::before{",
	"			filter: invert(0%) !important;",
	"	}",
	"	    #channel-search .show-search .search-icon{",
	"		  opacity: 1 !important;",
	"	}",
	"	    .exp-comments-refresh .comment-renderer-like-count{",
	"		  min-width: 15px !important;",
	"	}",
			"	.yt-badge{",
	"		  padding: 0 0 !important;",
	"	}",
	"	",
	"	/*Subscribers count; Search bar*/",
	"		.yt-subscription-button-subscriber-count-branded-horizontal,.exp-responsive #content .yt-uix-button-subscription-container .yt-subscriber-count,#masthead-search-terms,.yt-uix-button-subscribe-unbranded + .yt-subscription-button-subscriber-count-unbranded-horizontal{",
	"			background: #555 !important;",
	"			border-color: #444 !important;",
	"	}",
	"		.yt-dialog-base .yt-dialog-header .yt-dialog-close,.comment-replies-renderer-paginator,.exp-comments-refresh .comment-replies-renderer-view, .exp-comments-refresh .comment-replies-renderer-hide, .exp-comments-refresh .comment-replies-renderer-paginator, .exp-comments-refresh .comment-author-text,#comment-section-renderer .sprite-comment-actions,#yt-masthead-user #sb-button-notify,.ytp-ce-size-640 .ytp-ce-video-title, .ytp-ce-size-640 .ytp-ce-playlist-title,#advanced-options,#player-console,.comment-renderer-reply,#player-playlist :not(.watch-queue-nav) .playlist-videos-list li.currently-playing .yt-ui-ellipsis,#player-playlist .playlist-videos-list .yt-ui-ellipsis,.guide-sort-button,.yt-badge,.exp-comments-refresh #comment-section-renderer .comment-renderer-reply,.ytp-ce-video-title{",
	"			background: transparent !important;",
	"			border-color: transparent !important;",
	"	}",
	"	/*Name of the owner of the channel*/",
		
  ".comment-renderer.channel-owner .comment-author-text{",
	"			padding-left: 5px !important;",	
	"			padding-right: 5px !important;",	
	"			margin-right: 1px !important;",
	"			border-radius: 25px !important;",	
	"	}",	
	".comment-renderer.channel-owner .comment-author-text:hover,.comment-renderer-author-comment-badge.creator:hover{",
	"			background: #333 !important;",	
	"	}",		
	"		.masthead-search-terms-borders,.masthead-search-terms-border,.yt-uix-button-default.yt-uix-button-toggled{",
	"			box-shadow: none !important;",
	"	}",
	"		.comment-renderer.channel-owner .comment-author-text,#appbar-main-guide-notification-container .appbar-guide-notification-content-wrapper,#appbar-main-guide-notification-container .appbar-guide-notification,.appbar-guide-notification,.comment-renderer-author-comment-badge.creator,.yt-uix-button-primary,.guide-item.guide-item-selected, .guide-item.guide-item-selected:hover, .yt-uix-button-primary[disabled], .yt-uix-button-primary[disabled]:hover, .yt-uix-button-primary[disabled]:active, .yt-uix-button-primary[disabled]:focus,.yt-uix-checkbox-on-off input[type=\"checkbox\"]:checked + label,.resume-playback-progress-bar,.video-extras-sparkbar-likes{",
	"			background: #00adee !important;",
	"			border-color: #00adee !important;",
	"	}",
	"		.yt-uix-button-subscribe-unbranded:hover,.yt-uix-button.yt-uix-button-subscribe-branded:hover, .yt-uix-button.yt-uix-button-subscribed-branded:hover,.yt-card .yt-uix-tabs .yt-uix-button:hover, .yt-card .yt-uix-tabs .yt-uix-button:active, .yt-card .yt-uix-tabs .yt-uix-button.yt-uix-button-active, .yt-card .yt-uix-tabs .yt-uix-button.yt-uix-button-toggled,a.yt-uix-button.yt-uix-button-epic-nav-item:hover{",
	"			border-color: #00adee !important;",
	"	}",
	"		.guide-section-separator,#yt-masthead .yt-masthead-logo-container,#yt-masthead-container,#appbar-nav,#masthead-appbar,#watch7-sidebar .watch-sidebar-separation-line,.pl-video,#pl-header{",
	"			border-color: #444 !important;",
	"	}",
	"		.epic-nav-item-heading,.epic-nav-item-heading:hover{",
	"			border-color: #00adee !important;",
	"	}",
	"	",
	"	  	/*Hover for links*/",
	"   .comment-replies-renderer-view, .comment-replies-renderer-hide:hover,.comment-renderer-author-comment-badge.creator .comment-author-text:hover,.yt-uix-sessionlink.comment-author-text.g-hovercard.spf-link:hover,.yt-uix-button-content:hover,.video-uploader-byline:hover,.g-hovercard.yt-uix-sessionlink.spf-link:hover,.yt-uix-button-content:hover,.ytp-ce-size-640 .ytp-ce-channel-title:hover,#body #uploaded-videos:hover,#uploaded-videos:hover,#player-playlist .playlist-title a:hover,a:hover.yt-lockup-title a:hover,.iv-card:hover .iv-card-primary-link,.exp-wn-font-14 .related-list-item span.title:hover,.yt-lockup:hover a,.yt-lockup:hover .yt-lockup-meta a,.yt-lockup:hover .yt-lockup-description a,.branded-page-header-title-link:hover,.yt-uix-button-subscribe-branded > span:nth-child(1) > span:nth-child(1):hover,.g-hovercard:hover,#action-panel-details a:hover,.video-player-view-component .video-detail a:hover,.branded-page-v2-secondary-col .branded-page-related-channels-see-more a:hover{",
	"   color: #00adee !important;",
  "   text-shadow: 0px 0px 3px rgba(0,173,238,.5) !important;",
	"	}",
	"		#player-playlist .video-uploader-byline,span.video-uploader-byline:hover,.yt-uix-sessionlink.spf-link:hover{",
	"   color: #00adee !important;",
  "   text-shadow: none !important;",
	"	}",
	"		.yt-uix-menu-trigger-selected .yt-ui-menu-item, .yt-ui-menu-item:hover{",
	"		   background: #333 !important;",
	"	}",
	"	",
	"	/*Colors; Permanently highlighted*/",
	"		.video-list-item .mix-playlist .stat,.guide-item-subtitle,.playlist-title,.comment-replies-renderer-view, .comment-replies-renderer-hide,#player-playlist .video-uploader-byline,span.video-uploader-byline,.ytp-ce-size-640 .ytp-ce-channel-title,.g-hovercard,#pl-header .pl-header-title,li.guide-section h3 a,#player-playlist .playlist-title a,.yt-badge,.exp-responsive .yt-lockup-tile .yt-lockup-byline .yt-uix-sessionlink,#item-section-599813 > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1) > a:nth-child(1),.ytp-ce-website-metadata,.ytp-ce-channel-title,li.guide-section h3,#player-playlist :not(.watch-queue-nav) .playlist-videos-list li.currently-playing .index,a,#action-panel-details a, .yt-lockup .yt-lockup-meta a, .yt-lockup .yt-lockup-description a,.channel-header .branded-page-header-title .branded-page-header-title-link,.branded-page-base-bold-titles .channel-header .branded-page-header-title .branded-page-header-title-link,div.watch-sidebar-body:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(3) > span:nth-child(1),.video-player-view-component .video-detail a,.yt-uix-button-subscribe-branded > span:nth-child(1) > span:nth-child(1){",
	"			color: rgba(0,173,238,.9)  !important;",
	"			text-decoration: none  !important;",
	"	}",
	"		.comment-simplebox-text, .comment-simplebox-prompt,.guide-item.guide-item-selected:hover,.comment-renderer.channel-owner .comment-author-text:hover,.comment-renderer.channel-owner .comment-author-text,.comment-renderer-author-comment-badge.creator .comment-author-text,.html5-video-player a,.branded-page-base-bold-titles .branded-page-module-title,.branded-page-module-title a:visited, .branded-page-module-title a, .epic-nav-item-heading:active,.branded-page-related-channels h3 a, .branded-page-related-channels h3,.epic-nav-item-heading,#eow-title,.yt-consent-banner .yt-consent-content, .yt-lockup-title a,.yt-masthead-picker-name,.ytp-ce-video-title{",
	"			color: #fff !important;",
	"	}",
	"		.subscription-confirmation-dialog .subscription-confirmation-display-name,.yt-dialog-base .yt-dialog-header .yt-dialog-title,#watch7-sidebar .watch-sidebar-head,.yt-uix-button-icon-wrapper + .yt-uix-button-content,.secondary-header-contents .nav-text,#yt-uix-videoactionmenu-menu h3,.yt-subscription-button-subscriber-count-branded-horizontal,.add-to-widget .create-playlist-item,.yt-ui-menu-item,.yt-uix-button-menu .yt-uix-button-menu-item,.ytp-cards-teaser .ytp-cards-teaser-text,.yt-uix-button-subscribed-branded + .yt-subscription-button-subscriber-count-branded-horizontal.subscribed,.yt-uix-button-subscribed-branded + .yt-uix-subscription-preferences-button + .yt-subscription-button-subscriber-count-branded-horizontal.subscribed,.yt-uix-button-content,.yt-uix-button.yt-uix-button-subscribed-branded,.exp-wn-font-14 .related-list-item span.title,#eow-description,.exp-responsive #content .yt-uix-button-subscription-container .yt-subscriber-count,#body #uploaded-videos,yt-card .yt-uix-button-expander,yt-card .yt-uix-button-expander:hover,hr, html, i, iframe, img, ins, kbd, label, legend, li, menu, object, ol, p, pre, q, s, samp, small, strike, strong, sub,a, abbr, acronym, address, applet, b, big, blockquote,.comment-section-header-renderer,div.yt-ui-ellipsis:nth-child(1),.yt-uix-form-input-text,.iv-card h2,.ytp-ce-website-title{",
	"			color: #ccc !important;",
	"	}",
	"		",
	" a.yt-uix-button-primary > span:nth-child(1),button.yt-uix-button-primary:nth-child(2) > span:nth-child(1),.appbar-guide-notification,.guide-item.guide-item-selected,button.open-banner-image-editor > span:nth-child(2),button.yt-uix-button-primary:nth-child(1) > span:nth-child(1){",
	"     color: #111 !important;",
	"}",
		
"/* Code takken from https://userstyles.org/styles/95280 */",	
			"/* scrubber button */",
	".html5-scrubber-button:hover, .ytp-chrome-controls .ytp-button[aria-pressed]::after, .ytp-scrubber-button:hover, .ytp-swatch-background-color, .ytp-swatch-background-color-secondary {",
	"   background: #00adee !important;",
	"}",
	"/* progress bar */",
	".html5-play-progress, .ytp-play-progress {",
	"   background: #00adee !important; ",
	"}",
	".ytp-volume-slider-track, .ytp-volume-slider-handle:before {",
	"   background: #00adee !important;",
	"   z-index: -117;",
	"}",
	".ytp-settings-button.ytp-hd-quality-badge::after, .ytp-settings-button.ytp-4k-quality-badge::after, .ytp-settings-button.ytp-5k-quality-badge::after, .ytp-settings-button.ytp-8k-quality-badge::after, .ytp-settings-button.ytp-3d-badge::after {",
	"   background-color: #00adee !important;",
	"}",
	".ytp-swatch-color {",
	"   color: #00adee !important;",
	"}",
	".ytp-menuitem[aria-checked=\"true\"] .ytp-menuitem-toggle-checkbox {",
	"   background: #00adee !important;",
	"}",
	".ytp-chrome-controls .ytp-button.ytp-youtube-button:hover:not([aria-disabled=\"true\"]):not([disabled]) .ytp-svg-fill-logo-tube-lozenge {",
	"   fill: #00adee !important;",
	"}",
	".ytp-cued-thumbnail-overlay:hover .ytp-large-play-button-bg, .ytp-large-play-button.ytp-touch-device .ytp-large-play-button-bg {",
	"   fill: #00adee !important;",
	"}",
		
	"	/*Youtube+*/",
	"  #P-settings .P-select::after,.P-impexp,.thumb-svg,#subscription-playlist,#console-button,#autoplay-button,#loop-button,#save-thumbnail-button,#screenshot-button,#popout-button,#fullbrowser-button,#cinemamode-button,#shortcuts-button,#yt-masthead #P{",
	"			filter: invert(100%) !important;",
	"	}",
	" #P-content h2,#P-content h3,.P-implang{",
	"   color: #ccc !important;",
	"}",
	"#P-settings {",
	"   background: #111 !important; ",
	"}",
	"#P-content {",
	"   background: #1e1e1e !important; ",
	"}",
	"#P-sidebar-list > li.selected,#P-settings option:hover,.P-save{",
	"   background: #00adee !important; ",
	"     color: #fff !important;",
	"}",
	"#P-sidebar-list > li:hover {",
	"   background: #3a3a3a !important; ",
	"}",
	"/*	I can't change the color here because in the script they put !important*/",
	".P-reset,.P-reset:hover,#P-content select,#P-settings select,#P-settings option {",
	"			background: #666 !important;",
	"			border-color: #555 !important;",
	"     color: #fff !important;",
	"}"
	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
