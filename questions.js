
/* =====================================================
   INICIALIZAÇÃO DO SISTEMA DE QUESTÕES
===================================================== */
window.questions = [];
let id = 1;

function addQuestion(area, difficulty, question, code, options, answer, explanation, trap){
    questions.push({
        id: id++,
        area,
        difficulty,
        question,
        code,
        options,
        answer,
        explanation,
        trap
    });
}

/* =====================================================
    BLOCO 1: LÓGICA DE PROGRAMAÇÃO
===================================================== */

addQuestion(
    "Lógica de Programação", "Fácil",
    "Considere o algoritmo abaixo. Qual será o valor final de x?",
    "x = 6\ny = 3\n\nif(x > y){\n    x = x - y;\n}else{\n    x = x + y;\n}\n\nx = x * 2;",
    ["A) 6", "B) 18", "C) 3", "D) 6"],
    "A",
    "Inicialmente x=6 e y=3. Como x é maior que y, ocorre x=x-y, resultando em 3. Depois x é multiplicado por 2, chegando em 6.",
    "Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Considere o algoritmo abaixo. Qual será o valor final de x?",
    "x = 7\ny = 4\n\nif(x > y){\n    x = x - y;\n}else{\n    x = x + y;\n}\n\nx = x * 2;",
    ["A) 6", "B) 22", "C) 3", "D) 7"],
    "A",
    "Inicialmente x=7 e y=4. Como x é maior que y, ocorre x=x-y, resultando em 3. Depois x é multiplicado por 2, chegando em 6.",
    "Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Considere o algoritmo abaixo. Qual será o valor final de x?",
    "x = 8\ny = 2\n\nif(x > y){\n    x = x - y;\n}else{\n    x = x + y;\n}\n\nx = x * 2;",
    ["A) 12", "B) 20", "C) 6", "D) 8"],
    "A",
    "Inicialmente x=8 e y=2. Como x é maior que y, ocorre x=x-y, resultando em 6. Depois x é multiplicado por 2, chegando em 12.",
    "Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor final impresso para a variável 'res' ao término do algoritmo abaixo?",
    "int res = 1;\nfor(int i = 1; i <= 5; i++){\n    if(i % 2 == 0){\n        res += i;\n    } else {\n        res -= 1;\n    }\n}\nSystem.out.println(res);",
    ["A) 4", "B) 7", "C) 6", "D) 5"],
    "C",
    "Passo a passo:\n- i=1 (ímpar): res = 1 - 1 = 0\n- i=2 (par): res = 0 + 2 = 2\n- i=3 (ímpar): res = 2 - 1 = 1\n- i=4 (par): res = 1 + 4 = 5\n- i=5 (ímpar): res = 5 - 1 = 4.",
    "Rastreie com atenção os operadores de atribuição acumulativa (+= e -=)."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é o comportamento do algoritmo abaixo ao receber n = 5?",
    "int calc(int n){\n    if(n == 0) return 1;\n    return n * calc(n - 1);\n}",
    ["A) Retorna 5", "B) Retorna 120", "C) Retorna 25", "D) Entra em loop infinito"],
    "B",
    "O algoritmo calcula o fatorial de n. Para n=5, o resultado é 5 * 4 * 3 * 2 * 1 = 120.",
    "Caso base (n=0 retorna 1) interrompe a recursão com segurança."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Em lógica booleana, qual é o resultado da expressão abaixo?",
    "boolean v = (true && false) || (true && true);",
    ["A) true", "B) false", "C) null", "D) undefined"],
    "A",
    "(true && false) resulta em false. (true && true) resulta em true. Logo, false || true resulta em true.",
    "Avalie primeiro os parênteses internos antes do operador OR (||)."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor impresso após a execução do trecho de código com matrizes?",
    "int[][] m = {{1, 2}, {3, 4}};\nint s = 0;\nfor(int i=0; i<2; i++){\n    s += m[i][i];\n}\nSystem.out.println(s);",
    ["A) 4", "B) 5", "C) 10", "D) 3"],
    "B",
    "O código soma os elementos da diagonal principal da matriz (m[0][0] + m[1][1]), ou seja, 1 + 4 = 5.",
    "m[i][i] acessa exatamente a diagonal principal em matrizes quadradas."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que faz um algoritmo de ordenação do tipo Bubble Sort ao varrer um vetor?",
    "// Conceito teórico de Bubble Sort",
    ["A) Divide o vetor recursivamente ao meio", "B) Compara elementos adjacentes e os troca de posição se estiverem na ordem errada", "C) Cria uma tabela hash temporária", "D) Seleciona sempre o menor elemento restante"],
    "B",
    "O Bubble Sort flutua os maiores elementos para o final do vetor através de sucessivas trocas de elementos vizinhos.",
    "Eficiência O(n²) no pior caso."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual estrutura de controle condicional é mais recomendada para tratar múltiplas ramificações discretas de uma mesma variável inteira ou caractere?",
    "// Seleção múltipla por valor",
    ["A) if-else encadeado profundo", "B) switch-case", "C) do-while", "D) recursão terminal"],
    "B",
    "O comando switch-case melhora a legibilidade e a performance em testes de igualdade múltiplos para uma única variável.",
    "Evita a poluição visual de muitos ifs aninhados."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor de x ao final da execução do código abaixo?",
    "int x = 10;\nif(x > 5) x *= 2;\nif(x > 15) x -= 5;\nelse x += 5;",
    ["A) 20", "B) 15", "C) 25", "D) 10"],
    "B",
    "x inicia em 10. 10 > 5 é verdadeiro, logo x vira 20. Na segunda condição, 20 > 15 é verdadeiro, logo executa x -= 5, resultando em 15. O bloco else é ignorado.",
    "Cuidado: o segundo 'if' é independente do primeiro, mas o 'else' pertence estritamente ao segundo 'if'."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que avalia uma estrutura de repetição do tipo 'do-while' em relação ao 'while' tradicional?",
    "do { ... } while(condicao);",
    ["A) O bloco de código é executado ao menos uma vez, pois a condição é avaliada no final", "B) A condição é testada antes de qualquer execução", "C) Ela substitui obrigatoriamente recursões complexas", "D) Ela não aceita contadores numéricos"],
    "A",
    "No do-while, o corpo executa primeiro e a condição de parada é checada no fim.",
    "Garante pelo menos uma execução do bloco interno."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual operador lógico representa a negação (inversão do valor booleano) na maioria das linguagens de programação?",
    "// Operador unário de inversão",
    ["A) &&", "B) ||", "C) !", "D) =="],
    "C",
    "O ponto de exclamação (!) inverte o valor booleano (true vira false, e vice-versa).",
    "Operador unário de negação lógica."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o resultado da operação de módulo (resto da divisão) para a expressão abaixo em Java/C?",
    "int r = -7 % 3;",
    ["A) -1", "B) 1", "C) -2", "D) 2"],
    "A",
    "Em Java e C, o operador de módulo preserva o sinal do dividendo (o primeiro operando). Portanto, -7 % 3 resulta em -1.",
    "Fique atento às especificidades matemáticas versus a implementação de linguagens de programação."
);

/* =====================================================
   QUESTÕES DE LÓGICA DE PROGRAMAÇÃO
===================================================== */

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor final impresso para a variável 'res' ao término do algoritmo abaixo?",
    "int res = 1;\nfor(int i = 1; i <= 5; i++){\n    if(i % 2 == 0){\n        res += i;\n    } else {\n        res -= 1;\n    }\n}\nSystem.out.println(res);",
    ["A) 4", "B) 7", "C) 6", "D) 5"],
    "C",
    "Passo a passo:\n- i=1 (ímpar): res = 1 - 1 = 0\n- i=2 (par): res = 0 + 2 = 2\n- i=3 (ímpar): res = 2 - 1 = 1\n- i=4 (par): res = 1 + 4 = 5\n- i=5 (ímpar): res = 5 - 1 = 4.",
    "Rastreie com atenção os operadores de atribuição acumulativa (+= e -=)."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é o comportamento do algoritmo abaixo ao receber n = 5?",
    "int calc(int n){\n    if(n == 0) return 1;\n    return n * calc(n - 1);\n}",
    ["A) Retorna 5", "B) Retorna 120", "C) Retorna 25", "D) Entra em loop infinito"],
    "B",
    "O algoritmo calcula o fatorial de n. Para n=5, o resultado é 5 * 4 * 3 * 2 * 1 = 120.",
    "Caso base (n=0 retorna 1) interrompe a recursão com segurança."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Em lógica booleana, qual é o resultado da expressão: `(true AND false) OR (true AND true)`?",
    "boolean v = (true && false) || (true && true);",
    ["A) true", "B) false", "C) null", "D) undefined"],
    "A",
    "(true && false) resulta em false. (true && true) resulta em true. Logo, false || true resulta em true.",
    "Avalie primeiro os parênteses internos antes do operador OR (||)."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor impresso após a execução do trecho de código com matrizes?",
    "int[][] m = {{1, 2}, {3, 4}};\nint s = 0;\nfor(int i=0; i<2; i++){\n    s += m[i][i];\n}\nSystem.out.println(s);",
    ["A) 4", "B) 5", "C) 10", "D) 3"],
    "B",
    "O código soma os elementos da diagonal principal da matriz (m[0][0] + m[1][1]), ou seja, 1 + 4 = 5.",
    "m[i][i] acessa exatamente a diagonal principal em matrizes quadradas."
);


addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor final impresso para a variável 'res' ao término do algoritmo abaixo?",
    "int res = 1;\nfor(int i = 1; i <= 5; i++){\n    if(i % 2 == 0){\n        res += i;\n    } else {\n        res -= 1;\n    }\n}\nSystem.out.println(res);",
    ["A) 4", "B) 7", "C) 6", "D) 5"],
    "C",
    "Passo a passo:\n- i=1 (ímpar): res = 1 - 1 = 0\n- i=2 (par): res = 0 + 2 = 2\n- i=3 (ímpar): res = 2 - 1 = 1\n- i=4 (par): res = 1 + 4 = 5\n- i=5 (ímpar): res = 5 - 1 = 4.",
    "Rastreie com atenção os operadores de atribuição acumulativa (+= e -=)."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é o comportamento do algoritmo abaixo ao receber n = 5?",
    "int calc(int n){\n    if(n == 0) return 1;\n    return n * calc(n - 1);\n}",
    ["A) Retorna 5", "B) Retorna 120", "C) Retorna 25", "D) Entra em loop infinito"],
    "B",
    "O algoritmo calcula o fatorial de n. Para n=5, o resultado é 5 * 4 * 3 * 2 * 1 = 120.",
    "Caso base (n=0 retorna 1) interrompe a recursão com segurança."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Em lógica booleana, qual é o resultado da expressão: `(true AND false) OR (true AND true)`?",
    "boolean v = (true && false) || (true && true);",
    ["A) true", "B) false", "C) null", "D) undefined"],
    "A",
    "(true && false) resulta em false. (true && true) resulta em true. Logo, false || true resulta em true.",
    "Avalie primeiro os parênteses internos antes do operador OR (||)."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor impresso após a execução do trecho de código com matrizes?",
    "int[][] m = {{1, 2}, {3, 4}};\nint s = 0;\nfor(int i=0; i<2; i++){\n    s += m[i][i];\n}\nSystem.out.println(s);",
    ["A) 4", "B) 5", "C) 10", "D) 3"],
    "B",
    "O código soma os elementos da diagonal principal da matriz (m[0][0] + m[1][1]), ou seja, 1 + 4 = 5.",
    "m[i][i] acessa exatamente a diagonal principal em matrizes quadradas."
);

// Adicione mais questões abaixo usando o mesmo formato...

console.log("Total de questões cadastradas:", questions.length);


/* =====================================================
   PROGRAMAÇÃO ORIENTADA A OBJETOS (POO)
===================================================== */

addQuestion(
    "POO", "Fácil",
    "Observe o código Java. Qual conceito está representado pela criação do objeto?",
    "class Servidor{\n   String nome;\n}\n\nServidor s = new Servidor();",
    ["A) Herança", "B) Instanciação", "C) Encapsulamento", "D) Polimorfismo"],
    "B",
    "A classe Servidor é utilizada para criar um objeto chamado s.",
    "Classe é o molde; objeto é a instância criada."
);

addQuestion(
    "POO", "Média",
    "Qual princípio da orientação a objetos é demonstrado?",
    "class Conta{\n   private double saldo;\n}",
    ["A) Herança", "B) Recursividade", "C) Encapsulamento", "D) Sobrecarga"],
    "C",
    "O modificador private restringe o acesso direto ao atributo saldo.",
    "Private está fortemente associado ao encapsulamento."
);

addQuestion(
    "POO", "Difícil",
    "Qual será a saída?",
    "class Animal{\n   void som(){\n      System.out.println(\"Animal\");\n   }\n}\n\nclass Cachorro extends Animal{\n   @Override\n   void som(){\n      System.out.println(\"Cachorro\");\n   }\n}\n\nAnimal a = new Cachorro();\na.som();",
    ["A) Animal", "B) Cachorro", "C) Erro", "D) Nenhuma saída"],
    "B",
    "O objeto criado é Cachorro. O método sobrescrito é executado por polimorfismo.",
    "Observe sempre o tipo real do objeto."
);

addQuestion(
    "POO", "Fácil",
    "Qual palavra-chave representa herança em Java?",
    "class Analista ______ Funcionario{\n}",
    ["A) implements", "B) extends", "C) inherit", "D) super"],
    "B",
    "Classes utilizam extends para herdar outra classe.",
    "implements é utilizado para interfaces."
);

addQuestion(
    "POO", "Fácil",
    "Qual pilar da POO permite criar novas classes baseadas em classes existentes, reaproveitando código e estabelecendo hierarquias?",
    "class Carro extends Veiculo",
    ["A) Encapsulamento", "B) Herança", "C) Polimorfismo", "D) Abstração"],
    "B",
    "A herança promove o reaproveitamento de atributos e métodos comuns na superclasse.",
    "Relação conceitual de especialização ('é-um')."
);

addQuestion(
    "POO", "Média",
    "Qual princípio do SOLID determina que uma classe deve ter apenas um, e apenas um, motivo para mudar?",
    "Single Responsibility Principle",
    ["A) Princípio da Responsabilidade Única (SRP)", "B) Princípio Aberto-Fechado (OCP)", "C) Inversão de Dependência (DIP)", "D) Segregação de Interfaces (ISP)"],
    "A",
    "O SRP evita classes monolíticas com múltiplas responsabilidades desconexas.",
    "Alta coesão está diretamente ligada ao cumprimento do SRP."
);

addQuestion(
    "POO", "Difícil",
    "O que estabelece o Princípio Aberto-Fechado (OCP) do SOLID?",
    "Módulos abertos para extensão, fechados para modificação",
    ["A) Classes devem ser abertas para alterações diretas no código-fonte original sempre que houver bug", "B) Entidades de software devem ser abertas para extensão, mas fechadas para modificação", "C) Interfaces não podem possuir métodos default", "D) Atributos privados devem ser tornados públicos para facilitar testes"],
    "B",
    "O OCP permite adicionar novos comportamentos estendendo o código (via herança ou polimorfismo) sem precisar alterar o código já testado e funcional.",
    "Base fundamental para design patterns flexíveis."
);

addQuestion(
    "POO", "Fácil",
    "O que representa uma Classe Abstrata em linguagens orientadas a objetos?",
    "public abstract class Conta",
    ["A) Um modelo que pode ser instanciado diretamente com o operador new", "B) Uma classe genérica que serve primariamente como base e não pode ser instanciada diretamente", "C) Uma interface que obrigatoriamente possui atributos estáticos", "D) Um erro de sintaxe de compilação"],
    "B",
    "Classes abstratas definem contratos parciais e comportamentos comuns para suas subclasses.",
    "Tentativa de dar 'new ClasseAbstrata()' gera erro de compilação."
);

addQuestion(
    "POO", "Média",
    "Qual é a principal diferença conceitual entre uma Interface e uma Classe Abstrata em Java moderno?",
    "Contratos puros vs Herança estrutural",
    ["A) Interfaces não podem declarar métodos", "B) Classes abstratas permitem herança múltipla irrestrita", "C) Interfaces definem contratos de comportamento sem estado de instância, enquanto classes abstratas podem conter estado e métodos concretos", "D) Não há nenhuma diferença prática"],
    "C",
    "Interfaces focam no 'o quê' o objeto faz (comportamento puro), enquanto classes abstratas compartilham código estrutural e estado.",
    "Java permite implementar múltiplas interfaces, mas herdar de apenas uma classe."
);

addQuestion(
    "POO", "Difícil",
    "O que caracteriza o acoplamento em um sistema orientado a objetos?",
    "Nível de dependência entre classes/módulos",
    ["A) A quantidade de linhas de código em um método", "B) O grau de interdependência entre os módulos; deseja-se sempre mantê-lo baixo", "C) A velocidade de execução da máquina virtual", "D) A duplicação de variáveis locais"],
    "B",
    "Alto acoplamento engessa o sistema, tornando manutenções e testes custosos. O ideal arquitetural é baixo acoplamento.",
    "Acoplamento baixo + Alta coesão = Código de alta qualidade."
);

addQuestion(
    "POO", "Fácil",
    "Qual modificador de acesso restringe a visibilidade de membros de uma classe apenas ao próprio pacote e às subclasses (mesmo em pacotes diferentes)?",
    "protected int idade;",
    ["A) private", "B) public", "C) protected", "D) static"],
    "C",
    "O modificador protected abre o escopo de visibilidade para herança e para o pacote local.",
    "private é estrito à classe; default restringe ao pacote."
);

addQuestion(
    "POO", "Média",
    "O que é polimorfismo de sobrecarga (Overloading)?",
    "Métodos com mesmo nome e assinaturas diferentes",
    ["A) Reescrita de métodos herdados na subclasse", "B) Declaração de múltiplos métodos com o mesmo nome na mesma classe, diferenciando-se pelos parâmetros", "C) Criação de objetos estáticos", "D) Ocultação de atributos privados"],
    "B",
    "A sobrecarga ocorre na mesma classe com assinaturas de parâmetros distintas (quantidade ou tipos).",
    "Diferente de sobrescrita (Overriding), que ocorre em herança."
);

addQuestion(
    "POO", "Difícil",
    "O que estabelece o Princípio da Inversão de Dependência (DIP) do SOLID?",
    "Depender de abstrações, não de implementações",
    ["A) Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações", "B) O banco de dados deve ser injetado diretamente no Controller", "C) Classes concretas nunca devem ser instanciadas", "D) Injeção de dependência é proibida em arquiteturas limpas"],
    "A",
    "O DIP desacopla componentes através de interfaces ou classes abstratas, facilitando testes unitários e trocas de tecnologia.",
    "Base conceitual para frameworks como Spring."
);

addQuestion(
    "POO", "Média",
    "O que significa encapsulamento em POO?",
    "Ocultamento de detalhes internos de implementação",
    ["A) Compactação de arquivos binários", "B) Ocultação do estado interno de um objeto, expondo apenas uma interface controlada de acesso", "C) Criação de cópias idênticas de objetos na memória RAM", "D) Herança múltipla de comportamentos"],
    "B",
    "O encapsulamento protege os dados contra alterações inválidas diretas, utilizando métodos de acesso controlados.",
    "Atributos private + métodos getters/setters públicos."
);

/* =====================================================
JAVA
===================================================== */

addQuestion(
"Java", "Fácil",
"Qual método é o ponto de entrada principal (main entry point) de uma aplicação Java executável?",
"public static void main(String[] args)",
["A) public void start(String[] args)", "B) public static void main(String[] args)", "C) private static void run(String args)", "D) public int main()"],
"B",
"A Java Virtual Machine (JVM) procura exatamente pela assinatura public static void main(String[] args) para iniciar a execução de um programa.",
"Sem esse método exato, a classe não pode ser executada diretamente como um aplicativo standalone."
);

addQuestion(
"Java", "Fácil",
"Qual dos seguintes tipos de dados em Java é considerado um tipo primitivo?",
"int idade = 25;",
["A) String", "B) Integer", "C) double", "D) BigDecimal"],
"C",
"O tipo double é primitivo e armazena números de ponto flutuante diretamente na pilha (stack). String, Integer e BigDecimal são classes (referências).",
"Tipos primitivos em Java começam com letra minúscula (int, char, boolean, double, etc.)."
);

addQuestion(
"Java", "Média",
"Qual é a principal diferença entre as classes String, StringBuilder e StringBuffer em relação à mutabilidade?",
"Manipulação de texto eficiente",
["A) Todas são imutáveis após a sua criação", "B) String é imutável, enquanto StringBuilder e StringBuffer são mutáveis", "C) StringBuilder é sincronizada para ambientes multi-thread, ao contrário de StringBuffer", "D) StringBuffer consome menos memória que String em qualquer cenário"],
"B",
"Objetos do tipo String não podem ser alterados após criados (qualquer modificação gera um novo objeto). StringBuilder e StringBuffer permitem alteração direta no buffer de caracteres.",
"StringBuffer é thread-safe (sincronizada), enquanto StringBuilder não é, sendo mais rápida em ambientes de uma única thread."
);

addQuestion(
"Java", "Difícil",
"O que acontece no código abaixo durante a execução?",
"String s1 = Java;\nString s2 = new String(Java);\nSystem.out.println(s1 == s2);",
["A) Imprime true porque o conteúdo de ambas é idêntico", "B) Imprime false porque o operador == compara referências de memória, e s2 foi instanciada com new", "C) Gera um erro de compilação por tipos incompatíveis", "D) Gera uma exceção NullPointerException em tempo de execução"],
"B",
"O operador == em objetos compara o endereço de memória. A string literal \"Java\" vem do String Pool, enquanto new String(...) cria um novo objeto no heap.",
"Para comparar o conteúdo de textos em Java, deve-se usar o método .equals()."
);

