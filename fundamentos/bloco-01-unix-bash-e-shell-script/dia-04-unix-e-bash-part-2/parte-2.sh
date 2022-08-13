#!/bin/bash
delay=2

# Exercicio 1
echo "1 - Acessa a pasta unix_tests"
cd unix_tests
sleep $delay

# Exercicio 2
echo "2 - Roda o comando ls para ver permissões dos arquivos"
echo "$(ls -l)"
sleep $delay

# Exercicio 3
echo "3 - Mude a permissão do arquivo bunch_of_things.txt para leitura e escrita para todos os usuario e confere"
chmod 666 bunch_of_things.txt
echo "$(ls -l)"
sleep $delay

# Exercicio 4
echo "4 - Tira a permissão de escrita do arquivo `bunch_of_things.txt` para todos os usuarios e confere com o comando `ls -l`"
chmod ugo-w bunch_of_things.txt
echo "$(ls -l)"
sleep $delay