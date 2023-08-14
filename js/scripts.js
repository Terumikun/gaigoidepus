var sidebar = $('#sidebar_right').children();

for (var i = 0; i < sidebar.length; i++) {
  sidebar.eq(i).removeClass().addClass('widget widget_categories card card-body mb-4 bg-light border-0');
  sidebar.eq(i).find('h3.title').removeClass().addClass('widget-title card-title border-bottom py-2');
}


var button_sidebar = `<button class="btn btn-outline-primary w-100 mb-4 d-flex d-md-none justify-content-between align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar"> Chọn địa điểm <i class="fa-solid fa-ellipsis-vertical"></i> </button>`;

var getHtmlsb = $('#sidebar_right').html();
var innerHtmlsb = `<aside id="secondary" class="widget-area">${button_sidebar}<div class="offcanvas-md offcanvas-end" tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel"><div class="offcanvas-header bg-white"> <span class="h5 offcanvas-title" id="sidebarLabel">Địa điểm</span> <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebar" aria-label="Close"></button></div><div class="offcanvas-body flex-column">${getHtmlsb}</div></div></aside>`;
$('#sidebar_right').html(innerHtmlsb);

var navbar = $('#Label3').html();
$('#offcanvas-body').html(navbar);
$('#Label3').css('display', 'block');

if (wManager.view.isPost) {
  var getTel = htmltotext($('.site-main').html().split(/\[sdt\](.*?)\[\/sdt]/ig)[1]);
  getTel = (getTel != "undefined") ? getTel : "Tạm nghỉ";
  var htmlTel = `<div class="fix_tel">
  <div class="ring-alo-phone ring-alo-green ring-alo-show" id="ring-alo-phoneIcon" style="right: 150px; bottom: -12px;">
    <div class="ring-alo-ph-circle"></div>
    <div class="ring-alo-ph-circle-fill"></div>
    <div class="ring-alo-ph-img-circle">
      <a href="tel:Tạm Nghỉ">
        <noscript>
          <img class="lazy" src="https://gaigoidep.us/wp-content/goi.png" alt="G">
        </noscript>
        <img class="lazy lazyloaded" src="https://gaigoidep.us/wp-content/goi.png" data-src="https://gaigoidep.us/wp-content/goi.png" alt="G">
      </a>
    </div>
  </div>
  <div class="tel">
    <a href="tel:${getTel}">
      <p class="fone">${getTel}</p>
    </a>
  </div>
</div>`;
  $('body').append(htmlTel);
}

$('.container.quang-cao p.fs-4.pt-3').text(setting['2_QC']);
$('a.navbar-brand.md.d-none.d-md-block, a.navbar-brand.xs.d-md-none').text(setting['1_trangChu']);

try {
  $(".f-post-author-name p").html('Xuất bản ' + getDatetime(arrPost.datePublished));

  $(".labelpost")
    .html(arrPost.labels[0].label)
    .attr("href", "/search/label/" + arrPost.labels[0].label);
} catch (e) {}
