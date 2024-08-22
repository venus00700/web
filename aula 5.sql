create database teste;
use teste;
drop database teste;
create database empresa;
show databases;
use empresa;

create table cadfun (
codigo integer not null primary key auto_increment,
nome   varchar(40) not null,
dpto   char(2),
funcao char(20),
salario decimal(10, 2)
);
describe cadfun;

insert into cadfun (nome, dpto, funcao, salario)
values ('Joao da Silva', '2', 'Gerente', 7985.75);
INSERT INTO cadfun values (2, 'Wilson Macedo', '3', 'programador', 3985.75);
insert into cadfun values (3, 'Ana Bastos', '2', 'analista', 4985.75);

select * from cadfun;
select nome, funcao from cadfun;
select nome from cadfun where depto = '3';
select nome, salario from cadfun order by nome;
select nome, salario from cadfun order by nome desc;
select dpto, nome from cadfun order by dpto, nome desc;
select nome from cadfun where dpto = '3' order by nome;

update cadfun set dpto = '3' where nome = 'Ana Bastos';
update cadfun  set salario = salario * 1.10;

delete from cadfun;
delete from cadfun where nome = 'Marcelo Souza';
delete from cadfun where dpto = '2';

alter table cadfun add admissao date;

update cadfun set admissao = '2024-04-17' where funcao = 'programador';

select nome, admissao from cadfun where month(admissao) = 04;
select nome, admissao from cadfun where admissao >= '2024-01-01';

insert into copia_cadfun
select codigo, nome, dpto, funcao, salario
from cadfun
where codigo >= 2 and codigo <= 5;

create table copia_cadfun (
codigo integer not null primary key auto_increment,
nome   varchar(40) not null,
dpto   char(2),
funcao char(20),
salario decimal(10, 2)
);

select * from copia_cadfun;

-- teste

-- create database pessoas;
-- use pessoas;
-- DROP table PESSOAS;

-- create table pessoas(
-- codigo integer not null primary key auto_increment,
-- nome   varchar(40) not null,
-- cargo  char(20),
-- idade  integer,
-- genero char(1) );

-- insert into pessoas (NOME, CARGO, IDADE, GENERO) values ('Jung Hoseok', 'Artista', 22, 'M');
-- insert into pessoas (NOME, CARGO, IDADE, GENERO) values ('Fabio de Melo', 'Padre', 46, 'M');
-- insert into pessoas (NOME, CARGO, IDADE, GENERO) values ('Nicolas', 'Piloto de aviao', 24, 'M');

-- select * from pessoas;

select 5 + 7.5, 5 - 7.5, 5 * 7.5, 5 / 7.5;

select * from cadfun where (dpto = '3') and (funcao = 'programador');
select * from cadfun where (dpto = '3') or (dpto = '5');
select * from cadfun where not (funcao = 'Vendedor');
select * from cadfun where salario between 2700 and 5000;
select * from cadfun where dpto in ('2', '3');

select * from cadfun


