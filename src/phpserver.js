const serverAnswer = function (formSelectors, url) {
  const postData = async (url, data) => {
    const ans = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });
    if (!ans.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await ans.json();
  };

  const bindpostData = function (form, url) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let formData = new FormData(form);
      formData = Object.fromEntries(formData.entries());
      postData(url, JSON.stringify(formData))
        .then((data) => data.text())
        .then((serverAnswer) => {
          console.log(serverAnswer);
        });
    });
  };
  formSelectors.forEach((item) => {
    bindpostData(item, url);
  });
};

export default serverAnswer;

//"../server.php"

// const request = new XMLHttpRequest();
// request.open("POST", "../server.php");

// fetch(<ссылка на сервер>, <method: метод>, <headers: XML заголовок>, <body: Объект>)
// ПОТОМ ЧЕРЕЗ THEN УКАЗЫВАЕМ ПРОМИСЫ
// ЕДИНСТВЕННАЯ ПРОБЛЕМА, ЧТО ЧЕРЕЗ FETCH НЕ УДОБНО ОБРАБАТЫВАТЬ ОШИБКИ
// ИЛИ Я ПОКА НЕ ЗНАЮ КАК ЭТО СДЕЛАТЬ
// fetch("../server.php", {
// fetch("http://localhost:3000/requests", {
//   method: "POST",
//   headers: { "Conten-type": "application/json" },
//   body: JSON.stringify(object),
// })
