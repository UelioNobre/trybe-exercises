#!/bin/bash

long_delay=2

# Exercício 1
echo "1 - Acessa o diretório unix_tests"
cd unix_tests
sleep $long_delay

# Exercício 2
echo "2 - Adiciona Skills ao arquivo skills2.txt"
touch skills2.txt
echo 'Internet' >> skills2.txt
echo 'Unix' >> skills2.txt
echo 'Bash' >> skills2.txt
sleep $long_delay

# Exercício 3
echo "3 - Adiciona mais 5 itens a lista de skills"
echo "React" >> skills2.txt
echo "Redux" >> skills2.txt
echo "Node" >> skills2.txt
echo "Express" >> skills2.txt
echo "CSS" >> skills2.txt
sleep $long_delay

# Exercício 4
echo "4 - Linhas do arquivo skills2.txt - $(cat skills2.txt | wc -l )"
sleep $long_delay

# Exercício 5
echo "5 - Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética."
cat skills2.txt | sort | head -n 3 > top_skills.txt
sleep $long_delay

# Exercício 6
echo "6 - Cria arquivo chamado phrases2.txt e adiciona algumas frases."
touch phrases2.txt

echo "Enquanto visamos o próximo século, líderes serão aqueles que empoderarão outros." >> phrases2.txt
echo "Liderança é a arte de fazer com que uma pessoa faça o que você quer porque ela quer fazer isso." >> phrases2.txt
echo "A seleção brasileira perdeu de 7x1 para Alemanha." >> phrases2.txt
echo "O que você faz tem mais impacto do que o que você diz." >> phrases2.txt
echo "Você não precisa de um título para agir como líder." >> phrases2.txt
sleep $long_delay

# Exercício 7
echo "7 - O arquivo phrases tem $(cat phrases2.txt | grep 'br' | wc -l) que contem as letras br."
sleep $long_delay

# Exercício 8
echo "8 - Linhas que não contem br $(cat phrases2.txt | grep -v 'br' | wc -l)."
sleep $long_delay

# Exercício 9
echo "9 - Adicione dois nomes de países ao final do arquivo phrases2.txt."
tail -2 countries.txt >> phrases2.txt
sleep $long_delay

# Exercício 10
echo "10 - Cria arquivo bunch_of_things.txt com conteudos de phrases2.txt e countries.txt"
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep $long_delay

# Exercício 11
echo "11 - Cria arquivo bunch_of_things_ordered com o conteúdo do arquivo bunch_of_things ordenado."
sort < bunch_of_things.txt > bunch_of_things_ordered.txt