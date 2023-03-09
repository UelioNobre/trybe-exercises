-- Entre no banco de dados mysql.
USE mysql;

-- Visualize todas as tabelas desse banco.
SHOW TABLES;

-- Visualize a estrutura de pelo menos 10 tabelas 
-- diferentes e tente entender o tipo de estrutura 
-- que costuma ser utilizada.
DESCRIBE users;
DESCRIBE servers;
DESCRIBE event;
DESCRIBE db;
DESCRIBE func;
DESCRIBE time_zone;
DESCRIBE general_log;
DESCRIBE help_category;
DESCRIBE plugin;
DESCRIBE engine_cost;

-- Crie um novo banco de dados com o seu nome e depois entre nele!
CREATE DATABASE fransuelio_nobre;
USE fransuelio_nobre;