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
    let genre = content[parseInt($(this).data("i"))];
    $("#modal_mac").text(genre.m);
    $("#genre").html("");

    genre.c.map((item)=>{
        $("#genre").append(`<span class="badge badge-md badge-success text-uppercase mx-1 mt-1">${item}</span>`);
    });

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

     item.c.map(async (gen)=>{
           text_data += gen+" | ";
      })

       text_data += `\n𝕁𝕠𝕚𝕟 𝕋𝕖𝕝𝕖𝕘𝕣𝕒𝕞 ➽ @stbfree_mac\n═══════════════════════════════════════════════\n`;

    }));

    download(`@stbfree_mac_${new Date().toDateString().replace(/ /g, "_")}`, text_data);
});