addQuestion(
"Java", "Média",
"Qual estrutura de controle de fluxo foi introduzida no Java 12 (tornada permanente no Java 14) como uma forma mais concisa e limpa de substituir múltiplos blocos if-else ou switch tradicionais?",
"Expressões Switch (Switch Expressions)",
["A) O comando goto estruturado", "B) Switch Expressions com uso da seta (->)", "C) O comando try-with-resources avançado", "D) Laço for-each assíncrono"],
"B",
"As expressões switch modernas usam o operador -> para retornar valores diretamente sem a necessidade incômoda da instrução break em cada case.",
"Evita o problema comum de fall-through acidental do switch clássico."
);

addQuestion(
"Java", "Fácil",
"Qual modificador de acesso em Java restringe a visibilidade de um atributo ou método apenas às classes do mesmo pacote?",
"Modificador padrão (Package-Private)",
["A) private", "B) public", "C) protected", "D) Nenhum modificador explícito (package-private)"],
"D",
"Quando nenhum modificador de acesso é declarado, o membro assume o escopo de pacote (package-private), ficando visível apenas dentro do mesmo diretório/pacote.",
"Diferente de protected, que também permite acesso por subclasses em pacotes externos."
);

addQuestion(
"Java", "Média",
"O que caracteriza uma Interface Funcional em Java (introduzida a partir do Java 8)?",
"Uso intensivo de expressões lambda",
["A) Uma interface que possui obrigatoriamente 10 métodos abstratos", "B) Uma interface que possui exatamente um único método abstrato", "C) Uma interface que não pode conter métodos default", "D) Uma classe abstrata sem construtor"],
"B",
"Interfaces funcionais servem como base para expressões lambda e referências de métodos. Elas podem conter métodos default ou estáticos, mas devem ter apenas um método abstrato.",
"Anotadas frequentemente com @FunctionalInterface."
);

addQuestion(
"Java", "Difícil",
"Qual é a principal finalidade da classe Optional<T> introduzida no Java 8?",
"Eliminar o tratamento manual repetitivo de valores nulos",
["A) Substituir completamente o uso de bancos de dados relacionais", "B) Container para representar a presença ou ausência de um valor, evitando NullPointerException", "C) Gerenciar a concorrência em threads de forma automática", "D) Criptografar dados sensíveis na memória"],
"B",
"Optional força o desenvolvedor a lidar explicitamente com a possibilidade de um valor ser ausente (null), tornando o código mais seguro e legível.",
"Evita o famigerado NullPointerException se utilizado corretamente em retornos de métodos."
);

addQuestion(
"Java", "Fácil",
"Qual coleção do Java Collections Framework armazena elementos de forma ordenada e não permite elementos duplicados?",
"Set e suas implementações como HashSet ou TreeSet",
["A) ArrayList", "B) HashMap", "C) TreeSet / HashSet", "D) LinkedList"],
"C",
"A interface Set modela conjuntos matemáticos, rejeitando inserções duplicadas. O TreeSet ainda mantém os elementos ordenados por sua ordem natural ou comparator.",
"ArrayList permite duplicatas e mantém ordem de inserção."
);

addQuestion(
"Java", "Média",
"O que a API Stream (java.util.stream), introduzida no Java 8, permite realizar de forma declarativa?",
"Processamento funcional de coleções de dados",
["A) Conexão direta com servidores web via protocolo HTTP", "B) Operações de filtro, mapeamento e redução em coleções de dados com suporte a paralelismo", "C) Manipulação direta de ponteiros de memória em baixo nível", "D) Criação automática de interfaces gráficas em Swing"],
"B",
"A Stream API permite processar sequências de elementos de maneira declarativa e funcional (usando métodos como filter, map, collect).",
"Facilita o processamento paralelo sem escrever código manual complexo de threads."
);

addQuestion(
"Java", "Difícil",
"No contexto de tratamento de exceções em Java, qual é a principal diferença entre Checked Exceptions e Unchecked Exceptions?",
"Obrigatoriedade de tratamento em tempo de compilação",
["A) Checked exceptions herdam de RuntimeException, enquanto unchecked herdam de Exception", "B) O compilador obriga o desenvolvedor a tratar ou declarar checked exceptions (como IOException), enquanto unchecked (como NullPointerException) não são verificadas em compilação", "C) Exceções checked nunca podem ser capturadas por blocos catch", "D) Unchecked exceptions encerram o sistema operacional obrigatoriamente"],
"B",
"Exceções checadas (Exception direta) forçam o uso de try-catch ou throws na assinatura. Exceções não checadas (RuntimeException) indicam falhas de lógica que podem ocorrer em tempo de execução.",
"Exemplos de unchecked: NullPointerException, ArrayIndexOutOfBoundsException."
);

addQuestion(
"Java", "Fácil",
"Qual palavra-chave é utilizada em Java para impedir que uma classe seja herdada ou que um método seja sobrescrito?",
"final class Servidor",
["A) static", "B) private", "C) final", "D) abstract"],
"C",
"O modificador final aplicado a uma classe proíbe herança. Aplicado a um método, proíbe sobrescrita (override). Aplicado a uma variável, torna-a uma constante.",
"Garante imutabilidade estrutural ou de valor."
);

addQuestion(
"Java", "Média",
"O que faz o bloco finally em uma estrutura try-catch-finally?",
"Execução garantida de código de limpeza",
["A) É executado apenas se ocorrer uma exceção grave no bloco try", "B) É executado independentemente de ter ocorrido uma exceção ou não", "C) Substitui o bloco catch em qualquer situação", "D) Serve apenas para fechar conexões de rede em modo assíncrono"],
"B",
"O bloco finally garante que instruções cruciais (como fechamento de arquivos, conexões de banco de dados ou sockets) sejam executadas antes de sair do bloco.",
"Mesmo que haja um return no try ou catch, o finally executa (com raras exceções como System.exit())."
);

addQuestion(
"Java", "Difícil",
"O que são os Records introduzidos formalmente no Java 14/16?",
"Classes portadoras de dados imutáveis (Transparent Data Carriers)",
["A) Arquivos de configuração binários usados pelo compilador javac", "B) Uma forma concisa de declarar classes cuja única finalidade é armazenar dados imutáveis, gerando automaticamente construtores, equals, hashCode e getters", "C) Uma substituição para tabelas de banco de dados NoSQL", "D) Uma estrutura de dados para gerenciar logs do sistema"],
"B",
"Records reduzem drasticamente o código boilerplate (código repetitivo) necessário para criar classes de transporte de dados (DTOs) ou entidades simples.",
"Declarados com a palavra-chave public record Aluno(String nome, int idade) {}."
);

addQuestion(
"Java", "Média",
"Qual é a utilidade da palavra-chave super dentro de uma subclasse em Java?",
"Referência à superclasse imediata",
["A) Chamar o construtor ou métodos da classe pai (superclasse)", "B) Criar uma nova instância estática da classe atual", "C) Converter tipos primitivos em objetos empacotados", "D) Definir uma variável global compartilhada"],
"A",
"super() permite invocar o construtor da classe pai, enquanto super.metodo() invoca um método sobrescrito na superclasse.",
"Deve ser a primeira instrução em um construtor de subclasse se usada para chamar o construtor pai."
);

addQuestion(
"Java", "Fácil",
"Como se declara corretamente um vetor (array) de 10 inteiros em Java?",
"int[] numeros = new int[10];",
["A) int numeros[10];", "B) int[] numeros = new int[10];", "C) array numeros = new array(10);", "D) vector numeros = new vector();"],
"B",
"Em Java, a declaração de arrays utiliza colchetes e o operador new especificando o tamanho fixo da estrutura na memória.",
"Os índices dos elementos vão de 0 até 9."
);

addQuestion(
"Java", "Difícil",
"O que significa dizer que o coletor de lixo (Garbage Collector) do Java opera de forma automática?",
"Gerenciamento automático de memória no heap",
["A) O programador deve liberar explicitamente cada objeto usando o comando delete", "B) A JVM identifica e remove da memória os objetos que não possuem mais nenhuma referência ativa", "C) O sistema operacional apaga arquivos temporários do disco rígido", "D) As variáveis locais da pilha são limpas por threads de sistema"],
"B",
"O Garbage Collector monitora o heap do Java, reciclando dinamicamente a memória ocupada por objetos inalcançáveis para evitar vazamentos de memória (memory leaks).",
"Elimina a necessidade de desalocação manual de ponteiros como em C ou C++."
);

addQuestion(
"Java", "Média",
"Qual interface do Java Collections Framework representa uma estrutura baseada em chave-valor?",
"Map (como HashMap, TreeMap)",
["A) List", "B) Set", "C) Map", "D) Queue"],
"C",
"A interface Map não herda de Collection, mapeando chaves exclusivas para valores correspondentes.",
"Exemplo clássico: Map<String, String> configs = new HashMap<>();."
);

addQuestion(
"Java", "Fácil",
"Qual modificador indica que um atributo ou método pertence à classe em si, e não a uma instância específica criada com new?",
"static",
["A) final", "B) static", "C) transient", "D) volatile"],
"B",
"Membros static são compartilhados por todas as instâncias da classe e podem ser acessados diretamente sem criar um objeto.",
"Exemplo: Math.sqrt() ou o método main."
);

addQuestion(
"Java", "Média",
"O que é o conceito de Autoboxing e Unboxing em Java?",
"Conversão automática entre tipos primitivos e suas classes wrapper",
["A) A conversão automática de arquivos Java para bytecode", "B) A conversão automática realizada pelo compilador entre tipos primitivos (ex: int) e seus wrappers correspondentes (ex: Integer)", "C) A serialização automática de objetos para transmissão em rede", "D) O empacotamento de dependências usando Maven ou Gradle"],
"B",
"Autoboxing converte primitivo para objeto (ex: int para Integer), e unboxing faz o inverso de forma transparente.",
"Facilita o uso de tipos primitivos em coleções como ArrayList<Integer>."
);

addQuestion(
"Java", "Difícil",
"O que é uma Classe Anônima (Anonymous Inner Class) em Java?",
"Declaração e instanciação simultânea de uma classe sem nome",
["A) Uma classe que não possui métodos declarados", "B) Uma classe sem nome declarada e instanciada em uma única expressão, útil para implementações rápidas de interfaces ou classes abstratas", "C) Uma classe de segurança que oculta o código-fonte compilado", "D) Um erro de sintaxe gerado pelo compilador moderno"],
"B",
"Classes anônimas permitiam criar implementações pontuais de interfaces (como listeners antigos de eventos), sendo hoje em dia grandemente substituídas por expressões lambda.",
"Sintaxe típica: Runnable r = new Runnable() { @Override public void run() { ... } };."
);

addQuestion(
"Java", "Fácil",
"Qual operador em Java é utilizado para verificar se um objeto é uma instância de uma determinada classe ou interface?",
"instanceof",
["A) isInstance", "B) instanceof", "C) checkClass", "D) typeOf"],
"B",
"O operador instanceof retorna um valor booleano indicando se o objeto à esquerda é compatível com o tipo especificado à direita.",
"Muito útil antes de realizar downcasting de referências."
);

addQuestion(
"Java", "Média",
"O que são métodos default em interfaces (recurso introduzido no Java 8)?",
"Métodos com implementação padrão em interfaces",
["A) Métodos que obrigatoriamente devem ser reescritos por todas as classes", "B) Métodos declarados com a palavra-chave default que possuem corpo/implementação dentro da interface, permitindo evolução sem quebrar classes legadas", "C) Métodos privados utilitários", "D) Construtores padrão gerados automaticamente"],
"B",
"Permitem adicionar novos métodos com comportamento padrão a interfaces existentes sem exigir que todas as classes implementadoras modifiquem seu código imediatamente.",
"Evita quebrar contratos em bibliotecas legadas."
);

addQuestion(
"Java", "Difícil",
"No contexto de concorrência em Java, qual é a utilidade da palavra-chave synchronized?",
"Controle de concorrência e exclusão mútua",
["A) Garantir que variáveis estáticas nunca mudem de valor", "B) Garantir que um bloco de código ou método seja acessado por apenas uma thread por vez, evitando condições de corrida", "C) Sincronizar o relógio do sistema operacional com servidores externos", "D) Executar tarefas de forma assíncrona em segundo plano"],
"B",
"synchronized provê exclusão mútua em blocos críticos de código multi-thread, prevenindo corrupção de dados compartilhados.",
"Garante visibilidade de memória e atomicidade em seções críticas."
);

addQuestion(
"Java", "Fácil",
"Qual pacote padrão do Java é importado implicitamente em todos os arquivos de código-fonte Java sem necessidade de declaração explícita?",
"java.lang",
["A) java.util", "B) java.io", "C) java.lang", "D) java.net"],
"C",
"O pacote java.lang contém classes fundamentais como String, System, Math, Integer, Exception e Object, sendo importado automaticamente.",
"Outros pacotes exigem o comando import."
);

addQuestion(
"Java", "Média",
"O que significa a serialização de objetos em Java?",
"Transformação de objeto em fluxo de bytes",
["A) Converter código Java em código executável de máquina nativa", "B) O processo de converter o estado de um objeto em uma sequência de bytes para armazenamento em arquivo ou transmissão em rede", "C) Organizar métodos em ordem alfabética estrita", "D) Ordenar coleções de dados numéricos"],
"B",
"Para serializar um objeto, a classe deve implementar a interface marcadora Serializable.",
"O oposto (reconstruir o objeto a partir de bytes) chama-se desserialização."
);

addQuestion(
"Java", "Difícil",
"O que estabelece a especificação do Java Memory Model (JMM) em relação à palavra-chave volatile?",
"Garantia de visibilidade imediata de variáveis entre threads",
["A) Torna a variável imutável como uma constante", "B) Garante que leituras e escritas nessa variável sejam feitas diretamente na memória principal (RAM), garantindo visibilidade imediata entre diferentes threads", "C) Acelera o cálculo matemático usando processamento de GPU", "D) Impede que a variável seja coletada pelo Garbage Collector"],
"B",
"Em arquiteturas modernas de CPU, threads usam caches locais. O modificador volatile evita que uma thread use valores desatualizados em cache de variáveis compartilhadas.",
"Não garante atomicidade para operações compostas como incremento (++)."
);

addQuestion(
"Java", "Fácil",
"Qual método da classe Object (presente em todas as classes Java) é utilizado para obter a representação textual de um objeto?",
"toString()",
["A) printObject()", "B) toString()", "C) stringValue()", "D) display()"],
"B",
"O método toString() retorna uma string que descreve o objeto. É altamente recomendável sobrescrevê-lo nas suas classes para depuração legível.",
"Por padrão, retorna o nome da classe seguido por @ e o hash code em hexadecimal."
);

addQuestion(
"Java", "Média",
"Qual é a finalidade principal do comando try-with-resources introduzido no Java 7?",
"Gerenciamento automático de recursos que implementam AutoCloseable",
["A) Capturar múltiplos erros de sintaxe em tempo de compilação", "B) Fechar automaticamente recursos abertos (como arquivos e conexões JDBC) ao término do bloco try", "C) Substituir blocos try-catch tradicionais em códigos assíncronos", "D) Otimizar o consumo de memória RAM do Garbage Collector"],
"B",
"O try-with-resources fecha de forma segura e automática qualquer recurso que implemente a interface AutoCloseable ou Closeable, mesmo se exceções forem lançadas.",
"Evita vazamentos de conexões e arquivos abertos."
);

addQuestion(
"Java", "Difícil",
"O que é a reflexão (Reflection API) em Java (java.lang.reflect)?",
"Inspeção e manipulação dinâmica de classes em tempo de execução",
["A) Um mecanismo de renderização gráfica 3D", "B) Uma API que permite a um programa examinar e modificar sua própria estrutura, inspecionando classes, métodos, atributos e construtores em tempo de execução", "C) Um padrão de projeto para clonar objetos profundos", "D) Um compilador just-in-time otimizado"],
"B",
"Reflection é amplamente utilizada por frameworks como Spring e Hibernate para mapear entidades, injetar dependências e processar anotações dinamicamente.",
"Pode impactar a performance se usada excessivamente e burlar verificações de encapsulamento."
);

addQuestion(
"Java", "Fácil",
"Qual palavra-chave é utilizada para criar uma nova instância (objeto) de uma classe em Java?",
"new",
["A) create", "B) instantiate", "C) new", "D) malloc"],
"C",
"O operador new aloca memória no heap para o novo objeto e invoca o construtor correspondente.",
"Exemplo: Carro meuCarro = new Carro();."
);

addQuestion(
"Java", "Média",
"O que é uma Enum (Enumeração) em Java?",
"Tipo de dado especial que representa um conjunto fixo de constantes",
["A) Uma classe abstrata sem atributos", "B) Um tipo de dado especial que restringe uma variável a assumir apenas um conjunto predefinido de valores constantes nomeados", "C) Uma interface para manipulação de arquivos binários", "D) Uma estrutura de repetição equivalente ao for clássico"],
"B",
"Enums melhoram a segurança de tipos e legibilidade do código comparado ao uso de constantes inteiras ou strings soltas.",
"Exemplo: dias da semana, status de pedidos, direções cardinais."
);

addQuestion(
"Java", "Difícil",
"Qual é a diferença conceitual e de comportamento entre StringBuilder e StringBuffer?",
"Sincronização de threads",
["A) StringBuilder é mais lento que StringBuffer em qualquer ambiente", "B) StringBuilder não é sincronizada (não thread-safe), o que a torna mais rápida para uso em uma única thread; StringBuffer é sincronizada (thread-safe)", "C) StringBuffer foi descontinuada no Java moderno", "D) Não há nenhuma diferença de performance ou comportamento"],
"B",
"A sincronização interna do StringBuffer adiciona overhead de desempenho. Se o código roda em uma única thread, StringBuilder é sempre a melhor escolha.",
"Ambas compartilham exatamente os mesmos métodos públicos de manipulação de texto."
);

addQuestion(
"Java", "Fácil",
"Como se faz um comentário de múltiplas linhas em código Java?",
"/* Comentário /",
["A) ", "B) / Comentário */", "C)  Comentário ", "D) # Comentário"],
"B",
"Comentários de múltiplas linhas em Java usam /* ... */. Para documentação JavaDoc, usa-se /** ... */ e para linha única //.",
"O compilador ignora completamente qualquer comentário."
);

addQuestion(
"Java", "Média",
"O que significa a assinatura de método public static final int MAX = 100; dentro de uma interface?",
"Definição de constante pública estática",
["A) A variável pode ser alterada livremente por classes implementadoras", "B) Todos os atributos declarados em interfaces são implicitamente public, static e final, funcionando como constantes globais", "C) O código gerará um erro de compilação por redundância de modificadores", "D) O atributo é privado e visível apenas internamente"],
"B",
"Em interfaces Java, qualquer campo declarado é automaticamente tratado como constante pública, estática e final.",
"Não é necessário repetir os modificadores, embora seja comum."
);

addQuestion(
"Java", "Difícil",
"O que são métodos estáticos private permitidos em interfaces a partir do Java 9?",
"Métodos auxiliares privados para reutilização interna na interface",
["A) Métodos acessíveis diretamente por qualquer classe externa ao pacote", "B) Métodos auxiliares que permitem compartilhar código comum entre métodos default ou estáticos dentro da própria interface sem expô-los publicamente", "C) Construtores privados para impedir instanciação de classes", "D) Métodos obsoletos substituídos por lambdas"],
"B",
"O Java 9 permitiu que interfaces encapsulassem lógica repetitiva em métodos privados, melhorando a organização do código sem violar o contrato público.",
"Reduz duplicação de código entre métodos default."
);

addQuestion(
"Java", "Fácil",
"Qual operador aritmético em Java é utilizado para calcular o resto de uma divisão inteira?",
"%",
["A) /", "B) %%", "C) %", "D) mod"],
"C",
"O operador módulo % retorna o resto da divisão entre dois números inteiros (ou de ponto flutuante).",
"Exemplo: 5 % 2 resulta em 1."
);

addQuestion(
"Java", "Média",
"O que ocorre se tentarmos compilar e executar uma classe Java que não possui nenhum construtor explícito escrito pelo programador?",
"Inclusão automática do construtor padrão (default constructor)",
["A) O compilador emite um erro fatal de compilação", "B) O compilador insere automaticamente um construtor padrão público sem parâmetros", "C) O programa roda, mas gera NullPointerException imediata", "D) A JVM utiliza um construtor genérico externo"],
"B",
"Se nenhum construtor é definido na classe, o compilador gera um construtor padrão sem argumentos (ClassName() {}) por baixo dos panos.",
"Caso você crie um construtor com parâmetros, o construtor padrão deixa de ser gerado automaticamente."
);

addQuestion(
"Java", "Difícil",
"Qual é a finalidade da anotação @Override em Java?",
"Verificação em tempo de compilação de sobrescrita de método",
["A) Marcar o método como obsoleto (deprecated)", "B) Solicitar que o compilador verifique se o método realmente está sobrescrevendo um método da superclasse ou interface, prevenindo erros de digitação na assinatura", "C) Forçar a execução síncrona do método em múltiplas threads", "D) Otimizar a velocidade de execução via JIT compiler"],
"B",
"@Override é uma boa prática de segurança de código. Se você errar o nome ou os parâmetros do método herdado, o compilador avisa imediatamente.",
"Não afeta o comportamento em tempo de execução, servindo para checagem estática."
);

