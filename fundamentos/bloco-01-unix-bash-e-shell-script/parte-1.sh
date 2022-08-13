#!/bin/bash

long_delay=3

# REQUERIMENTS
echo "Criando diretório unix_tests"
mkdir unix_tests
sleep $long_delay

# Exercício 1
echo "Acessa o diretório unix_tests"
cd unix_tests
sleep $long_delay

# Exercício 2
echo "Adiciona Skills ao arquivo skills2.txt"
touch skills2.txt
echo 'Internet' >> skills2.txt
echo 'Unix' >> skills2.txt
echo 'Bash' >> skills2.txt
sleep $long_delay

# Exercício 3
echo "Adiciona mais 5 itens a lista de skills"
echo "React" >> skills2.txt
echo "Redux" >> skills2.txt
echo "Node" >> skills2.txt
echo "Express" >> skills2.txt
echo "Python" >> skills2.txt
sleep $long_delay

# Exercício 4
echo "Linhas do arquivo skills2.txt: $(cat skills2.txt | wc -l )"

# Exercício 5
# Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.
cat skills2.txt | sort | head -n 3 > top_skills.txt
sleep $long_delay

echo "\nApaga o diretório unix_tests"
cd ../ && rm -fr unix_tests

echo "Fim do exercício"