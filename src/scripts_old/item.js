
; /* Start:"a:4:{s:4:"full";s:106:"/bitrix/templates/megamart_default/components/bitrix/catalog.element/catalog/script.min.js?161556890948368";s:6:"source";s:86:"/bitrix/templates/megamart_default/components/bitrix/catalog.element/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t){"use strict";if(!t.JCCatalogElement){var i=function(t){i.superclass.constructor.apply(this,arguments),this.buttonNode=BX.create("SPAN",{props:{className:"btn btn-default btn-buy btn-sm",id:this.id},style:"object"==typeof t.style?t.style:{},text:t.text,events:this.contextEvents}),BX.browser.IsIE()&&this.buttonNode.setAttribute("hideFocus","hidefocus")};BX.extend(i,BX.PopupWindowButton),t.JCCatalogElement=function(t){if(this.productType=0,this.config={useCatalog:!0,showQuantity:!0,showPrice:!0,showAbsent:!0,showOldPrice:!1,showPercent:!1,showSkuProps:!1,showOfferGroup:!1,useCompare:!1,useStickers:!1,useSubscribe:!1,usePopup:!1,useMagnifier:!1,usePriceRanges:!1,basketAction:["BUY"],showClosePopup:!1,templateTheme:"",showSlider:!1,sliderInterval:5e3,useEnhancedEcommerce:!1,dataLayerName:"dataLayer",brandProperty:!1,alt:"",title:"",magnifierZoomPercent:200,buy1ClickUrl:"",productRequestUrl:"",useFavorite:!1,showMultiPrice:!1},this.checkQuantity=!1,this.maxQuantity=0,this.minQuantity=0,this.stepQuantity=1,this.isDblQuantity=!1,this.canBuy=!0,this.isGift=!1,this.canSubscription=!0,this.currentIsSet=!1,this.updateViewedCount=!1,this.currentPriceMode="",this.currentPrices=[],this.currentPriceSelected=0,this.currentQuantityRanges=[],this.currentQuantityRangeSelected=0,this.precision=6,this.precisionFactor=Math.pow(10,this.precision),this.visual={},this.basketMode="",this.product={checkQuantity:!1,maxQuantity:0,stepQuantity:1,startQuantity:1,isDblQuantity:!1,canBuy:!0,canSubscription:!0,name:"",pict:{},id:0,addUrl:"",buyUrl:"",slider:{},sliderCount:0,useSlider:!1,sliderPict:[]},this.mess={},this.basketData={useProps:!1,emptyProps:!1,quantity:"quantity",props:"prop",basketUrl:"",sku_props:"",sku_props_var:"basket_props",add_url:"",buy_url:""},this.compareData={compareUrl:"",compareDeleteUrl:"",comparePath:""},this.defaultPict={preview:null,detail:null},this.offers=[],this.offerNum=0,this.treeProps=[],this.selectedValues={},this.mouseTimer=null,this.isTouchDevice=BX.hasClass(document.documentElement,"bx-touch"),this.touch=null,this.slider={interval:null,progress:null,paused:null,controls:[]},this.quantityDelay=null,this.quantityTimer=null,this.obProduct=null,this.obQuantity=null,this.obQuantityUp=null,this.obQuantityDown=null,this.obPrice={bonus:null,price:null,full:null,discount:null,percent:null,total:null},this.obTree=null,this.obPriceRanges=null,this.obBuyBtn=null,this.obAddToBasketBtn=null,this.obBasketActions=null,this.obFavorite=null,this.obProductRequestBtn=null,this.obBuy1clickBtn=null,this.obNotAvail=null,this.obSubscribe=null,this.obSkuProps=null,this.obMainSkuProps=null,this.obBigSlider=null,this.obMeasure=null,this.obQuantityLimit={all:null,value:null},this.obCompare=null,this.obTabsPanel=null,this.node={},this.smallCardNodes={},this.magnify={enabled:!1,obBigImg:null,obBigSlider:null,height:0,width:0,timer:0},this.currentImg={id:0,src:"",width:0,height:0},this.viewedCounter={path:"/bitrix/components/bitrix/catalog.element/ajax.php",params:{AJAX:"Y",SITE_ID:"",PRODUCT_ID:0,PARENT_ID:0}},this.obPopupWin=null,this.basketUrl="",this.basketParams={},this.errorCode=0,"object"==typeof t){switch(this.params=t,this.initConfig(),this.params.MESS&&(this.mess=this.params.MESS),this.productType){case 0:case 1:case 2:this.initProductData();break;case 3:this.initOffersData();break;default:this.errorCode=-1}this.initBasketData(),this.initCompareData()}0===this.errorCode&&BX.ready(BX.delegate(this.init,this)),this.params={},BX.addCustomEvent("onSaleProductIsGift",BX.delegate(this.onSaleProductIsGift,this)),BX.addCustomEvent("onSaleProductIsNotGift",BX.delegate(this.onSaleProductIsNotGift,this))},t.JCCatalogElement.prototype={getEntity:function(t,i,s){return t&&i?(s=s||"",t.querySelector(s+'[data-entity="'+i+'"]')):null},getEntities:function(t,i,s){return t&&i?(s=s||"",t.querySelectorAll(s+'[data-entity="'+i+'"]')):{length:0}},onSaleProductIsGift:function(t,i){i&&this.offers&&this.offers[this.offerNum].ID==i&&this.setGift()},onSaleProductIsNotGift:function(t,i){i&&this.offers&&this.offers[this.offerNum].ID==i&&(this.restoreSticker(),this.isGift=!1,this.setPrice())},reloadGiftInfo:function(){3===this.productType&&(this.checkQuantity=!0,this.maxQuantity=1,this.setPrice(),this.redrawSticker({text:BX.message("PRODUCT_GIFT_LABEL")}))},setGift:function(){3===this.productType&&(this.isGift=!0),1!==this.productType&&2!==this.productType||(this.isGift=!0),0===this.productType&&(this.isGift=!1),this.reloadGiftInfo()},setOffer:function(t){this.offerNum=parseInt(t),this.setCurrent()},init:function(){var t=0,i=null;if(this.obProduct=BX(this.visual.ID),this.obProduct||(this.errorCode=-1),this.obBigSlider=BX(this.visual.BIG_SLIDER_ID),this.node.imageContainer=this.getEntity(this.obProduct,"images-container"),this.node.imageSliderBlock=this.getEntity(this.obProduct,"images-slider-block"),this.obBigSlider&&this.node.imageContainer&&this.node.imageContainer||(this.errorCode=-2),this.config.showPrice&&(this.obPrice.price=BX(this.visual.PRICE_ID),this.obPrice.total=BX(this.visual.PRICE_TOTAL),this.obBasketActions=BX(this.visual.BASKET_ACTIONS_ID),this.obBasketActions&&(BX.util.in_array("BUY",this.config.basketAction)&&(this.obBuyBtn=BX(this.visual.BUY_LINK)),BX.util.in_array("ADD",this.config.basketAction)&&(this.obAddToBasketBtn=BX(this.visual.ADD_BASKET_LINK))),this.obNotAvail=BX(this.visual.NOT_AVAILABLE_MESS)),this.config.showQuantity&&(this.obQuantity=BX(this.visual.QUANTITY_ID),this.node.quantity=this.getEntity(this.obProduct,"quantity-block"),this.visual.QUANTITY_UP_ID&&(this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)),this.visual.QUANTITY_DOWN_ID&&(this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID))),3===this.productType&&(this.visual.TREE_ID&&(this.obTree=BX(this.visual.TREE_ID),this.obTree||(this.errorCode=-256)),this.visual.QUANTITY_MEASURE&&(this.obMeasure=BX(this.visual.QUANTITY_MEASURE)),this.visual.QUANTITY_LIMIT&&"N"!==this.config.showMaxQuantity&&(this.obQuantityLimit.all=BX(this.visual.QUANTITY_LIMIT),this.obQuantityLimit.all&&(this.obQuantityLimit.value=this.getEntity(this.obQuantityLimit.all,"quantity-limit-value"),this.obQuantityLimit.value||(this.obQuantityLimit.all=null))),this.config.usePriceRanges&&(this.obPriceRanges=this.getEntity(this.obProduct,"price-ranges-block"))),this.config.showSkuProps&&(this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV),this.obMainSkuProps=BX(this.visual.DISPLAY_MAIN_PROP_DIV)),this.config.useCompare&&(this.obCompare=BX(this.visual.COMPARE_LINK)),this.config.useSubscribe&&(this.obSubscribe=BX(this.visual.SUBSCRIBE_LINK)),this.config.useFavorite&&(this.obFavorite=BX(this.visual.FAVORITE_LINK)),this.visual.BUY1CLICK_LINK&&(this.obBuy1clickBtn=BX(this.visual.BUY1CLICK_LINK)),this.visual.ACTION_REQUEST_LINK&&(this.obProductRequestBtn=BX(this.visual.ACTION_REQUEST_LINK)),this.obSaleBanner=BX(this.visual.SALE_BANNER),this.obSaleBanner&&(BX.addCustomEvent("onTimerStart",BX.delegate(this.showSaleBanner,this)),BX.addCustomEvent("onTimerEnd",BX.delegate(this.hideSaleBanner,this))),this.config.fillAllPrices&&(this.obPricesAll=BX(this.visual.PRICES_CONTAINER)),0===this.errorCode){if(this.config.showQuantity){var s=this.isTouchDevice?"touchstart":"mousedown",e=this.isTouchDevice?"touchend":"mouseup";this.obQuantityUp&&(BX.bind(this.obQuantityUp,s,BX.proxy(this.startQuantityInterval,this)),BX.bind(this.obQuantityUp,e,BX.proxy(this.clearQuantityInterval,this)),BX.bind(this.obQuantityUp,"mouseout",BX.proxy(this.clearQuantityInterval,this)),BX.bind(this.obQuantityUp,"click",BX.delegate(this.quantityUp,this))),this.obQuantityDown&&(BX.bind(this.obQuantityDown,s,BX.proxy(this.startQuantityInterval,this)),BX.bind(this.obQuantityDown,e,BX.proxy(this.clearQuantityInterval,this)),BX.bind(this.obQuantityDown,"mouseout",BX.proxy(this.clearQuantityInterval,this)),BX.bind(this.obQuantityDown,"click",BX.delegate(this.quantityDown,this))),this.obQuantity&&BX.bind(this.obQuantity,"change",BX.delegate(this.quantityChange,this))}switch(this.productType){case 0:case 1:case 2:this.checkQuantityControls(),this.setAnalyticsDataLayer("showDetail"),this.obSaleBanner&&this.product.TIMER&&this.setTimer(this.product.TIMER);break;case 3:for(i=this.obTree.querySelectorAll("li"),t=0;t<i.length;t++)BX.bind(i[t],"click",BX.delegate(this.selectOfferProp,this));this.setCurrent()}this.obBuyBtn&&BX.bind(this.obBuyBtn,"click",BX.proxy(this.buyBasket,this)),this.obAddToBasketBtn&&BX.bind(this.obAddToBasketBtn,"click",BX.proxy(this.add2Basket,this)),this.obBasketActions&&(BX.addCustomEvent("add2basket.rs_lightbasket",function(){this.setCartStatus()}.bind(this)),BX.addCustomEvent("clear.rs_lightbasket",function(){this.setCartStatus()}.bind(this)),BX.addCustomEvent("delete.rs_lightbasket",function(){this.setCartStatus()}.bind(this)),BX.addCustomEvent("OnBasketChange",function(){this.setCartStatus()}.bind(this))),this.obCompare&&(BX.bind(this.obCompare,"click",BX.proxy(this.compare,this)),BX.addCustomEvent("onCatalogDeleteCompare",BX.proxy(this.checkDeletedCompare,this)),BX.addCustomEvent("onCompareChange",BX.proxy(this.checkCompare,this))),this.obFavorite&&(BX.bind(this.obFavorite,"click",BX.proxy(this.favorite,this)),BX.addCustomEvent("change.rs_favorite",BX.proxy(this.checkFavorite,this)),this.checkFavorite()),this.setCartStatus(),this.obBuy1clickBtn&&BX.bind(this.obBuy1clickBtn,"click",BX.proxy(this.buy1Click,this))}},initConfig:function(){this.params.PRODUCT_TYPE&&(this.productType=parseInt(this.params.PRODUCT_TYPE,10)),"undefined"!==this.params.CONFIG.USE_CATALOG&&BX.type.isBoolean(this.params.CONFIG.USE_CATALOG)&&(this.config.useCatalog=this.params.CONFIG.USE_CATALOG),this.config.showQuantity=this.params.CONFIG.SHOW_QUANTITY,this.config.showPrice=this.params.CONFIG.SHOW_PRICE,this.config.showPercent=this.params.CONFIG.SHOW_DISCOUNT_PERCENT,this.config.showOldPrice=this.params.CONFIG.SHOW_OLD_PRICE,this.config.showSkuProps=this.params.CONFIG.SHOW_SKU_PROPS,this.config.showOfferGroup=this.params.CONFIG.OFFER_GROUP,this.config.useCompare=this.params.CONFIG.DISPLAY_COMPARE,this.config.useStickers=this.params.CONFIG.USE_STICKERS,this.config.useSubscribe=this.params.CONFIG.USE_SUBSCRIBE,this.config.showMaxQuantity=this.params.CONFIG.SHOW_MAX_QUANTITY,this.config.relativeQuantityFactor=parseInt(this.params.CONFIG.RELATIVE_QUANTITY_FACTOR),this.config.usePriceRanges=this.params.CONFIG.USE_PRICE_COUNT,this.config.useFavorite=this.params.CONFIG.USE_FAVORITE&&void 0!==RS.Favorite,this.config.fillAllPrices=this.params.CONFIG.FILL_ITEM_ALL_PRICES,this.params.CONFIG.MAIN_PICTURE_MODE&&(this.config.usePopup=BX.util.in_array("POPUP",this.params.CONFIG.MAIN_PICTURE_MODE),this.config.useMagnifier=BX.util.in_array("MAGNIFIER",this.params.CONFIG.MAIN_PICTURE_MODE)),this.params.CONFIG.ADD_TO_BASKET_ACTION&&(this.config.basketAction=this.params.CONFIG.ADD_TO_BASKET_ACTION),this.config.showClosePopup=this.params.CONFIG.SHOW_CLOSE_POPUP,this.config.templateTheme=this.params.CONFIG.TEMPLATE_THEME||"",this.config.showSlider="Y"===this.params.CONFIG.SHOW_SLIDER,this.config.useEnhancedEcommerce="Y"===this.params.CONFIG.USE_ENHANCED_ECOMMERCE,this.config.dataLayerName=this.params.CONFIG.DATA_LAYER_NAME,this.config.brandProperty=this.params.CONFIG.BRAND_PROPERTY,this.config.alt=this.params.CONFIG.ALT||"",this.config.title=this.params.CONFIG.TITLE||"",this.config.magnifierZoomPercent=parseInt(this.params.CONFIG.MAGNIFIER_ZOOM_PERCENT)||200,this.params.VISUAL&&"object"==typeof this.params.VISUAL&&this.params.VISUAL.ID?(this.visual=this.params.VISUAL,this.mess=this.params.MESS,this.params.CONFIG.LINK_BUY1CLICK&&(this.config.buy1ClickUrl=this.params.CONFIG.LINK_BUY1CLICK),this.params.CONFIG.LINK_BTN_REQUEST&&(this.config.productRequestUrl=this.params.CONFIG.LINK_BTN_REQUEST)):this.errorCode=-1},initProductData:function(){this.params.PRODUCT&&"object"==typeof this.params.PRODUCT?(this.config.showPrice&&(this.currentPriceMode=this.params.PRODUCT.ITEM_PRICE_MODE,this.currentPrices=this.params.PRODUCT.ITEM_PRICES,this.currentAllPrices=this.params.PRODUCT.ITEM_ALL_PRICES,this.currentPriceSelected=this.params.PRODUCT.ITEM_PRICE_SELECTED,this.currentQuantityRanges=this.params.PRODUCT.ITEM_QUANTITY_RANGES,this.currentQuantityRangeSelected=this.params.PRODUCT.ITEM_QUANTITY_RANGE_SELECTED),this.config.showQuantity&&(this.product.checkQuantity=this.params.PRODUCT.CHECK_QUANTITY,this.product.isDblQuantity=this.params.PRODUCT.QUANTITY_FLOAT,this.product.checkQuantity&&(this.product.maxQuantity=this.product.isDblQuantity?parseFloat(this.params.PRODUCT.MAX_QUANTITY):parseInt(this.params.PRODUCT.MAX_QUANTITY,10)),this.product.stepQuantity=this.product.isDblQuantity?parseFloat(this.params.PRODUCT.STEP_QUANTITY):parseInt(this.params.PRODUCT.STEP_QUANTITY,10),this.checkQuantity=this.product.checkQuantity,this.isDblQuantity=this.product.isDblQuantity,this.stepQuantity=this.product.stepQuantity,this.maxQuantity=this.product.maxQuantity,this.minQuantity="Q"===this.currentPriceMode?parseFloat(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY):this.stepQuantity,this.isDblQuantity&&(this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor)),this.product.canBuy=this.params.PRODUCT.CAN_BUY,this.canSubscription=this.product.canSubscription=this.params.PRODUCT.SUBSCRIPTION,this.product.name=this.params.PRODUCT.NAME,this.product.pict=this.params.PRODUCT.PICT,this.product.id=this.params.PRODUCT.ID,this.product.category=this.params.PRODUCT.CATEGORY,this.params.PRODUCT.ADD_URL&&(this.product.addUrl=this.params.PRODUCT.ADD_URL),this.params.PRODUCT.BUY_URL&&(this.product.buyUrl=this.params.PRODUCT.BUY_URL),this.params.PRODUCT.TIMER&&(this.product.TIMER=this.params.PRODUCT.TIMER),this.currentIsSet=!0):this.errorCode=-1},initOffersData:function(){this.params.OFFERS&&BX.type.isArray(this.params.OFFERS)?(this.offers=this.params.OFFERS,this.offerNum=0,this.params.OFFER_SELECTED&&(this.offerNum=parseInt(this.params.OFFER_SELECTED,10)||0),this.params.TREE_PROPS&&(this.treeProps=this.params.TREE_PROPS),this.params.DEFAULT_PICTURE&&(this.defaultPict.preview=this.params.DEFAULT_PICTURE.PREVIEW_PICTURE,this.defaultPict.detail=this.params.DEFAULT_PICTURE.DETAIL_PICTURE),this.params.PRODUCT&&"object"==typeof this.params.PRODUCT&&(this.product.id=parseInt(this.params.PRODUCT.ID,10),this.product.name=this.params.PRODUCT.NAME,this.product.category=this.params.PRODUCT.CATEGORY)):this.errorCode=-1},initBasketData:function(){this.params.BASKET&&"object"==typeof this.params.BASKET&&(1!==this.productType&&2!==this.productType||(this.basketData.useProps=this.params.BASKET.ADD_PROPS,this.basketData.emptyProps=this.params.BASKET.EMPTY_PROPS),this.params.BASKET.QUANTITY&&(this.basketData.quantity=this.params.BASKET.QUANTITY),this.params.BASKET.PROPS&&(this.basketData.props=this.params.BASKET.PROPS),this.params.BASKET.BASKET_URL&&(this.basketData.basketUrl=this.params.BASKET.BASKET_URL),3===this.productType&&this.params.BASKET.SKU_PROPS&&(this.basketData.sku_props=this.params.BASKET.SKU_PROPS),this.params.BASKET.ADD_URL_TEMPLATE&&(this.basketData.add_url=this.params.BASKET.ADD_URL_TEMPLATE),this.params.BASKET.BUY_URL_TEMPLATE&&(this.basketData.buy_url=this.params.BASKET.BUY_URL_TEMPLATE),""===this.basketData.add_url&&""===this.basketData.buy_url&&(this.errorCode=-1024))},initCompareData:function(){this.config.useCompare&&(this.params.COMPARE&&"object"==typeof this.params.COMPARE?(this.params.COMPARE.COMPARE_PATH&&(this.compareData.comparePath=this.params.COMPARE.COMPARE_PATH),this.params.COMPARE.COMPARE_URL_TEMPLATE?this.compareData.compareUrl=this.params.COMPARE.COMPARE_URL_TEMPLATE:this.config.useCompare=!1,this.params.COMPARE.COMPARE_DELETE_URL_TEMPLATE?this.compareData.compareDeleteUrl=this.params.COMPARE.COMPARE_DELETE_URL_TEMPLATE:this.config.useCompare=!1):this.config.useCompare=!1)},setAnalyticsDataLayer:function(i){if(this.config.useEnhancedEcommerce&&this.config.dataLayerName){var s,e,a,r,n,o,h={},u={},c=[];switch(this.productType){case 0:case 1:case 2:h={id:this.product.id,name:this.product.name,price:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].PRICE,category:this.product.category,brand:BX.type.isArray(this.config.brandProperty)?this.config.brandProperty.join("/"):this.config.brandProperty};break;case 3:for(s in this.offers[this.offerNum].TREE)if(this.offers[this.offerNum].TREE.hasOwnProperty(s))for(e in r=s.substring(5),n=this.offers[this.offerNum].TREE[s],this.treeProps)if(this.treeProps.hasOwnProperty(e)&&this.treeProps[e].ID==r)for(a in this.treeProps[e].VALUES)if((o=this.treeProps[e].VALUES[a]).ID==n){c.push(o.NAME);break}h={id:this.offers[this.offerNum].ID,name:this.offers[this.offerNum].NAME,price:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].PRICE,category:this.product.category,brand:BX.type.isArray(this.config.brandProperty)?this.config.brandProperty.join("/"):this.config.brandProperty,variant:c.join("/")}}switch(i){case"showDetail":u={event:"showDetail",ecommerce:{currencyCode:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].CURRENCY||"",detail:{products:[{name:h.name||"",id:h.id||"",price:h.price||0,brand:h.brand||"",category:h.category||"",variant:h.variant||""}]}}};break;case"addToCart":u={event:"addToCart",ecommerce:{currencyCode:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].CURRENCY||"",add:{products:[{name:h.name||"",id:h.id||"",price:h.price||0,brand:h.brand||"",category:h.category||"",variant:h.variant||"",quantity:this.config.showQuantity&&this.obQuantity?this.obQuantity.value:1}]}}}}t[this.config.dataLayerName]=t[this.config.dataLayerName]||[],t[this.config.dataLayerName].push(u)}},checkSliderControls:function(t){var i=t>1?"":"none";this.node.sliderControlLeft&&(this.node.sliderControlLeft.style.display=i),this.node.sliderControlRight&&(this.node.sliderControlRight.style.display=i)},setCurrentImg:function(t,i,s){var e,a;if(this.currentImg.id=t.ID,this.currentImg.src=t.SRC,this.currentImg.width=t.WIDTH,this.currentImg.height=t.HEIGHT,i&&this.node.imageContainer)for(a=(e=this.getEntities(this.node.imageContainer,"image")).length;a--;)e[a].getAttribute("data-id")==t.ID?(BX.hasClass(e[a],"active")||this.node.sliderProgressBar&&this.resetProgress(),BX.addClass(e[a],"active")):BX.hasClass(e[a],"active")&&BX.removeClass(e[a],"active");this.config.useMagnifier&&!this.isTouchDevice&&(this.setMagnifierParams(),i&&this.disableMagnifier(!0))},setMagnifierParams:function(){for(var t,i=this.getEntities(this.node.imageContainer,"image"),s=i.length;s--;)(t=i[s].querySelector("img")).setAttribute("data-title",t.getAttribute("title")||""),t.removeAttribute("title"),i[s].getAttribute("data-id")==this.currentImg.id&&(BX.unbind(this.currentImg.node,"mouseover",BX.proxy(this.enableMagnifier,this)),this.currentImg.node=t,this.currentImg.node.style.backgroundImage="url('"+this.currentImg.src+"')",this.currentImg.node.style.backgroundSize="100% auto",BX.bind(this.currentImg.node,"mouseover",BX.proxy(this.enableMagnifier,this)))},enableMagnifier:function(){BX.bind(document,"mousemove",BX.proxy(this.moveMagnifierArea,this))},disableMagnifier:function(t){this.magnify.enabled&&(clearTimeout(this.magnify.timer),BX.removeClass(this.obBigSlider,"magnified"),this.magnify.enabled=!1,this.currentImg.node.style.backgroundSize="100% auto",t?(this.currentImg.node.style.height=this.magnify.height+"px",this.currentImg.node.style.width=this.magnify.width+"px",this.magnify.timer=setTimeout(BX.delegate(function(){this.currentImg.node.src=this.currentImg.src,this.currentImg.node.style.height="",this.currentImg.node.style.width=""},this),250)):(this.currentImg.node.src=this.currentImg.src,this.currentImg.node.style.height="",this.currentImg.node.style.width=""),BX.unbind(document,"mousemove",BX.proxy(this.moveMagnifierArea,this)))},moveMagnifierArea:function(t){var i=BX.pos(this.currentImg.node),s=this.inRect(t,i);if(this.inBound(i,s)){var e,a,r,n,o,h=s.X/this.currentImg.node.width*100,u=s.Y/this.currentImg.node.height*100;this.currentImg.node.style.backgroundPosition=h+"% "+u+"%",this.magnify.enabled||(clearTimeout(this.magnify.timer),BX.addClass(this.obBigSlider,"magnified"),this.currentImg.node.style.height=(this.magnify.height=this.currentImg.node.clientHeight)+"px",this.currentImg.node.style.width=(this.magnify.width=this.currentImg.node.offsetWidth)+"px",e=this.currentImg.width/this.currentImg.height,(a=this.obBigSlider.offsetWidth)>this.currentImg.width&&!BX.hasClass(this.obBigSlider,"popup")?(n=(r=a)/e,o=100):(r=this.currentImg.width,n=this.currentImg.height,o=this.config.magnifierZoomPercent>100?this.config.magnifierZoomPercent:100),this.currentImg.node.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12P4zwAAAgEBAKrChTYAAAAASUVORK5CYII=",this.currentImg.node.style.backgroundSize=o+"% auto",this.magnify.timer=setTimeout(BX.delegate(function(){this.currentImg.node.style.height=n+"px",this.currentImg.node.style.width=r+"px"},this),10)),this.magnify.enabled=!0}else this.disableMagnifier(!0)},inBound:function(t,i){return i.Y>=0&&t.height>=i.Y&&i.X>=0&&t.width>=i.X},inRect:function(t,i){var s=BX.GetWindowSize(),e={X:0,Y:0,globalX:0,globalY:0};return e.globalX=t.clientX+s.scrollLeft,t.offsetX&&t.offsetX<0&&(e.globalX-=t.offsetX),e.X=e.globalX-i.left,e.globalY=t.clientY+s.scrollTop,t.offsetY&&t.offsetY<0&&(e.globalY-=t.offsetY),e.Y=e.globalY-i.top,e},startQuantityInterval:function(){var t=BX.proxy_context.id===this.visual.QUANTITY_DOWN_ID?BX.proxy(this.quantityDown,this):BX.proxy(this.quantityUp,this);this.quantityDelay=setTimeout(BX.delegate(function(){this.quantityTimer=setInterval(t,150)},this),300)},clearQuantityInterval:function(){clearTimeout(this.quantityDelay),clearInterval(this.quantityTimer)},quantityUp:function(){var t=0,i=!0;0===this.errorCode&&this.config.showQuantity&&this.canBuy&&!this.isGift&&(t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10),isNaN(t)||(t+=this.stepQuantity,t=this.checkQuantityRange(t,"up"),this.checkQuantity&&t>this.maxQuantity&&(i=!1),i&&(this.isDblQuantity&&(t=Math.round(t*this.precisionFactor)/this.precisionFactor),this.obQuantity.value=t,this.setPrice())))},quantityDown:function(){var t=0,i=!0;0===this.errorCode&&this.config.showQuantity&&this.canBuy&&!this.isGift&&(t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10),isNaN(t)||(t-=this.stepQuantity,(t=this.checkQuantityRange(t,"down"))<this.minQuantity&&(i=!1),i&&(this.isDblQuantity&&(t=Math.round(t*this.precisionFactor)/this.precisionFactor),this.obQuantity.value=t,this.setPrice())))},quantityChange:function(){var t,i=0;0===this.errorCode&&this.config.showQuantity&&(this.canBuy?(i=this.isDblQuantity?parseFloat(this.obQuantity.value):Math.round(this.obQuantity.value),isNaN(i)?this.obQuantity.value=this.minQuantity:(i=this.checkQuantityRange(i),this.checkQuantity&&i>this.maxQuantity&&(i=this.maxQuantity),this.checkPriceRange(i),i=(t=Math.floor(Math.round(i*this.precisionFactor/this.stepQuantity)/this.precisionFactor)||1)<=1?this.stepQuantity:t*this.stepQuantity,(i=Math.round(i*this.precisionFactor)/this.precisionFactor)<this.minQuantity&&(i=this.minQuantity),this.obQuantity.value=i)):this.obQuantity.value=this.minQuantity,this.setPrice())},quantitySet:function(t){var i,s,e=this.offers[t],a=this.offers[this.offerNum];if(0===this.errorCode){if(this.canBuy=e.CAN_BUY,this.currentPriceMode=e.ITEM_PRICE_MODE,this.currentPrices=e.ITEM_PRICES,this.currentAllPrices=e.ITEM_ALL_PRICES,this.currentPriceSelected=e.ITEM_PRICE_SELECTED,this.currentQuantityRanges=e.ITEM_QUANTITY_RANGES,this.currentQuantityRangeSelected=e.ITEM_QUANTITY_RANGE_SELECTED,this.canBuy?(this.node.quantity&&BX.style(this.node.quantity,"display",""),this.obBasketActions&&BX.style(this.obBasketActions,"display",""),this.obSubscribe&&BX.style(this.obSubscribe,"display","none")):(this.node.quantity&&BX.style(this.node.quantity,"display","none"),this.obBasketActions&&BX.style(this.obBasketActions,"display","none"),this.obSubscribe&&("Y"===e.CATALOG_SUBSCRIBE?(BX.style(this.obSubscribe,"display",""),this.obSubscribe.setAttribute("data-item",e.ID),BX(this.visual.SUBSCRIBE_LINK+"_hidden").click()):BX.style(this.obSubscribe,"display","none"))),this.isDblQuantity=e.QUANTITY_FLOAT,this.checkQuantity=e.CHECK_QUANTITY,this.isDblQuantity?(this.stepQuantity=Math.round(parseFloat(e.STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor,this.maxQuantity=parseFloat(e.MAX_QUANTITY),this.minQuantity="Q"===this.currentPriceMode?parseFloat(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY):this.stepQuantity):(this.stepQuantity=parseInt(e.STEP_QUANTITY,10),this.maxQuantity=parseInt(e.MAX_QUANTITY,10),this.minQuantity="Q"===this.currentPriceMode?parseInt(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY):this.stepQuantity),!this.canBuy||this.checkQuantity&&0==this.maxQuantity?this.obNotAvail&&BX.style(this.obNotAvail,"display",""):this.obNotAvail&&BX.style(this.obNotAvail,"display","none"),this.config.showQuantity){var r=a.ITEM_PRICES.length&&a.ITEM_PRICES[a.ITEM_PRICE_SELECTED]&&a.ITEM_PRICES[a.ITEM_PRICE_SELECTED].MIN_QUANTITY!=this.minQuantity;s=this.isDblQuantity?Math.round(parseFloat(a.STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor!==this.stepQuantity||r||a.MEASURE!==e.MEASURE||this.checkQuantity&&parseFloat(a.MAX_QUANTITY)>this.maxQuantity&&parseFloat(this.obQuantity.value)>this.maxQuantity:parseInt(a.STEP_QUANTITY,10)!==this.stepQuantity||r||a.MEASURE!==e.MEASURE||this.checkQuantity&&parseInt(a.MAX_QUANTITY,10)>this.maxQuantity&&parseInt(this.obQuantity.value,10)>this.maxQuantity,this.obQuantity.disabled=!this.canBuy,s&&(this.obQuantity.value=this.minQuantity),this.obMeasure&&(e.MEASURE?BX.adjust(this.obMeasure,{html:e.MEASURE}):BX.adjust(this.obMeasure,{html:""}))}if(this.obQuantityLimit.all&&(this.canBuy&&this.checkQuantity&&0!=this.maxQuantity?("M"===this.config.showMaxQuantity?i=this.maxQuantity/this.stepQuantity>=this.config.relativeQuantityFactor?BX.message("RELATIVE_QUANTITY_MANY"):BX.message("RELATIVE_QUANTITY_FEW"):(i=this.maxQuantity,e.MEASURE&&(i+=" "+e.MEASURE)),BX.adjust(this.obQuantityLimit.value,{html:i}),BX.adjust(this.obQuantityLimit.all,{attrs:{className:this.maxQuantity/this.stepQuantity>=this.config.relativeQuantityFactor?"product-cat-limit is-instock":"product-cat-limit is-limited"},style:{display:""}})):(BX.adjust(this.obQuantityLimit.value,{html:""}),BX.adjust(this.obQuantityLimit.all,{style:{display:"none"}}))),this.config.usePriceRanges)if(this.config.fillAllPrices){var n=this.currentAllPrices[this.currentPriceSelected],o=this.getEntities(this.obProduct,"price-ranges-block");if(null!=n)for(var h in o)if(o.hasOwnProperty(h)&&BX.type.isDomNode(o[h]))for(var u in n.PRICES){if((d=n.PRICES[u].PRICE_TYPE_ID)===o[h].getAttribute("data-price-id")){if("Q"===this.currentPriceMode&&e.PRICE_RANGES_HTML[d]){var c=this.getEntity(o[h],"price-ranges-body"),l=this.getEntity(o[h],"price-ranges-ratio-header");c&&(c.innerHTML=e.PRICE_RANGES_HTML[d]),l&&(l.innerHTML=e.PRICE_RANGES_RATIO_HTML),this.showMultiPrice=!0,o[h].style.display="",o[h].parentNode.style.display=""}else o[h].style.display="none",o[h].parentNode.style.display="none";break}}}else if(this.config.usePriceRanges&&this.obPriceRanges){var d=this.currentPrices[this.currentPriceSelected].PRICE_TYPE_ID;if("Q"===this.currentPriceMode&&e.PRICE_RANGES_HTML){c=this.getEntity(this.obPriceRanges,"price-ranges-body"),l=this.getEntity(this.obPriceRanges,"price-ranges-ratio-header");c&&(c.innerHTML=e.PRICE_RANGES_HTML[d]),l&&(l.innerHTML=e.PRICE_RANGES_RATIO_HTML),this.obPriceRanges.style.display=""}else this.obPriceRanges.style.display="none"}}},selectOfferProp:function(){var t=0,i=[],s=null,e=BX.proxy_context;if(e&&e.hasAttribute("data-treevalue")){if(BX.hasClass(e,"checked"))return;if("object"==typeof document.activeElement&&document.activeElement.blur(),i=e.getAttribute("data-treevalue").split("_"),this.searchOfferPropIndex(i[0],i[1]),(s=BX.findChildren(e.parentNode,{tagName:"li"},!1))&&s.length)for(t=0;t<s.length;t++)BX.removeClass(s[t],"checked");BX.addClass(e,"checked"),this.setOfferCurrentValue(BX.findParent(e,{attribute:{"data-entity":"sku-line-block"}}),e)}},searchOfferPropIndex:function(t,i){var s,e,a="",r=!1,n=[],o=[],h=-1,u={},c=[];for(s=0;s<this.treeProps.length;s++)if(this.treeProps[s].ID===t){h=s;break}if(h>-1){for(s=0;s<h;s++)u[a="PROP_"+this.treeProps[s].ID]=this.selectedValues[a];for(u[a="PROP_"+this.treeProps[h].ID]=i,s=h+1;s<this.treeProps.length&&(a="PROP_"+this.treeProps[s].ID,r=this.getRowValues(u,a));s++){if(o=[],this.config.showAbsent)for(n=[],c=[],c=BX.clone(u,!0),e=0;e<r.length;e++)c[a]=r[e],o[o.length]=r[e],this.getCanBuy(c)&&(n[n.length]=r[e]);else n=r;this.selectedValues[a]&&BX.util.in_array(this.selectedValues[a],n)?u[a]=this.selectedValues[a]:this.config.showAbsent?u[a]=n.length?n[0]:o[0]:u[a]=n[0],this.updateRow(s,u[a],r,n)}this.selectedValues=u,this.changeInfo()}},updateRow:function(t,i,s,e){var a=0,r="",n=!1,o=null,h=this.getEntities(this.obTree,"sku-line-block");if(t>-1&&t<h.length){var u;for(o=h[t].querySelectorAll("li"),a=0;a<o.length;a++)(n=(r=o[a].getAttribute("data-onevalue"))===i)?BX.addClass(o[a],"checked"):BX.removeClass(o[a],"checked"),BX.util.in_array(r,e)?BX.removeClass(o[a],"disabled"):BX.addClass(o[a],"disabled"),BX.removeClass(o[a],"last-visible"),BX.util.in_array(r,s)?(u=o[a],o[a].style.display=""):o[a].style.display="none",n&&(h[t].style.display=0==r&&1==e.length?"none":"",this.setOfferCurrentValue(h[t],o[a]));u&&BX.addClass(u,"last-visible")}},getRowValues:function(t,i){var s=[],e=0,a=0,r=!1,n=!0;if(0===t.length){for(e=0;e<this.offers.length;e++)BX.util.in_array(this.offers[e].TREE[i],s)||(s[s.length]=this.offers[e].TREE[i]);r=!0}else for(e=0;e<this.offers.length;e++){for(a in n=!0,t)if(t[a]!==this.offers[e].TREE[a]){n=!1;break}n&&(BX.util.in_array(this.offers[e].TREE[i],s)||(s[s.length]=this.offers[e].TREE[i]),r=!0)}return!!r&&s},getCanBuy:function(t){var i,s=0,e=!0,a=!1;for(i=0;i<this.offers.length;i++){for(s in e=!0,t)if(t[s]!==this.offers[i].TREE[s]){e=!1;break}if(e&&this.offers[i].CAN_BUY){a=!0;break}}return a},setCurrent:function(){var t,i=0,s="",e=!1,a=[],r={},n=[],o=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length&&(s="PROP_"+this.treeProps[t].ID,e=this.getRowValues(r,s));t++){if(BX.util.in_array(o[s],e)?r[s]=o[s]:(r[s]=e[0],this.offerNum=0),this.config.showAbsent)for(a=[],n=[],n=BX.clone(r,!0),i=0;i<e.length;i++)n[s]=e[i],this.getCanBuy(n)&&(a[a.length]=e[i]);else a=e;this.updateRow(t,r[s],e,a)}this.selectedValues=r,this.changeInfo()},changeInfo:function(){var t,i,s=-1,e=0,a=!0,r={currentId:this.offerNum>-1?this.offers[this.offerNum].ID:0,newId:0};for(t=0;t<this.offers.length;t++){for(e in a=!0,this.selectedValues)if(this.selectedValues[e]!==this.offers[t].TREE[e]){a=!1;break}if(a){s=t;break}}if(s>-1){for(s!=this.offerNum&&(this.isGift=!1),this.drawImages(this.offers[s]),t=0;t<this.offers.length;t++)this.config.showOfferGroup&&this.offers[t].OFFER_GROUP&&(i=BX(this.visual.OFFER_GROUP+this.offers[t].ID))&&(i.style.display=t==s?"":"none");if(this.config.showSkuProps&&(this.obSkuProps&&(this.offers[s].DISPLAY_PROPERTIES?BX.adjust(this.obSkuProps,{style:{display:""},html:this.offers[s].DISPLAY_PROPERTIES}):BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})),this.obMainSkuProps&&(this.offers[s].DISPLAY_PROPERTIES_MAIN_BLOCK?BX.adjust(this.obMainSkuProps,{style:{display:""},html:this.offers[s].DISPLAY_PROPERTIES_MAIN_BLOCK}):BX.adjust(this.obMainSkuProps,{style:{display:"none"},html:""}))),this.offers[s].PROPERTIES&&"object"==typeof this.offers[s].PROPERTIES)for(var n in this.offers[s].PROPERTIES){var o=this.offers[s].PROPERTIES[n];if(o.VALUE.length>0){var h=this.getEntity(this.obProduct,"sku-prop-"+o.ID);h&&BX.adjust(h,{html:o.VALUE})}}this.obBuy1clickBtn&&this.obBuy1clickBtn.setAttribute("href",this.config.buy1ClickUrl.replace("#ELEMENT_ID#",this.offers[s].ID)),this.obProductRequestBtn&&this.obProductRequestBtn.setAttribute("href",this.config.productRequestUrl.replace("#ELEMENT_ID#",this.offers[s].ID)),this.showMultiPrice=!1,this.quantitySet(s),this.setPrice(),this.setCompared(this.offers[s].COMPARED),this.offerNum=s,this.setAnalyticsDataLayer("showDetail"),this.incViewedCounter(),r.newId=this.offers[this.offerNum].ID,BX.onCustomEvent("onCatalogStoreProductChange",[this.offers[this.offerNum].ID]),BX.onCustomEvent("onCatalogElementChangeOffer",[r]),r=null,this.setCartStatus(),this.obSaleBanner&&this.offers[this.offerNum].TIMER&&this.setTimer(this.offers[this.offerNum].TIMER),this.obPricesAll&&(this.showMultiPrice?this.obPricesAll.style.display="":this.obPricesAll.style.display="none")}},drawImages:function(t){if(this.node.imageContainer){var i,s,e,a=t.SLIDER,r=$(this.node.imageContainer),n=r.data("owl.carousel");if(null!=n)for(i=0,e=n._items.length;i<e;i++)r.trigger("remove.owl.carousel",i);for(i=0;i<a.length;i++)s=BX.create("IMG",{props:{src:a[i].RESIZE?a[i].RESIZE.big.src:a[i].SRC,alt:this.config.alt,title:this.config.title}}),0==i&&s.setAttribute("itemprop","image"),s=BX.create("SPAN",{attrs:{"data-entity":"image","data-fancybox":"gallery","data-caption":this.config.title,"data-index":i,"data-src":a[i].SRC,"data-dot":'<button class="owl-preview" style="background-image:url('+(a[i].RESIZE?a[i].RESIZE.small.src:a[i].SRC)+')"></button>'},props:{className:"product-detail-slider-image"},children:[s]}),null!=n&&r.trigger("add.owl.carousel",s).trigger("refresh.owl.carousel").resize()}},restoreSticker:function(){this.previousStickerText?this.redrawSticker({text:this.previousStickerText}):this.hideSticker()},hideSticker:function(){BX.hide(BX(this.visual.STICKER_ID))},redrawSticker:function(t){var i=(t=t||{}).text||"",s=BX(this.visual.STICKER_ID);if(s){BX.show(s);var e=s.getAttribute("title");e&&e!=i&&(this.previousStickerText=e),BX.adjust(s,{text:i,attrs:{title:i}})}},checkQuantityRange:function(t,i){if(void 0===t||"Q"!==this.currentPriceMode)return t;var s,e,a,r,n,o,h=t=parseFloat(t);for(var u in this.currentQuantityRanges)if(this.currentQuantityRanges.hasOwnProperty(u)){if(s=this.currentQuantityRanges[u],parseFloat(t)>=parseFloat(s.SORT_FROM)&&("INF"===s.SORT_TO||parseFloat(t)<=parseFloat(s.SORT_TO))){h=t;break}e=parseFloat(s.SORT_FROM)-t,a=Math.abs(e),r=parseFloat(s.SORT_TO)-t,n=Math.abs(r),(void 0===o||o>a)&&(void 0===i||"up"===i&&e>0||"down"===i&&e<0)&&(o=a,h=parseFloat(s.SORT_FROM)),(void 0===o||o>n)&&(void 0===i||"up"===i&&e>0||"down"===i&&e<0)&&(o=n,h=parseFloat(s.SORT_TO))}return h},checkPriceRange:function(t){if(void 0!==t&&"Q"===this.currentPriceMode){var i,s=!1;for(var e in this.currentQuantityRanges)if(this.currentQuantityRanges.hasOwnProperty(e)&&(i=this.currentQuantityRanges[e],parseFloat(t)>=parseFloat(i.SORT_FROM)&&("INF"===i.SORT_TO||parseFloat(t)<=parseFloat(i.SORT_TO)))){s=!0,this.currentQuantityRangeSelected=i.HASH;break}for(var a in!s&&(i=this.getMinPriceRange())&&(this.currentQuantityRangeSelected=i.HASH),this.currentPrices)if(this.currentPrices.hasOwnProperty(a)&&this.currentPrices[a].QUANTITY_HASH==this.currentQuantityRangeSelected){this.currentPriceSelected=a;break}}},getMinPriceRange:function(){var t;for(var i in this.currentQuantityRanges)this.currentQuantityRanges.hasOwnProperty(i)&&(!t||parseInt(this.currentQuantityRanges[i].SORT_FROM)<parseInt(t.SORT_FROM))&&(t=this.currentQuantityRanges[i]);return t},checkQuantityControls:function(){if(this.obQuantity){var t=this.checkQuantity&&parseFloat(this.obQuantity.value)+this.stepQuantity>this.maxQuantity,i=parseFloat(this.obQuantity.value)-this.stepQuantity<this.minQuantity;t?BX.addClass(this.obQuantityUp,"product-cat-amount-field-btn-disabled"):BX.hasClass(this.obQuantityUp,"product-cat-amount-field-btn-disabled")&&BX.removeClass(this.obQuantityUp,"product-cat-amount-field-btn-disabled"),i?BX.addClass(this.obQuantityDown,"product-cat-amount-field-btn-disabled"):BX.hasClass(this.obQuantityDown,"product-cat-amount-field-btn-disabled")&&BX.removeClass(this.obQuantityDown,"product-cat-amount-field-btn-disabled"),t&&i?this.obQuantity.setAttribute("disabled","disabled"):this.obQuantity.removeAttribute("disabled")}},setPrice:function(){var t;if(this.obQuantity&&this.checkPriceRange(this.obQuantity.value),this.checkQuantityControls(),t=this.currentPrices[this.currentPriceSelected],this.config.fillAllPrices&&null!=this.currentAllPrices){var i,s=this.currentAllPrices[this.currentPriceSelected],e=this.getEntities(this.obProduct,"price"),a=0;for(var r in e)if(e.hasOwnProperty(r)&&BX.type.isDomNode(e[r])&&null!==e[r].getAttribute("data-price-id")&&null!=s)for(i in s.PRICES){var n=s.PRICES[i];if(n.PRICE_TYPE_ID===e[r].getAttribute("data-price-id")){a++,e[r].style.display="",this.updatePrice(e[r],n);break}e[r].style.display="none"}a>1&&(this.showMultiPrice=!0)}else{var o=this.getEntity(this.obProduct,"price");this.updatePrice(o,t)}this.obPrice.total&&(t&&this.obQuantity&&this.obQuantity.value!=this.stepQuantity?BX.adjust(this.obPrice.total,{html:BX.message("PRICE_TOTAL_PREFIX")+': <span class="price-total-value">'+(0==this.productType?t.CURRENCY.replace("#",BX.util.number_format(t.PRICE*this.obQuantity.value,0,"."," ")):BX.Currency.currencyFormat(t.PRICE*this.obQuantity.value,t.CURRENCY,!0))+"</span>",style:{display:""}}):BX.adjust(this.obPrice.total,{html:"",style:{display:"none"}}))},updatePrice:function(t,i){var s="",e=this.getEntity(t,"price-current"),a=this.getEntity(t,"price-full"),r=this.getEntity(t,"price-discount"),n=this.getEntity(t,"cashback");this.isGift&&(i.PRICE=0,i.DISCOUNT=i.BASE_PRICE,i.PERCENT=100),e&&(i?BX.adjust(e,{html:0==this.productType?i.PRINT_RATIO_PRICE:BX.Currency.currencyFormat(i.RATIO_PRICE,i.CURRENCY,!0)}):BX.adjust(e,{html:""}),i&&i.RATIO_PRICE!==i.RATIO_BASE_PRICE?this.config.showOldPrice&&(a&&BX.adjust(a,{style:{display:""},html:0==this.productType?i.PRINT_RATIO_BASE_PRICE:BX.Currency.currencyFormat(i.RATIO_BASE_PRICE,i.CURRENCY,!0)}),r&&(s=(s=BX.message("ECONOMY_INFO_MESSAGE")).replace("#ECONOMY#",0==this.productType?i.PRINT_RATIO_DISCOUNT:BX.Currency.currencyFormat(i.RATIO_DISCOUNT,i.CURRENCY,!0)),BX.adjust(r,{style:{display:""},html:s}))):this.config.showOldPrice&&(a&&BX.adjust(a,{style:{display:"none"},html:""}),r&&BX.adjust(r,{style:{display:"none"},html:""})),n&&(i.RATIO_BONUS>0?(n.style.display="",this.getEntity(n,"cashback-value").innerHTML=0==this.productType?i.CURRENCY.replace("#",BX.util.number_format(i.RATIO_BONUS*this.obQuantity.value,0,"."," ")):BX.Currency.currencyFormat(i.RATIO_BONUS*this.obQuantity.value,i.CURRENCY,!0)):n.style.display="none"))},compare:function(t){var i=this.obCompare.querySelector('[data-entity="compare-checkbox"]'),s=BX.getEventTarget(t),e=!0;i&&(e=s===i?i.checked:!i.checked);var a,r=e?this.compareData.compareUrl:this.compareData.compareDeleteUrl;if(r){switch(s!==i&&(BX.PreventDefault(t),this.setCompared(e)),this.productType){case 0:case 1:case 2:a=r.replace("#ID#",this.product.id.toString());break;case 3:a=r.replace("#ID#",this.offers[this.offerNum].ID)}BX.ajax({method:"POST",dataType:e?"json":"html",url:a+(-1!==a.indexOf("?")?"&":"?")+"ajax_action=Y",onsuccess:e?BX.proxy(this.compareResult,this):BX.proxy(this.compareDeleteResult,this)})}},compareResult:function(t){var s,e;BX.type.isPlainObject(t)&&(this.offers.length>0&&(this.offers[this.offerNum].COMPARED="OK"===t.STATUS),"OK"===t.STATUS?BX.onCustomEvent("OnCompareChange",[{action:"add",id:t.ID}]):(this.initPopupWindow(),s='<div class="alert alert-danger">'+(t.MESSAGE?t.MESSAGE:BX.message("COMPARE_UNKNOWN_ERROR"))+"</div>",e=[new i({text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})],this.obPopupWin.setTitleBar(BX.message("COMPARE_TITLE")),this.obPopupWin.setContent(s),this.obPopupWin.setButtons(e),this.obPopupWin.show()))},compareDeleteResult:function(t){"OK"===(t=BX.parseJSON(t)).STATUS&&BX.onCustomEvent("OnCompareChange",[{action:"delete",id:t.ID}]),this.offers&&this.offers.length&&(this.offers[this.offerNum].COMPARED=!1)},checkCompare:function(t){if(null!=t)switch(this.productType){case 0:case 1:case 2:this.product.id==t.id&&this.setCompared("add"==t.action);break;case 3:for(var i=this.offers.length;i--;)if(this.offers[i].ID==t.id){this.offers[i].COMPARED=!1,this.offerNum==i&&this.setCompared("add"==t.action);break}}},setCompared:function(t){if(this.obCompare){t?BX.addClass(this.obCompare,"checked"):BX.removeClass(this.obCompare,"checked");var i=this.getEntity(this.obCompare,"compare-checkbox");i&&(i.checked=t);var s=this.getEntity(this.obCompare,"compare-title");s&&(s.innerHTML=t?BX.message("BTN_COMPARE_DEL"):BX.message("BTN_COMPARE_ADD"))}},setCompareInfo:function(t){if(BX.type.isArray(t))for(var i in this.offers)this.offers.hasOwnProperty(i)&&(this.offers[i].COMPARED=BX.util.in_array(this.offers[i].ID,t))},compareRedirect:function(){this.compareData.comparePath?location.href=this.compareData.comparePath:this.obPopupWin.close()},checkDeletedCompare:function(t){switch(this.productType){case 0:case 1:case 2:this.product.id==t&&this.setCompared(!1);break;case 3:for(var i=this.offers.length;i--;)if(this.offers[i].ID==t){this.offers[i].COMPARED=!1,this.offerNum==i&&this.setCompared(!1);break}}},initBasketUrl:function(){switch(this.basketUrl="ADD"===this.basketMode?this.basketData.add_url:this.basketData.buy_url,this.productType){case 1:case 2:this.basketUrl=this.basketUrl.replace("#ID#",this.product.id.toString());break;case 3:this.basketUrl=this.basketUrl.replace("#ID#",this.offers[this.offerNum].ID)}this.basketParams={ajax_basket:"Y"},this.config.showQuantity&&(this.basketParams[this.basketData.quantity]=this.obQuantity.value),this.basketData.sku_props&&(this.basketParams[this.basketData.sku_props_var]=this.basketData.sku_props)},fillBasketProps:function(){if(this.visual.BASKET_PROP_DIV){var t=0,i=null,s=!1,e=null;if(this.basketData.useProps&&!this.basketData.emptyProps?this.obPopupWin&&this.obPopupWin.contentContainer&&(e=this.obPopupWin.contentContainer):e=BX(this.visual.BASKET_PROP_DIV),e){if((i=e.getElementsByTagName("select"))&&i.length)for(t=0;t<i.length;t++)if(!i[t].disabled)switch(i[t].type.toLowerCase()){case"select-one":this.basketParams[i[t].name]=i[t].value,s=!0}if((i=e.getElementsByTagName("input"))&&i.length)for(t=0;t<i.length;t++)if(!i[t].disabled)switch(i[t].type.toLowerCase()){case"hidden":this.basketParams[i[t].name]=i[t].value,s=!0;break;case"radio":i[t].checked&&(this.basketParams[i[t].name]=i[t].value,s=!0)}}s||(this.basketParams[this.basketData.props]=[],this.basketParams[this.basketData.props][0]=0)}},enableAddToBasketLoading:function(){this.obAddToBasketBtn&&this.obAddToBasketBtn.classList.add("btn-loading","disabled")},disableAddToBasketLoading:function(){this.obAddToBasketBtn&&this.obAddToBasketBtn.classList.contains("btn-loading")&&this.obAddToBasketBtn.classList.remove("btn-loading","disabled")},sendToBasket:function(){if(this.canBuy)switch(this.productType){case 0:this.config.showQuantity?Basket.add(this.product.id,this.obQuantity.value):Basket.add(this.product.id,1),this.basketResult({STATUS:"OK"});break;case 1:case 2:case 3:this.enableAddToBasketLoading(),this.initBasketUrl(),this.fillBasketProps(),BX.ajax({method:"POST",dataType:"json",url:this.basketUrl,data:this.basketParams,onsuccess:BX.proxy(this.basketResult,this)})}},add2Basket:function(){this.basketMode="ADD",this.basket()},buyBasket:function(){this.basketMode="BUY",this.basket()},basket:function(){if(this.obBasketActions&&null!=t.Basket){var s=Basket.inbasket();switch(this.productType){case 3:if(BX.util.in_array(this.offers[this.offerNum].ID+"",s))return void this.basketRedirect();break;default:if(BX.util.in_array(this.product.id+"",s))return void this.basketRedirect()}}var e="";if(this.canBuy)switch(this.productType){case 1:case 2:this.basketData.useProps&&!this.basketData.emptyProps?(this.initPopupWindow(),this.obPopupWin.setTitleBar(BX.message("TITLE_BASKET_PROPS")),BX(this.visual.BASKET_PROP_DIV)&&(e=BX(this.visual.BASKET_PROP_DIV).innerHTML),this.obPopupWin.setContent(e),this.obPopupWin.setButtons([new i({text:BX.message("BTN_SEND_PROPS"),events:{click:BX.delegate(this.sendToBasket,this)}})]),this.obPopupWin.show()):this.sendToBasket();break;case 0:case 3:this.sendToBasket()}},basketResult:function(t){var s,e;this.disableAddToBasketLoading(),this.obPopupWin&&this.obPopupWin.close(),BX.type.isPlainObject(t)&&("OK"===t.STATUS&&this.setAnalyticsDataLayer("addToCart"),"OK"===t.STATUS&&"BUY"===this.basketMode?this.basketRedirect():"OK"===t.STATUS?(Basket.inbasket(3==this.productType?this.offers[this.offerNum].ID:this.product.id,!1),BX.onCustomEvent("OnBasketChange",[{},"ADD2CART"])):(this.initPopupWindow(),s='<div style="width: 100%; margin: 0; text-align: center;"><p>'+(t.MESSAGE?t.MESSAGE:BX.message("BASKET_UNKNOWN_ERROR"))+"</p></div>",e=[new i({text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})],this.obPopupWin.setTitleBar("OK"===t.STATUS?BX.message("TITLE_SUCCESSFUL"):BX.message("TITLE_ERROR")),this.obPopupWin.setContent(s),this.obPopupWin.setButtons(e),this.obPopupWin.show()))},basketRedirect:function(){location.href=this.basketData.basketUrl?this.basketData.basketUrl:BX.message("BASKET_URL")},initPopupWindow:function(){this.obPopupWin||(this.obPopupWin=BX.PopupWindowManager.create("CatalogElementBasket_"+this.visual.ID,null,{autoHide:!1,offsetLeft:0,offsetTop:0,overlay:!0,closeByEsc:!0,titleBar:!0,closeIcon:!0,contentColor:"white",className:this.config.templateTheme?"bx-"+this.config.templateTheme:""}))},incViewedCounter:function(){if(this.currentIsSet&&!this.updateViewedCount){switch(this.productType){case 1:case 2:this.viewedCounter.params.PRODUCT_ID=this.product.id,this.viewedCounter.params.PARENT_ID=this.product.id;break;case 3:this.viewedCounter.params.PARENT_ID=this.product.id,this.viewedCounter.params.PRODUCT_ID=this.offers[this.offerNum].ID;break;default:return}this.viewedCounter.params.SITE_ID=BX.message("SITE_ID"),this.updateViewedCount=!0,BX.ajax.post(this.viewedCounter.path,this.viewedCounter.params,BX.delegate(function(){this.updateViewedCount=!1},this))}},allowViewedCount:function(t){this.currentIsSet=!0,t&&this.incViewedCounter()},setOfferCurrentValue:function(t,i){var s=this.getEntities(t,"sku-current-value");for(var e in s)s.hasOwnProperty(e)&&BX.type.isDomNode(s[e])&&(s[e].innerHTML=i.getAttribute("title"))},setCartStatus:function(){if(this.obBasketActions&&null!=t.Basket){var i,s=Basket.inbasket();switch(this.productType){case 3:i=this.offers[this.offerNum].ID;break;default:i=this.product.id}BX.util.in_array(i,s)?(BX.addClass(this.obBasketActions,"is-incart"),this.obBuyBtn&&(this.obBuyBtn.innerHTML=this.mess.MESS_BTN_INCART),this.obAddToBasketBtn&&(this.obAddToBasketBtn.innerHTML=this.mess.MESS_BTN_INCART)):(BX.removeClass(this.obBasketActions,"is-incart"),this.obBuyBtn&&(this.obBuyBtn.innerHTML=this.mess.MESS_BTN_BUY),this.obAddToBasketBtn&&(this.obAddToBasketBtn.innerHTML=this.mess.MESS_BTN_ADD_TO_BASKET))}},favorite:function(t){BX.PreventDefault(t),RS.Favorite.request(this.product.id)},checkFavorite:function(){if(this.obFavorite){var t=this.obFavorite.querySelector('[data-entity="favorite-title"]');BX.util.in_array(this.product.id,RS.Favorite.getItems())?(BX.addClass(this.obFavorite,"checked"),t&&(t.innerHTML=BX.message("BTN_FAVORITE_DEL"))):(BX.removeClass(this.obFavorite,"checked"),t&&(t.innerHTML=BX.message("BTN_FAVORITE_ADD")))}},setTimer:function(t){var i=this.getEntity(this.obSaleBanner,"sale-banner-title");i&&(i.innerHTML=t.TITLE),RS.Init(["timers"],this.obSaleBanner,{DATE_FROM:t.DATE_FROM,DATE_TO:t.DATE_TO,AUTO_RENEWAL:t.AUTO_RENEWAL,QUANTITY:t.QUANTITY})},showSaleBanner:function(){this.obSaleBanner&&(this.obSaleBanner.style.display="")},hideSaleBanner:function(){this.obSaleBanner&&(this.obSaleBanner.style.display="none")},buy1Click:function(t){if(this.canBuy){var i,s=BX.proxy_context,e={};switch(BX.PreventDefault(t),this.productType){case 3:i=this.offers[this.offerNum].ID;break;default:i=this.product.id}this.config.showQuantity&&(e["QUANTITY_"+i]=this.obQuantity.value),RS.Utils.popup({src:s.getAttribute("href"),type:"ajax",$orig:$(s),ajax:{settings:{type:"POST",data:{RS_ORDER_IDS:e}}}},"window")}}}}}(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/templates/megamart_default/components/bitrix/iblock.vote/stars/script.min.js?16155689094841";s:6:"source";s:80:"/bitrix/templates/megamart_default/components/bitrix/iblock.vote/stars/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t){t.JCIblockVoteStars||(t.JCIblockVoteStars=function(t){this.progressObj=null,this.ratingObj=null,this.starsObj=null,this.progressId="",this.ratingId="",this.starsId="",this.ajaxParams={},this.siteId="",this.voteData={element:0,percent:0,count:0},this.config={readOnly:!1,alreadyVoted:!0,request:!1},BX.type.isPlainObject(t)&&(BX.type.isNotEmptyString(t.progressId)&&(this.progressId=t.progressId),BX.type.isNotEmptyString(t.ratingId)&&(this.ratingId=t.ratingId),BX.type.isNotEmptyString(t.starsId)&&(this.starsId=t.starsId),BX.type.isNotEmptyString(t.ajaxUrl)&&(this.ajaxUrl=t.ajaxUrl),BX.type.isNotEmptyString(t.checkVoteUrl)&&(this.checkVoteUrl=t.checkVoteUrl),BX.type.isPlainObject(t.ajaxParams)&&(this.ajaxParams=t.ajaxParams),BX.type.isNotEmptyString(t.siteId)&&(this.siteId=t.siteId),BX.type.isPlainObject(t.voteData)&&(BX.type.isNumber(t.voteData.element)&&(this.voteData.element=t.voteData.element),BX.type.isNumber(t.voteData.percent)&&(this.voteData.percent=this.preparePercent(t.voteData.percent)),BX.type.isNumber(t.voteData.count)&&(this.voteData.count=t.voteData.count),BX.type.isNumber(t.voteData.value)&&(this.voteData.value=t.voteData.value)),BX.type.isBoolean(t.readOnly)&&(this.config.readOnly=t.readOnly)),BX.ready(BX.proxy(this.init,this))},t.JCIblockVoteStars.prototype.init=function(){BX.type.isNotEmptyString(this.progressId)&&(this.progressObj=BX(this.progressId)),BX.type.isNotEmptyString(this.ratingId)&&(this.ratingObj=BX(this.ratingId)),BX.type.isNotEmptyString(this.starsId)&&(this.starsObj=BX(this.starsId),this.items=BX.findChildren(this.starsObj)),this.showProgress(this.voteData.percent),this.showVotes(),this.checkVote()},t.JCIblockVoteStars.prototype.checkVote=function(){this.config.readOnly||this.voteData.element<=0||BX.ajax({timeout:30,method:"POST",dataType:"json",url:this.checkVoteUrl,data:{sessid:BX.bitrix_sessid(),checkVote:"Y",vote_id:this.voteData.element,site_id:this.siteId},onsuccess:BX.proxy(this.checkVoteResult,this)})},t.JCIblockVoteStars.prototype.checkVoteResult=function(t){if(BX.type.isPlainObject(t)&&t.success&&(this.config.alreadyVoted=t.voted),!(this.config.readOnly||this.config.alreadyVoted||this.voteData.element<=0)&&BX.type.isElementNode(this.starsObj)&&this.items.length)for(var s in this.items)BX.bind(this.items[s],"mouseover",BX.proxy(this.onMouseover,this)),BX.bind(this.items[s],"mouseout",BX.proxy(this.onMouseout,this)),BX.bind(this.items[s],"click",BX.proxy(this.handlerClick,this))},t.JCIblockVoteStars.prototype.destroy=function(){if(this.starsObj=null,this.items.length)for(var t in this.items)BX.unbindAll(this.items[t]);this.items=null},t.JCIblockVoteStars.prototype.preparePercent=function(t){return t=parseInt(t,10),isNaN(t)?t=0:t>100?t=100:t<0&&(t=0),t},t.JCIblockVoteStars.prototype.showProgress=function(t){for(var s in this.items)Math.round(this.voteData.value)>s?this.items[s].className="rate__item is-voted":this.items[s].className="rate__item"},t.JCIblockVoteStars.prototype.showVotes=function(){BX.type.isElementNode(this.ratingObj)&&(this.ratingObj.innerHTML=this.voteData.count)},t.JCIblockVoteStars.prototype.handlerClick=function(s){var e,i=BX.proxy_context;this.config.readOnly||this.config.alreadyVoted||this.config.request||(this.config.request=!0,s=s||t.event,BX.type.isElementNode(this.starsObj)&&(e=this.items.indexOf(i),isNaN(e)||(this.ajaxParams.rating=e,this.ajaxParams.vote="Y",this.ajaxParams.vote_id=this.voteData.element,this.ajaxParams.sessid=BX.bitrix_sessid(),this.ajaxParams.site_id=this.siteId,BX.ajax({timeout:30,method:"POST",dataType:"json",url:this.ajaxUrl,data:this.ajaxParams,onsuccess:BX.proxy(this.clickResult,this)}))))},t.JCIblockVoteStars.prototype.clickResult=function(t){this.config.request=!1,BX.type.isPlainObject(t)&&(this.config.alreadyVoted=!0,this.voteData.percent=this.preparePercent(20*t.value),this.voteData.count=t.votes,this.voteData.value=t.value,this.showProgress(this.voteData.percent),this.showVotes())},t.JCIblockVoteStars.prototype.onMouseover=function(){var t=BX.proxy_context;if(!(this.config.readOnly||this.config.alreadyVoted||this.config.request)){for(var s=this.items.indexOf(t);s>=0;s--)this.items[s].saved_class||(this.items[s].saved_className=this.items[s].className),"is-hover"!=this.items[s].className&&(this.items[s].className+=" is-hover");for(s=this.items.indexOf(t)+1;s<this.items.length;s++)this.items[s].saved_className&&this.items[s].className!=this.items[s].saved_className&&(this.items[s].className=this.items[s].saved_className)}},t.JCIblockVoteStars.prototype.onMouseout=function(){BX.proxy_context;if(!(this.config.readOnly||this.config.alreadyVoted||this.config.request))for(var t=0;t<this.items.length;t++)this.items[t].saved_className&&this.items[t].className!=this.items[t].saved_className&&(this.items[t].className=this.items[t].saved_className)})}(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:113:"/bitrix/templates/megamart_default/components/bitrix/catalog.product.subscribe/.default/script.js?161556890922247";s:6:"source";s:97:"/bitrix/templates/megamart_default/components/bitrix/catalog.product.subscribe/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (window) {

	if (!!window.JCCatalogProductSubscribe)
	{
		return;
	}

/*
	var subscribeButton = function(params)
	{
		subscribeButton.superclass.constructor.apply(this, arguments);
		this.nameNode = BX.create('span', {
			props : { id : this.id },
			style: typeof(params.style) === 'object' ? params.style : {},
			text: params.text
		});
		this.buttonNode = BX.create('span', {
			attrs: { className: params.className },
			style: { marginBottom: '0', borderBottom: '0 none transparent' },
			children: [this.nameNode],
			events : this.contextEvents
		});
		if (BX.browser.IsIE())
		{
			this.buttonNode.setAttribute("hideFocus", "hidefocus");
		}
	};
	BX.extend(subscribeButton, BX.PopupWindowButton);
*/

	window.JCCatalogProductSubscribe = function(params)
	{
		this.buttonId = params.buttonId;
		this.buttonClass = params.buttonClass;
		this.subscribeBtnName = params.subscribeBtnName;
		this.subscribedBtnName = params.subscribedBtnName;
		this.jsObject = params.jsObject;
		this.ajaxUrl = '/bitrix/components/bitrix/catalog.product.subscribe/ajax.php';
		this.alreadySubscribed = params.alreadySubscribed;
		this.listIdAlreadySubscribed = params.listIdAlreadySubscribed;
		this.urlListSubscriptions = params.urlListSubscriptions;
		this.listOldItemId = {};
		this.landingId = params.landingId;

		this.productName = params.productName;
		this.ImageUrl = params.ImageUrl;
		this.artnumber = params.artnumber;
		this.USE_CAPTCHA = params.USE_CAPTCHA;
		this.elemButtonSubscribe = null;
		this.elemPopupWin = null;
		this.defaultButtonClass = 'bx-catalog-subscribe-button';

		this._elemButtonSubscribeClickHandler = BX.delegate(this.subscribe, this);
		this._elemHiddenClickHandler = BX.delegate(this.checkSubscribe, this);

		BX.ready(BX.delegate(this.init,this));
	};

	window.JCCatalogProductSubscribe.prototype.init = function()
	{
		if (!!this.buttonId)
		{
			this.elemButtonSubscribe = BX(this.buttonId);
			this.elemHiddenSubscribe = BX(this.buttonId+'_hidden');
		}

		if (!!this.elemButtonSubscribe)
		{
			BX.bind(this.elemButtonSubscribe, 'click', this._elemButtonSubscribeClickHandler);
		}

		if (!!this.elemHiddenSubscribe)
		{
			BX.bind(this.elemHiddenSubscribe, 'click', this._elemHiddenClickHandler);
		}

		this.setButton(this.alreadySubscribed);
		this.setIdAlreadySubscribed(this.listIdAlreadySubscribed);
	};

	window.JCCatalogProductSubscribe.prototype.checkSubscribe = function()
	{
		if(!this.elemHiddenSubscribe || !this.elemButtonSubscribe) return;

		if(this.listOldItemId.hasOwnProperty(this.elemButtonSubscribe.dataset.item))
		{
			this.setButton(true);
		}
		else
		{
			BX.ajax({
				method: 'POST',
				dataType: 'json',
				url: this.ajaxUrl,
				data: {
					sessid: BX.bitrix_sessid(),
					checkSubscribe: 'Y',
					itemId: this.elemButtonSubscribe.dataset.item
				},
				onsuccess: BX.delegate(function (result) {
					if(result.subscribe)
					{
						this.setButton(true);
						this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
					}
					else
					{
						this.setButton(false);
					}
				}, this)
			});
		}
	};

	window.JCCatalogProductSubscribe.prototype.subscribe = function()
	{
		this.elemButtonSubscribe = BX.proxy_context;
		if(!this.elemButtonSubscribe) return false;

		BX.ajax({
			method: 'POST',
			dataType: 'json',
			url: this.ajaxUrl,
			data: {
				sessid: BX.bitrix_sessid(),
				subscribe: 'Y',
				itemId: this.elemButtonSubscribe.dataset.item,
				siteId: BX.message('SITE_ID'),
				landingId: this.landingId
			},
			onsuccess: BX.delegate(function (result) {
				if(result.success)
				{
					this.createSuccessPopup(result);
					this.setButton(true);
					this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
				}
				else if(result.contactFormSubmit)
				{
/*
					this.initPopupWindow();
					this.elemPopupWin.setTitleBar(BX.message('CPST_SUBSCRIBE_POPUP_TITLE'));
*/
					var form = this.createContentForPopup(result);
/*
					this.elemPopupWin.setContent(form);
					this.elemPopupWin.setButtons([
						new subscribeButton({
*/

					var content = BX.create('div', {
						children: [
							BX.create('div', {
								props: {className: 'subscribe-form-flex'},
								children: [
									BX.create('div', {
										props: {className: 'subscribe-form-flex-block_img'},
										html: '<img src="'+this.ImageUrl+'">'
									}),
									BX.create('div', {
										props: {className: 'subscribe-form-flex-block_inf'},
										children: [
											BX.create('div', {
												props: {className: 'subscribe-form-flex-block_name'},
												text: this.productName
											}),
											BX.create('div', {
												props: {className: 'subscribe-form-flex-block_art'},
												html: BX.message('CPST_SUBSCRIBE_ARTNUMBER')+this.artnumber+''
											})
										]
									}),
						]}),
							form,
							BX.create('div', {
							props:{
								className: 'bmd-form-group btn-primary-subscribe-button btn-primary-mobile',
							},
							children: [
								BX.create('button', {
							text: BX.message('CPST_SUBSCRIBE_BUTTON_NAME'),
							props:{
							className : 'btn btn-primary btn-primary-mobile',
							},
							events: {
								click : BX.delegate(function() {
									if(!this.validateContactField(result.contactTypeData))
									{
										return false;
									}
									BX.ajax.submitAjax(form, {
										method : 'POST',
										url: this.ajaxUrl,
										processData : true,
										onsuccess: BX.delegate(function (resultForm) {
											resultForm = BX.parseJSON(resultForm, {});
											if(resultForm.success)
											{
												this.createSuccessPopup(resultForm);
												this.setButton(true);
												this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
											}
											else if(resultForm.error)
											{
												if(resultForm.hasOwnProperty('setButton'))
												{
													this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
													this.setButton(true);
												}
												var errorMessage = resultForm.message;
												if(resultForm.hasOwnProperty('typeName'))
												{
													errorMessage = resultForm.message.replace('USER_CONTACT',
														resultForm.typeName);
												}
												BX.addClass(BX('bx-catalog-subscribe-form-notify'), 'alert alert-danger');
												BX('bx-catalog-subscribe-form-notify').innerHTML = errorMessage;
											}
										}, this)
									});
								}, this)
							}
/*
						}),
						new subscribeButton({
							text : BX.message('CPST_SUBSCRIBE_BUTTON_CLOSE'),
							className : 'btn',
							events : {
								click : BX.delegate(function() {
									this.elemPopupWin.destroy();
								}, this)
							}
						})
					]);
					this.elemPopupWin.show();
*/
								})
							]
							}),
						]
         			});



					this.showPopup(
						content,
						{
							title: BX.message('CPST_SUBSCRIBE_POPUP_TITLE')
						}
					);
					
				if(this.USE_CAPTCHA =='Y'){	
					$("form").removeClass("subscribe-form-email");
					$("div").removeClass("btn-primary-subscribe-button");
				}
				}
				else if(result.error)
				{
					if(result.hasOwnProperty('setButton'))
					{
						this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
						this.setButton(true);
					}
					this.showWindowWithAnswer({status: 'error', message: result.message});
				}
			}, this)
		});
	};

	window.JCCatalogProductSubscribe.prototype.validateContactField = function(contactTypeData)
	{
		var inputFields = BX.findChildren(BX('bx-catalog-subscribe-form'),
			{'tag': 'input', 'attribute': {id: 'userContact'}}, true);
		if(!inputFields.length || typeof contactTypeData !== 'object')
		{
			BX.addClass(BX('bx-catalog-subscribe-form-notify'), 'alert alert-danger');
			BX('bx-catalog-subscribe-form-notify').innerHTML = BX.message('CPST_SUBSCRIBE_VALIDATE_UNKNOW_ERROR');
			return false;
		}

		var contactTypeId, contactValue, useContact, errors = [], useContactErrors = [];
		for(var k = 0; k < inputFields.length; k++)
		{
			contactTypeId = inputFields[k].getAttribute('data-id');
			contactValue = inputFields[k].value;
			useContact = BX('bx-contact-use-'+contactTypeId);
			if(useContact && useContact.value == 'N')
			{
				useContactErrors.push(true);
				continue;
			}
			if(!contactValue.length)
			{
				errors.push(BX.message('CPST_SUBSCRIBE_VALIDATE_ERROR_EMPTY_FIELD').replace(
					'#FIELD#', contactTypeData[contactTypeId].contactLable));
			}
		}

		if(inputFields.length == useContactErrors.length)
		{
			BX.addClass(BX('bx-catalog-subscribe-form-notify'), 'alert alert-danger');
			BX('bx-catalog-subscribe-form-notify').innerHTML = BX.message('CPST_SUBSCRIBE_VALIDATE_ERROR');
			return false;
		}

		if(errors.length)
		{
			BX.addClass(BX('bx-catalog-subscribe-form-notify'), 'alert alert-danger');
			for(var i = 0; i < errors.length; i++)
			{
				BX('bx-catalog-subscribe-form-notify').innerHTML = errors[i];
			}
			return false;
		}

		return true;
	};

	window.JCCatalogProductSubscribe.prototype.reloadCaptcha = function()
	{
		BX.ajax.get(this.ajaxUrl+'?reloadCaptcha=Y', '', function(captchaCode) {
			BX('captcha_sid').value = captchaCode;
			BX('captcha_img').src = '/bitrix/tools/captcha.php?captcha_sid='+captchaCode+'';
		});
	};

	window.JCCatalogProductSubscribe.prototype.createContentForPopup = function(responseData)
	{
		if(!responseData.hasOwnProperty('contactTypeData'))
		{
			return null;
		}

		var contactTypeData = responseData.contactTypeData, contactCount = Object.keys(contactTypeData).length,
			styleInputForm = '', manyContact = 'N', content = document.createDocumentFragment();

		if(contactCount > 1)
		{
			manyContact = 'Y';
			styleInputForm = {
				'display': 'none',
			};
			content.appendChild(BX.create('p', {
				text: BX.message('CPST_SUBSCRIBE_MANY_CONTACT_NOTIFY')
			}));
		}

		content.appendChild(BX.create('p', {
			props: {id: 'bx-catalog-subscribe-form-notify'}
		}));

		
		// content.appendChild(BX.create('div', {
			// props: {className: 'subscribe-form-flex'},
			// children: [
				// BX.create('div', {
					// props: {className: 'subscribe-form-flex-block_img'},
					// html: '<img src="'+this.ImageUrl+'">'
				// }),
				// BX.create('div', {
					// props: {className: 'subscribe-form-flex-block_inf'},
					// children: [
						// BX.create('div', {
							// props: {className: 'subscribe-form-flex-block_name'},
							// text: this.productName
						// }),
						// BX.create('div', {
							// props: {className: 'subscribe-form-flex-block_art'},
							// html: BX.message('CPST_SUBSCRIBE_ARTNUMBER')+this.artnumber+''
						// })
					// ]
				// }),
		// ]}));
	
		
		
		
		for(var k in contactTypeData)
		{
			if(contactCount > 1)
			{
				content.appendChild(BX.create('div', {
					props: {
						className: 'bx-catalog-subscribe-form-container'
					},
					children: [
						BX.create('div', {
							props: {
								className: 'checkbox'
							},
							children: [
								BX.create('lable', {
									props: {
										className: 'bx-filter-param-label'
									},
									attrs: {
										onclick: this.jsObject+'.selectContactType('+k+', event);'
									},
									children: [
										BX.create('input', {
											props: {
												type: 'hidden',
												id: 'bx-contact-use-'+k,
												name: 'contact['+k+'][use]',
												value: 'N'
											}
										}),
										BX.create('input', {
											props: {
												id: 'bx-contact-checkbox-'+k,
												type: 'checkbox'
											}
										}),
										BX.create('span', {
											props: {
												className: 'bx-filter-param-text'
											},
											text: contactTypeData[k].contactLable
										})
									]
								})
							]
						})
					]
				}));
			}
			content.appendChild(BX.create('div', {
				props: {
					id: 'bx-catalog-subscribe-form-container-'+k,
					className: 'form-group bmd-form-group',
				},
				style: styleInputForm,
				children: [
					BX.create('label', {
						props: {
							className: 'bmd-label-floating'
						},
						text: BX.message('CPST_SUBSCRIBE_LABLE_CONTACT_INPUT').replace(
							'#CONTACT#', contactTypeData[k].contactLable)
					}),
							BX.create('input', {
								props: {
									id: 'userContact',
									className: 'bmd-form-control',
									type: 'text',
									name: 'contact['+k+'][user]',
									required: '1'
								},
								attrs: {'data-id': k}
							})
						]
			}));

		}
		if(responseData.hasOwnProperty('captchaCode'))

		{
			
			
			content.appendChild(BX.create('div', {
				props: {
					className: 'd-block captcha-wrap mt-5'
				},
				children: [
/*
					BX.create('span', {props: {className: 'small text-extra'}, text: '*'}),
					BX.message('CPST_ENTER_WORD_PICTURE'),
*/
					BX.create('label', {
						props: {
							className: 'small text-extra',
							'for': 'test',
						},
						attrs: {
							
						},
						children: [
							BX.message('CPST_ENTER_WORD_PICTURE')+' ',
							BX.create('span', {props: {className: 'text-danger'}, text: '*'}),
						],
					}),
					
					BX.create('div', {
						props: {className: 'd-flex'},
						children: [
							BX.create('div', {
								props: {className: 'd-block flex-grow-1 pr-5'},
								children: [
									BX.create('div', {
										props: {className: 'bmd-form-group d-inline'},
										children: [
											BX.create('input', {
												props: {
													id: 'captcha_word',
													className: 'bmd-form-control',
													type: 'text',
													name: 'captcha_word'
												},
												attrs: {maxlength: '50'}
											})
										]
									}),
								]
							}),
							BX.create('div', {
								props: {className: 'd-block'},
								children: [
									BX.create('input', {
										props: {
											type: 'hidden',
											id: 'captcha_sid',
											name: 'captcha_sid',
											value: responseData.captchaCode
										}
									}),
									BX.create('img', {
										props: {
											id: 'captcha_img',
											className: 'mw-none',
											src: '/bitrix/tools/captcha.php?captcha_sid='+responseData.captchaCode+''
										},
										attrs: {
											alt: 'captcha',
											onclick: this.jsObject+'.reloadCaptcha();'
										}
									})
								]
							}),
						]
					})
				]
			}));

		}

		var form = BX.create('form', {
			props: {
				id: 'bx-catalog-subscribe-form',
				className: 'was-validated subscribe-form-email'
			},
			children: [
				BX.create('input', {
					props: {
						type: 'hidden',
						name: 'manyContact',
						value: manyContact
					}
				}),
				BX.create('input', {
					props: {
						type: 'hidden',
						name: 'sessid',
						value: BX.bitrix_sessid()
					}
				}),
				BX.create('input', {
					props: {
						type: 'hidden',
						name: 'itemId',
						value: this.elemButtonSubscribe.dataset.item
					}
				}),
				BX.create('input', {
					props: {
						type: 'hidden',
						name: 'landingId',
						value: this.landingId
					}
				}),
				BX.create('input', {
					props: {
						type: 'hidden',
						name: 'siteId',
						value: BX.message('SITE_ID')
					}
				}),
				BX.create('input', {
					props: {
						type: 'hidden',
						name: 'contactFormSubmit',
						value: 'Y'
					}
				})
			]
		});
		

		form.appendChild(content);

		return form;
	};

	window.JCCatalogProductSubscribe.prototype.selectContactType = function(contactTypeId, event)
	{
		var contactInput = BX('bx-catalog-subscribe-form-container-'+contactTypeId), visibility = '',
			checkboxInput = BX('bx-contact-checkbox-'+contactTypeId);
		if(!contactInput)
		{
			return false;
		}

		if(checkboxInput != event.target)
		{
			if(checkboxInput.checked)
			{
				checkboxInput.checked = false;
			}
			else
			{
				checkboxInput.checked = true;
			}
		}

		if (contactInput.currentStyle)
		{
			visibility = contactInput.currentStyle.display;
		}
		else if (window.getComputedStyle)
		{
			var computedStyle = window.getComputedStyle(contactInput, null);
			visibility = computedStyle.getPropertyValue('display');
		}

		if(visibility === 'none')
		{
			BX('bx-contact-use-'+contactTypeId).value = 'Y';
			BX.style(contactInput, 'display', '');
		}
		else
		{
			BX('bx-contact-use-'+contactTypeId).value = 'N';
			BX.style(contactInput, 'display', 'none');
		}
	};

	window.JCCatalogProductSubscribe.prototype.createSuccessPopup = function(result)
	{
/*
		this.initPopupWindow();
		this.elemPopupWin.setTitleBar(BX.message('CPST_SUBSCRIBE_POPUP_TITLE'));
*/
		var content = BX.create('div', {
			props:{
				className: ''
			},
			children: [
				BX.create('div', {
					props:{
						className: 'mt-6 d-flex align-items-center'
					},
					children: [
						BX.create('div', {
							props:{
								className: 'd-block text-primary mr-4'
							},
							html: '<svg class="icon-svg" style="font-size: 2.5rem;"><use xlink:href="#svg-select-circle"></use></svg>',
						}),
						BX.create('div', {
							props:{
								className: 'd-block'
							},
							text: result.message
						}),
					]
				})
			]
		});
/*
		this.elemPopupWin.setContent(content);
		this.elemPopupWin.setButtons([
			new subscribeButton({
				text : BX.message('CPST_SUBSCRIBE_BUTTON_CLOSE'),
				className : 'btn btn-primary',
				events : {
					click : BX.delegate(function() {
						this.elemPopupWin.destroy();
					}, this)
				}
			})
		]);
		this.elemPopupWin.show();
*/

		this.showPopup(
			content,
			{
				title: BX.message('CPST_SUBSCRIBE_POPUP_TITLE')
			}
		);
	};
