
const requests = [
    { title: "Ошибка входа", urgent: true },
    { title: "Вопрос по тарифу", urgent: false },
    { title: "Не проходит оплата", urgent: true },
    { title: "Изменение профиля", urgent: false },
    { title: "Сервис недоступен", urgent: true }
  ];
    
  for (const request of requests) { 
    if (request.urgent) {
        console.log(request.title);
    }
  }