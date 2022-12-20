const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});


function sort(){
    let arr = document.getElementsByTagName("input");
    let num1 = arr[0].value;
    let num2 = arr[1].value;
    let num3 = arr[2].value;
    let e = [num1, num2, num3];
    e.sort(function(a, b){return a - b});
    document.getElementById("txtSort").innerHTML = e;
}

function wave(){
    let e = document.getElementById("selectUser");
    document.getElementById("txtUser").innerHTML = "Xin chào " + e.options[e.selectedIndex].text + "!";
}

function countNumber(){
    let e = document.getElementById("inputCount1").value,
     t = document.getElementById("inputCount2").value,
     n = document.getElementById("inputCount3").value,
     a = 0;
    if (e % 2 == 0) {
        a++;
    }
    if (t % 2 == 0) {
        a++;
    }
    if (n % 2 == 0) {
        a++;
    }
    document.getElementById("txtCount").innerHTML = "Số chẵn là: " + a + ", số lẻ là: " + (3 - a);
}

function guessTriangle(){
    let e = document.getElementById("inputEdge1").value,
        t = document.getElementById("inputEdge2").value,
        n = document.getElementById("inputEdge3").value;
    if (e == t && t == n) {
        document.getElementById("txtGuess").innerHTML = "Tam giác đều";
    }
    else if (e == t || t == n || e == n) {
        document.getElementById("txtGuess").innerHTML = "Tam giác cân";
    }
    else if (e * e + t * t == n * n || e * e + n * n == t * t || t * t + n * n == e * e)  {
        document.getElementById("txtGuess").innerHTML = "Tam giác vuông";
    }
    else {
        document.getElementById("txtGuess").innerHTML = "Tam giác thường";
    }
    if (e + t <= n || e + n <= t || t + n <= e) {
        document.getElementById("txtGuess").innerHTML = "Không phải tam giác";
    }
}

function calcYesterday(){
    let e = document.getElementById("inputDate").value,
        t = document.getElementById("inputMonth").value,
        n = document.getElementById("inputYear").value;
    if (e < 1 || e > 31 || t < 1 || t > 12 || n < 1) {
        document.getElementById("txtDay").innerHTML = "Dữ liệu không hợp lệ";
    }
    else {
        if (t == 1 || t == 3 || t == 5 || t == 7 || t == 8 || t == 10 || t == 12) {
            if (e == 1) {
                e = 31;
                if (t == 1) {
                    t = 12;
                    n--;
                }
                else {
                    t--;
                }
            }
            else {
                e--;
            }
        }
        else if (t == 4 || t == 6 || t == 9 || t == 11) {
            if (e == 1) {
                e = 30;
                t--;
            }
            else {
                e--;
            }
        }
        else {
            if (n % 4 == 0) {
                if (e == 1) {
                    e = 29;
                    t--;
                }
                else {
                    e--;
                }
            }
            else {
                if (e == 1) {
                    e = 28;
                    t--;
                }
                else {
                    e--;
                }
            }
        }
        document.getElementById("txtDay").innerHTML = "Hôm qua là ngày " + e + "/" + t + "/" + n;
    }
}

function calcTomorrow(){
    let e = document.getElementById("inputDate").value,
        t = document.getElementById("inputMonth").value,
        n = document.getElementById("inputYear").value;
    if (e < 1 || e > 31 || t < 1 || t > 12 || n < 1) {
        document.getElementById("txtDay").innerHTML = "Dữ liệu không hợp lệ";
    }
    else {
        if (t == 1 || t == 3 || t == 5 || t == 7 || t == 8 || t == 10 || t == 12) {
            if (e == 31) {
                e = 1;
                if (t == 12) {
                    t = 1;
                    n++;
                }
                else {
                    t++;
                }
            }
            else {
                e++;
            }
        }
        else if (t == 4 || t == 6 || t == 9 || t == 11) {
            if (e == 30) {
                e = 1;
                t++;
            }
            else {
                e++;
            }
        }
        else {
            if (n % 4 == 0) {
                if (e == 29) {
                    e = 1;
                    t++;
                }
                else {
                    e++;
                }
            }
            else {
                if (e == 28) {
                    e = 1;
                    t++;
                }
                else {
                    e++;
                }
            }
        }
        document.getElementById("txtDay").innerHTML = "Ngày mai là ngày " + e + "/" + t + "/" + n;
    }
}

