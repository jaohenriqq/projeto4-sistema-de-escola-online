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
const turmaA = new Turma("1ºA");

turmaA.adicionarDisciplina(matematica);
turmaA.adicionarAluno(aluno);

console.log(turmaA.disciplinas);

console.log(turmaA.alunos);

const nota1 = new Nota(8.5, matematica);
aluno.adicionarNota(nota1);

console.log(aluno.nota1);
