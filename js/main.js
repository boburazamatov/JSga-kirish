var kirish =('Bizning tur firmaga xush kelibsiz.') 
console.log(kirish);
var name = prompt('Xurmatli mijoz ismingizni kiriting');
console.log(name);
var age = prompt('Yoshingizni kiriting');
console.log(age);
var pay;
console.log(pay);
alert('Salom ! ' + name + '. Siz qayerga sayohat qilishni istaysiz. Sayohat qilishni istasangiz "OK" tugmasini bosing.');

pay = prompt("Pul miqdori $ da.");
if(pay >= 8000) {
    alert("Siz Amerikaga sayohat qilishingiz mumkin");
}
else if(pay >= 6000 && pay < 8000) {
    alert("Siz Shvetsariyaga sayohat qila olasiz");
}
else  if(pay >= 4000 && pay < 6000) {
    alert("Bali Orollariga sayohat qila olasiz");
}
if(pay >= 2000 && pay < 4000) {
    alert("Siz Dubayga sayohat qila olsiz");
}
if(pay >= 500 && pay < 2000) {
    alert("Siz Rossiyaga sayohat qilishingiz mumkin");
}
if(pay < 500) {
    alert("Hurmatli mijoz siz hali pul ishlab topishingiz kerak yoki O'zbekiston bo`ylab sayohatga chiqing");
}