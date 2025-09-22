const Usuario = require('./class/Usuario')
const Aluno = require('./class/Aluno')
const Coordenador =  require('./class/Coordenador')
const Professor = require('./class/Professor')
const Disciplina = require('./class/Disciplina')
const Nota = require('./class/Nota')
const Turma = require('./class/Turma')


const aluno = new Aluno("Maria", 16)
const professor = new Professor("João", 35)
const coordenador = new Coordenador("Ana", 40)

console.log(aluno.acessoPainel())
console.log(professor.acessoPainel());
console.log(coordenador.acessoPainel());

const matematica = new Disciplina("Matemática", 70);
const portugues = new Disciplina("Português", 60);
const historia = new Disciplina("História", 50);
const turmaA = new Turma("1ºA");

turmaA.adicionarDisciplina(matematica);
turmaA.adicionarDisciplina(portugues);
turmaA.adicionarDisciplina(historia); 

turmaA.adicionarAluno(aluno);

console.log(turmaA.disciplinas);


const nota1 = new Nota(8.5, 'matematica');
aluno.adicionarNota(nota1);

const nota2 = new Nota(3.5 , 'portugues');
aluno.adicionarNota(nota2);

const nota3 = new Nota(2.5 , 'historia');
aluno.adicionarNota(nota3)

console.log('Nome do aluno:', aluno.getNome());
console.log(aluno.notas[0]);
console.log(aluno.notas[1])
console.log(aluno.notas[2])
