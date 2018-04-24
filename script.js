function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);
		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Apakah JavaScript bahasa pemrograman paling keren sedunia?',
						 ['Ya', 'Tidak'],
						 '0'); 
	var q2 = new Question('Siapa nama dosen yang mengajar kuliah ini ?',
						 ['John', 'Micheal', 'Oskar'],
						 '2');
	var q3 = new Question('Kata yang paling bagus mendeskripsikan koding',
						 ['Bosan', 'Susah', 'Membahagiakan', 'Membosankan'],
						 '3');
	var q4 = new Question('Apakah kamu sehat hari ini',
						 ['Tidak','Sehat'],
						 '1');
	var q5 = new Question('Siapa PUKET 1 STIKOM?',
						 ['Dhany Faizal Racm, M.Kom','Ir. GH Sumartono', 'Ary Setyawan, MA'],
						 '0');
    var q6 = new Question('Siapa PUKET 2 STIKOM?',
						 ['Dhany Faizal Racm, M.Kom','Ir. GH Sumartono', 'Ary Setyawan, MA'],
						 '1');
    var q7 = new Question('Siapa PUKET 3 STIKOM?',
						 ['Dhany Faizal Racm, M.Kom','Ir. GH Sumartono', 'Ary Setyawan, MA'],
						 '2');
    var q8 = new Question('Siapakah Kaprodi Sistem Informasi?',
						 ['Endang Setyawati, M.Kom','Adhi Wibowo, MM','Oskar Ika Adi Nugroho, MT'],
						 '0');
    var q9 = new Question('Siapakah Kaprodi Komputerisasi Akuntansi?',
						 ['Endang Setyawati, M.Kom','Adhi Wibowo, MM','Oskar Ika Adi Nugroho, MT'],
						 '1');
    var q10 = new Question('Siapakah Kaprodi Teknik Informatika',
						 ['Endang Setyawati, M.Kom','Adhi Wibowo, MM','Oskar Ika Adi Nugroho, MT'],
						 '2');
    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);
			questions[n].displayQuestion();
			var answer = prompt('Pilih jawaban yang benar!');
			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}
			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};