/* =====================================================
   ESTRUTURAS DE DADOS
===================================================== */

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual elemento será removido?",
    "Stack<Integer> pilha = new Stack<>();\n\npilha.push(10);\npilha.push(20);\npilha.push(30);\n\npilha.pop();",
    ["A) 10", "B) 20", "C) 30", "D) Nenhum"],
    "C",
    "A pilha segue LIFO. O último elemento inserido é removido primeiro.",
    "LIFO = Last In First Out."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual elemento será atendido primeiro?",
    "Queue<Integer> fila = new LinkedList<>();\n\nfila.add(10);\nfila.add(20);\nfila.add(30);\n\nfila.poll();",
    ["A) 10", "B) 20", "C) 30", "D) Erro"],
    "A",
    "A fila segue FIFO. O primeiro inserido sai primeiro.",
    "FIFO = First In First Out."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura representa melhor uma hierarquia?",
    "        Diretor\n        /       \\\n   Gerente A   Gerente B",
    ["A) Fila", "B) Pilha", "C) Árvore", "D) Vetor"],
    "C",
    "Estruturas hierárquicas são representadas por árvores.",
    "Árvore possui raiz e nós."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a principal propriedade de uma estrutura de dados do tipo Pilha (Stack)?",
    "Operações push e pop",
    ["A) FIFO (First In, First Out)", "B) LIFO (Last In, First Out)", "C) Acesso direto por índice O(1)", "D) Ordenação automática alfabética"],
    "B",
    "A pilha opera no modelo LIFO, onde o último elemento inserido é obrigatoriamente o primeiro a ser retirado.",
    "Pilha = pratos empilhados (último a entrar sai primeiro)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Em uma Lista Simplesmente Encadeada, qual é a complexidade de tempo para inserir um novo elemento diretamente no início da lista (cabeça)?",
    "Head -> [Nó 1] -> [Nó 2]",
    ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    "A",
    "Como mantemos a referência direta para a cabeça (head), a inserção no início requer apenas atualizar os ponteiros, custando tempo constante O(1).",
    "Inserir no final sem ponteiro de cauda exigiria varrer toda a lista O(n)."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura de dados não linear organiza elementos em uma relação hierárquica de pai e filhos, contendo uma raiz única?",
    "Nós conectados por arestas hierárquicas",
    ["A) Fila", "B) Pilha", "C) Árvore", "D) Vetor estático"],
    "C",
    "Árvores modelam hierarquias corporativas, sistemas de arquivos e sintaxes de compiladores.",
    "Possuem nós raiz, ramos e folhas."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "O que caracteriza uma Árvore Binária de Busca (BST)?",
    "Filho esquerdo menor / Filho direito maior",
    ["A) Cada nó pode ter no máximo 4 filhos", "B) Os nós à esquerda são menores que a raiz, e os à direita são maiores", "C) Os dados são armazenados estritamente de forma linear", "D) Não existem chaves duplicadas em hipótese alguma"],
    "B",
    "A propriedade fundamental da BST garante buscas eficientes comparando valores recursivamente.",
    "Busca em árvore balanceada custa O(log n)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual método de resolução de colisões em Tabelas Hash armazena múltiplos elementos que caíram no mesmo índice em uma lista encadeada interna?",
    "Índice Hash -> [Elemento A -> Elemento B]",
    ["A) Endereçamento aberto por sondagem linear", "B) Encadeamento separado (Chaining)", "C) Redimensionamento estático", "D) Dupla Hifenação"],
    "B",
    "No encadeamento separado, cada posição da tabela aponta para uma lista ligada que abriga as colisões.",
    "Evita perda de dados e estouro de índice."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a complexidade de tempo no pior caso para buscar um elemento em um Vetor Desordenado de tamanho n?",
    "Busca linear em array comum",
    ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"],
    "C",
    "Como o vetor não está ordenado, pode ser necessário inspecionar cada um dos n elementos (busca linear).",
    "Busca binária só se aplica a vetores previamente ordenados."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura linear é ideal para implementar algoritmos de percurso em largura (BFS) em grafos?",
    "Estrutura FIFO para controle de visita",
    ["A) Pilha", "B) Fila", "C) Tabela Hash", "D) Matriz esparsa"],
    "B",
    "A Fila (Queue) gerencia a ordem de exploração dos nós vizinhos no algoritmo BFS.",
    "Busca em profundidade (DFS) utiliza Pilha (ou recursão)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "O que é um Grafo Direcionado (Dígrafo)?",
    "Arestas com setas direcionais unidirecionais",
    ["A) Um grafo cujas arestas possuem direção específica de um vértice para outro", "B) Um grafo que não permite ciclos", "C) Uma árvore com múltiplos nós raízes", "D) Uma lista encadeada bidirecional"],
    "A",
    "No dígrafo, a aresta (u, v) indica um caminho de u para v, mas não necessariamente o inverso.",
    "Exemplo clássico: seguidores no Twitter ou rotas de mão única."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a principal vantagem de uma Lista Duplamente Encadeada sobre a Lista Simplesmente Encadeada?",
    "Ponteiros next e prev",
    ["A) Ocupa menos memória RAM", "B) Permite percorrer a lista tanto para frente quanto para trás de forma eficiente", "C) Dispensa o uso de ponteiros", "D) Ordena os elementos automaticamente"],
    "B",
    "Cada nó possui um ponteiro para o próximo e para o anterior, facilitando operações de remoção e navegação reversa.",
    "O custo é um leve acréscimo no consumo de memória para o segundo ponteiro."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Em uma Heap Binária Mínima (Min-Heap), onde se encontra sempre o menor elemento da estrutura?",
    "Árvore parcialmente ordenada",
    ["A) Na raiz da árvore", "B) Em uma das folhas da última camada", "C) No último nó inserido", "D) Distribuído aleatoriamente"],
    "A",
    "Na Min-Heap, o elemento pai é sempre menor ou igual aos seus filhos, garantindo que a raiz guarde o menor valor global.",
    "Na Max-Heap, a raiz guarda o maior valor."
);
/* =====================================================
   BANCO DE DADOS (CONCEITOS, NOSQL, ARQUITETURA)
===================================================== */

const bancoDadosQuest = [
    {
        q: "O que preconiza o Teorema de CAP em sistemas distribuídos de bancos de dados?",
        c: "Teorema de CAP",
        o: [
            "A) Um sistema distribuído pode garantir simultaneamente e sem restrições a Consistência (Consistency), a Disponibilidade (Availability) e a Tolerância a Particionamento de Rede (Partition Tolerance).",
            "B) Em caso de uma falha de rede (particionamento), um sistema distribuído pode escolher garantir Consistência ou Disponibilidade, mas nunca ambas simultaneamente.",
            "C) Garante criptografia absoluta para dados em repouso e em trânsito.",
            "D) Define o limite máximo de conexões simultâneas que um banco NoSQL suporta."
        ],
        a: "B",
        e: "O Teorema de CAP (Brewer) estabelece que redes distribuídas estão sujeitas a falhas de comunicação (partições). Portanto, a escolha em cenários de falha resume-se a CP (consistência ou parada) ou AP (disponibilidade com dados eventualmente consistentes).",
        t: "Bancos relacionais tradicionais tendem a priorizar CP, enquanto muitos NoSQL focam em AP."
    },
    {
        q: "Qual é a principal diferença conceitual entre bancos de dados relacionais (SQL) e não relacionais (NoSQL)?",
        c: "Relacional vs NoSQL",
        o: [
            "A) Bancos NoSQL não utilizam nenhum tipo de estrutura de dados e armazenam tudo em arquivos comprimidos.",
            "B) Bancos relacionais estruturam dados em tabelas rígidas com esquemas fixos e fortes garantias ACID; bancos NoSQL oferecem alta escalabilidade horizontal e esquemas flexíveis (documentos, chave-valor, colunas ou grafos), priorizando performance e flexibilidade.",
            "C) Bancos NoSQL são totalmente incompatíveis com arquiteturas de microsserviços.",
            "D) Bancos relacionais rodam apenas em servidores Linux e NoSQL apenas em Windows."
        ],
        a: "B",
        e: "O NoSQL surgiu para resolver problemas de grande volume e alta velocidade de dados (Big Data) onde a escalabilidade horizontal é mais crítica do que as junções relacionais complexas.",
        t: "A escolha depende diretamente do domínio do problema e dos requisitos de consistência dos dados."
    },
    {
        q: "O que caracteriza o modelo de Consistência Eventual (Eventual Consistency) comumente adotado em bancos NoSQL?",
        c: "Consistência Eventual",
        o: [
            "A) Os dados nunca são salvos permanentemente no disco rígido.",
            "B) Se nenhuma nova atualização for feita em um dado item, todas as réplicas eventualmente retornarão o mesmo valor após um curto período de propagação na rede.",
            "C) As transações exigem bloqueio síncrono absoluto em todas as máquinas do cluster.",
            "D) O banco de dados apaga registros antigos automaticamente a cada meia-noite."
        ],
        a: "B",
        e: "A consistência eventual prioriza a alta disponibilidade e performance de gravação (modelo AP do CAP), aceitando que leituras imediatas após uma escrita possam retornar dados desatualizados por instantes.",
        t: "Comum em sistemas de redes sociais, carrinhos de compras e contadores de visualizações."
    },
    {
        q: "Para que serve o processo de Normalização de Bancos de Dados (até a 3ª Forma Normal)?",
        c: "Normalização",
        o: [
            "A) Para duplicar dados intencionalmente e acelerar consultas complexas de leitura.",
            "B) Para organizar as tabelas e colunas de forma a reduzir a redundância de dados e eliminar anomalias de inserção, atualização e exclusão, garantindo a integridade estrutural.",
            "C) Para converter arquivos de texto em planilhas Excel formatadas.",
            "D) Para criptografar senhas de usuários com algoritmos de hash."
        ],
        a: "B",
        e: "A normalização divide dados repetidos em tabelas relacionadas através de chaves estrangeiras, otimizando o armazenamento e evitando inconsistências lógicas.",
        t: "Em contrapartida, excesso de normalização pode exigir muitos JOINs, motivando a desnormalização em cenários de alta leitura."
    },
    {
        q: "Qual é a principal utilidade de um banco de dados em memória do tipo Chave-Valor (como Redis) em uma arquitetura de software moderna?",
        c: "Bancos Chave-Valor (Redis)",
        o: [
            "A) Armazenar logs históricos e backups em fitas magnéticas de longo prazo.",
            "B) Atuar como cache de alta performance, gerenciamento de sessões, filas de mensagens rápidas e contadores em tempo real, devido ao acesso quase instantâneo na RAM.",
            "C) Executar relatórios gerenciais complexos em SQL com milhões de linhas cruzadas.",
            "D) Substituir totalmente o armazenamento persistente em disco em sistemas corporativos críticos."
        ],
        a: "B",
        e: "O Redis armazena dados diretamente na memória RAM, oferecendo tempos de resposta na ordem de microssegundos, o que alivia a carga de bancos relacionais em consultas frequentes.",
        t: "Pode ser configurado com persistência em disco (RDB/AOF) para evitar perda total de dados em reinicializações."
    },
    {
        q: "O que diferencia o Sharding (Fragmentação) da Replicação em bancos de dados distribuídos?",
        c: "Sharding vs Replicação",
        o: [
            "A) Sharding duplica todos os dados em múltiplos servidores para redundância; replicação divide os dados particionando-os entre diferentes nós.",
            "B) A replicação copia e sincroniza dados em múltiplos nós para garantir alta disponibilidade e leitura escalável; o sharding divide o banco de dados em partes menores (shards) distribuídas horizontalmente para suportar volumes massivos de escrita e armazenamento.",
            "C) Não há diferença técnica; ambos são sinônimos de backups em nuvem.",
            "D) Sharding é exclusivo de bancos relacionais e replicação de NoSQL."
        ],
        a: "B",
        e: "Enquanto a replicação resolve problemas de disponibilidade e performance de leitura (nós Master-Slave), o sharding resolve problemas de limite físico de armazenamento e gargalos de escrita em bases gigantescas.",
        t: "O roteamento de chaves de sharding exige planejamento cuidadoso para evitar desbalanceamento (hot spots)."
    },
    {
        q: "O que modela primariamente um banco de dados orientado a Grafos (Graph Database, como Neo4j)?",
        c: "Bancos de Grafos",
        o: [
            "A) Tabelas relacionais estritas com restrições de chaves primárias numéricas.",
            "B) Dados altamente conectados compostos por Nós (Entidades), Arestas (Relacionamentos) e Propriedades, ideal para redes sociais, motores de recomendação e detecção de fraudes.",
            "C) Arquivos binários planos sem estrutura relacional.",
            "D) Séries temporais de métricas de CPU e temperatura."
        ],
        a: "B",
        e: "Bancos de grafos calculam relacionamentos complexos de múltiplos graus de forma extremamente eficiente, sem a necessidade de operações custosas de JOIN em grandes tabelas relacionais.",
        t: "Utilizam linguagens de consulta específicas, como o Cypher."
    },
    {
        q: "O que é o modelo BASE em bancos de dados NoSQL distribuídos, em contraponto ao modelo ACID?",
        c: "Modelo BASE",
        o: [
            "A) Um protocolo rígido de segurança bancária para senhas.",
            "B) Um acrônimo para Basic Availability (Disponibilidade Básica), Soft-state (Estado Flexível) e Eventual consistency (Consistência Eventual), priorizando disponibilidade e escalabilidade sobre consistência imediata.",
            "C) Um método para compactar tabelas SQL em formato binário.",
            "D) Um padrão de arquitetura frontend para aplicações React."
        ],
        a: "B",
        e: "Enquanto o ACID busca rigidez transacional imediata, o modelo BASE aceita que o sistema flutue temporariamente em seu estado até atingir a consistência completa de forma assíncrona.",
        t: "Reflete perfeitamente a filosofia de design dos sistemas NoSQL modernos orientados a microsserviços."
    },
    {
        q: "Em que consiste a técnica de 'Desnormalização' em bancos de dados?",
        c: "Desnormalização",
        o: [
            "A) Corrigir erros de sintaxe em comandos SQL corrompidos.",
            "B) Introduzir intencionalmente redundância de dados (como duplicar colunas ou tabelas) para eliminar a necessidade de JOINs complexos e acelerar drasticamente o tempo de leitura em consultas pesadas.",
            "C) Apagar todas as chaves primárias de um banco relacional.",
            "D) Converter um banco NoSQL em tabelas planas do Excel."
        ],
        a: "B",
        e: "A desnormalização é um compromisso de design: sacrifica-se a pureza estrutural e a facilidade de escrita para obter ganhos expressivos de performance de leitura em ambientes de alta escala (como relatórios e dashboards).",
        t: "Exige que a aplicação gerencie a consistência dos dados duplicados via código ou eventos."
    },
    {
        q: "Qual é a função de um banco de dados de Séries Temporais (Time-Series Database, como InfluxDB ou TimescaleDB)?",
        c: "Séries Temporais",
        o: [
            "A) Armazenar calendários de compromissos pessoais e agendas corporativas.",
            "B) Otimizar a ingestão, armazenamento massivo e consulta de dados indexados por carimbos de data/hora (timestamps), como métricas de IoT, logs de servidores e cotações financeiras em tempo real.",
            "C) Gerenciar versões de código fonte em repositórios Git.",
            "D) Executar animações gráficas 3D em navegadores web."
        ],
        a: "B",
        e: "Dados de séries temporais chegam em alto volume e ordem cronológica estrita. Bancos especializados usam compressão agressiva de colunas por tempo e políticas automáticas de retenção (retention policies).",
        t: "Essenciais para monitoramento de infraestrutura e observabilidade moderna."
    }
];

