export const getServerSideProps = (pageId) =>
	SPECIALISTS_DATA.find(({ id }) => id === pageId);

export const SPECIALISTS_DATA = [
	{
		id: "1",
		img: "/image/portf-1.jpg",
		firstname: "Никитина",
		lastname: "Ольга Владимировна",
		fastinfo: "Психолог в сфере эмоционально-образной терапии",
		profession: "Эмоционально-образовательная терапии",

		experience: "Стаж психологического консультирования: 20 лет",
		esse: "Мой путь в психологию начался около 30  лет назад.",
		esse2:
			"Тогда   в попытках понять и разрешить свои личные проблемы я впервые обратилась к психологу, начала посещать различные психологические курсы.",
		esse3:
			"Уже потом я получила высшее образование в одном их ведущих психологических вузов страны. И продолжаю учиться до сих пор, получая дополнительное профильное образование.",
		esse4: "В профессиональной психологии  работаю с 2003 года.  ",
		esse5:
			"Я умею внимательно слушать, наблюдать, сопоставлять. Я помогаю клиенту понять, как он выбирает свои эмоции, чувства. Помогаю человеку изменить свои реакции, если они не ведут его к состоянию счастья. Для меня психотерапия — это совместное исследование и душевный труд клиента. ",
		esse6:
			"В процессе терапии беспокойство обращается в энтузиазм, вместо депрессии и подавленности возвращается наслаждение жизнью.",
		esse7:
			"За время учебы и работы я видела много перемен в жизни клиентов и своей собственной. ",
		esse8: "Поэтому я  точно знаю: это работает.",

		workside: "Диапазон тем, с которыми я работаю достаточно широк.",
		workside2:
			"1.	Проблемы в эмоциональной сфере: страхи, фобии, обиды, гнев, стыд, вина, тревожность, сниженное настроение, навязчивые мысли.",
		workside3:
			"2.	 Проблемы во взаимоотношениях с людьми: с партнером, с детьми, с родственниками, с коллегами, с друзьями…",
		workside4:
			"3.	Проблемы личностного характера: неуверенность в себе, хроническая неуспешность, помогу исследовать вопросы Вашего смысла жизни.",
		workside5:
			"4.	Психологическая травма: развод, расставание, насилие (сексуальное, физическое, эмоциональное), утрата (человека, статуса, вещи…).",
		education:
			"В 2007 году я окончила Московский Городской  Психолого Педагогический Университет (МГППУ) по специальности «психолог, преподаватель психологии».",
		education2:
			"В период с 2000 по 2019 год получала дополнительное образование на курсах и в различных школах психологии. Прошла долгосрочное обучение в Московском Гештальт-институте (МГИ). Обучалась НЛП, Эриксоновскому гипнозу, Расстановкам, Работе с Метафорические Картами. Прошла сертифицированное обучение Медицинской психологии, Нарративному подходу.",
		education3:
			"В 2019 году я впервые познакомилась с Эмоционально-Образной Терапией. Окончила обучение в Институте эмоционально-образной терапии Н.Д. Линде по программам: «Базовый курс эмоционально-образной терапии» (I, II, III ступени), «Работа с психотравмой методами ЭОТ», «Работа с внутренним ребенком и внутренним родителем методами ЭОТ» (по программе переквалификации).",
		education4: "Я влюбилась в ЭОТ, этот метод  стал основным в моей работе.",
	},
	{
		id: "2",
		img: "/image/portf-2.jpg",
		firstname: "Петрова",
		lastname: "Светлана Анатольевна",
		fastinfo: "Психолог в сфере эмоционально-образной терапии",
		profession: "Эмоционально-образовательная терапииг",

		experience: "Стаж психологического консультирования: 5 лет",
		esse: "Изначально интерес к психологии появился у меня в спортивной карьере. Будучи спортсменкой, в 80-е годы искала варианты помощи себе как справляться со стрессом, а в дальнейшем будучи тренером этот интерес окреп окончательно. Хотелось быстрого решения проблем спортсменов, началось изучение и обучения психологии. Завершая тренерскую деятельность, ушла в мою любимую психологию. Начала консультировать в гражданской психологии. Появились первые результаты, появилось огромное желание перенести этот опыт в спортивную психологию. ",
		esse2:
			" Моя работа сейчас направлена на исполнение моего желания – видеть рядом счастливых людей, познавших бережное отношение к себе, уважающих свою целостность. Такие люди создают мир вокруг, подобной внутреннему содержанию.",
		workside:
			"Эмоциональная сфера: любые ваши страхи, фобии, обиды, гнев, стыд, вина, долженствование, тревожность – могут уйти и больше, не вернуться в вашу жизнь. ",
		workside2:
			"Отношения: вместе, мы сможем разрешить проблемы с партнёром, с детьми, родственниками, друзьями, коллегами, тренерами, начальниками. ",
		workside3:
			"Внутренние самоотношение: в процессе работы идем к настоящему, истинному «Я». Вместе с этим вы разрешите все проблемы личностного характера, такие как: неуверенность в себе, хроническая неуспешность, отсутствие смысла жизни. И психологические травмы: это развод, расставание, утрата близкого человека, питомца; потеря денег, работы, дома.",

		education:
			'Официально в психологии нахожусь с 2019 г. Получила образование в Кубанском Государственном Университете Физической Культуры Спорта и Туризма, на направлении: «Психологическое сопровождение спортсменов» Обучалась работе с метафорическими картами также знакома с провокативный методом. В 2019 году я познакомилось с Эмоционально-Образной терапией, прошла обучение в Институте Эмоционально-Образной терапии Н.Д. Линде (г. Москва) по программам: «Базовый курс эмоционально-образной терапии» (I, II, III ступени), «Работа с внутренним ребенком и внутренним родителем методами ЭОТ» (I, II, III ступени), «Работа с симбиотической травмой», «Психотравма» (I, II ступень) «Психосоматика в сексуальной сфере методом ЭОТ» (I, II ступень) «Эмоционально-образная терапия в работе с гамартическим сценарием». Сейчас прохожу обучение на курсе "Работа с горем".',
	},
	{
		id: "3",
		img: "/image/portf-4.jpg",
		firstname: "Попова",
		lastname: "Юлия Констанитиновна",
		fastinfo: "Психолог в сфере эмоционально-образной терапии",
		profession: "Эмоционально-образовательная терапии",

		experience: "Стаж психологического консультирования: 3 лет",
		esse: "Психологией увлекалась еще в школе, однако всерьез связала свою жизнь с профессией психолога гораздо позднее, когда столкнулась с тяжелыми обстоятельствами и на своем опыте убедилась в эффективности психологической поддержки. Пробовала разные направления в поисках той модальности, которая подошла бы именно мне. И нашла, открыв для себя метод эмоционально-образной терапии (ЭОТ).",
		esse2:
			"ЭОТ позволяет быстро и точно обнаружить проблему, решить ее в максимально возможные сроки, получить надёжный результат. Отличается мягкостью, бережностью, гуманностью. Мы не вторгается в бессознательное клиента, но следуем за ним, предоставляя достаточно свободы для осознаний, мягко направляем его, помогая прийти к желаемому результату.",
		esse3: "Приходите и вы, чтобы ощутить живительный эффект ЭОТ на себе.",
		workside:
			"Я работаю с любыми видами запросов. С моей помощью Вы справитесь с тревогой, страхом, виной, стыдом, обидой, гневом, неуверенностью, неуспешностью, другими болезненными чувствами и вернете душевное равновесие; освободитесь от эмоциональной зависимости; разрешите семейные разногласия; улучшите отношения с близкими и коллегами; достигнете конструктивных перемен в жизни; станете больше понимать и принимать себя, а также проявлять свой потенциал. Я также работаю с разного рода травмами, например, травмой насилия, и помогаю пройти через потерю, будь то потеря значимого человека, социального статуса, работы, места жительства или здоровья.",
		education:
			'Мой профессиональный путь в психологии начался в 2020 году. Я окончила обучение в Институте эмоционально-образной терапии Н.Д. Линде (г. Москва) по программам: «Базовый курс эмоционально-образной терапии» (I, II, III ступени), «Работа с внутренним ребенком и внутренним родителем методами ЭОТ» (I, II, III ступени), «Работа с симбиотической травмой», «Эмоционально-образная терапия в работе с гамартическим сценарием». Сейчас прохожу обучение на курсе "Психосоматика".',
	},
];