/*
	window.JCCatalogProductSubscribe.prototype.initPopupWindow = function()
	{
		this.elemPopupWin = BX.PopupWindowManager.create('CatalogSubscribe_'+this.buttonId, null, {
			autoHide: false,
			offsetLeft: 0,
			offsetTop: 0,
			overlay : true,
			closeByEsc: true,
			titleBar: true,
			closeIcon: true,
			contentColor: 'white'
		});
	};
*/
	window.JCCatalogProductSubscribe.prototype.setButton = function(statusSubscription)
	{
		this.alreadySubscribed = Boolean(statusSubscription);
		if(this.alreadySubscribed)
		{
			this.elemButtonSubscribe.className = this.buttonClass + ' ' + this.defaultButtonClass;// + ' disabled';
			this.elemButtonSubscribe.innerHTML = '<span>' + this.subscribedBtnName + '</span>';
			BX.unbind(this.elemButtonSubscribe, 'click', this._elemButtonSubscribeClickHandler);
		}
		else
		{
			this.elemButtonSubscribe.className = this.buttonClass + ' ' + this.defaultButtonClass;
			this.elemButtonSubscribe.innerHTML = '<span>' + this.subscribeBtnName + '</span>';
			BX.bind(this.elemButtonSubscribe, 'click', this._elemButtonSubscribeClickHandler);
		}
	};

	window.JCCatalogProductSubscribe.prototype.setIdAlreadySubscribed = function(listIdAlreadySubscribed)
	{
		if (BX.type.isPlainObject(listIdAlreadySubscribed))
		{
			this.listOldItemId = listIdAlreadySubscribed;
		}
	};

	window.JCCatalogProductSubscribe.prototype.showWindowWithAnswer = function(answer)
	{
		answer = answer || {};
		if (!answer.message) {
			if (answer.status == 'success') {
				answer.message = BX.message('CPST_STATUS_SUCCESS');
			} else {
				answer.message = BX.message('CPST_STATUS_ERROR');
			}
		}
		var messageBox = BX.create('div', {
			props:{
				className: ''
			},
			children: [
				BX.create('div', {
					props:{
						className: 'mt-6 d-flex align-items-center'

					},
					children: [
						BX.create('div', {
							props:{
								className: 'd-block text-primary mr-4'
							},
							html: '<svg class="icon-svg" style="font-size: 2.5rem;"><use xlink:href="#svg-select-circle"></use></svg>',
						}),
						BX.create('div', {
							props:{
								className: 'd-block'
							},
							text: answer.message
						}),
					]
				})
			]
		});
/*
		var currentPopup = BX.PopupWindowManager.getCurrentPopup();
		if(currentPopup) {
			currentPopup.destroy();
		}
		var idTimeout = setTimeout(function () {
			var w = BX.PopupWindowManager.getCurrentPopup();
			if (!w || w.uniquePopupId != 'bx-catalog-subscribe-status-action') {
				return;
			}
			w.close();
			w.destroy();
		}, 3500);
		var popupConfirm = BX.PopupWindowManager.create('bx-catalog-subscribe-status-action', null, {
			content: messageBox,
			onPopupClose: function () {
				this.destroy();
				clearTimeout(idTimeout);
			},
			autoHide: true,
			zIndex: 2000,
			className: 'bx-catalog-subscribe-alert-popup'
		});
		popupConfirm.show();
		BX('bx-catalog-subscribe-status-action').onmouseover = function (e) {
			clearTimeout(idTimeout);
		};
		BX('bx-catalog-subscribe-status-action').onmouseout = function (e) {
			idTimeout = setTimeout(function () {
				var w = BX.PopupWindowManager.getCurrentPopup();
				if (!w || w.uniquePopupId != 'bx-catalog-subscribe-status-action') {
					return;
				}
				w.close();
				w.destroy();
			}, 3500);
		};
*/
		this.showPopup(
			messageBox,
			{
				title: BX.message('CPST_SUBSCRIBE_POPUP_TITLE')
			}
		);
	};

	window.JCCatalogProductSubscribe.prototype.showPopup = function(message, params)
	{
		var instance = $.fancybox.getInstance();
		if (instance)
		{
			// instance.current.opts.$orig = $this;

			instance.trigger("beforeShow", false);
			instance.trigger("beforeLoad", instance.current);

			instance.setContent(
				instance.current,
				message
			);
		}
		else
		{
			RS.Utils.popup(message, 'window', params);
		}
	}

})(window);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:103:"/bitrix/templates/megamart_default/components/redsign/grupper.list/catalog/script.min.js?16155689091075";s:6:"source";s:84:"/bitrix/templates/megamart_default/components/redsign/grupper.list/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t){"use strict";t.JCGrupperList||(t.JCGrupperList=function(t){this.params={},this.errorCode=0,this.visual={},this.scrollspy=null,this.scrollSpyOptions={},"object"==typeof t?(this.params=t,this.initConfig()):this.errorCode=-1,0===this.errorCode&&BX.ready(BX.delegate(this.init,this))},JCGrupperList.ScrollSpyDefault={items:3},t.JCGrupperList.prototype={initConfig:function(){this.params.VISUAL&&"object"==typeof this.params.VISUAL&&this.params.VISUAL.NAV?(this.visual=this.params.VISUAL,this.scrollSpyOptions.target="#"+this.params.VISUAL.NAV,1==RS.Options.fixingCompactHeader&&(this.scrollSpyOptions.offset=71)):this.errorCode=-1},init:function(){this.obNavigation=BX(this.visual.NAV),this.obNavigation||(this.errorCode=-1),0===this.errorCode&&this.obNavigation&&(this.scrollspy=new $.fn.scrollspy.Constructor(document.body,this.scrollSpyOptions),$(t).on("scroll.bs.scrollspy",BX.proxy(function(t,i){var s=$(this.scrollSpyOptions.target);s.find(".nav-link.active, .list-group-item.active").length>0?s.addClass("active"):s.removeClass("active")},this)))}})}(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:103:"/bitrix/templates/megamart_default/components/bitrix/catalog.comments/tabs/script.min.js?16155689094403";s:6:"source";s:84:"/bitrix/templates/megamart_default/components/bitrix/catalog.comments/tabs/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t){t.JCCatalogSocnetsComments||(t.JCCatalogSocnetsComments=function(t){var s;if(this.errorCode=0,this.params={},this.serviceList={blog:!1,facebook:!1,vk:!1},this.settings={blog:{ajaxUrl:"",ajaxParams:{},contID:"bx-cat-soc-comments-blg"},facebook:{contID:"bx-cat-soc-comments-fb",contWidthID:"",parentContID:"soc_comments",facebookJSDK:"facebook-jssdk",facebookPath:""},vk:{}},this.services={blog:{obBlogCont:null},facebook:{obFBCont:null,obFBContWidth:null,obFBParentCont:null,obFBjSDK:null,currentWidth:0}},this.activeTabId="",this.currentTab=-1,this.tabsContId="",this.tabList=[],this.obTabList=[],"object"==typeof t){if(this.params=t,this.params.serviceList&&"object"==typeof this.params.serviceList)for(s in this.serviceList)this.serviceList.hasOwnProperty(s)&&this.params.serviceList[s]&&(this.serviceList[s]=!0);this.serviceList.blog&&this.initParams("blog"),this.serviceList.facebook&&this.initParams("facebook"),"object"==typeof this.params.tabs&&(this.activeTabId=this.params.tabs.activeTabId,this.tabsContId=this.params.tabs.tabsContId,this.tabList=this.params.tabs.tabList)}else this.errorCode=-1;0===this.errorCode&&BX.ready(BX.proxy(this.Init,this))},t.JCCatalogSocnetsComments.prototype.initParams=function(t){var s;if(this.params.settings&&"object"==typeof this.params.settings&&"object"==typeof this.params.settings[t])for(s in this.settings[t])this.settings[t].hasOwnProperty(s)&&this.params.settings[t][s]&&(this.settings[t][s]=this.params.settings[t][s])},t.JCCatalogSocnetsComments.prototype.Init=function(){this.tabList&&BX.type.isArray(this.tabList)&&0!==this.tabList.length?(this.serviceList.blog&&(this.services.blog.obBlogCont=BX(this.settings.blog.contID),this.services.blog.obBlogCont||(this.serviceList.blog=!1,this.errorCode=-16)),this.serviceList.facebook&&(this.services.facebook.obFBCont=BX(this.settings.facebook.contID),this.services.facebook.obFBCont?this.services.facebook.obFBContWidth=this.services.facebook.obFBCont.firstChild:(this.serviceList.facebook=!1,this.errorCode=-32),this.services.facebook.obFBParentCont=BX(this.settings.facebook.parentContID)),0===this.errorCode&&(this.serviceList.blog&&this.loadBlog(),this.serviceList.facebook&&this.loadFB()),this.params={}):this.errorCode=-1},t.JCCatalogSocnetsComments.prototype.loadBlog=function(){var t;0===this.errorCode&&this.serviceList.blog&&0!==this.settings.blog.ajaxUrl.length&&((t=this.settings.blog.ajaxParams).sessid=BX.bitrix_sessid(),BX.ajax({timeout:30,method:"POST",dataType:"html",url:this.settings.blog.ajaxUrl,data:t,onsuccess:BX.proxy(this.loadBlogResult,this)}))},t.JCCatalogSocnetsComments.prototype.loadBlogResult=function(t){BX.type.isNotEmptyString(t)&&BX.adjust(this.services.blog.obBlogCont,{html:t})},t.JCCatalogSocnetsComments.prototype.loadFB=function(){var t,s,o,e,i,a,r;this.services.facebook.obFBParentCont&&this.services.facebook.obFBContWidth&&(t=parseInt(this.services.facebook.obFBParentCont.offsetWidth,10),!isNaN(t)&&t>20&&(BX.adjust(this.services.facebook.obFBContWidth,{attrs:{"data-width":t-20}}),this.services.facebook.currentWidth=t),this.services.facebook.obFBjSDK||(this.services.facebook.obFBjSDK=!0,BX.defer(BX.proxy((s=document,o="script",e=this.settings.facebook.facebookJSDK,i=this.settings.facebook.facebookPath,r=s.getElementsByTagName(o)[0],void(s.getElementById(e)||((a=s.createElement(o)).id=e,a.src=i,r.parentNode.insertBefore(a,r)))),this))))},t.JCCatalogSocnetsComments.prototype.getFBParentWidth=function(){var t=0;return this.services.facebook.obFBParentCont&&(t=parseInt(this.services.facebook.obFBParentCont.offsetWidth,10),isNaN(t)&&(t=0)),t},t.JCCatalogSocnetsComments.prototype.setFBWidth=function(t){var s,o=null;this.serviceList.facebook&&this.services.facebook.currentWidth!==t&&t>20&&this.services.facebook.obFBContWidth&&this.services.facebook.obFBContWidth.firstChild&&this.services.facebook.obFBContWidth.firstChild.fitrstChild&&(o=this.services.facebook.obFBContWidth.firstChild.fitrstChild)&&(s=o.getAttribute("src").replace(/width=(\d+)/gi,"width="+t),BX.adjust(this.services.facebook.obFBContWidth,{attrs:{"data-width":t-20}}),this.services.facebook.currentWidth=t,BX.style(this.services.facebook.obFBContWidth.firstChild,"width",t+"px"),BX.adjust(o,{attrs:{src:s},style:{width:t+"px"}}))},t.JCCatalogSocnetsComments.prototype.onResize=function(){this.serviceList.facebook&&this.setFBWidth(this.getFBParentWidth())})}(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:110:"/bitrix/templates/megamart_default/components/bitrix/catalog.store.amount/catalog/script.min.js?16155689092171";s:6:"source";s:91:"/bitrix/templates/megamart_default/components/bitrix/catalog.store.amount/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
window.JCCatalogStoreSKU=function(t){var s;if(t){for(s in this.config={id:t.ID,mainId:t.ID+"_main",noneId:t.ID+"_none",showEmptyStore:t.SHOW_EMPTY_STORE,useMinAmount:t.USE_MIN_AMOUNT,minAmount:t.MIN_AMOUNT},this.messages=t.MESSAGES,this.classes=t.CLASSES,this.sku=t.SKU,this.stores=t.STORES,this.obStores={},this.stores)this.obStores[this.stores[s]]=BX(this.config.id+"_"+this.stores[s]);BX.addCustomEvent(window,"onCatalogStoreProductChange",BX.proxy(this.offerOnChange,this))}},window.JCCatalogStoreSKU.prototype.offerOnChange=function(t){if(this.sku[t]){var s,i,o,n=this.sku[t],e=!1;for(s in this.obStores)if(BX.adjust(this.obStores[s],{props:{className:"product-cat-limit"}}),i=this.config.useMinAmount?this.getStringCount(0,this.messages):"",BX.adjust(this.obStores[s].querySelector('[data-entity="quantity-limit-value"]'),{html:i}),n[s]?(BX.addClass(this.obStores[s],this.getStringCount(n[s],this.classes)),i=this.config.useMinAmount?this.getStringCount(n[s],this.messages):n[s],BX.adjust(this.obStores[s].querySelector('[data-entity="quantity-limit-value"]'),{html:i})):BX.addClass(this.obStores[s],this.getStringCount(0,this.classes)),o=BX.findParent(this.obStores[s],{tagName:"li"}),this.config.showEmptyStore||n[s]>0){BX.adjust(o,{props:{className:"shop-list-item "+this.getStringCount(n[s],this.classes)}});var a=o.querySelector('[data-entity="stock-amount"]');n[s]>0?BX.adjust(a,{props:{className:"badge badge-primary"},html:n[s]}):BX.adjust(a,{props:{className:"badge badge-secondary"},html:""}),BX.show(o),e=!0}else BX.hide(o);BX(this.config.mainId)&&!this.config.showEmptyStore&&(e?this.showBlock():this.hideBlock())}},window.JCCatalogStoreSKU.prototype.getStringCount=function(t,s){return 0==t?s.ABSENT:t>=this.config.minAmount?s.LOT_OF_GOOD:s.NOT_MUCH_GOOD},window.JCCatalogStoreSKU.prototype.hideBlock=function(){BX(this.config.mainId)&&(BX(this.config.mainId).style.display="none"),BX(this.config.noneId)&&(BX(this.config.noneId).style.display="block")},window.JCCatalogStoreSKU.prototype.showBlock=function(){BX(this.config.mainId)&&(BX(this.config.mainId).style.display="block"),BX(this.config.noneId)&&(BX(this.config.noneId).style.display="none")};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:108:"/bitrix/templates/megamart_default/components/bitrix/sale.products.gift/catalog/script.min.js?16155689093151";s:6:"source";s:89:"/bitrix/templates/megamart_default/components/bitrix/sale.products.gift/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(){"use strict";window.JCSaleProductsGiftComponent||(window.JCSaleProductsGiftComponent=function(t){this.formPosting=!1,this.siteId=t.siteId||"",this.template=t.template||"",this.componentPath=t.componentPath||"",this.parameters=t.parameters||"",this.container=document.querySelector('[data-entity="'+t.container+'"]'),this.currentProductId=t.currentProductId,t.initiallyShowHeader&&BX.ready(BX.delegate(this.showHeader,this)),t.deferredLoad&&BX.ready(BX.delegate(this.deferredLoad,this)),BX.addCustomEvent("onCatalogStoreProductChange",BX.delegate(function(t){t=parseInt(t),this.currentProductId!==t&&(this.currentProductId=t,this.offerChangedEvent())},this))},window.JCSaleProductsGiftComponent.prototype={offerChangedEvent:function(){this.sendRequest({action:"deferredLoad",offerId:this.currentProductId})},deferredLoad:function(){this.sendRequest({action:"deferredLoad"})},sendRequest:function(t){var e={siteId:this.siteId,template:this.template,parameters:this.parameters};BX.ajax({url:this.componentPath+"/ajax.php"+(-1!==document.location.href.indexOf("clear_cache=Y")?"?clear_cache=Y":""),method:"POST",dataType:"json",timeout:60,data:BX.merge(e,t),onsuccess:BX.delegate(function(e){if(!e||!e.JS)return this.hideHeader(),void BX.cleanNode(this.container);BX.ajax.processScripts(BX.processHTML(e.JS).SCRIPT,!1,BX.delegate(function(){this.showAction(e,t)},this))},this)})},showAction:function(t,e){if(e)switch(e.action){case"deferredLoad":this.processDeferredLoadAction(t)}},processDeferredLoadAction:function(t){t&&this.processItems(t.items)},processItems:function(t){if(t){var e,i,a=BX.processHTML(t,!1),n=BX.create("DIV");for(i in n.innerHTML=a.HTML,this.container.querySelectorAll('[data-entity="items-row"]').length?(BX.cleanNode(this.container),this.showHeader(!1)):this.showHeader(!0),e=n.querySelectorAll('[data-entity="items-row"]'))e.hasOwnProperty(i)&&(e[i].style.opacity=0,this.container.appendChild(e[i]));new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){for(var i in e)e.hasOwnProperty(i)&&(e[i].style.opacity=t.opacity/100)},complete:function(){for(var t in e)e.hasOwnProperty(t)&&e[t].removeAttribute("style")}}).animate(),BX.ajax.processScripts(a.SCRIPT)}},showHeader:function(t){var e,i=BX.findParent(this.container,{attr:{"data-entity":"parent-container"}});if(i&&BX.type.isDomNode(i)){(e=i.querySelector('[data-entity="header"'))&&"false"===e.getAttribute("data-showed")&&(e.style.display="",t?(this.animation=new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){e.style.opacity=t.opacity/100},complete:function(){e.removeAttribute("style"),e.setAttribute("data-showed","true")}}),this.animation.animate()):e.style.opacity=100);var a=BX(i.getAttribute("data-target").substr(1));if(void 0!==a){var n=BX.data(a,"pageNav");void 0!==n&&n.addItem({id:i.getAttribute("id"),title:i.getAttribute("data-title")})}}},hideHeader:function(){BX.findParent(this.container,{attr:{"data-entity":"parent-container"}}).style.display="none"}})}();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:103:"/bitrix/templates/megamart_default/components/bitrix/catalog.item/catalog/script.min.js?161556890942993";s:6:"source";s:83:"/bitrix/templates/megamart_default/components/bitrix/catalog.item/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t){"use strict";if(!t.JCCatalogItem){var i=function(t){i.superclass.constructor.apply(this,arguments),this.buttonNode=BX.create("button",{props:{className:"btn btn-default btn-buy btn-sm",id:this.id},style:"object"==typeof t.style?t.style:{},text:t.text,events:this.contextEvents}),BX.browser.IsIE()&&this.buttonNode.setAttribute("hideFocus","hidefocus")};BX.extend(i,BX.PopupWindowButton),t.JCCatalogItem=function(t){if(this.productType=0,this.showQuantity=!0,this.showAbsent=!0,this.secondPict=!1,this.showOldPrice=!1,this.showMaxQuantity="N",this.relativeQuantityFactor=5,this.showPercent=!1,this.showSkuProps=!1,this.basketAction="ADD",this.showClosePopup=!1,this.useCompare=!1,this.showSubscription=!1,this.visual={ID:"",PICT_ID:"",SECOND_PICT_ID:"",PICT_SLIDER_ID:"",QUANTITY_ID:"",QUANTITY_UP_ID:"",QUANTITY_DOWN_ID:"",PRICE_ID:"",PRICE_OLD_ID:"",DSC_PERC:"",SECOND_DSC_PERC:"",DISPLAY_PROP_DIV:"",BASKET_PROP_DIV:"",SUBSCRIBE_ID:""},this.product={checkQuantity:!1,maxQuantity:0,stepQuantity:1,isDblQuantity:!1,canBuy:!0,name:"",pict:{},id:0,addUrl:"",buyUrl:""},this.basketMode="",this.basketData={useProps:!1,emptyProps:!1,quantity:"quantity",props:"prop",basketUrl:"",sku_props:"",sku_props_var:"basket_props",add_url:"",buy_url:""},this.compareData={compareUrl:"",compareDeleteUrl:"",comparePath:""},this.defaultPict={pict:null,secondPict:null},this.defaultSliderOptions={interval:3e3,wrap:!0},this.slider={options:{},items:[],active:null,sliding:null,paused:null,interval:null,progress:null},this.touch=null,this.quantityDelay=null,this.quantityTimer=null,this.checkQuantity=!1,this.maxQuantity=0,this.minQuantity=0,this.stepQuantity=1,this.isDblQuantity=!1,this.canBuy=!0,this.precision=6,this.precisionFactor=Math.pow(10,this.precision),this.bigData=!1,this.fullDisplayMode=!1,this.viewMode="",this.templateTheme="",this.currentPriceMode="",this.currentPrices=[],this.currentPriceSelected=0,this.currentQuantityRanges=[],this.currentQuantityRangeSelected=0,this.offers=[],this.offerNum=0,this.treeProps=[],this.selectedValues={},this.obProduct=null,this.blockNodes={},this.obQuantity=null,this.obQuantityUp=null,this.obQuantityDown=null,this.obQuantityLimit={},this.obPict=null,this.obSecondPict=null,this.obPictSlider=null,this.obPictSliderIndicator=null,this.obPrice=null,this.obTree=null,this.obBuyBtn=null,this.obBasketActions=null,this.obNotAvail=null,this.obSubscribe=null,this.obDscPerc=null,this.obSecondDscPerc=null,this.obSkuProps=null,this.obMeasure=null,this.obCompare=null,this.obPopupWin=null,this.basketUrl="",this.basketParams={},this.isTouchDevice=BX.hasClass(document.documentElement,"bx-touch"),this.hoverTimer=null,this.hoverStateChangeForbidden=!1,this.mouseX=null,this.mouseY=null,this.useEnhancedEcommerce=!1,this.dataLayerName="dataLayer",this.brandProperty=!1,this.useFavorite=!1,this.obFavorite=null,this.obProductRequestBtn="",this.errorCode=0,"object"==typeof t){switch(t.PRODUCT_TYPE&&(this.productType=parseInt(t.PRODUCT_TYPE,10)),this.showQuantity=t.SHOW_QUANTITY,this.showAbsent=t.SHOW_ABSENT,this.secondPict=t.SECOND_PICT,this.showOldPrice=t.SHOW_OLD_PRICE,this.showMaxQuantity=t.SHOW_MAX_QUANTITY,this.relativeQuantityFactor=parseInt(t.RELATIVE_QUANTITY_FACTOR),this.showPercent=t.SHOW_DISCOUNT_PERCENT,this.showSkuProps=t.SHOW_SKU_PROPS,this.showSubscription=t.USE_SUBSCRIBE,this.productPreview=t.PRODUCT_PREVIEW,t.ADD_TO_BASKET_ACTION&&(this.basketAction=t.ADD_TO_BASKET_ACTION),this.showClosePopup=t.SHOW_CLOSE_POPUP,this.useCompare=t.DISPLAY_COMPARE,this.fullDisplayMode="Y"===t.PRODUCT_DISPLAY_MODE,this.bigData=t.BIG_DATA,this.viewMode=t.VIEW_MODE||"",this.templateTheme=t.TEMPLATE_THEME||"",this.useEnhancedEcommerce="Y"===t.USE_ENHANCED_ECOMMERCE,this.dataLayerName=t.DATA_LAYER_NAME,this.brandProperty=t.BRAND_PROPERTY,this.useFavorite=t.USE_FAVORITE&&void 0!==RS.Favorite,this.sliderSlideCount=parseInt(t.SLIDER_SLIDE_COUNT,10),this.visual=t.VISUAL,this.mess=t.MESS,t.LINK_BTN_REQUEST&&(this.productRequestUrl=t.LINK_BTN_REQUEST),this.productType){case 0:case 1:case 2:case 4:t.PRODUCT&&"object"==typeof t.PRODUCT?(this.currentPriceMode=t.PRODUCT.ITEM_PRICE_MODE,this.currentPrices=t.PRODUCT.ITEM_PRICES,this.currentPriceSelected=t.PRODUCT.ITEM_PRICE_SELECTED,this.currentQuantityRanges=t.PRODUCT.ITEM_QUANTITY_RANGES,this.currentQuantityRangeSelected=t.PRODUCT.ITEM_QUANTITY_RANGE_SELECTED,this.showQuantity&&(this.product.checkQuantity=t.PRODUCT.CHECK_QUANTITY,this.product.isDblQuantity=t.PRODUCT.QUANTITY_FLOAT,this.product.checkQuantity&&(this.product.maxQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.MAX_QUANTITY):parseInt(t.PRODUCT.MAX_QUANTITY,10)),this.product.stepQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.STEP_QUANTITY):parseInt(t.PRODUCT.STEP_QUANTITY,10),this.checkQuantity=this.product.checkQuantity,this.isDblQuantity=this.product.isDblQuantity,this.stepQuantity=this.product.stepQuantity,this.maxQuantity=this.product.maxQuantity,this.minQuantity="Q"===this.currentPriceMode?parseFloat(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY):this.stepQuantity,this.isDblQuantity&&(this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor)),this.product.canBuy=t.PRODUCT.CAN_BUY,t.PRODUCT.MORE_PHOTO_COUNT&&(this.product.morePhotoCount=t.PRODUCT.MORE_PHOTO_COUNT,this.product.morePhoto=t.PRODUCT.MORE_PHOTO),t.PRODUCT.RCM_ID&&(this.product.rcmId=t.PRODUCT.RCM_ID),this.canBuy=this.product.canBuy,this.product.name=t.PRODUCT.NAME,this.product.pict=t.PRODUCT.PICT,this.product.id=t.PRODUCT.ID,this.product.DETAIL_PAGE_URL=t.PRODUCT.DETAIL_PAGE_URL,t.PRODUCT.ADD_URL&&(this.product.addUrl=t.PRODUCT.ADD_URL),t.PRODUCT.BUY_URL&&(this.product.buyUrl=t.PRODUCT.BUY_URL),t.BASKET&&"object"==typeof t.BASKET&&(this.basketData.useProps=t.BASKET.ADD_PROPS,this.basketData.emptyProps=t.BASKET.EMPTY_PROPS)):this.errorCode=-1;break;case 3:t.PRODUCT&&"object"==typeof t.PRODUCT&&(this.product.name=t.PRODUCT.NAME,this.product.id=t.PRODUCT.ID,this.product.DETAIL_PAGE_URL=t.PRODUCT.DETAIL_PAGE_URL,this.product.morePhotoCount=t.PRODUCT.MORE_PHOTO_COUNT,this.product.morePhoto=t.PRODUCT.MORE_PHOTO,t.PRODUCT.RCM_ID&&(this.product.rcmId=t.PRODUCT.RCM_ID)),t.OFFERS&&BX.type.isArray(t.OFFERS)&&(this.offers=t.OFFERS,this.offerNum=0,t.OFFER_SELECTED&&(this.offerNum=parseInt(t.OFFER_SELECTED,10)),isNaN(this.offerNum)&&(this.offerNum=0),t.TREE_PROPS&&(this.treeProps=t.TREE_PROPS),t.DEFAULT_PICTURE&&(this.defaultPict.pict=t.DEFAULT_PICTURE.PICTURE,this.defaultPict.secondPict=t.DEFAULT_PICTURE.PICTURE_SECOND));break;default:this.errorCode=-1}t.BASKET&&"object"==typeof t.BASKET&&(t.BASKET.QUANTITY&&(this.basketData.quantity=t.BASKET.QUANTITY),t.BASKET.PROPS&&(this.basketData.props=t.BASKET.PROPS),t.BASKET.BASKET_URL&&(this.basketData.basketUrl=t.BASKET.BASKET_URL),3===this.productType&&t.BASKET.SKU_PROPS&&(this.basketData.sku_props=t.BASKET.SKU_PROPS),t.BASKET.ADD_URL_TEMPLATE&&(this.basketData.add_url=t.BASKET.ADD_URL_TEMPLATE),t.BASKET.BUY_URL_TEMPLATE&&(this.basketData.buy_url=t.BASKET.BUY_URL_TEMPLATE),""===this.basketData.add_url&&""===this.basketData.buy_url&&(this.errorCode=-1024)),this.useCompare&&(t.COMPARE&&"object"==typeof t.COMPARE?(t.COMPARE.COMPARE_PATH&&(this.compareData.comparePath=t.COMPARE.COMPARE_PATH),t.COMPARE.COMPARE_URL_TEMPLATE?this.compareData.compareUrl=t.COMPARE.COMPARE_URL_TEMPLATE:this.useCompare=!1,t.COMPARE.COMPARE_DELETE_URL_TEMPLATE?this.compareData.compareDeleteUrl=t.COMPARE.COMPARE_DELETE_URL_TEMPLATE:this.useCompare=!1):this.useCompare=!1)}0===this.errorCode&&BX.ready(BX.delegate(this.init,this))},t.JCCatalogItem.prototype={init:function(){var t=0,i=null;if(this.obProduct=BX(this.visual.ID),this.obProduct||(this.errorCode=-1),this.obPict=BX(this.visual.PICT_ID),this.obPict||(this.errorCode=-2),this.secondPict&&this.visual.SECOND_PICT_ID&&(this.obSecondPict=BX(this.visual.SECOND_PICT_ID)),this.obPictSlider=BX(this.visual.PICT_SLIDER_ID),this.obPictSliderIndicator=BX(this.visual.PICT_SLIDER_ID+"_indicator"),this.obPrice=BX(this.visual.PRICE_ID),this.obPriceOld=BX(this.visual.PRICE_OLD_ID),this.obPriceTotal=BX(this.visual.PRICE_TOTAL_ID),this.obPriceEconomy=BX(this.visual.PRICE_ECONOMY_ID),this.obPrice||(this.errorCode=-16),this.showQuantity&&this.visual.QUANTITY_ID&&(this.obQuantity=BX(this.visual.QUANTITY_ID),this.blockNodes.quantity=this.obProduct.querySelector('[data-entity="quantity-block"]'),this.isTouchDevice||(BX.bind(this.obQuantity,"focus",BX.proxy(this.onFocus,this)),BX.bind(this.obQuantity,"blur",BX.proxy(this.onBlur,this))),this.visual.QUANTITY_UP_ID&&(this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)),this.visual.QUANTITY_DOWN_ID&&(this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID))),this.visual.QUANTITY_LIMIT&&"N"!==this.showMaxQuantity&&(this.obQuantityLimit.all=BX(this.visual.QUANTITY_LIMIT),this.obQuantityLimit.all&&(this.obQuantityLimit.value=this.obQuantityLimit.all.querySelector('[data-entity="quantity-limit-value"]'),this.obQuantityLimit.value||(this.obQuantityLimit.all=null))),3===this.productType&&this.fullDisplayMode&&(this.visual.TREE_ID&&(this.obTree=BX(this.visual.TREE_ID),this.obTree||(this.errorCode=-256)),this.visual.QUANTITY_MEASURE&&(this.obMeasure=BX(this.visual.QUANTITY_MEASURE)),this.visual.PRODUCT_DEAL_ID&&(this.obProductDeal=BX(this.visual.PRODUCT_DEAL_ID))),this.obBasketActions=BX(this.visual.BASKET_ACTIONS_ID),this.obBasketActions&&this.visual.BUY_ID&&(this.obBuyBtn=BX(this.visual.BUY_ID)),this.obNotAvail=BX(this.visual.NOT_AVAILABLE_MESS),this.showSubscription&&(this.obSubscribe=BX(this.visual.SUBSCRIBE_ID)),this.showPercent&&(this.visual.DSC_PERC&&(this.obDscPerc=BX(this.visual.DSC_PERC)),this.secondPict&&this.visual.SECOND_DSC_PERC&&(this.obSecondDscPerc=BX(this.visual.SECOND_DSC_PERC))),this.showSkuProps&&this.visual.DISPLAY_PROP_DIV&&(this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV)),this.visual.ACTION_REQUEST_LINK&&(this.obProductRequestBtn=BX(this.visual.ACTION_REQUEST_LINK)),this.isTouchDevice||(BX.bind(this.obProduct,"mouseenter",BX.proxy(this.hoverOn,this)),BX.bind(this.obProduct,"mouseleave",BX.proxy(this.hoverOff,this))),0===this.errorCode){if(this.isTouchDevice&&(BX.bind(this.obPictSlider,"touchstart",BX.proxy(this.touchStartEvent,this)),BX.bind(this.obPictSlider,"touchend",BX.proxy(this.touchEndEvent,this)),BX.bind(this.obPictSlider,"touchcancel",BX.proxy(this.touchEndEvent,this))),this.bigData){var s=BX.findChildren(this.obProduct,{tag:"a"},!0);if(s)for(t in s)s.hasOwnProperty(t)&&s[t].getAttribute("href")==this.product.DETAIL_PAGE_URL&&BX.bind(s[t],"click",BX.proxy(this.rememberProductRecommendation,this))}if(this.showQuantity){var e=this.isTouchDevice?"touchstart":"mousedown",a=this.isTouchDevice?"touchend":"mouseup";this.obQuantityUp&&(BX.bind(this.obQuantityUp,e,BX.proxy(this.startQuantityInterval,this)),BX.bind(this.obQuantityUp,a,BX.proxy(this.clearQuantityInterval,this)),BX.bind(this.obQuantityUp,"mouseout",BX.proxy(this.clearQuantityInterval,this)),BX.bind(this.obQuantityUp,"click",BX.delegate(this.quantityUp,this))),this.obQuantityDown&&(BX.bind(this.obQuantityDown,e,BX.proxy(this.startQuantityInterval,this)),BX.bind(this.obQuantityDown,a,BX.proxy(this.clearQuantityInterval,this)),BX.bind(this.obQuantityDown,"mouseout",BX.proxy(this.clearQuantityInterval,this)),BX.bind(this.obQuantityDown,"click",BX.delegate(this.quantityDown,this))),this.obQuantity&&BX.bind(this.obQuantity,"change",BX.delegate(this.quantityChange,this))}switch(this.productType){case 0:case 1:case 2:case 4:parseInt(this.product.morePhotoCount)>1&&this.obPictSlider&&this.initializeSlider(),this.checkQuantityControls();break;case 3:if(this.offers.length>0){if((i=BX.findChildren(this.obTree,{tagName:"li"},!0))&&i.length)for(t=0;t<i.length;t++)BX.bind(i[t],"click",BX.delegate(this.selectOfferProp,this));this.setCurrent()}else parseInt(this.product.morePhotoCount)>1&&this.obPictSlider&&this.initializeSlider()}this.obBuyBtn&&("ADD"===this.basketAction?BX.bind(this.obBuyBtn,"click",BX.proxy(this.add2Basket,this)):BX.bind(this.obBuyBtn,"click",BX.proxy(this.buyBasket,this))),this.obBasketActions&&(BX.addCustomEvent("add2basket.rs_lightbasket",function(){this.setCartStatus()}.bind(this)),BX.addCustomEvent("clear.rs_lightbasket",function(){this.setCartStatus()}.bind(this)),BX.addCustomEvent("delete.rs_lightbasket",function(){this.setCartStatus()}.bind(this)),BX.addCustomEvent("OnBasketChange",function(){this.setCartStatus()}.bind(this))),this.useCompare&&(this.obCompare=BX(this.visual.COMPARE_LINK_ID),this.obCompare&&BX.bind(this.obCompare,"click",BX.proxy(this.compare,this)),BX.addCustomEvent("onCatalogDeleteCompare",BX.proxy(this.checkDeletedCompare,this)),BX.addCustomEvent("onCompareChange",BX.proxy(this.checkCompare,this))),this.useFavorite&&(this.obFavorite=BX(this.visual.FAVORITE_ID),this.obFavorite&&(BX.bind(this.obFavorite,"click",BX.proxy(this.favorite,this)),BX.addCustomEvent("change.rs_favorite",BX.proxy(this.checkFavorite,this)),this.checkFavorite())),this.productPreview&&(this.obPreview=this.obProduct.querySelector('[data-entity="preview"]'),this.obPreview&&BX.bind(this.obPreview,"click",BX.proxy(this.showProductPreview,this))),this.setCartStatus()}},setAnalyticsDataLayer:function(i){if(this.useEnhancedEcommerce&&this.dataLayerName){var s,e,a,r,o,h,n={},u={},c=[];switch(this.productType){case 0:case 1:case 2:case 4:n={id:this.product.id,name:this.product.name,price:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].PRICE,brand:BX.type.isArray(this.brandProperty)?this.brandProperty.join("/"):this.brandProperty};break;case 3:for(s in this.offers[this.offerNum].TREE)if(this.offers[this.offerNum].TREE.hasOwnProperty(s))for(e in r=s.substring(5),o=this.offers[this.offerNum].TREE[s],this.treeProps)if(this.treeProps.hasOwnProperty(e)&&this.treeProps[e].ID==r)for(a in this.treeProps[e].VALUES)if((h=this.treeProps[e].VALUES[a]).ID==o){c.push(h.NAME);break}n={id:this.offers[this.offerNum].ID,name:this.offers[this.offerNum].NAME,price:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].PRICE,brand:BX.type.isArray(this.brandProperty)?this.brandProperty.join("/"):this.brandProperty,variant:c.join("/")}}switch(i){case"addToCart":u={event:"addToCart",ecommerce:{currencyCode:this.currentPrices[this.currentPriceSelected]&&this.currentPrices[this.currentPriceSelected].CURRENCY||"",add:{products:[{name:n.name||"",id:n.id||"",price:n.price||0,brand:n.brand||"",category:n.category||"",variant:n.variant||"",quantity:this.showQuantity&&this.obQuantity?this.obQuantity.value:1}]}}}}t[this.dataLayerName]=t[this.dataLayerName]||[],t[this.dataLayerName].push(u)}},hoverOn:function(t){clearTimeout(this.hoverTimer),this.obProduct.style.height=getComputedStyle(this.obProduct).height,BX.addClass(this.obProduct,"hover"),BX.PreventDefault(t)},hoverOff:function(t){this.hoverStateChangeForbidden||(BX.removeClass(this.obProduct,"hover"),this.hoverTimer=setTimeout(BX.delegate(function(){this.obProduct.style.height=""},this),300),BX.PreventDefault(t))},onFocus:function(){this.hoverStateChangeForbidden=!0,BX.bind(document,"mousemove",BX.proxy(this.captureMousePosition,this))},onBlur:function(){this.hoverStateChangeForbidden=!1,BX.unbind(document,"mousemove",BX.proxy(this.captureMousePosition,this));var t=document.elementFromPoint(this.mouseX,this.mouseY);t&&this.obProduct.contains(t)||this.hoverOff()},captureMousePosition:function(t){this.mouseX=t.clientX,this.mouseY=t.clientY},getCookie:function(t){var i=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return i?decodeURIComponent(i[1]):null},rememberProductRecommendation:function(){var t,i=BX.cookie_prefix+"_RCM_PRODUCT_LOG",s=this.getCookie(i),e=!1,a=[];s&&(a=s.split("."));for(var r=a.length;r--;)(t=a[r].split("-"))[0]==this.product.id?((t=a[r].split("-"))[1]=this.product.rcmId,t[2]=BX.current_server_time,a[r]=t.join("-"),e=!0):BX.current_server_time-t[2]>2592e3&&a.splice(r,1);e||a.push([this.product.id,this.product.rcmId,BX.current_server_time].join("-"));var o=a.join("."),h=new Date((new Date).getTime()+31536e7).toUTCString();document.cookie=i+"="+o+"; path=/; expires="+h+"; domain="+BX.cookie_domain},startQuantityInterval:function(){var t=BX.proxy_context.id===this.visual.QUANTITY_DOWN_ID?BX.proxy(this.quantityDown,this):BX.proxy(this.quantityUp,this);this.quantityDelay=setTimeout(BX.delegate(function(){this.quantityTimer=setInterval(t,150)},this),300)},clearQuantityInterval:function(){clearTimeout(this.quantityDelay),clearInterval(this.quantityTimer)},quantityUp:function(){var t=0,i=!0;0===this.errorCode&&this.showQuantity&&this.canBuy&&(t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10),isNaN(t)||(t+=this.stepQuantity,this.checkQuantity&&t>this.maxQuantity&&(i=!1),i&&(this.isDblQuantity&&(t=Math.round(t*this.precisionFactor)/this.precisionFactor),this.obQuantity.value=t,this.setPrice())))},quantityDown:function(){var t=0,i=!0;0===this.errorCode&&this.showQuantity&&this.canBuy&&(t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10),isNaN(t)||(t-=this.stepQuantity,this.checkPriceRange(t),t<this.minQuantity&&(i=!1),i&&(this.isDblQuantity&&(t=Math.round(t*this.precisionFactor)/this.precisionFactor),this.obQuantity.value=t,this.setPrice())))},quantityChange:function(){var t,i=0;0===this.errorCode&&this.showQuantity&&(this.canBuy?(i=this.isDblQuantity?parseFloat(this.obQuantity.value):Math.round(this.obQuantity.value),isNaN(i)?this.obQuantity.value=this.minQuantity:(this.checkQuantity&&i>this.maxQuantity&&(i=this.maxQuantity),this.checkPriceRange(i),i<this.minQuantity?i=this.minQuantity:(i=(t=Math.round(Math.round(i*this.precisionFactor/this.stepQuantity)/this.precisionFactor)||1)<=1?this.stepQuantity:t*this.stepQuantity,i=Math.round(i*this.precisionFactor)/this.precisionFactor),this.obQuantity.value=i)):this.obQuantity.value=this.minQuantity,this.setPrice())},quantitySet:function(t){var i,s,e=this.offers[t],a=this.offers[this.offerNum];if(0===this.errorCode){if(this.canBuy=e.CAN_BUY,this.currentPriceMode=e.ITEM_PRICE_MODE,this.currentPrices=e.ITEM_PRICES,this.currentPriceSelected=e.ITEM_PRICE_SELECTED,this.currentQuantityRanges=e.ITEM_QUANTITY_RANGES,this.currentQuantityRangeSelected=e.ITEM_QUANTITY_RANGE_SELECTED,this.canBuy?(this.blockNodes.quantity&&BX.style(this.blockNodes.quantity,"display",""),this.obBasketActions&&BX.style(this.obBasketActions,"display",""),this.obSubscribe&&BX.style(this.obSubscribe,"display","none")):(this.blockNodes.quantity&&BX.style(this.blockNodes.quantity,"display","none"),this.obBasketActions&&BX.style(this.obBasketActions,"display","none"),this.obSubscribe&&("Y"===e.CATALOG_SUBSCRIBE?(BX.style(this.obSubscribe,"display",""),this.obSubscribe.setAttribute("data-item",e.ID),BX(this.visual.SUBSCRIBE_ID+"_hidden").click()):BX.style(this.obSubscribe,"display","none"))),this.isDblQuantity=e.QUANTITY_FLOAT,this.checkQuantity=e.CHECK_QUANTITY,this.isDblQuantity?(this.stepQuantity=Math.round(parseFloat(e.STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor,this.maxQuantity=parseFloat(e.MAX_QUANTITY),this.minQuantity="Q"===this.currentPriceMode?parseFloat(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY):this.stepQuantity):(this.stepQuantity=parseInt(e.STEP_QUANTITY,10),this.maxQuantity=parseInt(e.MAX_QUANTITY,10),this.minQuantity="Q"===this.currentPriceMode?parseInt(this.currentPrices[this.currentPriceSelected].MIN_QUANTITY):this.stepQuantity),this.checkQuantity&&0==this.maxQuantity?this.obNotAvail&&BX.style(this.obNotAvail,"display",""):this.canBuy||this.obNotAvail&&BX.style(this.obNotAvail,"display","none"),this.showQuantity){var r=a.ITEM_PRICES.length&&a.ITEM_PRICES[a.ITEM_PRICE_SELECTED]&&a.ITEM_PRICES[a.ITEM_PRICE_SELECTED].MIN_QUANTITY!=this.minQuantity;i=this.isDblQuantity?Math.round(parseFloat(a.STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor!==this.stepQuantity||r||a.MEASURE!==e.MEASURE||this.checkQuantity&&parseFloat(a.MAX_QUANTITY)>this.maxQuantity&&parseFloat(this.obQuantity.value)>this.maxQuantity:parseInt(a.STEP_QUANTITY,10)!==this.stepQuantity||r||a.MEASURE!==e.MEASURE||this.checkQuantity&&parseInt(a.MAX_QUANTITY,10)>this.maxQuantity&&parseInt(this.obQuantity.value,10)>this.maxQuantity,this.obQuantity.disabled=!this.canBuy,i&&(this.obQuantity.value=this.minQuantity),this.obMeasure&&(e.MEASURE?BX.adjust(this.obMeasure,{html:e.MEASURE}):BX.adjust(this.obMeasure,{html:""}))}this.obQuantityLimit.all&&(this.checkQuantity&&0!=this.maxQuantity?("M"===this.showMaxQuantity?s=this.maxQuantity/this.stepQuantity>=this.relativeQuantityFactor?BX.message("RELATIVE_QUANTITY_MANY"):BX.message("RELATIVE_QUANTITY_FEW"):(s=this.maxQuantity,e.MEASURE&&(s+=" "+e.MEASURE)),BX.adjust(this.obQuantityLimit.value,{html:s}),BX.adjust(this.obQuantityLimit.all,{attrs:{className:this.maxQuantity/this.stepQuantity>=this.relativeQuantityFactor?"product-cat-limit is-instock":"product-cat-limit is-limited"},style:{display:""}})):(BX.adjust(this.obQuantityLimit.value,{html:""}),BX.adjust(this.obQuantityLimit.all,{style:{display:"none"}})))}},initializeSlider:function(){if(this.slider.items=BX.findChildren(this.obPictSlider,{className:"item"},!0),this.isTouchDevice)this.slider.options.interval=!1;else if(this.slider.options.interval=parseInt(this.obPictSlider.getAttribute("data-slider-interval"))||this.defaultSliderOptions.interval,this.slider.options.interval<700&&(this.slider.options.interval=700),this.obPictSliderIndicator){var t=this.obPictSliderIndicator.querySelectorAll("[data-go-to]");for(var i in t)t.hasOwnProperty(i)&&(BX.bind(t[i],"mouseenter",BX.proxy(this.sliderHoverOnHandler,this)),BX.bind(t[i],"mouseleave",BX.proxy(this.sliderHoverOffHandler,this)))}},checkTouch:function(t){return!(!t||!t.changedTouches)&&t.changedTouches[0].identifier===this.touch.identifier},touchStartEvent:function(t){1==t.touches.length&&(this.touch=t.changedTouches[0])},touchEndEvent:function(t){if(this.checkTouch(t)){var i=this.touch.pageX-t.changedTouches[0].pageX,s=this.touch.pageY-t.changedTouches[0].pageY;Math.abs(i)>=Math.abs(s)+10&&(i>0&&this.slideNext(),i<0&&this.slidePrev())}},sliderHoverOnHandler:function(t){var i=BX.proxy_context.getAttribute("data-go-to");this.slideShow(i),BX.PreventDefault(t)},sliderHoverOffHandler:function(t){this.slideShow(0)},slideShow:function(t){var i=this.obPictSlider.querySelectorAll("img"),s=this.obPictSliderIndicator.querySelectorAll("[data-go-to]");for(var e in s)s.hasOwnProperty(e)&&BX.removeClass(s[e],"active");for(var e in s[this.getItemIndex(this.eq(this.slider.items,t))]&&BX.addClass(s[this.getItemIndex(this.eq(this.slider.items,t))],"active"),i)i.hasOwnProperty(e)&&BX.removeClass(i[e].parentNode,"active");i[this.getItemIndex(this.eq(this.slider.items,t))]&&BX.addClass(i[this.getItemIndex(this.eq(this.slider.items,t))].parentNode,"active")},slideNext:function(){if(!this.slider.sliding)return this.slide("next")},slidePrev:function(){if(!this.slider.sliding)return this.slide("prev")},slide:function(t,i){var s=BX.findChild(this.obPictSlider,{className:"item active"},!0,!1),e=this.slider.interval,a="next"===t?"left":"right";if(i=i||this.getItemForDirection(t,s),BX.hasClass(i,"active"))return this.slider.sliding=!1;if(this.slider.sliding=!0,e&&this.stopSlider(),this.obPictSliderIndicator){BX.removeClass(this.obPictSliderIndicator.querySelector(".active"),"active");var r=this.obPictSliderIndicator.querySelectorAll("[data-go-to]")[this.getItemIndex(i)];r&&BX.addClass(r,"active")}if(BX.hasClass(this.obPictSlider,"slide")&&!BX.browser.IsIE()){var o=this;BX.addClass(i,t),i.offsetWidth,BX.addClass(s,a),BX.addClass(i,a),setTimeout(function(){BX.addClass(i,"active"),BX.removeClass(s,"active"),BX.removeClass(s,a),BX.removeClass(i,t),BX.removeClass(i,a),o.slider.sliding=!1},700)}else BX.addClass(i,"active"),this.slider.sliding=!1;this.obPictSliderProgressBar&&this.resetProgress(),e&&this.cycleSlider()},stopSlider:function(t){if(t||(this.slider.paused=!0),this.slider.interval&&clearInterval(this.slider.interval),this.slider.progress){this.slider.progress.stop();var i=parseInt(this.obPictSliderProgressBar.style.width);this.slider.progress.options.duration=this.slider.options.interval*i/200,this.slider.progress.options.start={width:10*i},this.slider.progress.options.finish={width:0},this.slider.progress.options.complete=null,this.slider.progress.animate()}},cycleSlider:function(t){if(t||(this.slider.paused=!1),this.slider.interval&&clearInterval(this.slider.interval),this.slider.options.interval&&!this.slider.paused)if(this.slider.progress){this.slider.progress.stop();var i=parseInt(this.obPictSliderProgressBar.style.width);this.slider.progress.options.duration=this.slider.options.interval*(100-i)/100,this.slider.progress.options.start={width:10*i},this.slider.progress.options.finish={width:1e3},this.slider.progress.options.complete=BX.delegate(function(){this.slider.interval=!0,this.slideNext()},this),this.slider.progress.animate()}else this.slider.interval=setInterval(BX.proxy(this.slideNext,this),this.slider.options.interval)},resetProgress:function(){this.slider.progress&&this.slider.progress.stop(),this.obPictSliderProgressBar.style.width=0},getItemForDirection:function(t,i){var s=this.getItemIndex(i);if(("prev"===t&&0===s||"next"===t&&s==this.slider.items.length-1)&&!this.slider.options.wrap)return i;var e=(s+("prev"===t?-1:1))%this.slider.items.length;return this.eq(this.slider.items,e)},getItemIndex:function(t){return this.slider.items=BX.findChildren(t.parentNode,{className:"item"},!0),this.slider.items.indexOf(t||this.slider.active)},eq:function(t,i){var s=t.length,e=+i+(i<0?s:0);return e>=0&&e<s?t[e]:{}},selectOfferProp:function(){var t=0,i=[],s=null,e=BX.proxy_context;if(e&&e.hasAttribute("data-treevalue")){if(BX.hasClass(e,"checked"))return;if(i=e.getAttribute("data-treevalue").split("_"),this.searchOfferPropIndex(i[0],i[1])){if((s=BX.findChildren(e.parentNode,{tagName:"li"},!1))&&0<s.length)for(t=0;t<s.length;t++)s[t].getAttribute("data-onevalue")===i[1]?BX.addClass(s[t],"checked"):BX.removeClass(s[t],"checked");this.setOfferCurrentValue(BX.findParent(e,{attribute:{"data-entity":"sku-line-block"}}),e)}}},searchOfferPropIndex:function(t,i){var s,e,a="",r=!1,o=[],h=[],n=-1,u={},c=[];for(s=0;s<this.treeProps.length;s++)if(this.treeProps[s].ID===t){n=s;break}if(-1<n){for(s=0;s<n;s++)u[a="PROP_"+this.treeProps[s].ID]=this.selectedValues[a];if(a="PROP_"+this.treeProps[n].ID,!(r=this.getRowValues(u,a)))return!1;if(!BX.util.in_array(i,r))return!1;for(u[a]=i,s=n+1;s<this.treeProps.length;s++){if(a="PROP_"+this.treeProps[s].ID,!(r=this.getRowValues(u,a)))return!1;if(h=[],this.showAbsent)for(o=[],c=[],c=BX.clone(u,!0),e=0;e<r.length;e++)c[a]=r[e],h[h.length]=r[e],this.getCanBuy(c)&&(o[o.length]=r[e]);else o=r;this.selectedValues[a]&&BX.util.in_array(this.selectedValues[a],o)?u[a]=this.selectedValues[a]:this.showAbsent?u[a]=o.length>0?o[0]:h[0]:u[a]=o[0],this.updateRow(s,u[a],r,o)}this.selectedValues=u,this.changeInfo()}return!0},updateRow:function(t,i,s,e){var a,r=0,o="",h=!1,n=null,u=this.obTree.querySelectorAll('[data-entity="sku-line-block"]');if(t>-1&&t<u.length&&(a=u[t].querySelector("ul"),(n=BX.findChildren(a,{tagName:"li"},!1))&&0<n.length)){var c;for(r=0;r<n.length;r++)(h=(o=n[r].getAttribute("data-onevalue"))===i)?BX.addClass(n[r],"checked"):BX.removeClass(n[r],"checked"),BX.util.in_array(o,e)?BX.removeClass(n[r],"disabled"):BX.addClass(n[r],"disabled"),BX.removeClass(n[r],"last-visible"),BX.util.in_array(o,s)?(c=n[r],n[r].style.display=""):n[r].style.display="none",h&&(u[t].style.display=0==o&&1==e.length?"none":"",this.setOfferCurrentValue(u[t],n[r]));c&&BX.addClass(c,"last-visible")}},getRowValues:function(t,i){var s,e=0,a=[],r=!1,o=!0;if(0===t.length){for(e=0;e<this.offers.length;e++)BX.util.in_array(this.offers[e].TREE[i],a)||(a[a.length]=this.offers[e].TREE[i]);r=!0}else for(e=0;e<this.offers.length;e++){for(s in o=!0,t)if(t[s]!==this.offers[e].TREE[s]){o=!1;break}o&&(BX.util.in_array(this.offers[e].TREE[i],a)||(a[a.length]=this.offers[e].TREE[i]),r=!0)}return!!r&&a},getCanBuy:function(t){var i,s,e=!1,a=!0;for(i=0;i<this.offers.length;i++){for(s in a=!0,t)if(t[s]!==this.offers[i].TREE[s]){a=!1;break}if(a&&this.offers[i].CAN_BUY){e=!0;break}}return e},setCurrent:function(){var t,i=0,s=[],e="",a=!1,r={},o=[],h=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length&&(e="PROP_"+this.treeProps[t].ID,a=this.getRowValues(r,e));t++){if(BX.util.in_array(h[e],a)?r[e]=h[e]:(r[e]=a[0],this.offerNum=0),this.showAbsent)for(s=[],o=[],o=BX.clone(r,!0),i=0;i<a.length;i++)o[e]=a[i],this.getCanBuy(o)&&(s[s.length]=a[i]);else s=a;this.updateRow(t,r[e],a,s)}this.selectedValues=r,this.changeInfo()},changeInfo:function(){var t,i,s=-1,e=!0;for(t=0;t<this.offers.length;t++){for(i in e=!0,this.selectedValues)if(this.selectedValues[i]!==this.offers[t].TREE[i]){e=!1;break}if(e){s=t;break}}if(s>-1){if(parseInt(this.offers[s].MORE_PHOTO_COUNT)>1&&this.obPictSlider){for(t in this.obPict&&(this.obPict.style.display="none"),BX.cleanNode(this.obPictSlider),this.offers[s].MORE_PHOTO)if(this.offers[s].MORE_PHOTO.hasOwnProperty(t)){var a=BX.create("span",{props:{className:"product-cat-image-slide item"+(0==t?" active":"")},children:[BX.create("IMG",{props:{className:"product-cat-image"},attrs:{src:this.offers[s].MORE_PHOTO[t].SRC}})]});if(this.obPictSlider.appendChild(a),t>this.sliderSlideCount-2&&this.offers[s].MORE_PHOTO_COUNT>this.sliderSlideCount){var r=BX.message("SLIDER_MORE_MESSAGE");r=r.replace("#NUMBER#",this.offers[s].MORE_PHOTO_COUNT-this.sliderSlideCount),a.appendChild(BX.create("span",{props:{className:"product-cat-image-slider-more"},children:[BX.create("span",{props:{className:"product-cat-image-slider-more-wrapper"},children:[BX.create("span",{props:{className:"product-cat-image-slider-more-icon"},html:'<svg class="icon-svg"><use xlink:href="#svg-camera"></use></svg>'}),BX.create("span",{props:{className:"product-cat-image-slider-more-text"},text:r})]})]}));break}}if(this.obPictSliderIndicator){for(t in BX.cleanNode(this.obPictSliderIndicator),this.offers[s].MORE_PHOTO)if(this.offers[s].MORE_PHOTO.hasOwnProperty(t)&&(this.obPictSliderIndicator.appendChild(BX.create("span",{attrs:{"data-go-to":t},props:{className:"product-cat-image-slider-control"+(0==t?" active":"")}})),t>=this.sliderSlideCount-1))break;this.obPictSliderIndicator.style.display=""}this.obPictSlider.style.display="",this.initializeSlider()}else this.obPictSlider&&(this.obPictSlider.style.display="none"),this.obPict&&(this.offers[s].PREVIEW_PICTURE?BX.adjust(this.obPict,{attrs:{src:this.offers[s].PREVIEW_PICTURE.SRC}}):BX.adjust(this.obPict,{attrs:{src:this.defaultPict.pict.SRC}}),this.obPict.style.display="");this.showSkuProps&&this.obSkuProps&&(this.offers[s].DISPLAY_PROPERTIES.length?BX.adjust(this.obSkuProps,{style:{display:""},html:this.offers[s].DISPLAY_PROPERTIES}):BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})),this.obProductRequestBtn&&this.obProductRequestBtn.setAttribute("href",this.config.productRequestUrl.replace("#ELEMENT_ID#",this.offers[s].ID)),this.quantitySet(s),this.setPrice(),this.setCompared(this.offers[s].COMPARED),this.setProductDeal(s),this.offerNum=s,this.setCartStatus()}},checkPriceRange:function(t){if(void 0!==t&&"Q"==this.currentPriceMode){var i,s=!1;for(var e in this.currentQuantityRanges)if(this.currentQuantityRanges.hasOwnProperty(e)&&(i=this.currentQuantityRanges[e],parseInt(t)>=parseInt(i.SORT_FROM)&&("INF"==i.SORT_TO||parseInt(t)<=parseInt(i.SORT_TO)))){s=!0,this.currentQuantityRangeSelected=i.HASH;break}for(var a in!s&&(i=this.getMinPriceRange())&&(this.currentQuantityRangeSelected=i.HASH),this.currentPrices)if(this.currentPrices.hasOwnProperty(a)&&this.currentPrices[a].QUANTITY_HASH==this.currentQuantityRangeSelected){this.currentPriceSelected=a;break}}},getMinPriceRange:function(){var t;for(var i in this.currentQuantityRanges)this.currentQuantityRanges.hasOwnProperty(i)&&(!t||parseInt(this.currentQuantityRanges[i].SORT_FROM)<parseInt(t.SORT_FROM))&&(t=this.currentQuantityRanges[i]);return t},checkQuantityControls:function(){if(this.obQuantity){var t=this.checkQuantity&&parseFloat(this.obQuantity.value)+this.stepQuantity>this.maxQuantity,i=parseFloat(this.obQuantity.value)-this.stepQuantity<this.minQuantity;t?BX.addClass(this.obQuantityUp,"product-item-amount-field-btn-disabled"):BX.hasClass(this.obQuantityUp,"product-item-amount-field-btn-disabled")&&BX.removeClass(this.obQuantityUp,"product-item-amount-field-btn-disabled"),i?BX.addClass(this.obQuantityDown,"product-item-amount-field-btn-disabled"):BX.hasClass(this.obQuantityDown,"product-item-amount-field-btn-disabled")&&BX.removeClass(this.obQuantityDown,"product-item-amount-field-btn-disabled"),t&&i?this.obQuantity.setAttribute("disabled","disabled"):this.obQuantity.removeAttribute("disabled")}},setPrice:function(){var t,i,s="";this.obQuantity&&this.checkPriceRange(this.obQuantity.value),this.checkQuantityControls(),i=this.currentPrices[this.currentPriceSelected],this.obPrice&&(i?BX.adjust(this.obPrice,{html:BX.Currency?BX.Currency.currencyFormat(i.RATIO_PRICE,i.CURRENCY,!0):i.PRINT_RATIO_PRICE}):BX.adjust(this.obPrice,{html:""}),this.showOldPrice&&this.obPriceOld&&(i&&i.RATIO_PRICE!==i.RATIO_BASE_PRICE?BX.adjust(this.obPriceOld,{html:BX.Currency?BX.Currency.currencyFormat(i.RATIO_BASE_PRICE,i.CURRENCY,!0):i.PRINT_RATIO_BASE_PRICE}):BX.adjust(this.obPriceOld,{html:""})),this.showOldPrice&&this.obPriceEconomy&&(i&&i.RATIO_PRICE!==i.RATIO_BASE_PRICE?(s=(s=BX.message("ECONOMY_INFO_MESSAGE")).replace("#ECONOMY#",0==this.productType?i.PRINT_RATIO_DISCOUNT:BX.Currency.currencyFormat(i.RATIO_DISCOUNT,i.CURRENCY,!0)),BX.adjust(this.obPriceEconomy,{style:{display:""},html:s})):this.obPriceEconomy&&BX.adjust(this.obPriceEconomy,{html:""})),this.obPriceTotal&&(i&&this.obQuantity&&this.obQuantity.value!=this.stepQuantity?BX.adjust(this.obPriceTotal,{html:BX.message("PRICE_TOTAL_PREFIX")+": "+(BX.Currency?BX.Currency.currencyFormat(i.PRICE*this.obQuantity.value,i.CURRENCY,!0):i.PRICE*this.obQuantity.value+""+i.CURRENCY),style:{display:""}}):BX.adjust(this.obPriceTotal,{html:"",style:{display:"none"}})),this.showPercent&&(t=i&&parseInt(i.DISCOUNT)>0?{style:{display:""},html:-i.PERCENT+"%"}:{style:{display:"none"},html:""},this.obDscPerc&&BX.adjust(this.obDscPerc,t),this.obSecondDscPerc&&BX.adjust(this.obSecondDscPerc,t)))},compare:function(t){var i=this.obCompare.querySelector('[data-entity="compare-checkbox"]'),s=BX.getEventTarget(t),e=!0;i&&(e=s===i?i.checked:!i.checked);var a,r=e?this.compareData.compareUrl:this.compareData.compareDeleteUrl;if(r){switch(s!==i&&(BX.PreventDefault(t),this.setCompared(e)),this.productType){case 0:case 1:case 2:case 4:a=r.replace("#ID#",this.product.id.toString());break;case 3:a=r.replace("#ID#",this.offers[this.offerNum].ID)}BX.ajax({method:"POST",dataType:e?"json":"html",url:a+(-1!==a.indexOf("?")?"&":"?")+"ajax_action=Y",onsuccess:e?BX.proxy(this.compareResult,this):BX.proxy(this.compareDeleteResult,this)})}},compareResult:function(t){var s,e;BX.type.isPlainObject(t)&&(this.offers.length>0&&(this.offers[this.offerNum].COMPARED="OK"===t.STATUS),"OK"===t.STATUS?BX.onCustomEvent("OnCompareChange",[{action:"add",id:t.ID}]):(this.initPopupWindow(),s='<div class="alert alert-danger">'+(t.MESSAGE?t.MESSAGE:BX.message("COMPARE_UNKNOWN_ERROR"))+"</div>",e=[new i({text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})],this.obPopupWin.setTitleBar(BX.message("COMPARE_TITLE")),this.obPopupWin.setContent(s),this.obPopupWin.setButtons(e),this.obPopupWin.show()))},compareDeleteResult:function(t){"OK"===(t=BX.parseJSON(t)).STATUS&&BX.onCustomEvent("OnCompareChange",[{action:"delete",id:t.ID}]),this.offers&&this.offers.length&&(this.offers[this.offerNum].COMPARED=!1)},checkCompare:function(t){if(null!=t)switch(this.productType){case 0:case 1:case 2:case 4:this.product.id==t.id&&this.setCompared("add"==t.action);break;case 3:for(var i=this.offers.length;i--;)if(this.offers[i].ID==t.id){this.offers[i].COMPARED=!1,this.offerNum==i&&this.setCompared("add"==t.action);break}}},setCompared:function(t){if(this.obCompare){t?BX.addClass(this.obCompare,"checked"):BX.removeClass(this.obCompare,"checked");var i=this.obCompare.querySelector('[data-entity="compare-checkbox"]');i&&(i.checked=t);var s=this.obCompare.querySelector('[data-entity="compare-title"]');s&&(s.innerHTML=t?BX.message("BTN_COMPARE_DEL"):BX.message("BTN_COMPARE_ADD"))}},setCompareInfo:function(t){if(BX.type.isArray(t))for(var i in this.offers)this.offers.hasOwnProperty(i)&&(this.offers[i].COMPARED=BX.util.in_array(this.offers[i].ID,t))},compareRedirect:function(){this.compareData.comparePath?location.href=this.compareData.comparePath:this.obPopupWin.close()},checkDeletedCompare:function(t){switch(this.productType){case 0:case 1:case 2:case 4:this.product.id==t&&this.setCompared(!1);break;case 3:for(var i=this.offers.length;i--;)if(this.offers[i].ID==t){this.offers[i].COMPARED=!1,this.offerNum==i&&this.setCompared(!1);break}}},initBasketUrl:function(){switch(this.basketUrl="ADD"===this.basketMode?this.basketData.add_url:this.basketData.buy_url,this.productType){case 1:case 2:case 4:this.basketUrl=this.basketUrl.replace("#ID#",this.product.id.toString());break;case 3:this.basketUrl=this.basketUrl.replace("#ID#",this.offers[this.offerNum].ID)}this.basketParams={ajax_basket:"Y"},this.showQuantity&&(this.basketParams[this.basketData.quantity]=this.obQuantity.value),this.basketData.sku_props&&(this.basketParams[this.basketData.sku_props_var]=this.basketData.sku_props)},fillBasketProps:function(){if(this.visual.BASKET_PROP_DIV){var t=0,i=null,s=!1,e=null;if(this.basketData.useProps&&!this.basketData.emptyProps?this.obPopupWin&&this.obPopupWin.contentContainer&&(e=this.obPopupWin.contentContainer):e=BX(this.visual.BASKET_PROP_DIV),e){if((i=e.getElementsByTagName("select"))&&i.length)for(t=0;t<i.length;t++)if(!i[t].disabled)switch(i[t].type.toLowerCase()){case"select-one":this.basketParams[i[t].name]=i[t].value,s=!0}if((i=e.getElementsByTagName("input"))&&i.length)for(t=0;t<i.length;t++)if(!i[t].disabled)switch(i[t].type.toLowerCase()){case"hidden":this.basketParams[i[t].name]=i[t].value,s=!0;break;case"radio":i[t].checked&&(this.basketParams[i[t].name]=i[t].value,s=!0)}}s||(this.basketParams[this.basketData.props]=[],this.basketParams[this.basketData.props][0]=0)}},add2Basket:function(){this.basketMode="ADD",this.basket()},buyBasket:function(){this.basketMode="BUY",this.basket()},sendToBasket:function(){if(this.canBuy)switch(this.product&&this.product.id&&this.bigData&&this.rememberProductRecommendation(),this.productType){case 0:this.showQuantity?Basket.add(this.product.id,this.obQuantity.value):Basket.add(this.product.id,1),this.basketResult({STATUS:"OK"});break;case 1:case 2:case 3:case 4:this.initBasketUrl(),this.fillBasketProps(),BX.ajax({method:"POST",dataType:"json",url:this.basketUrl,data:this.basketParams,onsuccess:BX.proxy(this.basketResult,this)})}},basket:function(){if(this.obBasketActions&&null!=t.Basket){var s=Basket.inbasket();switch(this.productType){case 3:if(BX.util.in_array(this.offers[this.offerNum].ID+"",s))return void this.basketRedirect();break;default:if(BX.util.in_array(this.product.id+"",s))return void this.basketRedirect()}}var e="";if(this.canBuy)switch(this.productType){case 1:case 2:case 4:this.basketData.useProps&&!this.basketData.emptyProps?(this.initPopupWindow(),this.obPopupWin.setTitleBar(BX.message("TITLE_BASKET_PROPS")),BX(this.visual.BASKET_PROP_DIV)&&(e=BX(this.visual.BASKET_PROP_DIV).innerHTML),this.obPopupWin.setContent(e),this.obPopupWin.setButtons([new i({text:BX.message("BTN_MESSAGE_SEND_PROPS"),events:{click:BX.delegate(this.sendToBasket,this)}})]),this.obPopupWin.show()):this.sendToBasket();break;case 0:case 3:this.sendToBasket()}},basketResult:function(t){var s,e="",a=[];if(this.obPopupWin&&this.obPopupWin.close(),BX.type.isPlainObject(t))if((s="OK"===t.STATUS)&&this.setAnalyticsDataLayer("addToCart"),s&&"BUY"===this.basketAction)this.basketRedirect();else if(s){switch(this.productType){case 3:Basket.inbasket(this.offers[this.offerNum].ID,!1);break;default:Basket.inbasket(this.product.id,!1)}BX.onCustomEvent("OnBasketChange",[{},"ADD2CART"]),BX.findParent(this.obProduct,{className:"bx_sale_gift_main_products"},10)&&BX.onCustomEvent("onAddToBasketMainProduct",[this])}else this.initPopupWindow(),e='<div style="width: 100%; margin: 0; text-align: center;"><p>'+(t.MESSAGE?t.MESSAGE:BX.message("BASKET_UNKNOWN_ERROR"))+"</p></div>",a=[new i({text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})],this.obPopupWin.setTitleBar(s?BX.message("TITLE_SUCCESSFUL"):BX.message("TITLE_ERROR")),this.obPopupWin.setContent(e),this.obPopupWin.setButtons(a),this.obPopupWin.show()},basketRedirect:function(){location.href=this.basketData.basketUrl?this.basketData.basketUrl:BX.message("BASKET_URL")},initPopupWindow:function(){this.obPopupWin||(this.obPopupWin=BX.PopupWindowManager.create("CatalogSectionBasket_"+this.visual.ID,null,{autoHide:!0,offsetLeft:0,offsetTop:0,overlay:!0,closeByEsc:!0,titleBar:!0,closeIcon:!0,contentColor:"white",className:this.templateTheme?"bx-"+this.templateTheme:""}))},setOfferCurrentValue:function(t,i){var s=this.getEntities(t,"sku-current-value");for(var e in s)s.hasOwnProperty(e)&&BX.type.isDomNode(s[e])&&(s[e].innerHTML=i.getAttribute("title"))},setCartStatus:function(){if(this.obBasketActions&&null!=t.Basket){var i,s=Basket.inbasket();switch(this.productType){case 3:i=this.offers[this.offerNum].ID;break;default:i=this.product.id}BX.util.in_array(i,s)?(BX.addClass(this.obBasketActions,"is-incart"),this.obBuyBtn&&(this.obBuyBtn.innerHTML=this.mess.MESS_BTN_INCART)):(BX.removeClass(this.obBasketActions,"is-incart"),this.obBuyBtn&&(this.obBuyBtn.innerHTML=this.mess.MESS_BTN_BUY))}},getEntities:function(t,i,s){return t&&i?(s=s||"",t.querySelectorAll(s+'[data-entity="'+i+'"]')):{length:0}},favorite:function(t){BX.PreventDefault(t),RS.Favorite.request(this.product.id)},checkFavorite:function(){if(this.obFavorite){var t=this.obFavorite.querySelector('[data-entity="favorite-title"]');BX.util.in_array(this.product.id,RS.Favorite.getItems())?(BX.addClass(this.obFavorite,"checked"),t&&(t.innerHTML=BX.message("BTN_FAVORITE_DEL"))):(BX.removeClass(this.obFavorite,"checked"),t&&(t.innerHTML=BX.message("BTN_FAVORITE_ADD")))}},showProductPreview:function(t){BX.PreventDefault(t),alert("showProductPreview")},setProductDeal:function(t){if(this.obProductDeal){var i=this.offers[t];if(void 0===i.PRODUCT_DEAL||null===i.PRODUCT_DEAL)BX.adjust(this.obProductDeal,{style:{display:"none"}});else{BX.adjust(this.obProductDeal,{style:{display:""}});var s=this.obProductDeal.querySelector('[data-entity="product-deal-name"]');s&&BX.adjust(s,{html:i.PRODUCT_DEAL.NAME})}}}}}}(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:119:"/bitrix/templates/megamart_default/components/bitrix/sale.prediction.product.detail/catalog/script.min.js?1615568909330";s:6:"source";s:101:"/bitrix/templates/megamart_default/components/bitrix/sale.prediction.product.detail/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function bx_sale_prediction_product_detail_load(a,t,e){t=t||{},e=e||{},BX.ajax({url:"/bitrix/components/bitrix/sale.prediction.product.detail/ajax.php",method:"POST",data:BX.merge(t,e),dataType:"html",processData:!1,start:!0,onsuccess:function(t){var e=BX.processHTML(t);BX(a).innerHTML=e.HTML,BX.ajax.processScripts(e.SCRIPT)}})}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:105:"/bitrix/templates/megamart_default/components/bitrix/catalog.section/catalog/script.min.js?16155689095694";s:6:"source";s:86:"/bitrix/templates/megamart_default/components/bitrix/catalog.section/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(){"use strict";window.JCCatalogSectionComponent||(window.JCCatalogSectionComponent=function(t){this.formPosting=!1,this.siteId=t.siteId||"",this.ajaxId=t.ajaxId||"",this.template=t.template||"",this.componentPath=t.componentPath||"",this.parameters=t.parameters||"",t.navParams&&(this.navParams={NavNum:t.navParams.NavNum||1,NavPageNomer:parseInt(t.navParams.NavPageNomer)||1,NavPageCount:parseInt(t.navParams.NavPageCount)||1}),this.bigData=t.bigData||{enabled:!1},this.container=document.querySelector('[data-entity="'+t.container+'"]'),this.lazyLoadContainer=document.querySelector('[data-entity="lazy-'+t.container+'"]'),this.showMoreButton=null,this.showMoreButtonMessage=null,this.bigData.enabled&&BX.util.object_keys(this.bigData.rows).length>0&&(BX.cookie_prefix=this.bigData.js.cookiePrefix||"",BX.cookie_domain=this.bigData.js.cookieDomain||"",BX.current_server_time=this.bigData.js.serverTime,BX.ready(BX.delegate(this.bigDataLoad,this))),t.initiallyShowHeader&&BX.ready(BX.delegate(this.showHeader,this)),t.deferredLoad&&BX.ready(BX.delegate(this.deferredLoad,this)),t.lazyLoad&&(this.showMoreButton=document.querySelector('[data-use="show-more-'+this.navParams.NavNum+'"]'),this.showMoreButtonMessage=this.showMoreButton.innerHTML,BX.bind(this.showMoreButton,"click",BX.proxy(this.showMore,this))),t.loadOnScroll&&BX.bind(window,"scroll",BX.proxy(this.loadOnScroll,this)),t.useCollapse&&BX.ready(BX.delegate(this.collapsed,this)),BX.bind(window,"popstate",BX.proxy(this.onPopstate,this))},window.JCCatalogSectionComponent.prototype={checkButton:function(){this.showMoreButton&&(this.navParams.NavPageNomer==this.navParams.NavPageCount?BX.remove(this.showMoreButton.parentNode):this.container.appendChild(this.showMoreButton.parentNode))},enableButton:function(){this.showMoreButton&&BX.removeClass(this.showMoreButton,"is-loading")},disableButton:function(){this.showMoreButton&&BX.addClass(this.showMoreButton,"is-loading")},loadOnScroll:function(){var t=BX.GetWindowScrollPos().scrollTop,e=BX.pos(this.container).bottom;t+window.innerHeight>e&&this.showMore()},showMore:function(){this.navParams.NavPageNomer>=this.navParams.NavPageCount||this.showPage(this.navParams.NavPageNomer+1)},showPage:function(t){var e={},a="PAGEN_"+this.navParams.NavNum,o=t;if(e.action="showMore",e[a]=o,!this.formPosting){this.formPosting=!0,this.disableButton(),this.sendRequest(e);var i=location.href,s={};s[a]=o,i=BX.util.add_url_param(i,s),BX.ajax.history.put(null,i)}},onPopstate:function(t){},bigDataLoad:function(){var t="https://analytics.bitrix.info/crecoms/v1_0/recoms.php",e=BX.ajax.prepareData(this.bigData.params);e&&(t+=(-1!==t.indexOf("?")?"&":"?")+e);var a=BX.delegate(function(t){this.sendRequest({action:"deferredLoad",bigData:"Y",items:t&&t.items||[],rid:t&&t.id,count:this.bigData.count,rowsRange:this.bigData.rowsRange,shownIds:this.bigData.shownIds})},this);BX.ajax({method:"GET",dataType:"json",url:t,timeout:3,onsuccess:a,onfailure:a})},deferredLoad:function(){this.sendRequest({action:"deferredLoad"})},sendRequest:function(t){var e={siteId:this.siteId,template:this.template,parameters:this.parameters};this.ajaxId&&(e.AJAX_ID=this.ajaxId),BX.ajax({url:this.componentPath+"/ajax.php"+(-1!==document.location.href.indexOf("clear_cache=Y")?"?clear_cache=Y":""),method:"POST",dataType:"json",timeout:60,data:BX.merge(e,t),onsuccess:BX.delegate(function(e){e&&e.JS&&BX.ajax.processScripts(BX.processHTML(e.JS).SCRIPT,!1,BX.delegate(function(){this.showAction(e,t)},this))},this)})},showAction:function(t,e){if(e)switch(e.action){case"showMore":this.processShowMoreAction(t);break;case"deferredLoad":this.processDeferredLoadAction(t,"Y"===e.bigData)}},processShowMoreAction:function(t){this.formPosting=!1,this.enableButton(),t&&(this.navParams.NavPageNomer++,this.processItems(t.items),this.processPagination(t.pagination),this.checkButton())},processDeferredLoadAction:function(t,e){if(t){var a=e?this.bigData.rows:{};this.processItems(t.items,BX.util.array_keys(a))}},processItems:function(t,e){if(t){var a,o,i,s=BX.processHTML(t,!1),n=BX.create("DIV");if(n.innerHTML=s.HTML,(a=n.querySelectorAll('[data-entity="items-row"]')).length){for(o in this.showHeader(!0),a)a.hasOwnProperty(o)&&(i=!!e&&this.container.querySelectorAll('[data-entity="items-row"]'),a[o].style.opacity=0,i&&BX.type.isDomNode(i[e[o]])?i[e[o]].parentNode.insertBefore(a[o],i[e[o]]):this.container.appendChild(a[o]));new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){for(var e in a)a.hasOwnProperty(e)&&(a[e].style.opacity=t.opacity/100)},complete:function(){for(var t in a)a.hasOwnProperty(t)&&a[t].removeAttribute("style")}}).animate(),void 0!==RS&&RS.Init(["popup"],this.container)}BX.ajax.processScripts(s.SCRIPT)}},processPagination:function(t){if(t){var e=document.querySelectorAll('[data-pagination-num="'+this.navParams.NavNum+'"]');for(var a in e)e.hasOwnProperty(a)&&(e[a].innerHTML=t)}},showHeader:function(t){var e,a=BX.findParent(this.container,{attr:{"data-entity":"parent-container"}});a&&BX.type.isDomNode(a)&&(e=a.querySelector('[data-entity="header"]'))&&"true"!=e.getAttribute("data-showed")&&(e.style.display="",t?new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){e.style.opacity=t.opacity/100},complete:function(){e.removeAttribute("style"),e.setAttribute("data-showed","true")}}).animate():e.style.opacity=100)},collapsed:function(){var t=this.container.querySelector('[data-entity="collapsed-rows"]');$(t).on("shown.bs.collapse",function(){$('[href^="#'+this.id+'"]').hide()})}})}();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:112:"/bitrix/templates/megamart_default/components/bitrix/catalog.products.viewed/catalog/script.min.js?1615568909847";s:6:"source";s:94:"/bitrix/templates/megamart_default/components/bitrix/catalog.products.viewed/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(){"use strict";window.JCCatalogProductsViewedComponent||(window.JCCatalogProductsViewedComponent=function(t){this.container=document.querySelector('[data-entity="'+t.container+'"]'),t.initiallyShowHeader&&BX.ready(BX.delegate(this.showHeader,this))},window.JCCatalogProductsViewedComponent.prototype={showHeader:function(t){var e,a=BX.findParent(this.container,{attr:{"data-entity":"parent-container"}});a&&BX.type.isDomNode(a)&&(e=a.querySelector('[data-entity="header"]'))&&"true"!=e.getAttribute("data-showed")&&(e.style.display="",t?new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){e.style.opacity=t.opacity/100},complete:function(){e.removeAttribute("style"),e.setAttribute("data-showed","true")}}).animate():e.style.opacity=100)}})}();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/templates/megamart_default/components/bitrix/catalog/catalog/page-nav.min.js?16155689092472";s:6:"source";s:80:"/bitrix/templates/megamart_default/components/bitrix/catalog/catalog/page-nav.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(){"use strict";window.JCPageNavComponent||(window.JCPageNavComponent=function(t){this.id=t.ID||"",this.target="#"+this.id,this.scrollSpyOptions={},this.scrollSpyOptions.target=this.target,void 0!==window.frameCacheVars?BX.addCustomEvent("onFrameDataReceived",BX.delegate(this.init,this)):BX.ready(BX.delegate(this.init,this))},window.JCPageNavComponent.prototype={init:function(t){var e;for(e in this.nav=BX(this.id),this.items=document.querySelectorAll('[data-spy="item"][data-target="'+this.target+'"]'),this.navItems=[],this.items)if(this.items.hasOwnProperty(e)){var i=this.insertItem({id:this.items[e].getAttribute("id"),title:this.items[e].getAttribute("data-title")});this.navItems.push(i)}1==RS.Options.fixingCompactHeader&&(this.scrollSpyOptions.offset=71),new $.fn.scrollspy.Constructor(document.body,this.scrollSpyOptions),$(window).on("scroll.bs.scrollspy",BX.proxy(this.onScroll,this)),BX.data(this.nav,"pageNav",this)},addItem:function(t){var e;for(e=0;e<this.items.length;e++)if(this.items.hasOwnProperty(e)&&this.items[e].getAttribute("id")==t.id)return!1;var i=document.querySelectorAll('[data-target="'+this.target+'"]');for(e in i)if(i.hasOwnProperty(e)&&i[e].getAttribute("id")==t.id){var s=this.createItem({id:t.id,title:t.title});null==this.navItems[e].nextSibling?this.navItems[e].parentNode.insertBefore(s,this.navItems[e]):this.navItems[e].parentNode.insertBefore(s,this.navItems[e].nextSibling),s.style.height="auto",s.style.overflow="hidden";var n=s.offsetHeight;s.style.height=0,new BX.easing({duration:500,start:{opacity:0,height:0},finish:{opacity:100,height:n},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){s.style.opacity=t.opacity/100,s.style.height=t.height+"px"},complete:function(){s.removeAttribute("style")}}).animate(),this.items=i,this.navItems.splice(e,0,s)}},removeItem:function(t){BX.remove(this.nav.querySelector('[href="#'+t+'"]'))},insertItem:function(t){return this.nav.appendChild(this.createItem(t))},createItem:function(t){return BX.create("DIV",{props:{className:"nav-item"},children:[BX.create("A",{props:{href:"#"+t.id,className:"nav-link js-link-scroll"},children:[BX.create("SPAN",{props:{className:"text-truncate"},text:t.title}),'<svg class="nav-link-icon icon-svg"><use xlink:href="#svg-arrow-right"></use></svg>']})]})},onScroll:function(t){var e=$(this.nav);e.find(".nav-link.active, .list-group-item.active").length>0?e.addClass("active"):e.removeClass("active")}})}();
/* End */
;; /* /bitrix/templates/megamart_default/components/bitrix/catalog.element/catalog/script.min.js?161556890948368*/
; /* /bitrix/templates/megamart_default/components/bitrix/iblock.vote/stars/script.min.js?16155689094841*/
; /* /bitrix/templates/megamart_default/components/bitrix/catalog.product.subscribe/.default/script.js?161556890922247*/
; /* /bitrix/templates/megamart_default/components/redsign/grupper.list/catalog/script.min.js?16155689091075*/
; /* /bitrix/templates/megamart_default/components/bitrix/catalog.comments/tabs/script.min.js?16155689094403*/
; /* /bitrix/templates/megamart_default/components/bitrix/catalog.store.amount/catalog/script.min.js?16155689092171*/
; /* /bitrix/templates/megamart_default/components/bitrix/sale.products.gift/catalog/script.min.js?16155689093151*/
; /* /bitrix/templates/megamart_default/components/bitrix/catalog.item/catalog/script.min.js?161556890942993*/
; /* /bitrix/templates/megamart_default/components/bitrix/sale.prediction.product.detail/catalog/script.min.js?1615568909330*/
; /* /bitrix/templates/megamart_default/components/bitrix/catalog.section/catalog/script.min.js?16155689095694*/
; /* /bitrix/templates/megamart_default/components/bitrix/catalog.products.viewed/catalog/script.min.js?1615568909847*/
; /* /bitrix/templates/megamart_default/components/bitrix/catalog/catalog/page-nav.min.js?16155689092472*/
