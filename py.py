requests = [
    { "title": "Ошибка входа", "urgent": True },
    { "title": "Вопрос по тарифу", "urgent": False },
    { "title": "Не проходит оплата", "urgent": True },
    { "title": "Изменение профиля", "urgent": False },
    { "title": "Сервис недоступен", "urgent": True }
  ];

for request in requests:
    if request["urgent"]:
        print(request["title"])

        
        
    