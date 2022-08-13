#!/bin/bash

long_delay=2

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
echo "CSS" >> skills2.txt
sleep $long_delay

# Exercício 4
echo "Linhas do arquivo skills2.txt - $(cat skills2.txt | wc -l )"
sleep $long_delay

# Exercício 5
# Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.
cat skills2.txt | sort | head -n 3 > top_skills.txt
sleep $long_delay

# Exercício 6
touch phrases2.txt
echo "Enquanto visamos o próximo século, líderes serão aqueles que empoderarão outros." >> phrases2.txt
echo "Liderança é a arte de fazer com que uma pessoa faça o que você quer porque ela quer fazer isso." >> phrases2.txt
echo "A seleção brasileira perdeu de 7x1 para Alemanha." >> phrases2.txt
echo "O que você faz tem mais impacto do que o que você diz." >> phrases2.txt
echo "Você não precisa de um título para agir como líder." >> phrases2.txt
sleep $long_delay

# Exercício 7
echo "O arquivo phrases tem $(cat phrases2.txt | grep 'br' | wc -l) que contem as letras br."
sleep $long_delay

# Exercício 8
echo "Linhas que não contem br $(cat phrases2.txt | grep -v 'br' | wc -l)."
sleep $long_delay

# Exercício 9
echo "Adicione dois nomes de países ao final do arquivo phrases2.txt."
tail -2 countries.txt >> phrases2.txt
sleep $long_delay

# Exercício 10
echo "Cria arquivo bunch_of_things.txt com conteudos de phrases2.txt e countries.txt"
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep $long_delay


echo "\nApaga o diretório unix_tests"
# cd ../ && rm -fr unix_tests
sleep $long_delay

echo "Fim do exercício"