function readNumber(){
    // transform hundread numbers to text with inputNum4
    let e = document.getElementById("inputNum4").value;
    if (e < 0 || e > 999) {
        document.getElementById("txtNum4").innerHTML = "Dữ liệu không hợp lệ";
    }
    else {
        let t = Math.floor(e / 100),
            n = Math.floor((e - t * 100) / 10),
            a = e - t * 100 - n * 10;
        if (t == 0 && n == 0 && a == 0) {
            document.getElementById("txtNum4").innerHTML = "Không";
        }
        else {
            let r = "";
            if (t == 1) {
                r += "Một trăm ";
            }
            else if (t == 2) {
                r += "Hai trăm ";
            }
            else if (t == 3) {
                r += "Ba trăm ";
            }
            else if (t == 4) {
                r += "Bốn trăm ";
            }
            else if (t == 5) {
                r += "Năm trăm ";
            }
            else if (t == 6) {
                r += "Sáu trăm ";
            }
            else if (t == 7) {
                r += "Bảy trăm ";
            }
            else if (t == 8) {
                r += "Tám trăm ";
            }
            else if (t == 9) {
                r += "Chín trăm ";
            }
            if (n == 1) {
                if (a == 0) {
                    r += "mười";
                }
                else if (a == 1) {
                    r += "mười một";
                }
                else if (a == 2) {
                    r += "mười hai";
                }
                else if (a == 3) {
                    r += "mười ba";
                }
                else if (a == 4) {
                    r += "mười bốn";
                }
                else if (a == 5) {
                    r += "mười lăm";
                }
                else if (a == 6) {
                    r += "mười sáu";
                }
                else if (a == 7) {
                    r += "mười bảy";
                }
                else if (a == 8) {
                    r += "mười tám";
                }
                else if (a == 9) {
                    r += "mười chín";
                }
            }
            else {
                if (n == 2) {
                    r += "hai mươi ";
                }
                else if (n == 3) {
                    r += "ba mươi ";
                }
                else if (n == 4) {
                    r += "bốn mươi ";
                }
                else if (n == 5) {
                    r += "năm mươi ";
                }
                else if (n == 6) {
                    r += "sáu mươi ";
                }
                else if (n == 7) {
                    r += "bảy mươi ";
                }
                else if (n == 8) {
                    r += "tám mươi ";
                }
                else if (n == 9) {
                    r += "chín mươi ";
                }
                if (a == 1) {
                    r += "mốt";
                }
                else if (a == 2) {
                    r += "hai";
                }
                else if (a == 3) {
                    r += "ba";
                }
                else if (a == 4) {
                    r += "bốn";
                }
                else if (a == 5) {
                    r += "năm";
                }
                else if (a == 6) {
                    r += "sáu";
                }
                else if (a == 7) {
                    r += "bảy";
                }
                else if (a == 8) {
                    r += "tám";
                }
                else if (a == 9) {
                    r += "chín";
                }
            }
            document.getElementById("txtNum4").innerHTML = r;

    
        }   
    }
}

function searchLocation(){
    let e = document.getElementById("inputX1").value,
        t = document.getElementById("inputY1").value,
        n = document.getElementById("inputName1").value,
        a = document.getElementById("inputX2").value,
        r = document.getElementById("inputY2").value,
        i = document.getElementById("inputName2").value,
        o = document.getElementById("inputX3").value,
        s = document.getElementById("inputY3").value,
        l = document.getElementById("inputName3").value,
        h = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)),
        g = Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2)),
        v = Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2));
    if (h > g && h > v) {
        document.getElementById("txtSearch").innerHTML = "Sinh viên xa trường nhất: " + n;
    }
    else if (g > h && g > v ) {
        document.getElementById("txtSearch").innerHTML = "Sinh viên xa trường nhất: " + i;
    }
    else if (v > h && v > g) {
        document.getElementById("txtSearch").innerHTML = "Sinh viên xa trường nhất: " + l;
    }
}