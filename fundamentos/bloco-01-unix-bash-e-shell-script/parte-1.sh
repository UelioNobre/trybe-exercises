#!/bin/bash

long_delay=3

# REQUERIMENTS
echo "Criando diretório unix_tests"
mkdir unix_tests
sleep $long_delay

# Exercício 1
echo "Exercício 1 - Acessar o diretório unix_tests"
cd unix_tests
sleep $long_delay

# Exercício 2
echo "Exercicio 2 - Adiciona Skills ao arquivo skills.txt"
touch skills2.txt
echo 'Internet' >> skills2.txt
echo 'Unix' >> skills2.txt
echo 'Bash' >> skills2.txt
sleep $long_delay

# Exercício 3
echo "Exercício 3 - Adiciona mais 5 itens a lista de skills"
echo "React" >> skills2.txt
echo "Redux" >> skills2.txt
echo "Node" >> skills2.txt
echo "Express" >> skills2.txt
echo "Python" >> skills2.txt
sleep $long_delay

# Exercício 4
echo "Linhas do arquivo skills2.txt: $(cat skills2.txt | wc -l )"

echo "\nApaga o diretório unix_tests"
cd ../ && rm -fr unix_tests

echo "Fim do exercício"