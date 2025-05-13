/*create database db_tarefas;
show databases;

use db_tarefas;

create table tarefa(
id int primary key,
titulo varchar(50) not null,
descricao varchar(200) not null,
dataInicio datetime not null,
dataFim datetime not null,
concluido tinyint(1) not null
);

show tables;

insert into tarefa (id, titulo, descricao, dataInicio, dataFim, concluido) values
(1, 'Estudar SQL', 'Estudar comandos básicos de SQL', '2025-04-20 08:00:00', '2025-04-20 10:00:00', true),
(2, 'Fazer exercícios', 'Exercícios de banco de dados', '2025-04-21 14:00:00', '2025-04-21 16:00:00', false),
(3, 'Reunião de projeto', 'Reunião com o time para revisar tarefas', '2025-04-22 09:30:00', '2025-04-22 11:00:00', true),
(4, 'Atualizar sistema', 'Deploy de nova versão no servidor', '2025-04-23 18:00:00', '2025-04-23 20:00:00', false),
(5, 'Escrever relatório', 'Relatório mensal de atividades', '2025-04-24 13:00:00', '2025-04-24 15:30:00', false);

select * from tarefa;

alter table tarefa
modify column id int not null auto_increment;

select * from tarefa*/
