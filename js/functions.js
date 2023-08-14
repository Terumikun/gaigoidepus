function getDatetime(data) {
  var nam = data.split("-")[0];
  var thang = data.split("-")[1];
  var ngay = data.split("-")[2].split("T")[0];
  var ketqua = ngay + "/" + thang + "/" + nam;
  return ketqua;
}
function owlCarousel() {
  $("#new-post-slide").owlCarousel({
    loop: true,
    margin: 4,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      424: {
        items: 2,
      },
      768: {
        items: 2,
      },
      860: {
        items: 3,
      },
      1280: {
        items: 3,
      },
      1367: {
        items: 4,
      },
    },
    navText: [
      "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
      "<i class='fa fa-chevron-right' aria-hidden='true'></i>",
    ],
  });
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

function rutgon(t, e) {
  for (var i = t.split("<"), s = 0; s < i.length; s++)
    -1 != i[s].indexOf(">") &&
      (i[s] = i[s].substring(i[s].indexOf(">") + 1, i[s].length));
  return (i = i.join("")), i.substring(0, e - 1);
}

function randomSort() {
  return 0.5 - Math.random();
}

function htmltotext(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function htmlUnescape(str) {
  return $("<div/>").html(str).text();
}

function time_ago(e) {
  switch (typeof e) {
    case "number":
      break;
    case "string":
      e = +new Date(e);
      break;
    case "object":
      e.constructor === Date && (e = e.getTime());
      break;
    default:
      e = +new Date();
  }
  var t = [
      [60, "giây", 1],
      [3600, "phút", 60],
      [86400, "giờ", 3600],
      [172800, "Hôm qua", "Tomorrow"],
      [604800, "ngày", 86400],
      [2419200, "tuần", 604800],
      [29030400, "tháng", 2419200],
      [290304e4, "năm", 29030400],
      [580608e5, "thế kỉ", 290304e4],
    ],
    r = (+new Date() - e) / 1e3,
    a = "trước",
    n = 1;
  if (0 == r) return "Vừa cập nhật";
  0 > r && ((r = Math.abs(r)), (a = "from now"), (n = 2));
  for (var o, c = 0; (o = t[c++]); )
    if (r < o[0])
      return "string" == typeof o[2]
        ? o[n]
        : Math.floor(r / o[2]) + " " + o[1] + " " + a;
  return e;
}