bancoDadosQuest.forEach(x => {
    addQuestion("Banco de Dados", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   SQL (STRUCTURED QUERY LANGUAGE)
===================================================== */

const sqlQuest = [
    {
        q: "Qual é a principal diferença entre os comandos `DELETE`, `TRUNCATE` e `DROP` em bancos de dados relacionais?",
        c: "Comandos DDL e DML",
        o: [
            "A) Todos fazem exatamente a mesma coisa, apagando dados e estruturas de forma idêntica.",
            "B) `DELETE` é um comando DML que remove linhas específicas (permitindo filtro WHERE e rollback de transação); `TRUNCATE` é um comando DDL que remove todas as linhas rapidamente reiniciando contadores de identidade sem registrar cada linha individualmente no log de transações; `DROP` exclui permanentemente a estrutura inteira da tabela do banco de dados.",
            "C) `DROP` apaga apenas uma linha específica e `DELETE` destrói o servidor físico.",
            "D) `TRUNCATE` é utilizado exclusivamente para criar novas tabelas e visões."
        ],
        a: "B",
        e: "Compreender a diferença entre DML (Data Manipulation Language) e DDL (Data Definition Language) é crucial para performance e segurança operacional em bancos relacionais.",
        t: "Sempre verifique se há chaves estrangeiras ativas antes de executar comandos como `TRUNCATE` ou `DROP`."
    },
    {
        q: "Qual é o comportamento padrão de um `INNER JOIN` ao combinar duas tabelas em uma consulta SQL?",
        c: "Junções (Joins)",
        o: [
            "A) Retorna todos os registros da tabela à esquerda, mesmo que não haja correspondência na tabela à direita.",
            "B) Retorna apenas os registros que possuem correspondência (valores correspondentes) em ambas as tabelas envolvidas na junção.",
            "C) Retorna o produto cartesiano absoluto, combinando todas as linhas de ambas as tabelas sem restrições.",
            "D) Retorna apenas os registros exclusivos que não possuem correspondência em nenhuma das tabelas."
        ],
        a: "B",
        e: "O `INNER JOIN` é a junção mais comum. Linhas que não encontram correspondência na condição de igualdade (ON) são descartadas do resultado final.",
        t: "Diferencia-se de `LEFT JOIN` e `RIGHT JOIN`, que preservam registros da tabela base mesmo sem correspondência."
    },
    {
        q: "Para que servem as funções de agregação no SQL, como `COUNT`, `SUM`, `AVG`, `MAX` e `MIN`, quando combinadas com a cláusula `GROUP BY`?",
        c: "Funções de Agregação e Agrupamento",
        o: [
            "A) Para ordenar o resultado final da consulta alfabeticamente.",
            "B) Para realizar cálculos estatísticos e resumir conjuntos de dados agrupados por colunas específicas, condensando múltiplos registros em linhas de resumo.",
            "C) Para criar chaves primárias automáticas em novas tabelas.",
            "D) Para filtrar registros individuais antes que a consulta seja executada."
        ],
        a: "B",
        e: "O `GROUP BY` divide o conjunto de resultados em subgrupos, permitindo aplicar funções de agregação (como somar valores de vendas ou contar clientes) por cada categoria específica.",
        t: "Para filtrar resultados após a agregação, deve-se utilizar a cláusula `HAVING` em vez de `WHERE`."
    },
    {
        q: "Qual é a função da cláusula `HAVING` em uma consulta SQL agregada?",
        c: "Cláusula HAVING vs WHERE",
        o: [
            "A) Filtrar linhas individuais da tabela antes que o agrupamento (`GROUP BY`) seja realizado.",
            "B) Filtrar os resultados gerados após a aplicação de funções de agregação e agrupamento (`GROUP BY`), atuando como um filtro para os grupos formados.",
            "C) Ordenar os dados em ordem decrescente de forma automática.",
            "D) Unir duas tabelas diferentes sem precisar da palavra-chave JOIN."
        ],
        a: "B",
        e: "A confusão entre `WHERE` e `HAVING` é clássica: o `WHERE` filtra linhas brutas antes da agregação, enquanto o `HAVING` filtra os resultados já agregados (ex: `HAVING COUNT(*) > 5`).",
        t: "O `HAVING` vem sempre após o `GROUP BY` na estrutura sintática da query."
    },
    {
        q: "O que é uma Chave Estrangeira (Foreign Key) em um banco de dados relacional?",
        c: "Integridade Referencial",
        o: [
            "A) Um campo criptografado usado exclusivamente para armazenar senhas de administradores.",
            "B) Uma coluna ou conjunto de colunas que estabelece e impõe um link de integridade referencial entre os dados de duas tabelas, garantindo que o valor inserido na tabela filha exista obrigatoriamente na tabela pai (Chave Primária).",
            "C) Uma chave física de segurança usada para fazer backup em fitas magnéticas.",
            "D) Um índice oculto que acelera buscas de texto completo."
        ],
        a: "B",
        e: "As chaves estrangeiras impedem a inserção de registros órfãos, garantindo a consistência relacional e a integridade dos dados em arquiteturas ACID.",
        t: "Regras de exclusão em cascata (`ON DELETE CASCADE`) podem ser configuradas para gerenciar dependências automaticamente."
    },
    {
        q: "Qual é a utilidade de criar um Índice (`CREATE INDEX`) em uma tabela de banco de dados?",
        c: "Indexação e Performance",
        o: [
            "A) Aumentar o espaço em disco ocupado para duplicar a segurança dos dados.",
            "B) Otimizar e acelerar a velocidade de recuperação de dados em consultas baseadas em colunas específicas (como WHERE ou JOIN), criando uma estrutura de dados de busca rápida (como árvore B-Tree).",
            "C) Impedir totalmente que qualquer comando de atualização seja executado.",
            "D) Compactar o formato das imagens armazenadas em campos BLOB."
        ],
        a: "B",
        e: "Embora os índices melhorem drasticamente a performance de leitura (`SELECT`), eles geram um custo adicional de processamento e espaço em operações de escrita (`INSERT`, `UPDATE`, `DELETE`), pois o índice precisa ser atualizado.",
        t: "Devem ser criados de forma estratégica nas colunas mais consultadas em filtros e junções."
    },
    {
        q: "Qual é a diferença funcional entre os operadores `UNION` e `UNION ALL` ao combinar consultas SQL?",
        c: "Operadores de Conjuntos",
        o: [
            "A) `UNION` remove duplicatas dos resultados combinados e executa uma ordenação implícita; `UNION ALL` inclui todos os registros (inclusive duplicados) de forma direta e mais rápida.",
            "B) `UNION` une tabelas de bancos de dados diferentes e `UNION ALL` junta apenas uma tabela consigo mesma.",
            "C) Não há diferença; ambos funcionam de maneira idêntica em qualquer SGBD.",
            "D) `UNION ALL` apaga os dados originais e `UNION` cria um backup."
        ],
        a: "A",
        e: "Como o `UNION` padrão exige a remoção de duplicatas (processo de distinct), ele consome mais CPU e memória. Se você sabe que não há duplicatas ou quer mantê-las, o `UNION ALL` é consideravelmente mais performático.",
        t: "Ambos exigem que as consultas combinadas tenham o mesmo número de colunas e tipos de dados compatíveis."
    },
    {
        q: "O que representa o conceito de Transações ACID em sistemas de gerenciamento de bancos de dados relacionais (SGBDR)?",
        c: "Transações ACID",
        o: [
            "A) Um protocolo de criptografia de rede para conexões remota.",
            "B) Um acrônimo para Atomicidade (tudo ou nada), Consistência (regras de integridade respeitadas), Isolamento (transações concorrentes não interferem umas nas outras) e Durabilidade (dados confirmados não são perdidos após falhas).",
            "C) Um método para desfragmentar discos rígidos em servidores Linux.",
            "D) Uma linguagem de programação orientada a objetos para banco de dados."
        ],
        a: "B",
        e: "As propriedades ACID garantem a confiabilidade absoluta em operações transacionais críticas, como transferências bancárias ou faturamento e-commerce.",
        t: "Comandos como `BEGIN TRANSACTION`, `COMMIT` e `ROLLBACK` controlam diretamente esse comportamento."
    },
    {
        q: "Qual é a função de uma Subconsulta (Subquery ou Consulta Aninhada) no SQL?",
        c: "Subconsultas",
        o: [
            "A) Executar tarefas de manutenção e limpeza física de logs no servidor.",
            "B) Permitir que uma consulta SQL seja colocada dentro de outra instrução (`SELECT`, `INSERT`, `UPDATE` ou `DELETE`), servindo como filtro dinâmico ou fonte de dados derivada.",
            "C) Submeter relatórios gerenciais diretamente para a impressora padrão.",
            "D) Criptografar colunas sensíveis em formato binário."
        ],
        a: "B",
        e: "Subconsultas podem ser escalares (retornando um único valor) ou correlacionadas (quando dependem da linha avaliada na consulta externa). São poderosas para resolver lógicas complexas de filtragem.",
        t: "Em muitos cenários modernos, o uso de CTEs (`WITH`) substitui subconsultas complexas com ganho de legibilidade."
    },
    {
        q: "O que caracteriza uma Visão (View) em um banco de dados relacional?",
        c: "Views (Visões)",
        o: [
            "A) Um arquivo físico duplicado que copia todos os dados para uma máquina de backup na nuvem.",
            "B) Uma consulta SQL armazenada no banco de dados que atua como uma tabela virtual, permitindo encapsular consultas complexas, simplificar a segurança de acesso a colunas e reutilizar lógicas de negócio.",
            "C) Uma interface gráfica web para visualização de relatórios em PDF.",
            "D) Um índice temporário gerado apenas durante reinicializações do sistema."
        ],
        a: "B",
        e: "As views não armazenam os dados fisicamente por padrão (exceto em materialized views); elas recalculam o resultado a cada acesso, servindo como uma camada de abstração e segurança sobre as tabelas base.",
        t: "Úteis para ocultar colunas sensíveis de usuários comuns em grandes bases de dados."
    }
];

sqlQuest.forEach(x => {
    addQuestion("SQL", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
DESENVOLVIMENTO WEB (HTML, CSS E JAVASCRIPT)
===================================================== */

addQuestion(
    'Desenvolvimento Web', 'Fácil',
    'Qual tag HTML é utilizada para criar um hiperlink para outra página ou site?',
    '<a href="https://www.exemplo.com">Link</a>',
    ['A)', 'B)', 'C)', 'D)'],
    'B',
    'A tag <a> (anchor) combinada com o atributo href define hiperlinks na web.',
    'A tag é usada para carregar folhas de estilo no HTML.'
);

addQuestion(
    "Desenvolvimento Web",
    "Fácil",
    "Qual tag HTML é utilizada para criar um hiperlink para outra página ou site?",
    "<a href=\"https://www.exemplo.com\">Link</a>",
    ["A)", "B)", "C)", "D)"],
    "B",
    "A tag <a> (anchor) combinada com o atributo href define hiperlinks na web.",
    "A tag é usada para carregar folhas de estilo no HTML."
);

addQuestion(
    "Desenvolvimento Web",
    "Fácil",
    "Qual propriedade CSS é utilizada para alterar a cor de fundo de um elemento?",
    "background-color: #ffffff;",
    ["A) color", "B) background-color", "C) fill-color", "D) bg-style"],
    "B",
    "A propriedade background-color define a cor de fundo, enquanto color altera a cor do texto.",
    "Essencial para estilização visual básica."
);

addQuestion(
    "Desenvolvimento Web",
    "Média",
    "O que significa a sigla DOM no contexto de desenvolvimento web com JavaScript?",
    "Document Object Model",
    ["A) Data Object Management", "B) Document Object Model", "C) Digital Oriented Markup", "D) Dynamic Opacity Module"],
    "B",
    "O DOM é a representação em árvore estruturada do documento HTML que permite ao JavaScript interagir e modificar elementos da página.",
    "Permite manipulação dinâmica de conteúdo, classes e estilos."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"Qual é a diferença principal entre position: absolute e position: fixed em CSS?",
"Contexto de referência e rolagem da página",
["A) Absolute posiciona em relação à tela, enquanto fixed posiciona em relação ao corpo", "B) Absolute posiciona em relação ao ancestral posicionado mais próximo, enquanto fixed posiciona em relação à janela de visualização (viewport) e não se move com o scroll", "C) Fixed funciona apenas em dispositivos móveis", "D) Não há diferença prática de comportamento"],
"B",
"Elementos com position: fixed ficam fixos na tela mesmo quando o usuário rola a página (scroll), ao contrário de absolute.",
"Fundamentais para criar menus fixos e layouts complexos."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual método JavaScript é utilizado para selecionar um único elemento do DOM utilizando um seletor CSS (como uma classe ou ID)?",
"document.querySelector('#meuId');",
["A) document.getElementById() apenas", "B) document.querySelector()", "C) document.selectElement()", "D) document.findElement()"],
"B",
"O querySelector retorna o primeiro elemento que corresponde ao seletor CSS especificado.",
"Para retornar todos os elementos correspondentes, usa-se querySelectorAll()."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que caracteriza o modelo de layout CSS Flexbox?",
"Alinhamento unidimensional de itens",
["A) Um sistema de grade bidimensional focado em colunas e linhas complexas", "B) Um modelo unidimensional projetado para distribuir espaço e alinhar itens em linha ou coluna", "C) Um método obsoleto substituído por tabelas HTML", "D) Uma ferramenta exclusiva para animações 3D"],
"B",
"O Flexbox é ideal para layouts onde os itens precisam se ajustar dinamicamente em uma única direção (linha ou coluna).",
"Para layouts complexos em grade de duas dimensões, usa-se CSS Grid."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que é o mecanismo de Event Bubbling (Borbulhamento de Eventos) em JavaScript?",
"Propagação de eventos do elemento mais interno para os mais externos",
["A) A criação de eventos duplicados por falha de sintaxe", "B) O fluxo onde um evento disparado em um elemento filho é propagado para cima através de seus ancestrais na árvore DOM", "C) O cancelamento automático de requisições AJAX simultâneas", "D) A execução assíncrona de funções em background"],
"B",
"Quando um evento ocorre em um elemento, ele primeiro roda os ouvintes do próprio elemento e depois sobe propagando-se para os elementos pai.",
"Pode ser interrompido usando o método event.stopPropagation()."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual tag HTML é semanticamente a mais adequada para representar o cabeçalho principal de uma página ou seção?",
"",
["A) ", "B) ", "C) ", "D) "],
"C",
"A tag  representa conteúdo introdutório ou um grupo de links de navegação.",
"A tag  fica oculta e guarda metadados da página."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que são Promises em JavaScript?",
"Objetos que representam a conclusão ou falha de uma operação assíncrona",
["A) Variáveis constantes que nunca mudam de valor", "B) Objetos que representam o resultado eventual (sucesso ou erro) de uma operação assíncrona", "C) Funções matemáticas de alta precisão", "D) Atalhos para criar loops for otimizados"],
"B",
"Promises possuem estados: pending (pendente), fulfilled (realizada) e rejected (rejeitada).",
"Facilitam o tratamento de código assíncrono em comparação a callbacks aninhados."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"Qual é a finalidade do atributo async ou defer em tags  no HTML?",
"Controlar o carregamento e execução assíncrona de scripts externos",
["A) Comprimir o tamanho do arquivo JavaScript para baixar mais rápido", "B) Permitir o carregamento não bloqueante do script em paralelo com a análise do HTML", "C) Criptografar o código JavaScript contra inspeção", "D) Forçar a execução imediata travando a renderização"],
"B",
"Scripts sem async/defer pausam o parsing do HTML até que o script seja baixado e executado. Com defer, o script executa após o documento estar pronto.",
"Melhora consideravelmente a performance de carregamento da página."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual propriedade CSS define a opacidade (transparência) de um elemento?",
"opacity: 0.5;",
["A) transparency", "B) opacity", "C) alpha", "D) visibility"],
"B",
"A propriedade opacity aceita valores de 0 (totalmente transparente) a 1 (totalmente opaco).",
"Diferente de visibility: hidden, a opacidade ainda mantém a interatividade do elemento se não for ajustada."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que o operador await faz dentro de uma função assíncrona (async function) em JavaScript?",
"Pausa a execução da função até que a Promise seja resolvida",
["A) Interrompe a execução de todo o navegador", "B) Faz a função aguardar de forma assíncrona a resolução de uma Promise antes de prosseguir com a próxima linha", "C) Converte tipos primitivos em objetos", "D) Dispara um erro síncrono proposital"],
"B",
"O await torna o código assíncrono muito mais legível, parecendo um código síncrono linear.",
"Só pode ser utilizado dentro de funções declaradas com a palavra-chave async."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"No contexto de CSS Grid, o que significa a unidade fracionária fr?",
"Fração do espaço disponível no container da grade",
["A) Uma unidade fixa baseada em fontes tipográficas", "B) Uma fração do espaço livre disponível dentro do container grid", "C) pixels flutuantes responsivos", "D) Porcentagem baseada na altura da tela"],
"B",
"A unidade fr facilita criar layouts flexíveis onde o espaço é distribuído proporcionalmente (ex: 1fr 2fr).",
"Elimina o cálculo manual complexo de porcentagens com margens."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual comando JavaScript converte um objeto ou array JavaScript em uma string JSON?",
"JSON.stringify(objeto);",
["A) JSON.parse()", "B) JSON.stringify()", "C) JSON.toText()", "D) JSON.convert()"],
"B",
"JSON.stringify serializa dados para o formato de texto JSON, enquanto JSON.parse faz o inverso (texto para objeto).",
"Fundamental para enviar dados via fetch para APIs."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que é o conceito de CSS Specificity (Especificidade)?",
"Regra de peso que define qual estilo CSS será aplicado quando há conflitos",
["A) A velocidade com que o navegador interpreta o arquivo de estilos", "B) O peso calculado de seletores CSS para determinar qual regra prevalece em caso de conflito de regras sobre o mesmo elemento", "C) A quantidade de linhas de código em um arquivo CSS", "D) O suporte a navegadores antigos"],
"B",
"IDs têm mais peso que classes, que por sua vez têm mais peso que seletores de tag.",
"O uso excessivo de !important sobrescreve a especificidade normal."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que é o CORS (Cross-Origin Resource Sharing) em aplicações web?",
"Mecanismo de segurança baseado em cabeçalhos HTTP",
["A) Um protocolo de criptografia de ponta a ponta para senhas", "B) Um mecanismo de segurança implementado por navegadores que restringe requisições HTTP feitas a partir de um domínio diferente daquele que serviu o recurso original", "C) Uma biblioteca JavaScript para requisições assíncronas", "D) Um padrão de rotas para Single Page Applications"],
"B",
"O CORS protege contra requisições maliciosas entre origens distintas, exigindo cabeçalhos específicos no servidor para liberar o acesso.",
"Erros de CORS ocorrem frequentemente ao testar APIs locais sem configuração de permissão."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual tag HTML é utilizada para inserir um arquivo JavaScript externo em um documento?",
"<script src=script.js>",
["A) <javascript src=script.js>", "B) <script href=script.js>", "C) <script src=script.js>", "D) <js file=script.js>"],
"C",
"A tag  com o atributo src vincula scripts externos à página.",
"Geralmente colocada no final do corpo (body) ou no head com defer."
);

addQuestion(
"Desenvolvimento Web", "Média",
"Qual é a principal utilidade do localStorage em navegadores web?",
"Armazenamento persistente de dados chave-valor no navegador",
["A) Enviar dados criptografados diretamente para um banco de dados em nuvem", "B) Armazenar dados no navegador do usuário de forma persistente, mesmo após fechar a aba ou o navegador", "C) Guardar arquivos temporários que expiram ao fechar a sessão", "D) Gerenciar o histórico de navegação avançado"],
"B",
"Diferente do sessionStorage (que apaga ao fechar a aba), o localStorage armazena dados sem data deexpiração explícita.",
"Armazena apenas strings. Objetos precisam ser convertidos com JSON.stringify."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que é o Virtual DOM utilizado em bibliotecas como o React?",
"Cópia leve do DOM real mantida na memória",
["A) Um navegador web rodando em servidores na nuvem", "B) Uma representação leve em memória do DOM real, permitindo calcular o diff e atualizar apenas os nós alterados de forma otimizada", "C) Um emulador de dispositivos móveis para testes", "D) Uma extensão de segurança para JavaScript"],
"B",
"O Virtual DOM minimiza manipulações diretas e lentas do DOM real, melhorando drasticamente a performance de renderização.",
"O algoritmo de reconciliação compara o estado anterior com o atual."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual propriedade CSS define o espaçamento interno entre o conteúdo de um elemento e suas bordas?",
"padding: 15px;",
["A) margin", "B) spacing", "C) padding", "D) border-gap"],
"C",
"O padding define o espaço interno. O margin define o espaço externo ao redor da borda.",
"Componentes fundamentais do CSS Box Model."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que significa dizer que o JavaScript é uma linguagem de programação single-threaded?",
"Executa apenas uma instrução por vez na thread principal",
["A) Não suporta nenhum tipo de operação assíncrona", "B) Possui apenas uma linha de execução principal na thread, processando tarefas sequencialmente", "C) Roda estritamente em processadores de um único núcleo", "D) É uma linguagem exclusiva para servidores monousuário"],
"B",
"Embora seja single-threaded, o JavaScript gerencia operações assíncronas eficientemente através do Event Loop e callbacks.",
"Evita problemas complexos de concorrência comum em multithreading tradicional."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que são Web Workers em JavaScript?",
"Scripts executados em background em threads separadas",
["A) Robôs de indexação de motores de busca", "B) Um mecanismo que permite executar scripts JavaScript em threads de segundo plano separadas da thread principal da interface", "C) Ferramentas de automação de testes end-to-end", "D) Servidores web embutidos no navegador"],
"B",
"Web Workers evitam que tarefas pesadas de processamento travem a interface gráfica do usuário na thread principal.",
"Eles não têm acesso direto ao DOM da página."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual tag HTML é utilizada para criar uma lista não ordenada (com marcadores em bolinhas)?",
"",
["A) ", "B) ", "C) ", "D) "],
"C",
"A tag  (unordered list) agrupa itens de lista que utilizam a tag .",
"A tag  cria listas ordenadas (numeradas)."
);

addQuestion(
"Desenvolvimento Web", "Média",
"Qual é a utilidade do método fetch() em JavaScript moderno?",
"Realizar requisições HTTP assíncronas para servidores (APIs)",
["A) Buscar elementos no DOM usando tags HTML", "B) Realizar requisições de rede assíncronas (como GET e POST) para buscar recursos ou APIs", "C) Baixar arquivos compactados em formato ZIP localmente", "D) Recarregar a página web automaticamente"],
"B",
"O fetch() substituiu o antigo XMLHttpRequest, retornando Promises de forma nativa.",
"Facilita a comunicação com serviços web e APIs RESTful."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que define o comportamento de seletores CSS combinadores, como o seletor de irmão adjacente (+)?",
"Seleciona o elemento imediatamente após o especificado",
["A) Seleciona todos os descendentes diretos ou indiretos", "B) Seleciona o elemento que vem imediatamente após o primeiro elemento especificado, desde que compartilhem o mesmo pai", "C) Selecionado apenas elementos que possuem classes idênticas", "D) Seleciona elementos pais recursivamente"],
"B",
"O combinador + atinge o próximo irmão imediato. O combinador ~ atinge todos os irmãos seguintes.",
"Útil para estilizações condicionais baseadas na ordem estrutural do HTML."
);

/* =====================================================
   SPRING FRAMEWORK (SPRING BOOT, DATA, SECURITY)
===================================================== */

const springQuest = [
    {
        q: "O que é o conceito de Inversão de Controle (IoC) e Injeção de Dependência (DI) no Spring Framework?",
        c: "IoC e Injeção de Dependência",
        o: [
            "A) O Spring obriga o desenvolvedor a instanciar manualmente todas as classes com o operador `new` em tempo de execução.",
            "B) O framework (Container IoC) assume a responsabilidade de criar, gerenciar o ciclo de vida e injetar automaticamente os objetos (beans) onde forem necessários, promovendo o desacoplamento.",
            "C) É um mecanismo de segurança para criptografar senhas de usuários no banco de dados.",
            "D) Um padrão de roteamento de requisições HTTP para microsserviços."
        ],
        a: "B",
        e: "Em vez da classe controlar a criação de suas próprias dependências, o container do Spring faz essa injeção (geralmente via `@Autowired` ou construtor), facilitando testes e manutenção.",
        t: "A injeção via construtor é atualmente a prática recomendada em detrimento da injeção direta em campos (`@Autowired` em atributos)."
    },
    {
        q: "Qual é o principal objetivo do Spring Boot na simplificação do desenvolvimento de aplicações Java?",
        c: "Spring Boot",
        o: [
            "A) Substituir a linguagem Java por JavaScript no backend.",
            "B) Eliminar a necessidade de configurações XML complexas e Boilerplate, oferecendo auto-configuração (autoconfigure), dependências empacotadas (starters) e um servidor embutido (como Tomcat).",
            "C) Executar o código exclusivamente no navegador web do cliente.",
            "D) Fornecer um banco de dados relacional em memória com persistência infinita."
        ],
        a: "B",
        e: "O Spring Boot automatiza a configuração inicial de bibliotecas com base no classpath e nas dependências declaradas (os famosos `spring-boot-starter-*`), permitindo subir uma aplicação pronta para produção em minutos.",
        t: "Permite focar nas regras de negócio em vez de gastar horas configurando servidores de aplicação."
    },
    {
        q: "Como o Spring Data JPA simplifica a camada de persistência de dados em aplicações Java?",
        c: "Spring Data JPA",
        o: [
            "A) Exigindo que o desenvolvedor escreva manualmente todas as consultas SQL brutas para operações básicas de CRUD.",
            "B) Permitindo a criação automática de repositórios através de interfaces que estendem `JpaRepository`, gerando consultas dinâmicas baseadas no nome dos métodos e implementando o mapeamento objeto-relacional (ORM).",
            "C) Substituindo o banco de dados por arquivos de texto plano em formato CSV.",
            "D) Executando migrações de esquema via linha de comando do terminal."
        ],
        a: "B",
        e: "Com o Spring Data JPA, você cria uma interface como `interface UsuarioRepository extends JpaRepository<Usuario, Long>` e o framework implementa automaticamente operações como `save`, `findById`, `delete`, além de parser de nomes como `findByEmail`.",
        t: "Reduz drasticamente o código repetitivo (boilerplate) de acesso a dados."
    },
    {
        q: "Qual é a função das anotações `@Controller` e `@RestController` no Spring MVC / Spring Boot?",
        c: "Spring MVC e REST",
        o: [
            "A) `@Controller` lida com requisições HTTP retornando visualizações (como páginas HTML via Thymeleaf), enquanto `@RestController` é uma combinação de `@Controller` com `@ResponseBody`, serializando os retornos automaticamente para JSON ou XML.",
            "B) `@RestController` é usado apenas para conectar o sistema ao banco de dados Oracle.",
            "C) Não há diferença técnica; ambas executam exatamente o mesmo comportamento de serialização.",
            "D) `@Controller` gerencia transações de segurança e `@RestController` gerencia rotas de arquivos estáticos."
        ],
        a: "A",
        e: "A anotação `@RestController` é o padrão para desenvolvimento de APIs REST modernas, pois garante que o objeto retornado por um método seja convertido diretamente em JSON para consumo pelo frontend.",
        t: "Facilita a construção de arquiteturas desacopladas."
    },
    {
        q: "O que o Spring Security gerencia em uma aplicação web corporativa?",
        c: "Spring Security",
        o: [
            "A) O balanceamento de carga entre servidores na nuvem AWS.",
            "B) O framework abrangente e altamente customizável de autenticação (quem você é) e controle de autorização (o que você pode fazer), além de proteção contra vulnerabilidades comuns como CSRF e XSS.",
            "C) A compactação de arquivos estáticos de imagem e JavaScript.",
            "D) A execução de testes unitários automatizados."
        ],
        a: "B",
        e: "O Spring Security intercepta requisições HTTP através de uma cadeia de filtros (Security Filter Chain), garantindo que apenas usuários autenticados e com as devidas roles/permissões acessem endpoints protegidos.",
        t: "É amplamente integrado com padrões modernos como OAuth2, JWT e autenticação baseada em sessão."
    },
    {
        q: "Para que serve a anotação `@Transactional` no Spring?",
        c: "Gerenciamento de Transações",
        o: [
            "A) Para registrar logs de erro no arquivo console da aplicação.",
            "B) Para gerenciar automaticamente o limite de conexões simultâneas com o servidor.",
            "C) Para declarar que um método ou classe deve executar dentro de uma transação de banco de dados, garantindo atomicidade (ACID) — ou seja, se ocorrer uma exceção não tratada, todas as operações são revertidas (rollback).",
            "D) Para criptografar dados sensíveis trafegados na rede."
        ],
        a: "C",
        e: "O Spring gerencia transações de forma declarativa através de proxies. Se um método anotado com `@Transactional` lança uma RuntimeException, o framework executa o rollback automático no banco.",
        t: "Fundamental para manter a consistência de dados em operações complexas que envolvem múltiplos passos."
    },
    {
        q: "O que são e para que servem os 'Spring Boot Actuator' em uma aplicação de produção?",
        c: "Spring Boot Actuator",
        o: [
            "A) Ferramentas para gerar diagramas UML da arquitetura da aplicação.",
            "B) Endpoints prontos de monitoramento e gerenciamento que expõem métricas de saúde da aplicação (`/actuator/health`), uso de memória, threads, ambiente e informações de build.",
            "C) Um compilador de código Java para binários nativos.",
            "D) Um framework de testes de aceitação em interface gráfica."
        ],
        a: "B",
        e: "O Actuator é essencial em ambientes de microsserviços e produção, permitindo que ferramentas de observabilidade (como Prometheus, Grafana ou Kubernetes) monitorem a saúde do serviço em tempo real.",
        t: "Endpoints sensíveis devem ser devidamente protegidos via Spring Security."
    },
    {
        q: "Qual é a utilidade do ecossistema 'Spring Cloud' no desenvolvimento de software?",
        c: "Spring Cloud",
        o: [
            "A) Fornecer ferramentas e padrões para o desenvolvimento e gerenciamento de arquiteturas baseadas em microsserviços (como Service Discovery, API Gateway, Config Server e Circuit Breaker).",
            "B) Hospedar arquivos estáticos de imagens na nuvem da Google.",
            "C) Substituir o framework Spring Boot por servidores web tradicionais legados.",
            "D) Otimizar consultas SQL em bancos de dados relacionais locais."
        ],
        a: "A",
        e: "O Spring Cloud resolve os problemas complexos inerentes a sistemas distribuídos, como descoberta dinâmica de serviços (Eureka), centralização de configurações e tolerância a faltas.",
        t: "Facilita a transição de monólitos para ambientes resilientes baseados em nuvem."
    },
    {
        q: "Como o Spring lida com o tratamento global de exceções em APIs REST?",
        c: "Tratamento de Exceções",
        o: [
            "A) Deixando a aplicação quebrar e exibir stack traces em HTML para o usuário final.",
            "B) Utilizando classes anotadas com `@ControllerAdvice` (ou `@RestControllerAdvice`) combinadas com `@ExceptionHandler` para capturar exceções de forma centralizada e retornar respostas HTTP padronizadas.",
            "C) Forçando o reinício automático do servidor web a cada erro encontrado.",
            "D) Convertendo erros de banco de dados diretamente em arquivos PDF."
        ],
        a: "B",
        e: "O `@ControllerAdvice` atua como um interceptor global de erros, permitindo mapear exceções de negócio (ex: `RecursoNaoEncontradoException`) para códigos de status HTTP apropriados (`404 Not Found`) de forma limpa.",
        t: "Evita duplicação de blocos `try-catch` espalhados por todos os controllers."
    },
    {
        q: "O que o Spring Profiles (`application-{profile}.properties` ou `.yml`) permite configurar em uma aplicação?",
        c: "Spring Profiles",
        o: [
            "A) Os perfis de acesso e permissões dos usuários administradores do sistema.",
            "B) Conjuntos de configurações customizadas e isoladas para diferentes ambientes de execução (como `dev`, `test`, `prod`), permitindo alternar facilmente conexões de banco de dados e portas sem alterar o código fonte.",
            "C) A paleta de cores e temas visuais do framework.",
            "D) As credenciais de acesso ao repositório GitHub."
        ],
        a: "B",
        e: "Os profiles ajudam a separar parâmetros que mudam conforme o ambiente onde a aplicação está rodando (ex: banco H2 em memória para desenvolvimento e PostgreSQL corporativo para produção).",
        t: "Pode ser ativado via propriedade `spring.profiles.active=prod`."
    }
];

springQuest.forEach(x => {
    addQuestion("Spring Framework", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});


/* =====================================================
   ARQUITETURA DE SOFTWARE
===================================================== */

const arquiteturaSoftware = [
    {
        q: "Qual é o principal objetivo da Arquitetura Limpa (Clean Architecture), proposta por Robert C. Martin (Uncle Bob)?",
        c: "Clean Architecture",
        o: [
            "A) Garantir que o banco de dados relacional seja o núcleo central e inalterável de toda a regra de negócio da aplicação.",
            "B) Separar as preocupações do software em camadas concêntricas, onde as dependências apontam sempre de fora para dentro (as regras de negócio centrais não conhecem detalhes de framework, UI ou banco de dados).",
            "C) Automatizar a criação de arquivos CSS e scripts de estilização para o front-end.",
            "D) Substituir a orientação a objetos tradicional por programação puramente funcional em servidores web."
        ],
        a: "B",
        e: "A Clean Architecture isola o domínio (regras de negócio) de agentes externos como frameworks, banco de dados ou interfaces de usuário, garantindo alta testabilidade e independência tecnológica.",
        t: "A Regra de Dependência é o pilar fundamental: código de círculos externos pode conhecer círculos internos, mas nunca o inverso."
    },
    {
        q: "No contexto da Arquitetura Hexagonal (também conhecida como Ports and Adapters), qual é a função das Portas (Ports) e dos Adaptadores (Adapters)?",
        c: "Arquitetura Hexagonal",
        o: [
            "A) As portas são gabinetes de servidores físicos e os adaptadores são cabos de rede de fibra ótica.",
            "B) As portas definem interfaces abstratas de entrada e saída para a aplicação, enquanto os adaptadores implementam essas portas para conectar o núcleo de negócio a tecnologias externas específicas (como REST APIs, bancos SQL ou filas).",
            "C) As portas controlam o roteamento de telas no front-end e os adaptadores gerenciam folhas de estilo.",
            "D) As portas substituem completamente a necessidade de testes unitários automatizados."
        ],
        a: "B",
        e: "A Arquitetura Hexagonal isola o núcleo da aplicação (Domain) permitindo que ele seja acionado ou acione o mundo exterior através de Portas (contratos) e Adaptadores (implementações concretas de I/O).",
        t: "Isso facilita a troca de um banco de dados ou framework sem alterar uma única linha da regra de negócio."
    },
    {
        q: "Quais são as características fundamentais que definem o estilo de Arquitetura de Microsserviços em comparação com uma aplicação Monolítica?",
        c: "Microsserviços vs Monolito",
        o: [
            "A) Microsserviços rodam obrigatoriamente na mesma máquina física e compartilham a mesma base de dados centralizada.",
            "B) Uma aplicação é estruturada como um conjunto de pequenos serviços independentes, cada um executando em seu próprio processo, comunicando-se via mecanismos leves (geralmente HTTP/REST ou gRPC) e podendo ser implantados de forma autônoma.",
            "C) Microsserviços eliminam a necessidade de testes automatizados e integração contínua.",
            "D) Monolitos são sempre modernos e escaláveis, enquanto microsserviços são usados apenas em sistemas legados."
        ],
        a: "B",
        e: "Microsserviços promovem o desacoplamento organizacional e técnico, permitindo que diferentes equipes desenvolvam, escalem e façam deploy de serviços de forma independente.",
        t: "Em contrapartida, introduzem complexidade distribuída em áreas como consistência de dados, latência de rede e observabilidade."
    },
    {
        q: "O que caracteriza o padrão arquitetural MVC (Model-View-Controller)?",
        c: "Padrão MVC",
        o: [
            "A) A união de todas as regras de banco de dados, layout visual e lógica de controle em um único arquivo de código executável.",
            "B) A separação de responsabilidades em três componentes: o Model (dados e lógica de negócio), a View (interface de apresentação visual) e o Controller (intermediário que gerencia as entradas do usuário e atualiza o Model/View).",
            "C) Um padrão exclusivo para bancos de dados NoSQL distribuídos.",
            "D) Uma técnica de criptografia de ponta para requisições HTTP."
        ],
        a: "B",
        e: "O MVC é um dos padrões mais clássicos da engenharia de software, promovendo a separação entre a representação visual dos dados, a interface de controle e a lógica estrutural.",
        t: "Serve de base conceitual para diversos frameworks web modernos (como Spring MVC, ASP.NET Core MVC, Laravel, entre outros)."
    },
    {
        q: "O que propõe o padrão arquitetural CQRS (Command Query Responsibility Segregation)?",
        c: "CQRS",
        o: [
            "A) Utilizar a mesma tabela e o mesmo modelo de objetos tanto para operações pesadas de escrita quanto para consultas simples de leitura.",
            "B) Separar rigorosamente os modelos e operações de leitura (Queries) dos modelos e operações de escrita/atualização (Commands), permitindo otimizar cada lado de forma independente.",
            "C) Sincronizar dados exclusivamente via arquivos de texto plano em lotes diários.",
            "D) Substituir servidores web tradicionais por funções serverless."
        ],
        a: "B",
        e: "Em sistemas de alta escala, as necessidades de leitura diferem drasticamente das de escrita. O CQRS permite escalar e otimizar bancos de dados de leitura separadamente das bases transacionais de escrita.",
        t: "Muitas vezes é combinado com o padrão Event Sourcing para rastrear o estado do sistema através de eventos."
    },
    {
        q: "No contexto de Arquitetura Orientada a Microsserviços, qual é o objetivo do padrão 'API Gateway'?",
        c: "API Gateway",
        o: [
            "A) Substituir os bancos de dados relacionais por tabelas em cache.",
            "B) Atuar como um ponto único de entrada (proxy reverso) para todas as requisições dos clientes, lidando com roteamento, autenticação, controle de taxa (rate limiting), SSL termination e agregação de respostas.",
            "C) Executar testes de carga automatizados direto no servidor de produção.",
            "D) Gerenciar o versionamento de código no repositório GitHub."
        ],
        a: "B",
        e: "O API Gateway oculta a topologia interna dos microsserviços dos clientes externos, fornecendo uma fachada unificada que simplifica o consumo e centraliza políticas transversais de segurança.",
        t: "Evita que clientes móveis precisem fazer dezenas de requisições diretas a microsserviços internos diferentes."
    },
    {
        q: "O que caracteriza uma Arquitetura Orientada a Eventos (Event-Driven Architecture - EDA)?",
        c: "Event-Driven Architecture",
        o: [
            "A) Os serviços comunicam-se estritamente de forma síncrona através de chamadas HTTP bloqueantes encadeadas.",
            "B) A produção, detecção e consumo de eventos ocorrem de forma assíncrona entre componentes desacoplados, permitindo reatividade imediata e alta escalabilidade por meio de brokers de mensagens (como Kafka ou RabbitMQ).",
            "C) O sistema aguarda o encerramento manual do operador para processar qualquer dado.",
            "D) As regras de negócio ficam centralizadas em um único banco de dados monolítico."
        ],
        a: "B",
        e: "Na EDA, um componente publica um fato ocorrido (evento) sem se preocupar com quem vai consumi-lo, promovendo um desacoplamento temporal e espacial extremo entre os serviços.",
        t: "É ideal para arquiteturas reativas e sistemas que lidam com grandes volumes de dados em tempo real."
    },
    {
        q: "O que avalia a métrica de 'Acoplamento' (Coupling) na arquitetura de software?",
        c: "Acoplamento e Coesão",
        o: [
            "A) O grau de dependência entre diferentes módulos ou classes de um sistema; quanto menor o acoplamento, mais independentes e fáceis de modificar os módulos são.",
            "B) A quantidade de linhas de código que cada desenvolvedor escreve por dia.",
            "C) O espaço em disco ocupado pelos arquivos binários da aplicação compilada.",
            "D) A velocidade de execução dos testes unitários em milissegundos."
        ],
        a: "B",
        e: "Na verdade, a opção correta é: o grau de interconexão entre módulos. Um baixo acoplamento é altamente desejável, pois alterações em um módulo não quebram os demais.",
        t: "Deve sempre caminhar junto com a alta coesão (módulos que fazem uma única coisa bem feita)."
    },
    {
        q: "Qual é a principal proposta da Arquitetura Orientada a Serviços (SOA - Service-Oriented Architecture)?",
        c: "SOA",
        o: [
            "A) Desenvolver aplicações monolíticas gigantescas sem divisão de componentes.",
            "B) Estruturar o software em serviços interoperáveis e reutilizáveis que se comunicam através de um barramento central de integração (ESB - Enterprise Service Bus) e protocolos padronizados.",
            "C) Executar códigos exclusivamente no navegador web do cliente.",
            "D) Eliminar o uso de bancos de dados relacionais em corporações."
        ],
        a: "B",
        e: "A SOA precursora dos microsserviços focava fortemente na integração empresarial e reutilização de serviços corporativos, frequentemente utilizando SOAP, XML e o ESB.",
        t: "Enquanto a SOA foca em compartilhamento e integração corporativa, os microsserviços focam em autonomia e descentralização."
    },
    {
        q: "O que define a Arquitetura em Camadas (Layered Architecture ou N-Tier)?",
        c: "Arquitetura em Camadas",
        o: [
            "A) Organizar o software em bandas horizontais superpostas (ex: Apresentação, Negócio/Domínio, Persistência/Dados), onde cada camada presta serviços para a camada imediatamente superior.",
            "B) Dividir o sistema em pequenos processos independentes distribuídos em servidores cloud.",
            "C) Executar o código de forma estritamente funcional sem estados internos.",
            "D) Agrupar classes por funcionalidades de negócio verticais independentes."
        ],
        a: "A",
        e: "A arquitetura em camadas tradicional organiza o sistema de forma técnica e horizontal. É amplamente compreendida, embora exija cuidado para evitar o vazamento de regras de negócio entre as camadas.",
        t: "É o ponto de partida arquitetural mais comum para sistemas corporativos tradicionais."
    }
];

arquiteturaSoftware.forEach(x => {
    addQuestion("Arquitetura de Software", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   REST E SOAP (ARQUITETURAS DE APIS E SERVIÇOS WEB)
===================================================== */

const restSoapQuest = [
    {
        q: "Qual é a principal diferença arquitetural e de protocolo entre os estilos REST e SOAP?",
        c: "Conceitos Básicos",
        o: [
            "A) O REST é um protocolo estrito baseado em XML padronizado pela W3C, enquanto o SOAP é um estilo arquitetural flexível restrito apenas ao método GET.",
            "B) O SOAP é um protocolo rígido baseado estritamente em XML com envelope próprio e contratos WSDL rígidos; o REST é um estilo arquitetural leve que utiliza verbos HTTP padrão (GET, POST, PUT, DELETE) e suporta múltiplos formatos de dados como JSON.",
            "C) O REST funciona exclusivamente sobre redes locais sem fio, enquanto o SOAP opera somente via Bluetooth.",
            "D) Não há diferenças técnicas; ambos são sinônimos para chamadas de procedimentos remotos (RPC)."
        ],
        a: "B",
        e: "O SOAP (Simple Object Access Protocol) é um protocolo pesado com especificações rígidas de segurança e transações (WS-Security). O REST (Representational State Transfer) foca em recursos, escalabilidade e simplicidade usando os princípios nativos da web.",
        t: "O REST tornou-se o padrão dominante para APIs web modernas devido à sua leveza e facilidade de consumo com JSON."
    },
    {
        q: "Como o REST lida com o conceito de 'Stateless' (Sem Estado) em suas requisições?",
        c: "Princípios do REST",
        o: [
            "A) O servidor armazena todas as senhas e históricos de navegação dos clientes em memória RAM.",
            "B) Cada requisição do cliente para o servidor deve conter todas as informações necessárias para entender e processar a solicitação, sem depender de contextos ou sessões armazenadas previamente no servidor.",
            "C) O estado da aplicação é mantido permanentemente em cookies criptografados no banco de dados relacional.",
            "D) O servidor gerencia o fluxo temporal das telas do usuário através de conexões TCP persistentes."
        ],
        a: "B",
        e: "A restrição Stateless melhora drasticamente a escalabilidade dos servidores REST, pois qualquer instância do servidor pode atender a qualquer requisição de forma independente.",
        t: "A autenticação baseada em tokens (como JWT) encaixa-se perfeitamente nessa premissa."
    },
    {
        q: "Qual é o papel do arquivo WSDL (Web Services Description Language) no ecossistema SOAP?",
        c: "Contratos SOAP",
        o: [
            "A) Servir como um documento de estilos CSS para renderizar páginas HTML no navegador.",
            "B) Descrever formalmente o contrato do serviço SOAP, especificando as operações disponíveis, os formatos XML esperados, os tipos de dados e os endpoints de comunicação.",
            "C) Criptografar o payload da mensagem contra ataques de negação de serviço (DDoS).",
            "D) Substituir o banco de dados relacional no armazenamento de logs de erro."
        ],
        a: "B",
        e: "O WSDL atua como um contrato rígido baseado em XML. Ferramentas de desenvolvimento podem ler esse arquivo automaticamente para gerar stubs e classes de cliente capazes de consumir a API SOAP.",
        t: "Garante alta tipagem e validação estricta, embora adicione complexidade de configuração."
    },
    {
        q: "Quais são os verbos HTTP padrão mais comumente utilizados em uma API RESTful para mapear operações CRUD (Create, Read, Update, Delete)?",
        c: "Verbos HTTP no REST",
        o: [
            "A) `FETCH`, `SEND`, `CHANGE`, `REMOVE`",
            "B) `GET` (Ler), `POST` (Criar), `PUT`/`PATCH` (Atualizar), `DELETE` (Remover)",
            "C) `SELECT`, `INSERT`, `UPDATE`, `DROP`",
            "D) `REQUEST`, `RESPONSE`, `VALIDATE`, `EXECUTE`"
        ],
        a: "B",
        e: "O REST explora a semântica nativa dos métodos HTTP. O `GET` recupera recursos, `POST` cria novos recursos, `PUT`/`PATCH` atualizam e `DELETE` os remove.",
        t: "O uso correto dos verbos e códigos de status HTTP (200, 201, 400, 404, 500) é essencial para uma API REST bem projetada."
    },
    {
        q: "Por que o protocolo SOAP é frequentemente escolhido em ambientes corporativos bancários ou governamentais legados?",
        c: "Uso do SOAP",
        o: [
            "A) Porque ele consome menos largura de banda que o formato JSON.",
            "B) Devido aos seus padrões nativos robustos de segurança avançada (WS-Security), confiabilidade transacional (ACID/WS-AtomicTransaction) e contratos contratuais rígidos.",
            "C) Porque os navegadores web modernos executam SOAP de forma nativa sem bibliotecas adicionais.",
            "D) Porque ele não exige o uso de endereços IP para comunicação."
        ],
        a: "B",
        e: "Embora mais pesado e complexo que o REST, o SOAP oferece recursos de segurança corporativa de nível empresarial integrados e garantias rígidas de entrega de mensagens.",
        t: "Ainda é muito comum em sistemas legados corporativos e integrações B2B (Business-to-Business)."
    },
    {
        q: "O que significa o conceito de 'HATEOAS' (Hypermedia As The Engine Of Application State) no nível mais avançado de maturidade REST (Modelo de Maturidade de Richardson)?",
        c: "HATEOAS no REST",
        o: [
            "A) Um sistema de criptografia de ponta a ponta para proteger dados contra ataques de man-in-the-middle.",
            "B) A prática de incluir links de hipermídia nas respostas da API, permitindo que o cliente navegue dinamicamente pelas próximas ações possíveis sem precisar hardcodar URLs.",
            "C) Uma biblioteca de compressão de arquivos JSON para otimizar o tráfego de rede.",
            "D) Um framework de injeção de dependência para microsserviços Java."
        ],
        a: "B",
        e: "Com HATEOAS, a resposta da API não traz apenas os dados, mas também os links de navegação disponíveis (ex: links para pagar, cancelar ou atualizar o recurso), tornando o cliente altamente desacoplado da estrutura de URLs.",
        t: "Representa o Nível 3 do Modelo de Maturidade de Leonard Richardson para APIs REST."
    },
    {
        q: "Qual é a principal desvantagem técnica associada ao uso do protocolo SOAP?",
        c: "Limitações do SOAP",
        o: [
            "A) A incapacidade total de trafegar dados em formato numérico.",
            "B) O alto overhead de processamento e banda devido à obrigatoriedade de serialização e parsing de estruturas XML complexas (Envelopes SOAP), além do acoplamento rígido.",
            "C) A falta absoluta de padrões de segurança e criptografia.",
            "D) A impossibilidade de ser executado sobre o protocolo HTTP."
        ],
        a: "B",
        e: "O XML do SOAP é verboso e pesado. Processar envelopes SOAP exige mais recursos computacionais de CPU e memória em comparação com o formato JSON leve utilizado pelo REST.",
        t: "Isso tornou o SOAP impopular para aplicações móveis e arquiteturas de alta escala orientadas a microsserviços."
    },
    {
        q: "Como o REST gerencia a identificação dos recursos disponibilizados na web?",
        c: "Recursos no REST",
        o: [
            "A) Através de nomes de métodos remotos encapsulados em um arquivo XML.",
            "B) Através de URIs (Uniform Resource Identifiers) claros e orientados a substantivos (ex: `/clientes/123/pedidos`).",
            "C) Através de números de portas TCP exclusivos para cada cliente conectado.",
            "D) Através de comandos SQL diretos enviados na URL."
        ],
        a: "B",
        e: "No REST, tudo é tratado como um 'recurso'. As URIs devem identificar os recursos de forma intuitiva, focando em substantivos no plural em vez de verbos de ação.",
        t: "Exemplo correto: `GET /produtos` em vez de `GET /obterProdutos`."
    },
    {
        q: "Em termos de transporte e flexibilidade de protocolos, qual é a grande vantagem do REST sobre o SOAP?",
        c: "Transporte no REST",
        o: [
            "A) O REST opera exclusivamente via protocolo FTP.",
            "B) O SOAP está preso obrigatoriamente ao protocolo HTTP, enquanto o REST pode usar qualquer protocolo de rede.",
            "C) O SOAP é altamente acoplado ao protocolo HTTP (e dependente de extensões rígidas), enquanto o REST tira proveito universal de qualquer recurso web baseado em HTTP, podendo também transitar facilmente sobre JSON, XML, HTML ou texto puro.",
            "D) O REST exige conexões dedicadas via cabo de fibra ótica."
        ],
        a: "C",
        e: "Embora o SOAP possa teoricamente rodar sobre SMTP ou TCP, ele é fortemente atrelado ao HTTP com regras complexas de envelopamento. O REST aproveita diretamente a infraestrutura nativa da web (cache, proxies, gateways HTTP).",
        t: "A flexibilidade de formatos de payload (JSON, XML, YAML) também favorece o REST."
    },
    {
        q: "Qual formato de serialização de dados é o mais universal e amplamente associado ao desenvolvimento de APIs REST modernas?",
        c: "Formatos de Dados no REST",
        o: [
            "A) XML estrito com validação XSD obrigatória.",
            "B) JSON (JavaScript Object Notation), devido à sua leveza, legibilidade humana e facilidade de parsing nativo em linguagens web.",
            "C) Arquivos binários compactados em formato ZIP.",
            "D) Textos estruturados em planilhas CSV."
        ],
        a: "B",
        e: "Embora o REST suporte múltiplos formatos (conteúdo negociado via header `Accept`), o JSON tornou-se o padrão de fato da indústria por sua simplicidade e baixo consumo de banda comparado ao XML.",
        t: "Acelera o desenvolvimento tanto no backend quanto no frontend."
    }
];

restSoapQuest.forEach(x => {
    addQuestion("REST e SOAP", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   UML (LINGUAGEM DE MODELAGEM UNIFICADA)
===================================================== */

const umlQuest = [
    {
        q: "Qual é o principal objetivo de um Diagrama de Classes na UML?",
        c: "Diagrama de Classes",
        o: [
            "A) Mostrar o fluxo temporal de mensagens trocadas entre objetos em um cenário de uso.",
            "B) Representar a estrutura estática do sistema, exibindo as classes, seus atributos, operações e os relacionamentos entre elas.",
            "C) Descrever o comportamento dinâmico de um objeto através de estados e transições.",
            "D) Mapear fisicamente os nós de hardware e a topologia de rede onde a aplicação será executada."
        ],
        a: "B",
        e: "O Diagrama de Classes é o pilar estrutural mais utilizado da UML, servindo para modelar o domínio do problema e a arquitetura orientada a objetos antes da implementação do código.",
        t: "Ele foca na visão estática, diferindo dos diagramas comportamentais."
    },
    {
        q: "No contexto de relacionamentos entre classes na UML, qual é a diferença fundamental entre Composição e Agregação?",
        c: "Relacionamentos UML",
        o: [
            "A) A agregação indica uma relação de 'todo-parte' onde as partes podem existir independentemente do todo; a composição é uma forma mais forte de agregação onde o ciclo de vida da parte é dependente do todo.",
            "B) A composição é utilizada exclusivamente para classes abstratas e a agregação para interfaces.",
            "C) Não há diferença prática; ambos os termos são sinônimos para herança múltipla.",
            "D) A agregação utiliza uma seta preta sólida e a composição uma seta tracejada."
        ],
        a: "A",
        e: "Na agregação (losango vazio), o objeto parte sobrevive se o todo for destruído (ex: um curso e seus alunos). Na composição (losango preenchido), se o todo morre, as partes morrem junto (ex: uma casa e seus cômodos ou uma nota fiscal e seus itens).",
        t: "A composição representa uma relação de propriedade estrita."
    },
    {
        q: "Qual é a finalidade principal de um Diagrama de Casos de Uso?",
        c: "Diagrama de Casos de Uso",
        o: [
            "A) Detalhar a sintaxe de programação e os algoritmos internos dos métodos de uma classe.",
            "B) Mapear a infraestrutura de servidores cloud e balanceadores de carga.",
            "C) Ilustrar as funcionalidades do sistema a partir da perspectiva dos atores externos (usuários ou outros sistemas), mostrando quem interage com o quê.",
            "D) Controlar o versionamento de branches e merges no repositório Git."
        ],
        a: "C",
        e: "O Diagrama de Casos de Uso é uma ferramenta de análise de requisitos que descreve o comportamento do sistema sob o ponto de vista do usuário (ator), sem entrar em detalhes técnicos de implementação.",
        t: "Utiliza elementos como atores (bonequinhos), elipses (casos de uso) e limites do sistema."
    },
    {
        q: "Para que serve o relacionamento do tipo 'Include' (Inclusão) em um Diagrama de Casos de Uso?",
        c: "Casos de Uso (Relacionamentos)",
        o: [
            "A) Para indicar que um caso de uso é opcional e só executa se o usuário pagar uma taxa.",
            "B) Para indicar que o comportamento de um caso de uso base inclui obrigatoriamente a execução de outro caso de uso subtarefa (reutilização de comportamento obrigatório).",
            "C) Para herdar atributos e métodos de uma classe pai para uma classe filha.",
            "D) Para conectar o banco de dados relacional ao servidor backend."
        ],
        a: "B",
        e: "A relação `<<include>>` aponta que um fluxo principal sempre executa um subfluxo obrigatório (ex: o caso de uso 'Efetuar Pagamento' pode incluir obrigatoriamente o caso de uso 'Validar Token de Segurança').",
        t: "Diferencia-se do `<<extend>>`, que modela comportamentos opcionais ou condicionais."
    },
    {
        q: "Qual tipo de diagrama UML é mais adequado para representar a ordem cronológica de mensagens trocadas entre objetos ou atores?",
        c: "Diagrama de Sequência",
        o: [
            "A) Diagrama de Implantação",
            "B) Diagrama de Sequência",
            "C) Diagrama de Classes",
            "D) Diagrama de Componentes"
        ],
        a: "B",
        e: "O Diagrama de Sequência pertence à categoria de diagramas de interação, organizando os objetos na horizontal e o tempo na vertical para mostrar o fluxo dinâmico das chamadas de métodos.",
        t: "É amplamente utilizado por desenvolvedores para documentar fluxos complexos de APIs e microsserviços."
    },
    {
        q: "O que representa a visibilidade de um atributo ou método precedido pelo sinal de menos (`-`) em um Diagrama de Classes?",
        c: "Visibilidade na UML",
        o: [
            "A) Público (`public`); acessível por qualquer classe externa.",
            "B) Protegido (`protected`); acessível apenas pelas subclasses.",
            "C) Privado (`private`); acessível exclusivamente dentro da própria classe.",
            "D) Pacote (`package`); acessível apenas por classes do mesmo diretório."
        ],
        a: "C",
        e: "Na notação UML, o sinal de mais (`+`) indica visibilidade pública, o sustenido (`#`) indica protegida, o til (`~`) indica pacote e o menos (`-`) indica privada.",
        t: "Esses símbolos ajudam a aplicar o princípio do encapsulamento na modelagem."
    },
    {
        q: "Qual é o objetivo de um Diagrama de Atividades na UML?",
        c: "Diagrama de Atividades",
        o: [
            "A) Modelar o fluxo de controle lógico de processos, algoritmos ou fluxos de trabalho (workflows), funcionando como uma evolução sofisticada dos fluxogramas tradicionais.",
            "B) Descrever exclusivamente a arquitetura física de redes de computadores.",
            "C) Armazenar os logs de transações financeiras de um banco de dados.",
            "D) Representar a estrutura hierárquica de pastas de um projeto de software."
        ],
        a: "A",
        e: "O Diagrama de Atividades utiliza nós de ação, decisões (losangos) e barras de sincronização (fork/join) para modelar processos paralelos ou sequenciais, tanto de negócio quanto de software.",
        t: "Excelente para modelar regras de negócio complexas com múltiplos desvios condicionais."
    },
    {
        q: "O que modela um Diagrama de Estados (State Machine Diagram)?",
        c: "Diagrama de Estados",
        o: [
            "A) O estado financeiro e o balanço patrimonial da empresa desenvolvedora.",
            "B) O ciclo de vida de um objeto específico, mostrando os estados pelos quais ele passa, os eventos que disparam a mudança de estado e as ações associadas.",
            "C) A quantidade de servidores ativos em um cluster de computação em nuvem.",
            "D) As relações estáticas de herança entre várias classes do sistema."
        ],
        a: "B",
        e: "O Diagrama de Estados é ideal para objetos que mudam de comportamento drasticamente dependendo do momento (ex: um pedido que passa por: `Pendente` -> `Aprovado` -> `Enviado` -> `Entregue`).",
        t: "Conecta-se intimamente com padrões de projeto como o State Pattern."
    },
    {
        q: "Qual é a finalidade de um Diagrama de Implantação (Deployment Diagram)?",
        c: "Diagrama de Implantação",
        o: [
            "A) Mostrar a arquitetura física dos artefatos de software executados em nós de hardware (como servidores, dispositivos móveis e ambientes de nuvem).",
            "B) Detalhar o código fonte linha por linha em arquivos de extensão .java ou .cs.",
            "C) Descrever o passo a passo de uma tela de login para o usuário final.",
            "D) Listar os requisitos de negócio exigidos pelo Product Owner."
        ],
        a: "A",
        e: "O Diagrama de Implantação situa os componentes de software em suas respectivas infraestruturas físicas de hardware, mapeando conexões de rede e nós operacionais.",
        t: "Pertence à categoria de diagramas estruturais voltados para a visão de infraestrutura."
    },
    {
        q: "No contexto da UML, o que significa uma classe descrita em itálico ou com o modificador `<<abstract>>`?",
        c: "Classes Abstratas na UML",
        o: [
            "A) Uma classe que possui erros de sintaxe e não pode ser compilada.",
            "B) Uma classe abstrata, que serve como modelo base e não pode ser instanciada diretamente, exigindo que suas subclasses implementem seus métodos abstratos.",
            "C) Uma classe legada que foi descontinuada pelo desenvolvedor.",
            "D) Uma interface gráfica de usuário renderizada em formato web."
        ],
        a: "B",
        e: "Classes abstratas definem contratos genéricos e comportamentos parciais. Na UML, seus nomes aparecem em itálico ou acompanhados do estereótipo `<<abstract>>`.",
        t: "Diferem das interfaces puras, embora ambas compartilhem a restrição de não permitirem instanciação direta com `new`."
    }
];

umlQuest.forEach(x => {
    addQuestion("UML", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   DESIGN PATTERNS
===================================================== */

const designPatterns = [
    {
        q: "Qual padrão de projeto criacional garante que uma classe tenha apenas uma instância em toda a aplicação e fornece um ponto de acesso global para ela?",
        c: "",
        o: [
            "A) Factory Method",
            "B) Singleton",
            "C) Prototype",
            "D) Builder"
        ],
        a: "B",
        e: "O Singleton restringe a instanciação de uma classe a um único objeto, sendo útil para gerenciar recursos compartilhados como conexões de banco de dados ou configurações globais.",
        t: "Cuidado com o uso excessivo de Singletons, pois eles introduzem estado global e podem dificultar testes unitários."
    },
    {
        q: "Qual categoria de Design Patterns foca na forma como classes e objetos são compostos para formar estruturas maiores, garantindo flexibilidade e eficiência?",
        c: "",
        o: [
            "A) Criacionais",
            "B) Estruturais",
            "C) Comportamentais",
            "D) Concorrentes"
        ],
        a: "B",
        e: "Os padrões estruturais (como Adapter, Decorator e Facade) explicam como montar objetos e classes em estruturas maiores, mantendo essas estruturas flexíveis.",
        t: "Exemplos clássicos de estruturais: Adapter, Composite, Proxy."
    },
    {
        q: "Qual padrão comportamental permite que você defina uma família de algoritmos, coloque cada um deles em uma classe separada e faça com que seus objetos sejam intercambiáveis em tempo de execução?",
        c: "",
        o: [
            "A) Strategy",
            "B) Observer",
            "C) Command",
            "D) Template Method"
        ],
        a: "A",
        e: "O padrão Strategy permite alterar o comportamento de um objeto em tempo de execução encapsulando algoritmos intercambiáveis.",
        t: "Ideal para substituir grandes estruturas condicionais (if/else ou switch/case) baseadas no tipo de comportamento."
    }
];

designPatterns.forEach(x => {
    addQuestion("Design Patterns", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   DOMAIN-DRIVEN DESIGN (DDD)
===================================================== */

const dddQuest = [
    {
        q: "O que é a 'Linguagem Ubíqua' (Ubiquitous Language) no contexto do Domain-Driven Design (DDD)?",
        c: "Linguagem Ubíqua",
        o: [
            "A) Uma linguagem de programação exclusiva desenvolvida para implementar regras de negócio complexas.",
            "B) Uma linguagem rigorosamente compartilhada e comum entre desenvolvedores e especialistas do domínio, utilizada tanto nas conversas quanto no código-fonte.",
            "C) O padrão internacional de documentação em diagramas UML exigido para sistemas corporativos.",
            "D) Um framework de tradução automática de código legado para microsserviços modernos."
        ],
        a: "B",
        e: "A Linguagem Ubíqua elimina a barreira de tradução entre negócios e tecnologia, garantindo que os termos do domínio apareçam diretamente nas classes, métodos e variáveis do software.",
        t: "Se os especialistas de negócio chamam o conceito de 'Apólice', o código deve usar `Apolice`, e não termos genéricos como `Registro`."
    },
    {
        q: "Qual é a principal diferença conceitual entre uma Entidade (Entity) e um Objeto de Valor (Value Object) no DDD?",
        c: "Entidades vs Objetos de Valor",
        o: [
            "A) As entidades possuem identidade própria e única que persiste ao longo das mudanças de atributos, enquanto os objetos de valor são definidos exclusivamente pelos seus valores e são imutáveis.",
            "B) Os objetos de valor salvam dados no banco relacional, e as entidades ficam apenas na memória RAM.",
            "C) As entidades não podem conter regras de negócio, função exclusiva dos objetos de valor.",
            "D) Não há diferença arquitetural; ambos são sinônimos para classes de domínio."
        ],
        a: "A",
        e: "Uma Entidade (ex: `Cliente` com um ID único) continua sendo a mesma mesmo se o endereço mudar. Um Objeto de Valor (ex: `Endereco` ou `Dinheiro`) é comparado pelo conteúdo; se alterar um centavo, ele se torna outro objeto de valor.",
        t: "Sempre que possível, prefira modelar conceitos como Objetos de Valor pela facilidade de manutenção e imutabilidade."
    },
    {
        q: "O que define um 'Bounded Context' (Contexto Delimitado) e qual é a sua importância na arquitetura?",
        c: "Contexto Delimitado",
        o: [
            "A) O limite físico de memória RAM que um microsserviço pode consumir em produção.",
            "B) A demarcação explícita dentro da qual um modelo de domínio se aplica, garantindo que termos e conceitos tenham um significado preciso e isolado.",
            "C) A restrição de segurança que impede acessos externos não autorizados via token JWT.",
            "D) O tempo limite de resposta (timeout) para requisições HTTP entre diferentes servidores."
        ],
        a: "B",
        e: "Em grandes sistemas, um termo como 'Produto' significa coisas totalmente diferentes para o setor de Vendas e para o setor de Logística. O Bounded Context isola esses modelos para que não haja contaminação conceitual.",
        t: "Muitas vezes, cada Bounded Context corresponde diretamente a um microsserviço independente."
    },
    {
        q: "No padrão de projeto tático do DDD, o que é um 'Aggregate' (Agregado) e uma 'Aggregate Root' (Raiz do Agregado)?",
        c: "Agregados",
        o: [
            "A) Um banco de dados NoSQL utilizado para armazenar logs de auditoria em lote.",
            "B) Um agrupamento de entidades e objetos de valor associados tratado como uma unidade única para mudanças de dados, sendo que a Raiz do Agregado é a única porta de entrada externa para acessá-los.",
            "C) Uma biblioteca de relatórios estatísticos em tempo de execução.",
            "D) O diagrama que une todas as tabelas do sistema em formato relacional."
        ],
        a: "B",
        e: "O Agregado define limites de consistência transacional. Alterações em qualquer elemento interno devem passar obrigatoriamente pela Raiz do Agregado para garantir a integridade das regras de negócio.",
        t: "Manter os agregados pequenos reduz conflitos de concorrência em sistemas distribuídos."
    },
    {
        q: "Quando devemos utilizar um 'Domain Service' (Serviço de Domínio) no DDD?",
        c: "Serviços de Domínio",
        o: [
            "A) Para realizar consultas SQL de infraestrutura diretamente na tabela de usuários.",
            "B) Quando uma operação de negócio envolve múltiplos agregados ou conceitos que não pertencem de forma natural a nenhuma entidade ou objeto de valor isolado.",
            "C) Para substituir completamente os controladores REST de uma API web.",
            "D) Para gerenciar o roteamento de telas no frontend."
        ],
        a: "B",
        e: "Embora a maioria da lógica de negócio deva residir dentro das Entidades e Objetos de Valor, algumas regras coordenam vários objetos diferentes (ex: uma transferência bancária entre duas contas distintas). Nesses casos, usa-se um Serviço de Domínio.",
        t: "Serviços de domínio não devem conter estado (stateless) e focam puramente em comportamento."
    },
    {
        q: "Qual é a principal função de um Repositório (Repository) na arquitetura orientada ao domínio?",
        c: "Repositórios",
        o: [
            "A) Executar scripts de migração de banco de dados (Flyway ou Liquibase).",
            "B) Forçar o desacoplamento entre a camada de domínio e a persistência, simulando uma coleção em memória para encontrar, adicionar e remover agregados inteiros.",
            "C) Substituir os testes unitários por simulações reais de disco rígido.",
            "D) Criptografar senhas de usuários antes de salvar no SGBD."
        ],
        a: "B",
        e: "O repositório isola o domínio dos detalhes de infraestrutura (como ORMs, SQL ou NoSQL). Ele deve operar sempre em nível de Agregados, e não de tabelas individuais.",
        t: "Em DDD, criamos repositórios apenas para Raízes de Agregados."
    },
    {
        q: "O que distingue o 'Design Estratégico' (Strategic Design) do 'Design Tático' (Tactical Design) no DDD?",
        c: "Estratégico vs Tático",
        o: [
            "A) O estratégico foca na organização de grandes sistemas, contextos delimitados e relacionamentos entre equipes; o tático foca nos padrões de código de implementação interna (entidades, objetos de valor, repositórios).",
            "B) O estratégico é usado apenas em projetos legados, e o tático é exclusivo para arquiteturas serverless.",
            "C) O estratégico é responsabilidade exclusiva dos testadores (QA), enquanto o tático é feito pelo Product Owner.",
            "D) Não há distinção conceitual; ambos tratam da mesma granularidade de código."
        ],
        a: "A",
        e: "O Design Estratégico ajuda a enxergar o 'panorama geral' da empresa e dividir o domínio em partes gerenciáveis (Bounded Contexts, Context Mapping). O Design Tático entra no nível microscópico do código-fonte.",
        t: "Muitos desenvolvedores aplicam padrões táticos sem usar o design estratégico, perdendo os maiores benefícios do DDD."
    },
    {
        q: "Para que serve uma 'Anti-Corruption Layer' (Camada Anticorrupção - ACL) quando integramos sistemas?",
        c: "Camada Anticorrupção",
        o: [
            "A) Para bloquear tentativas de invasão e ataques de injeção de SQL na API.",
            "B) Para traduzir e isolar o modelo de domínio moderno de sistemas legados ou de terceiros mal estruturados, impedindo que conceitos externos 'sujem' o código limpo da aplicação.",
            "C) Para auditar a folha de pagamento e evitar fraudes financeiras internas.",
            "D) Para compactar pacotes de dados antes de enviar via protocolo gRPC."
        ],
        a: "B",
        e: "A ACL atua como uma ponte tradutora entre dois subsistemas com modelos diferentes. Assim, se o sistema legado usa termos confusos, a camada os traduz para a Linguagem Ubíqua do seu domínio atual.",
        t: "É um padrão essencial ao modernizar sistemas legados de forma incremental."
    },
    {
        q: "Qual é o papel de um 'Domain Event' (Evento de Domínio) em uma arquitetura DDD?",
        c: "Eventos de Domínio",
        o: [
            "A) Registrar erros de sintaxe e exceções de NullPointer no arquivo de log do servidor.",
            "B) Representar formalmente algo importante que aconteceu no domínio do negócio (ex: 'PedidoPago' ou 'ClienteCadastrado'), permitindo comunicação assíncrona e reativa entre agregados ou contextos.",
            "C) Agendar reinicializações automáticas do servidor de aplicações toda meia-noite.",
            "D) Controlar cliques de mouse e eventos de interface do usuário no front-end."
        ],
        a: "B",
        e: "Eventos de Domínio capturam efeitos colaterais de negócios de forma desacoplada. Um agregado dispara um evento, e outros componentes ou contextos podem escutá-lo para reagir sem acoplamento direto.",
        t: "São a base fundamental para arquiteturas orientadas a eventos (Event-Driven Architecture) e padrões como CQRS."
    },
    {
        q: "No contexto de criação de objetos complexos no DDD, quando devemos utilizar o padrão 'Factory' (Fábrica)?",
        c: "Fábricas",
        o: [
            "A) Para fabricar componentes físicos de hardware em linhas de montagem industrial.",
            "B) Para encapsular a lógica complexa de criação de Agregados ou Entidades, garantindo que o objeto nasça sempre em um estado válido e consistente, sem poluir o construtor padrão.",
            "C) Para gerar conexões simultâneas com bancos de dados relacionais.",
            "D) Para compilar o código Java/C# para código de máquina nativo."
        ],
        a: "B",
        e: "Quando a construção de um agregado exige validações complexas, regras de negócio ou montagem de sub-objetos, delegar essa responsabilidade a uma Factory mantém o domínio limpo e coeso.",
        t: "Ajuda a evitar a criação de objetos 'incompletos' ou inválidos na aplicação."
    }
];

dddQuest.forEach(x => {
    addQuestion("Domain-Driven Design (DDD)", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   SCRUM E EXTREME PROGRAMMING (XP)
===================================================== */

const scrumXp = [
    {
        q: "Qual é a principal responsabilidade do Product Owner (PO) no framework Scrum?",
        c: "Papéis no Scrum",
        o: [
            "A) Garantir que o time siga rigorosamente os processos tradicionais de gerenciamento de projetos em cascata.",
            "B) Representar os interesses dos stakeholders, gerenciar, detalhar e priorizar o Product Backlog (Fila do Produto).",
            "C) Atuar como líder servente removendo impedimentos técnicos e facilitando os eventos diários.",
            "D) Escrever e executar os testes automatizados de aceitação de código."
        ],
        a: "B",
        e: "O Product Owner é o único dono do Product Backlog e responsável por maximizar o valor do produto, decidindo o que entra na fila e qual a ordem de prioridade com base no retorno de valor para o negócio.",
        t: "O PO responde pelo 'quê' deve ser feito, enquanto o time de desenvolvimento decide o 'como'."
    },
    {
        q: "O que ocorre tipicamente durante a reunião de Sprint Retrospective (Retrospectiva da Sprint) no Scrum?",
        c: "Eventos do Scrum",
        o: [
            "A) O time apresenta o incremento de software pronto para os clientes e stakeholders externos.",
            "B) O time de desenvolvimento inspeciona a si próprio, avaliando pessoas, relacionamentos, processos e ferramentas, criando um plano de melhorias para a próxima Sprint.",
            "C) O Scrum Master distribui as tarefas da semana seguinte para cada desenvolvedor.",
            "D) O Product Owner cancela a Sprint caso as metas financeiras não tenham sido atingidas."
        ],
        a: "B",
        e: "A Retrospectiva é um evento focado em melhoria contínua interna do time, onde se discute o que funcionou bem, o que falhou e o que pode ser aprimorado no processo de trabalho.",
        t: "Diferencia-se da Sprint Review, que foca na inspeção do produto entregue."
    },
    {
        q: "No Extreme Programming (XP), o que caracteriza a prática de 'Programação em Par' (Pair Programming)?",
        c: "Práticas do XP",
        o: [
            "A) Dois desenvolvedores trabalham juntos na mesma estação de trabalho, onde um escreve o código (piloto) e o outro revisa e pensa criticamente em tempo real (observador/copiloto), invertendo os papéis frequentemente.",
            "B) Cada desenvolvedor trabalha em um branch separado e faz um merge ao final do dia.",
            "C) Os desenvolvedores competem para ver quem entrega a mesma feature mais rápido.",
            "D) A equipe se divide em duplas para realizar testes de carga em servidores remotos."
        ],
        a: "A",
        e: "A programação em par melhora a qualidade do código, reduz a quantidade de defeitos de forma instantânea e promove a disseminação de conhecimento técnico entre os membros da equipe.",
        t: "É uma das práticas mais icônicas e debatidas do desenvolvimento ágil."
    },
    {
        q: "O que compõe o chamado 'Sprint Backlog' em um projeto Scrum?",
        c: "Artefatos do Scrum",
        o: [
            "A) A lista completa de todos os requisitos desejados para o software ao longo de todo o ciclo de vida do produto.",
            "B) O conjunto de itens do Product Backlog selecionados para a Sprint atual, juntamente com o plano de desenvolvimento necessário para entregar o incremento.",
            "C) O relatório de desempenho financeiro apresentado aos investidores da empresa.",
            "D) A lista de bugs críticos encontrados pelo setor de qualidade em produção."
        ],
        a: "B",
        e: "O Sprint Backlog pertence exclusivamente ao time de desenvolvimento e detalha o trabalho que a equipe realizará para atingir a Meta da Sprint (Sprint Goal).",
        t: "Ele é dinâmico e evolui ao longo da Sprint conforme o time descobre mais sobre o trabalho."
    },
    {
        q: "Quais são os cinco valores fundamentais propostos pelo Extreme Programming (XP)?",
        c: "Valores do XP",
        o: [
            "A) Custo, Escopo, Prazo, Qualidade e Hierarquia.",
            "B) Comunicação, Simplicidade, Feedback, Coragem e Respeito.",
            "C) Planejamento, Execução, Controle, Monitoramento e Encerramento.",
            "D) Transparência, Inspeção, Adaptação, Velocidade e Previsibilidade."
        ],
        a: "B",
        e: "Os cinco valores do XP guiam as atitudes e comportamentos da equipe técnica, criando um ambiente colaborativo e altamente adaptável a mudanças.",
        t: "Esses valores sustentam as 12 práticas clássicas do XP."
    },
    {
        q: "Qual melhor descreve o papel do Scrum Master em um projeto ágil?",
        c: "Papéis no Scrum",
        o: [
            "A) Um gerente de projeto tradicional que cobra prazos, delega tarefas e controla horas trabalhadas.",
            "B) Um líder servente (servant leader) que ajuda a remover impedimentos, protege a equipe de interferências externas e promove a adoção do Scrum.",
            "C) O responsável técnico supremo pela arquitetura de código e banco de dados.",
            "D) O representante oficial dos clientes que valida cada linha de código escrita."
        ],
        a: "B",
        e: "O Scrum Master não manda na equipe; ele serve ao time, facilitando os eventos, garantindo que o Scrum seja compreendido e ajudando a eliminar bloqueios que atrapalham a produtividade.",
        t: "Ele atua como um facilitador e guardião do processo ágil."
    },
    {
        q: "No contexto do Extreme Programming (XP), qual é o objetivo da prática de Refatoração Contínua (Refactoring)?",
        c: "Práticas do XP",
        o: [
            "A) Reescrever completamente o software do zero a cada seis meses para usar novas linguagens.",
            "B) Melhorar a estrutura interna do código existente sem alterar o seu comportamento externo, mantendo-o limpo, legível e livre de dívidas técnicas.",
            "C) Aumentar artificialmente o número de linhas de código para impressionar os gestores.",
            "D) Traduzir comentários em inglês para o idioma nativo da equipe."
        ],
        a: "B",
        e: "A refatoração constante evita o acúmulo de complexidade desnecessária (dívida técnica), tornando o sistema mais fácil de manter e estender ao longo do tempo.",
        t: "No XP, refatorar é uma atividade diária e integrada ao desenvolvimento."
    },
    {
        q: "O que significa a 'Definição de Pronto' (Definition of Done - DoD) no Scrum?",
        c: "Conceitos do Scrum",
        o: [
            "A) O momento exato em que o cliente paga a fatura mensal do contrato de software.",
            "B) Uma compreensão compartilhada e formal de todos os critérios de qualidade que um incremento de software deve atender para ser considerado completo e liberável.",
            "C) A quantidade de horas semanais que os desenvolvedores passam na empresa.",
            "D) A autorização dada pelo gerente para iniciar uma nova Sprint."
        ],
        a: "B",
        e: "A DoD garante transparência e qualidade. Se um item do backlog não atende aos critérios da DoD (ex: código revisado, testes unitários passando, documentado), ele não pode ser considerado pronto nem entregue.",
        t: "Diferencia-se da 'Definition of Ready' (DoR), que define quando um item está pronto para entrar na Sprint."
    },
    {
        q: "O que significa o conceito de 'Timebox' aplicado aos eventos do Scrum?",
        c: "Eventos do Scrum",
        o: [
            "A) Um cronograma flexível que pode ser estendido caso a reunião não termine.",
            "B) Uma duração máxima fixa alocada para cada evento ou atividade, ajudando a focar, evitar reuniões longas e promover a pontualidade.",
            "C) O prazo de entrega estipulado pelo contrato com o cliente final.",
            "D) Uma ferramenta de controle de ponto dos funcionários."
        ],
        a: "B",
        e: "Os eventos do Scrum (como a Daily de 15 minutos ou a Planning de até 8 horas para Sprints de um mês) possuem duração máxima estrita (Timebox) para otimizar o tempo e evitar desperdícios.",
        t: "Uma vez esgotado o tempo de um evento timeboxed, ele é encerrado."
    },
    {
        q: "Qual prática do Extreme Programming (XP) enfatiza a integração frequente de código várias vezes ao dia, combinada com testes automatizados?",
        c: "Práticas do XP",
        o: [
            "A) Integração Contínua (Continuous Integration)",
            "B) Cascata Estendida (Extended Waterfall)",
            "C) Planejamento de Longo Prazo (Long-Term Planning)",
            "D) Controle Manual de Mudanças (Change Control Board)"
        ],
        a: "A",
        e: "A Integração Contínua no XP exige que os desenvolvedores integrem seu código ao repositório principal com alta frequência, rodando suítes de testes automatizados para detectar conflitos e bugs imediatamente.",
        t: "Minimiza o pesadelo de integrar códigos divergentes após semanas de trabalho isolado."
    }
];

scrumXp.forEach(x => {
    addQuestion("Scrum e XP", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   TESTES DE SOFTWARE
===================================================== */

const testesSoftware = [
    {
        q: "Qual é a principal diferença conceitual entre testes de caixa preta (black-box) e testes de caixa branca (white-box)?",
        c: "Caixa Preta vs Caixa Branca",
        o: [
            "A) O teste de caixa preta é feito apenas em servidores de produção, enquanto o de caixa branca roda localmente.",
            "B) O teste de caixa preta valida a funcionalidade externa e os requisitos do sistema sem conhecer o código interno, enquanto o teste de caixa branca examina a estrutura interna, lógica e caminhos do código-fonte.",
            "C) O teste de caixa preta é totalmente automatizado e o de caixa branca é executado exclusivamente de forma manual.",
            "D) Não há diferença prática; ambos utilizam os mesmos algoritmos de cobertura de código."
        ],
        a: "B",
        e: "Nos testes de caixa preta (especificação), o testador avalia entradas e saídas baseando-se nos requisitos funcionais. Nos testes de caixa branca (estruturais), o testador conhece o código e escreve casos para cobrir ramificações, loops e linhas de código.",
        t: "Testes unitários costumam ser de caixa branca, enquanto testes de aceitação e sistema tendem a ser de caixa preta."
    },
    {
        q: "No contexto da pirâmide de testes de software, qual é a principal característica dos testes unitários (Unit Tests)?",
        c: "Pirâmide de Testes",
        o: [
            "A) São testes lentos que validam a integração completa entre o banco de dados e a interface gráfica.",
            "B) São testes de baixo nível, rápidos e isolados que verificam o comportamento de pequenos blocos de código (como funções ou métodos individuais).",
            "C) São executados manualmente por usuários finais em ambiente de homologação.",
            "D) Substituem completamente a necessidade de testes de sistema e de regressão."
        ],
        a: "B",
        e: "Os testes unitários formam a base da pirâmide de testes. Devem ser executados em grande quantidade, rodar em milissegundos e isolar dependências externas utilizando mocks ou stubs.",
        t: "Uma boa suíte de testes unitários detecta regressões imediatamente após alterações no código."
    },
    {
        q: "O que significa o conceito de 'TDD' (Test-Driven Development) no ciclo de desenvolvimento de software?",
        c: "TDD",
        o: [
            "A) Desenvolver todo o sistema primeiro e escrever os testes automatizados apenas após o deploy em produção.",
            "B) Uma técnica onde os testes automatizados são escritos antes do código de produção, seguindo o ciclo: falhar (Red), passar (Green) e refatorar (Refactor).",
            "C) Um método de teste baseado em carga para medir a tolerância a falhas de servidores web.",
            "D) Documentar os requisitos do cliente utilizando diagramas de casos de uso em UML."
        ],
        a: "B",
        e: "No TDD, o desenvolvedor primeiro escreve um teste que falha para uma funcionalidade desejada, depois escreve o código mínimo necessário para fazer o teste passar, e por fim refatora o código mantendo-o limpo.",
        t: "O TDD ajuda a projetar códigos mais desacoplados e altamente testáveis desde a concepção."
    },
    {
        q: "Qual é o principal objetivo dos testes de integração em uma aplicação?",
        c: "Testes de Integração",
        o: [
            "A) Garantir que métodos individuais em classes isoladas funcionem sem erros de sintaxe.",
            "B) Verificar se diferentes módulos, componentes ou serviços do sistema (como a comunicação entre a API e o banco de dados) funcionam corretamente quando combinados.",
            "C) Validar a experiência visual e o design responsivo em diferentes tamanhos de tela.",
            "D) Testar o comportamento do aplicativo sob estresse extremo de requisições simultâneas."
        ],
        a: "B",
        e: "Enquanto o teste unitário isola as partes, o teste de integração assegura que a engrenagem conjunta funcione — por exemplo, testando se um repositório consegue persistir dados reais no banco de dados sem quebrar.",
        t: "Eles identificam falhas de interface ou contratos entre serviços que os testes unitários não conseguem pegar."
    },
    {
        q: "O que avalia o tipo de teste conhecido como 'Teste de Regressão'?",
        c: "Testes de Regressão",
        o: [
            "A) Se o software consegue voltar para uma versão anterior em caso de falha crítica no servidor.",
            "B) Se novas alterações no código (correções de bugs ou novas features) quebraram funcionalidades que já funcionavam anteriormente.",
            "C) Se a velocidade de carregamento regrediu após a otimização de imagens.",
            "D) O nível de satisfação dos usuários antigos em relação aos novos menus do sistema."
        ],
        a: "B",
        e: "O teste de regressão é executado sempre que há uma mudança no código para garantir que o comportamento existente permaneceu intacto. A automação é fundamental para tornar esse processo viável.",
        t: "Suítes de testes de regressão automatizadas economizam centenas de horas de testes manuais."
    },
    {
        q: "Qual é a finalidade de utilizar 'Mocks' (ou Dublês de Teste) durante a execução de testes unitários?",
        c: "Mocks e Stubs",
        o: [
            "A) Simular o comportamento de componentes ou dependências externas complexas (como APIs de pagamento ou conexões de banco de dados) de forma controlada e rápida.",
            "B) Gerar senhas criptografadas aleatórias para testes de segurança de intrusão.",
            "C) Criar cópias de backup automáticas do código-fonte para o GitHub.",
            "D) Traduzir mensagens de erro do inglês para o português no console."
        ],
        a: "A",
        e: "Mocks permitem isolar a unidade que está sendo testada, simulando respostas e evitando dependências lentas ou instáveis (como requisições reais de rede ou operações pesadas de disco).",
        t: "O uso excessivo de mocks pode indicar que o código possui forte acoplamento e precisa de refatoração."
    },
    {
        q: "O que mede a métrica de 'Cobertura de Código' (Code Coverage), como a fornecida por ferramentas como JaCoCo ou Istanbul?",
        c: "Cobertura de Código",
        o: [
            "A) A porcentagem exata de bugs corrigidos pela equipe de QA em um sprint.",
            "B) A proporção de linhas, instruções ou ramificações do código-fonte que foram executadas ao menos uma vez durante a bateria de testes automatizados.",
            "C) O espaço em disco ocupado pelos arquivos de teste em comparação com o código de produção.",
            "D) O tempo total de execução da suíte de testes em segundos."
        ],
        a: "B",
        e: "A cobertura de código aponta quais partes do sistema passaram pelos testes. Alta cobertura não garante ausência total de bugs, mas indica quais trechos do código estão desprotegidos contra falhas.",
        t: "Deve ser tratada como um indicador de qualidade, e não como uma meta absoluta de perfeição."
    },
    {
        q: "Qual é o foco principal dos chamados 'Testes de Aceitação' (Acceptance Testing)?",
        c: "Testes de Aceitação",
        o: [
            "A) Verificar se a lógica matemática de funções matemáticas internas está correta.",
            "B) Validar se o sistema atende aos requisitos de negócio e se está pronto para ser aceito pelo cliente ou usuário final.",
            "C) Testar a robustez do servidor contra quedas de energia no data center.",
            "D) Analisar vulnerabilidades de injeção de SQL no backend."
        ],
        a: "B",
        e: "Os testes de aceitação focam nos critérios de valor de negócio. Muitas vezes são expressos no formato Behavior-Driven Development (BDD) utilizando sintaxe Gherkin (Dado-Quando-Então).",
        t: "Garantem que o software construído é exatamente o que o cliente pediu e especificou."
    },
    {
        q: "No contexto de testes de software não funcionais, o que avalia um 'Teste de Carga' (Load Testing)?",
        c: "Testes Não Funcionais",
        o: [
            "A) A capacidade do sistema de suportar uma carga esperada de usuários e transações simultâneas, medindo o desempenho sob estresse operacional.",
            "B) O peso físico dos servidores em racks metálicos dentro de uma sala climatizada.",
            "C) A quantidade de linhas de código que cada desenvolvedor consegue commitar por dia.",
            "D) A facilidade de uso e acessibilidade da interface para pessoas com deficiência visual."
        ],
        a: "A",
        e: "O teste de carga simula o tráfego real ou projetado para identificar gargalos de performance, tempos de resposta lentos e limites operacionais antes que o sistema vá para produção.",
        t: "É um pilar essencial para sistemas corporativos que recebem alta concorrência de acessos."
    },
    {
        q: "O que caracteriza a prática de Integração Contínua (CI) em relação aos testes automatizados?",
        c: "Integração Contínua",
        o: [
            "A) Executar testes manuais de homologação uma vez a cada semestre antes de liberar o sistema.",
            "B) Automatizar a execução de toda a suíte de testes sempre que novos códigos são enviados (pushed) para o repositório compartilhado, garantindo feedback rápido sobre falhas.",
            "C) Permitir que o código seja enviado para produção sem passar por validações prévias.",
            "D) Sincronizar branches locais via git fetch de forma manual."
        ],
        a: "B",
        e: "A Integração Contínua (gerenciada por ferramentas como GitHub Actions, GitLab CI ou Jenkins) roda os testes automaticamente a cada commit, bloqueando a entrada de código que quebre o sistema.",
        t: "Garante que o repositório principal permaneça sempre em um estado saudável e executável."
    }
];

testesSoftware.forEach(x => {
    addQuestion("Testes de Software", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   GIT E CONTROLE DE VERSÃO
===================================================== */

const gitQuest = [
    {
        q: "Qual é a principal diferença entre os comandos 'git pull' e 'git fetch' em um fluxo de trabalho com Git?",
        c: "Fetch vs Pull",
        o: [
            "A) O 'git fetch' atualiza imediatamente os arquivos da árvore de trabalho (working directory), enquanto o 'git pull' apenas baixa o histórico.",
            "B) O 'git fetch' baixa as alterações do repositório remoto sem aplicá-las automaticamente no seu branch atual, enquanto o 'git pull' baixa e faz o merge (mesclagem) automático na sequência.",
            "C) O 'git pull' é exclusivo para servidores locais e o 'git fetch' é usado apenas no GitHub.",
            "D) Não há diferença funcional; ambos executam exatamente a mesma rotina de sincronização."
        ],
        a: "B",
        e: "O `git fetch` busca as novidades do remoto atualizando as referências locais (como `origin/main`), permitindo que você inspecione o código antes de integrar. O `git pull` faz o `fetch` seguidos de um `merge` imediato.",
        t: "Utilizar `git fetch` costuma ser mais seguro para revisar o que mudou antes de juntar no seu código atual."
    },
    {
        q: "No Git, para que serve o comando 'git stash'?",
        c: "Git Stash",
        o: [
            "A) Para apagar permanentemente o histórico de commits corrompidos.",
            "B) Para guardar temporariamente as alterações não commitadas (modificações em arquivos rastreados) em um estoque, limpando a sua área de trabalho sem perder o progresso.",
            "C) Para criar um novo branch isolado direto na nuvem do GitHub.",
            "D) Para enviar o código diretamente para o servidor de produção em ambiente de homologação."
        ],
        a: "B",
        e: "O `git stash` é ideal quando você está no meio de uma alteração, precisa mudar de branch urgentemente para corrigir um bug, mas ainda não quer fazer um commit definitivo.",
        t: "Você pode recuperar o que guardou usando o comando `git stash pop`."
    },
    {
        q: "O que acontece quando executamos o comando 'git reset --soft HEAD~1'?",
        c: "Git Reset",
        o: [
            "A) Desfaz o último commit, mas mantém todas as alterações dos arquivos preservadas na área de staged (prontas para novo commit).",
            "B) Apaga permanentemente o último commit e descarta todas as alterações feitas no código de forma irreversível.",
            "C) Remove o repositório local do computador e desconecta do GitHub.",
            "D) Converte o branch atual em um arquivo compactado zip."
        ],
        a: "A",
        e: "O modificador `--soft` volta o ponteiro do HEAD em um commit, mantendo intactas as modificações no `staging area`. O `--mixed` (padrão) mantém as alterações no working directory, e o `--hard` apaga tudo.",
        t: "Use `--hard` com muito cuidado, pois ele descarta o trabalho não salvo."
    },
    {
        q: "Qual é a utilidade e o comportamento padrão do arquivo '.gitignore' em um projeto versionado?",
        c: ".gitignore",
        o: [
            "A) Listar os colaboradores autorizados a realizar push no repositório remoto.",
            "B) Definir padrões de arquivos e pastas que o Git deve ignorar e não rastrear (como dependências pesadas, arquivos de configuração local e caches).",
            "C) Automatizar os testes unitários toda vez que um commit for realizado.",
            "D) Armazenar senhas de acesso criptografadas para conexão com o banco de dados."
        ],
        a: "B",
        e: "O `.gitignore` impede que arquivos gerados automaticamente, credenciais sensíveis ou pastas de pacotes (`node_modules`, `build`, etc.) sejam enviados por engano para o versionamento.",
        t: "Arquivos que já estão sendo rastreados pelo Git continuam sendo monitorados mesmo se você adicioná-los depois ao `.gitignore`, exigindo remoção prévia com `git rm --cached`."
    },
    {
        q: "Qual é a diferença fundamental entre os comandos 'git merge' e 'git rebase' ao integrar alterações de um branch em outro?",
        c: "Merge vs Rebase",
        o: [
            "A) O 'merge' cria um commit de junção preservando o histórico real de ramificação, enquanto o 'rebase' reescreve o histórico aplicando os commits em sequência linear.",
            "B) O 'rebase' é mais rápido porque deleta os branches antigos, enquanto o 'merge' é proibido em equipes ágeis.",
            "C) O 'merge' altera o código remoto e o 'rebase' altera apenas o repositório local.",
            "D) Não há diferença matemática; ambos geram exatos mesmos hashes de commit."
        ],
        a: "A",
        e: "O `merge` preserva o contexto histórico criando um nó de união (merge commit). O `rebase` move a base da sua branch para o topo da branch de destino, gerando uma linha do tempo limpa e linear.",
        t: "Evite usar `rebase` em branches públicos/compartilhados para não confundir o histórico de outros desenvolvedores."
    },
    {
        q: "No fluxo de trabalho do Git, o que caracteriza a área chamada 'Staging Area' (ou Index)?",
        c: "Áreas do Git",
        o: [
            "A) O servidor remoto hospedado na nuvem (GitHub ou GitLab).",
            "B) Uma área intermediária onde você seleciona e prepara quais arquivos modificados serão incluídos no próximo commit.",
            "C) O diretório físico oculto `.git` onde ficam os logs de configuração.",
            "D) Um ambiente de homologação onde o site roda em produção."
        ],
        a: "B",
        e: "Antes de salvar as mudanças com `git commit`, você usa o `git add` para mover os arquivos da working tree para a Staging Area, selecionando exatamente o que compõe a sua entrega.",
        t: "Isso permite commitar partes específicas de arquivos modificados através do modo interativo (`git add -p`)."
    },
    {
        q: "O que o comando 'git checkout -b novo-branch' (ou 'git switch -c') realiza na prática?",
        c: "Branches",
        o: [
            "A) Deleta permanentemente o branch atual e todos os seus arquivos.",
            "B) Cria um novo branch e muda imediatamente o contexto de trabalho para ele em um único comando.",
            "C) Sincroniza o branch local com a última versão estável da nuvem.",
            "D) Cria uma tag de versão para release de software."
        ],
        a: "B",
        e: "Esse comando combina a criação de uma nova ramificação (`branch`) com a troca instantânea para ela, economizando o uso de dois comandos separados (`git branch` + `git checkout`).",
        t: "Nas versões mais recentes do Git, o comando moderno recomendado para troca é `git switch`."
    },
    {
        q: "O que ocorre quando o Git aponta um conflito de merge (merge conflict)?",
        c: "Conflitos",
        o: [
            "A) O repositório é corrompido e precisa ser baixado novamente do zero.",
            "B) O Git encontrou alterações concorrentes na mesma linha de código em branches diferentes e pausa a mesclagem para que o desenvolvedor decida manualmente qual código manter.",
            "C) O sistema operacional bloqueia o acesso aos arquivos por falta de permissão de administrador.",
            "D) O GitHub rejeita o projeto por violação de boas práticas de código limpo."
        ],
        a: "B",
        e: "O Git insere marcadores visuais (`<<<<<<<`, `=======`, `>>>>>>>`) no arquivo conflitante. Cabe ao programador editar o código para resolver o impasse, salvar o arquivo, dar `git add` e concluir o commit.",
        t: "Editores modernos como o VS Code possuem ferramentas visuais excelentes para resolução de conflitos de merge."
    },
    {
        q: "Para que serve o comando 'git log --oneline --graph'?",
        c: "Git Log",
        o: [
            "A) Para gerar um gráfico de consumo de memória RAM do processo do Git.",
            "B) Para exibir o histórico de commits de forma resumida (uma linha por commit) acompanhado de uma representação gráfica em árvore das ramificações.",
            "C) Para criar um diagrama UML da arquitetura do software baseado nos commits.",
            "D) Para medir a produtividade e quantidade de linhas escritas por cada desenvolvedor."
        ],
        a: "B",
        e: "Essa combinação de parâmetros do `git log` é excelente para visualizar rapidamente o fluxo de merges, ramificações e o histórico linear de forma limpa e direta no terminal.",
        t: "Muitos desenvolvedores criam um alias (atalho) no terminal para esse comando devido à sua alta utilidade."
    },
    {
        q: "O que é um 'Git Hook' e onde ele é executado?",
        c: "Git Hooks",
        o: [
            "A) Uma ferramenta gráfica oficial para conectar o repositório local ao GitHub Desktop.",
            "B) Um script personalizado que o Git executa automaticamente antes ou depois de eventos específicos, como commits, pushes ou merges.",
            "C) Um tipo de chave criptográfica utilizada para autenticação SSH no servidor remoto.",
            "D) Um plugin de extensão para debug de erros de sintaxe em JavaScript."
        ],
        a: "B",
        e: "Os hooks ficam na pasta oculta `.git/hooks` e são muito usados para rodar linters (como ESLint), formatadores de código ou testes automatizados antes de permitir um commit (`pre-commit`).",
        t: "Eles ajudam a garantir a qualidade do código antes mesmo que ele seja enviado para o repositório compartilhado."
    }
];

gitQuest.forEach(x => {
    addQuestion("Git", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   CRIPTOGRAFIA E CERTIFICAÇÃO DIGITAL
===================================================== */

const criptografia = [
    {
        q: "Qual é a principal diferença conceitual entre a criptografia simétrica e a criptografia assimétrica?",
        c: "Simétrica vs Assimétrica",
        o: [
            "A) A criptografia simétrica utiliza chaves diferentes para cifrar e decifrar, enquanto a assimétrica utiliza a mesma chave.",
            "B) A criptografia simétrica utiliza uma única chave compartilhada para cifrar e decifrar, enquanto a assimétrica utiliza um par de chaves (pública e privada).",
            "C) A criptografia simétrica é exclusiva para ambientes web via HTTPS, e a assimétrica é apenas para arquivos locais.",
            "D) Não há diferença de segurança; a criptografia assimétrica é apenas uma versão mais antiga da simétrica."
        ],
        a: "B",
        e: "Na criptografia simétrica, a mesma chave secreta faz todo o trabalho, exigindo um canal seguro de troca. Na assimétrica, o que a chave pública criptografa, apenas a chave privada correspondente descodifica.",
        t: "Algoritmos simétricos (como AES) são muito mais rápidos que os assimétricos (como RSA)."
    },
    {
        q: "No contexto da Segurança da Informação, o que garante a propriedade de 'Não-Repúdio' (ou Irretratabilidade)?",
        c: "",
        o: [
            "A) O uso exclusiva de senhas fortes com troca obrigatória a cada 30 dias.",
            "B) A capacidade de impedir que um usuário negue a autoria de uma mensagem ou transação que ele realizou.",
            "C) A criptografia de dados em trânsito utilizando protocolos de rede como o TLS 1.3.",
            "D) O armazenamento de senhas utilizando funções de hash unidirecionais com salt."
        ],
        a: "B",
        e: "O não-repúdio assegura que o emissor de uma mensagem não possa negar posteriormente tê-la enviado, o que é comumente alcançado com o uso de assinaturas digitais baseadas em criptografia assimétrica.",
        t: "Fundamental em transações bancárias e documentos legais digitais."
    },
    {
        q: "O que é uma função de Hash criptográfico (como SHA-256) e qual é uma de suas propriedades fundamentais?",
        c: "Funções Hash",
        o: [
            "A) Uma função reversível que compacta e descompacta arquivos grandes para otimizar espaço em disco.",
            "B) Um algoritmo matemático que converte uma entrada de tamanho arbitrário em uma string de tamanho fixo, sendo unidirecional (impossível de reverter para obter o dado original).",
            "C) Um sistema de chaves gêmeas onde a chave pública descobre o texto original gerado pelo hash.",
            "D) Um protocolo de troca de chaves simétricas inseguras em redes públicas."
        ],
        a: "B",
        e: "O hash gera uma 'impressão digital' única do arquivo ou texto. Ele é unidirecional (one-way) e resistente a colisões (difícil encontrar duas entradas que gerem o mesmo hash).",
        t: "Funções hash são amplamente utilizadas na verificação de integridade de dados e armazenamento seguro de senhas."
    },
    {
        q: "Qual é a principal função de uma Autoridade Certificadora (AC) dentro de uma Infraestrutura de Chaves Públicas (ICP)?",
        c: "ICP-Brasil e Certificação",
        o: [
            "A) Bloquear ataques de negação de serviço (DDoS) em servidores de aplicações web.",
            "B) Emitir, suspender, revogar e gerenciar certificados digitais, atrelando uma chave pública à identidade de um usuário ou instituição.",
            "C) Armazenar cópias de segurança (backup) de todas as senhas dos usuários para recuperação em caso de perda.",
            "D) Executar varreduras de vulnerabilidades em códigos-fonte antes do deploy em produção."
        ],
        a: "B",
        e: "A Autoridade Certificadora atua como uma terceira parte confiável que valida a identidade do titular e emite o certificado digital assinado com sua própria chave privada.",
        t: "O certificado digital funciona como o 'RG' eletrônico de pessoas físicas ou jurídicas."
    },
    {
        q: "Como funciona o processo de criação de uma Assinatura Digital?",
        c: "Assinatura Digital",
        o: [
            "A) O documento é cifrado integralmente utilizando a chave pública do destinatário.",
            "B) O resumo (hash) do documento é gerado e criptografado utilizando a chave privada do remetente.",
            "C) A senha do usuário é anexada ao final do arquivo em formato de texto plano protegido por permissões do sistema.",
            "D) Utiliza-se exclusivamente criptografia simétrica para mascarar o cabeçalho do arquivo."
        ],
        a: "B",
        e: "Para assinar, calcula-se o hash do documento e criptografa-se esse hash com a chave privada de quem assina. Qualquer pessoa pode usar a chave pública do remetente para decifrar o hash e conferir a integridade e autoria.",
        t: "A assinatura digital garante integridade, autenticidade e não-repúdio."
    },
    {
        q: "O que significa dizer que um certificado digital foi revogado e onde essa informação é consultada?",
        c: "Revogação de Certificados",
        o: [
            "A) Significa que a senha expirou e deve ser trocada no painel da AC. É consultada no arquivo hosts do sistema.",
            "B) Significa que o certificado perdeu a validade antes do prazo devido a comprometimento de chave ou mudança de dados, sendo consultado via LCR (Lista de Certificados Revogados ou CRL) ou protocolo OCSP.",
            "C) Significa que o site utilizava protocolo HTTP e migrou para HTTPS.",
            "D) Significa que o algoritmo AES foi substituído por uma chave simétrica menor."
        ],
        a: "B",
        e: "A revogação invalida o certificado antes da data de expiração oficial. Sistemas checam listas de revogação (CRL) ou consultam o status em tempo real via protocolo OCSP (Online Certificate Status Protocol).",
        t: "Verificar a revogação é uma etapa crucial na validação de conexões SSL/TLS seguras."
    },
    {
        q: "Qual é o objetivo do protocolo TLS (Transport Layer Security) — sucessor espiritual do SSL — em uma aplicação web?",
        c: "TLS / HTTPS",
        o: [
            "A) Otimizar o tempo de carregamento de páginas HTML através da compressão de imagens e scripts.",
            "B) Proporcionar segurança de comunicação fim-a-fim na internet através de criptografia, autenticação de servidor e garantia de integridade.",
            "C) Substituir os bancos de dados relacionais por estruturas baseadas em blocos criptografados.",
            "D) Controlar o acesso de usuários por meio de perfis de permissão baseados em papéis (RBAC)."
        ],
        a: "B",
        e: "O TLS opera na camada de transporte (ou logo acima dela), criando um túnel seguro (HTTPS) onde os dados trocados entre o navegador e o servidor ficam protegidos contra interceptação e adulteração.",
        t: "O estabelecimento dessa conexão segura ocorre inicialmente através do chamado 'Handshake TLS'."
    },
    {
        q: "O que caracteriza um ataque do tipo 'Man-in-the-Middle' (MitM) em redes de computadores?",
        c: "Ameaças e Ataques",
        o: [
            "A) Um invasor sobrecarrega o servidor web com milhões de requisições falsas simultâneas.",
            "B) Um atacante intercepta secretamente e possivelmente altera a comunicação entre duas partes que acreditam estar se comunicando diretamente entre si.",
            "C) O roubo físico de discos rígidos em um data center para extração de arquivos em cache.",
            "D) A instalação de vírus de macro em planilhas eletrônicas compartilhadas na rede interna."
        ],
        a: "B",
        e: "No ataque MitM, o intermediário mal-intencionado fica no meio da rota dos pacotes de dados, podendo escutar ou modificar o conteúdo sem que os usuários percebam, o que é mitigado pelo uso de certificados digitais válidos e HSTS.",
        t: "Redes Wi-Fi públicas desprotegidas são cenários comuns para esse tipo de tentativa de invasão."
    },
    {
        q: "No contexto de criptografia simétrica, qual é a finalidade do 'Salt' (um dado aleatório) quando adicionado ao processo de hash de senhas?",
        c: "Armazenamento de Senhas",
        o: [
            "A) Aumentar o tamanho do arquivo de texto plano para dificultar ataques de força bruta.",
            "B) Garantir que duas pessoas que utilizem a mesma senha gerem hashes finais completamente diferentes, neutralizando ataques baseados em tabelas prontas (Rainbow Tables).",
            "C) Permitir que a senha seja recuperada facilmente pelo administrador do sistema em caso de esquecimento.",
            "D) Criptografar a conexão de rede durante o envio da senha para o servidor backend."
        ],
        a: "B",
        e: "O Salt adiciona uma sequência de caracteres aleatórios única a cada senha antes de aplicar a função hash. Assim, senhas iguais geram hashes totalmente distintos nas tabelas do banco de dados.",
        t: "O uso de Salt em conjunto com funções lentas como Argon2 ou Bcrypt é padrão ouro para segurança de senhas."
    },
    {
        q: "Qual dos seguintes algoritmos é amplamente reconhecido e utilizado como padrão global para criptografia simétrica de blocos?",
        c: "Algoritmos Criptográficos",
        o: [
            "A) RSA",
            "B) Diffie-Hellman",
            "C) AES (Advanced Encryption Standard)",
            "D) MD5"
        ],
        a: "C",
        e: "O AES (Advanced Encryption Standard) é o algoritmo de criptografia simétrica padrão da indústria e do governo norte-americano, operando em blocos de 128 bits com chaves de 128, 192 ou 256 bits.",
        t: "O MD5 é uma função hash antiga e insegura, enquanto o RSA é um algoritmo assimétrico."
    }
];

criptografia.forEach(x => {
    addQuestion("Criptografia e Certificação Digital", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   DART E FLUTTER
===================================================== */

const dartFlutter = [
    {
        q: "No ecossistema Dart e Flutter, qual é a principal diferença entre os tipos de widgets 'StatelessWidget' e 'StatefulWidget'?",
        c: "",
        o: [
            "A) O StatelessWidget mantém estado interno mutável, enquanto o StatefulWidget é imutável após renderizado.",
            "B) O StatelessWidget é imutável e não mantém estado interno mutável ao longo do ciclo de vida, enquanto o StatefulWidget pode gerenciar e alterar estado interno.",
            "C) O StatefulWidget executa exclusivamente em servidores web, enquanto o StatelessWidget é exclusivo para aplicativos móveis nativos.",
            "D) Não há diferença arquitetural; ambos utilizam o mesmo gerenciador de estado nativo do Dart."
        ],
        a: "B",
        e: "Widgets sem estado (Stateless) dependem apenas de suas configurações iniciais, enquanto widgets com estado (Stateful) possuem um objeto State associado que pode sofrer alterações e redesenhar a tela (setState).",
        t: "Sempre dê preferência a StatelessWidget quando o componente for estático para otimizar a performance."
    },
    {
        q: "Qual modificador de palavra-chave na linguagem Dart é utilizado para declarar variáveis que podem ser calculadas em tempo de execução, mas cujo valor é atribuído uma única vez e permanece imutável após a inicialização?",
        c: "final vs const",
        o: [
            "A) var",
            "B) dynamic",
            "C) final",
            "D) static"
        ],
        a: "C",
        e: "A palavra-chave `final` define uma variável que só pode ser configurada uma vez. Já o `const` define uma constante estática avaliada obrigatoriamente em tempo de compilação.",
        t: "Cuidado para não confundir: `const` é mais restrito que `final` por exigir valor conhecido antes mesmo de rodar o aplicativo."
    },
    {
        q: "No Flutter, qual é o papel fundamental do motor gráfico de renderização (como o Impeller ou o antigo Skia) na arquitetura do framework?",
        c: "",
        o: [
            "A) Traduzir diretamente o código Dart para componentes nativos específicos de UI (como botões nativos do Android e iOS).",
            "B) Desenhar os pixels diretamente na tela utilizando gráficos acelerados por hardware, ignorando a árvore de widgets nativa do sistema operacional.",
            "C) Gerenciar exclusivamente as requisições de rede HTTP e a persistência local via SQLite.",
            "D) Executar a máquina virtual Dart em segundo plano em um thread separado de I/O."
        ],
        a: "B",
        e: "O Flutter utiliza uma abordagem de renderização própria (cross-platform non-native components), desenhando os elementos usando seu próprio motor gráfico, o que garante alta performance e consistência visual entre diferentes plataformas.",
        t: "Isso explica por que um botão no Flutter se parece exatamente igual no iOS e no Android por padrão."
    },
    {
        q: "Qual método é obrigatório em qualquer classe que herda de StatelessWidget ou StatefulWidget em Flutter?",
        c: "",
        o: [
            "A) initState()",
            "B) render()",
            "C) build()",
            "D) create()"
        ],
        a: "C",
        e: "O método build(BuildContext context) é obrigatório e descreve a parte da interface do usuário representada por este widget.",
        t: "O método build é chamado sempre que o widget precisa ser renderizado novamente."
    },
    {
        q: "O que o operador de segurança contra nulos (null-safety) '??' faz em Dart?",
        c: "",
        o: [
            "A) Lança uma exceção se a variável for nula.",
            "B) Retorna o operando à esquerda se ele não for nulo; caso contrário, retorna o operando à direita.",
            "C) Força o compilador a ignorar erros de nulidade.",
            "D) Converte um tipo inteiro para string de forma segura."
        ],
        a: "B",
        e: "O operador de coalescência nula (??) retorna a expressão à esquerda se ela não for nula; se for, avalia e retorna a expressão à direita.",
        t: "É ideal para definir valores padrão de forma concisa."
    },
    {
        q: "Qual componente do Flutter é mais indicado para criar uma lista longa e dinâmica de itens de forma eficiente, carregando apenas os elementos visíveis na tela sob demanda?",
        c: "",
        o: [
            "A) Column",
            "B) ListView",
            "C) ListView.builder",
            "D) Stack"
        ],
        a: "C",
        e: "O ListView.builder constrói os itens sob demanda, conforme eles entram na área visível da tela, otimizando o uso de memória em listas extensas.",
        t: "Nunca utilize Column para listas grandes com muitos elementos para evitar problemas de desempenho."
    },
    {
        q: "O que são Isolate em Dart?",
        c: "",
        o: [
            "A) Componentes visuais isolados que não afetam o layout principal.",
            "B) Threads independentes que possuem sua própria memória heap, permitindo processamento concorrente sem bloquear a thread principal (UI thread).",
            "C) Funções assíncronas baseadas em Future e async/await.",
            "D) Bibliotecas de terceiros para gerenciar requisições HTTP seguras."
        ],
        a: "B",
        e: "Em Dart, o código roda na thread principal (event loop). Para tarefas pesadas de CPU, usam-se Isolates, que rodam em paralelo com memórias separadas.",
        t: "Isolates ajudam a manter a interface fluida mesmo durante cálculos complexos."
    },
    {
        q: "Como é chamada a linguagem de programação principal utilizada para desenvolver aplicativos em Flutter?",
        c: "",
        o: [
            "A) JavaScript",
            "B) TypeScript",
            "C) Kotlin",
            "D) Dart"
        ],
        a: "D",
        e: "Flutter utiliza a linguagem Dart, desenvolvida pelo Google, que suporta compilação JIT (Just-In-Time) para desenvolvimento rápido e AOT (Ahead-Of-Time) para produção.",
        t: "Dart possui tipagem forte e suporta orientação a objetos."
    },
    {
        q: "Qual é a utilidade do arquivo pubspec.yaml em um projeto Flutter?",
        c: "",
        o: [
            "A) Configurar as regras de estilização CSS do aplicativo.",
            "B) Gerenciar dependências do projeto, fontes, ativos (imagens) e metadados gerais.",
            "C) Compilar o código nativo para iOS e Android simultaneamente.",
            "D) Executar os testes unitários automatizados."
        ],
        a: "B",
        e: "O arquivo pubspec.yaml é o manifesto do projeto, onde declaramos pacotes externos, fontes locais e assets de imagens.",
        t: "Qualquer alteração de dependência exige a execução do comando pub get."
    },
    {
        q: "No contexto de programação assíncrona em Dart, qual é a diferença essencial entre um Future e um Stream?",
        c: "",
        o: [
            "A) Future lida com um único valor assíncrono futuro, enquanto Stream lida com uma sequência de eventos ou múltiplos valores ao longo do tempo.",
            "B) Future roda em uma thread separada, enquanto Stream roda na thread principal.",
            "C) Stream é síncrono e Future é assíncrono.",
            "D) Não há diferença prática; ambos são sinônimos para Promises."
        ],
        a: "A",
        e: "Um Future representa a computação de um único valor que estará disponível no futuro. Um Stream é como uma tubulação de dados que pode emitir múltiplos eventos ao longo do tempo.",
        t: "Streams são amplamente utilizados para manipulação de dados em tempo real."
    }
];

dartFlutter.forEach(x => {
    addQuestion("Dart e Flutter", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

console.log("Total de questões:", questions.length);
