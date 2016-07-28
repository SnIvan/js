var form = {

	title: "Тест по программированию",
	questions: ["Вопрос №1", "Вопрос №2", "Вопрос №3"],
	answers: [["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]],
	btm: 'Проверить мои результаты',

	form_question: function(title) {

		var h1 = document.createElement('h1');

		h1.innerHTML = this.title;
		document.body.appendChild(h1);
	},
	render: function () {

		var q = this.questions.length;
		var p, ul, answLength, li, chk, textElem, label;

		for (var i = 0; i < q; i++) {

			p = document.createElement('p');
			p.innerHTML = (i + 1) + ". " + this.questions[i];
			document.body.appendChild(p);

			ul = document.createElement('ul');
			p.appendChild(ul);

			answLength = this.answers[i].length;

			for (var j = 0; j < answLength; j++) {

				li = document.createElement('li');

				chk = document.createElement('input');
				chk.setAttribute('type', 'checkbox');
				chk.setAttribute('id', 'check' +i+j);
				
				label = document.createElement('label');
				label.setAttribute('for', 'check' +i+j)
				textElem = document.createTextNode(this.answers[i][j]);
				
				label.appendChild(textElem);
				li.appendChild(label);
				li.appendChild(chk);
				ul.appendChild(li);
			}
		}
	},
	bot: function(btn) {

		var but = document.createElement('button');
		but.innerHTML = this.btm;
		document.body.appendChild(but);
	}
}

form.form_question();
console.log(form);
form.render();
form.bot();