#!/bin/bash

short_delay=1
long_delay=2

# Exercício 1
echo "Criando diretório unix_tests"
mkdir unix_tests
cd unix_tests
sleep $short_delay

# Exercício 2
touch skills2.txt
echo 'Internet' >> skills2.txt
echo 'Unix' >> skills2.txt
echo 'Bash' >> skills2.txt
sleep $long_delay

echo "Fim do exercício"