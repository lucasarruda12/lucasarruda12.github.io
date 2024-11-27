# Princípios do Clean Code

- Código limpo: é fácil de entender e fácil de alterar

## Débito técnico

- O conceito usado para representar o custo implícito de uma implementação solução pensada somente no agora.

## Sobre Continue, Break, GOTO

- Em geral essas práticas quebram o fluxo de execução do código e, por isso, não são considerados boas práticas.

## Nomes significativos

- Nomes que revelem propósito. No lugar de `int d`, usar `int durationInMinutes`.
- Evitar nomes enganosos. No lugar de `vector accountList`, usar `vector accounts`.
- Evitar caracteres que causam confusão: `l e 1` `O e 0`.
- Fazer distinções significativas. No lugar de:

````c++
getAccount()
e getAccountInfo
````

- Utilizar nomes pronunciáveis e buscáveis.
- Não usar prefixos ou caracteres especiais.

## Classes

Classes devem ter nomes que reflitam seu papel e responsabilidades.

````c++
// Bad
class Item {} // Representa um livro nosistema de Bibilioteca

// Better
class Livro {}
````

## Métodos / Funções

Devem ter nomes verbais que indiquem sua ação.

````
// bad
def calcular_total()

// better
def calcular_total_do_carrinho()
````

## Funções

- Funções devem ser curtas e focadas em uma única tarefa.
- O número de argumentos de uma função deve ser minimizado.
````
// Bad
def adicionarProduto(nome, valor, preco, quantidade)

// Better
class produto:
    nome,
    valor,
    preco

def adicionarProdutos(produto, quantidade)
````
- Funções devem evitar efeitos colaterais.

# Princípios de Clean Code II

## Comentários

Enfatizar que ao invés de confiar em comentários para explicar o código, o ideal é ciar um código que seja tão claro e autoexplicaativo quanto possível.

#### Comentários são sintomas

Necessidade de comentários muitas vezes indica que o código não está claro o suficiente.

#### Quando usar

- Inteção: Comentários devem ser usados para explicar as inteções por trás do código, e não o que o código está fazendo.

- Limitações: Se o código tem alguma limitação, e.g., uma solução temporária, use comentários para alertar outros.

## Formatação

Aborda formatação do código, incluindo espaçamento, identação e estrutura, destacando como um código bem formatado é mais legível.Manter a constância.

- Formatação não é luxo, mas uma necessidade.
- Um código bem formatado é mais fácil de entender porque permite que o programador se concentre no conteúdo do código e não na sua apresentação.

#### Formatação vertical

A ideia é agrupar linhas de código relacionadas para que o código seja mais compreensível e legível.

- Isso é importante porque os seres humanos leem código de cima para baixo.

- Espaçamento vertical entre conceitos: Cada linha em branco é uma dica visual que identifica um conceito novo e separado.

- Declarações relacionadas verticalmente: Coloque declarações que estejam logicamente relacionadas próximas.

- Ordenação vertical: Em geral, chamdas (dependências) de funçõesdevem apontar na direção descendente. Isso cria um bom fluxo no código-fonte, do nível alto para o nível baixo

#### Formatação horizontal

Refere-se à organizção das linhas individuais de código, destacando os elementos específicos dentro de cada linha

- Abertura e densidade horizontal: Separar o lado esquero e o direito da atribuição

```
int a = "a"
```

- Separar parâmteros da função/método e enfatizar precedência de operadores

```
int f(int a, int b, int c){
    return a*b + c // Esses espaços enfatizam a precedência entre soma e multiplicação
}
```

- Identação: A lógica de programação é hierárquica, ao invés de llinear.
    - Cada nível da hierarquia possui seu próprio escopo.

## Objetos e Estrutura de Dados

Explora a diferença entre objetos e estruturas de dados, e como manter a abstração correta

#### Princípios de OO

- Encapsulamento é um dos princípios fundamentais da programação orientada a objetos. Ele se concentrar em ocultar os detalhes internos de uma classe ou objeto e fornecer uma interface controlada por meio da qual os outros componentes podem interagir com esse objeto.

#### Classes X Estruturas

- Classes --> Objetos
    - Não devem expor os detalhes internos.
    - Interação através de métodos (comportamento).

- Estruturas --> Dados (Procedural)
    - Expõe os dados.
    - Não possuem comportamentos significativos.

#### Assimetria dado/objeto

- Dado: Difícil para adicionar novas entidades, fácil para adicionar novos comportamentos.
- Objeto: Fácil para adicionar novas entidades, difícil para adicionar novos métodos.

## Lei de Demeter

É um projeto de design de software que promove a redução do acoplamento, código mais modular e menos propenso a erros.

- Uma classe deve ter conhecimento limitado sobre as estruturas internas de outras classes
    - Um objeto deve interagir apenas com seus vizinhos próximo e não deve "conversar" com objetos que estão a várias camadas de distância (estranhos)

#### Formalização

Um método de m de uma classe c só pode invocar os métodos de:

- Dele próprio
- Objetos passados como parâmetros de m
- Objetos criados dentro de m
- Dos atributos de C
- Variáveis estáticas (globais)

# Princípios de SOLID I

Princípios voltados para arquitetura orientada a objetos.

- SOLID é um acrônimo para cinco princípios da programação orientada a objetos sugeridos por Robert C. Martin.

## Acoplamento

Dependência entre classes.

- Se a classe `pessoa` tem um elemento da classe `Endereço` nos seus atributos, dizemos que `Pessoa` está acoplada a `Endereço`.
- Uma ROT: A precisa de B para compilar ⇒ A e B estão acopladas.

- Acoplamento eferente: O número de classes das quais aquela depende
- Acoplamento aferente: O número de classes que dependem daquela

## Coesão

Quanto os elementos de uma classe estão relacionados e trabalham juntos para realizar uma única responsabilidade. Indica o grau de foco e propósito de uma classe.

## Single Responsability Principle

a class should have one, and only one, reason to change.

- Uma classe deve ter uma única responsabilidade e esta responsabilidade deve ser inteiramente encapsulada pela classee

- Todos os seus serviços devem estar estreitamente alinhados com essa responsabilidade.

## Open-Closed principle

Software entities should be open for extension but closed for modification.

- No lugar de uma classe `Payment` cujos métodos recebem `PaymentMethod` como argumento e tratam cada método de pagamento como um (if, else), faz mais sentido ter `CashPayment`, `CardPayment` como classes que herdam de `Payment`.

## Liskov Substitution Principle


- "Subtypes must be substitutable for their base types".

- Se existe um comportamento na classe A, ao herdar dela, muito cuidado com os `@override`.
# Princípios de SOLID II

## Interface Segregation Principle

Clients should not be forced to depend on interfaces they do not use.

- Manter as interfaces curtas e coesas. Classes ou objetos não devem ser obrigados a implementar métodos que eles não precisam.

## Dependency Inversion Principle

High-level modules shouldnot depende on low-level modules. Both should depend on the abstractions.

# Programação defensiva

É como se proteger do inesperado (quase uma paranóia)

## Técnicas de PD

- Se proteja contra entradas invlálidas: Verifique os valores de todos os dados vindos de fones externas.
- Programas problemáticos não mentem: Se em algum momento o programa apresentou um comportamento inesperado, há um erro muito grande no código.
- Faça Design-by-contract: Técnica que foca na documentação e verificaçào dos direitos e deveres de cada "módulo" de software.
- Use assertivas: Uma assertiva é um código usado durante o desenvolvmento para confirmar o estado do código.~
    - "Se algo não pode acontecer, use assertivas para garantir que não vão"

# Princípios gerais de desenvolvimento de software

- Keep It Simple, Stupid (KISS): Uma filosofia que preconiza a simplicidade na resolução de problemas e na criação de resoluções.

- Do not Repeat Yourself (DRY): Evitar reescrever (copiar e colar) linhas de código, a fim de facilitar modificações futuras.
    - Se eu tenho 5 cópias quase idênticas do mesmo bloco de código e há necessidade de modificar alguma, eu tenho que caçar as outras 4 e decidir, uma a uma, se ela precisa ser modificada também.

- You Are not Gonna Need It (YAGNI): Fazer somente o necessário. Se a especificação pede x, não adianta tentar fazer x, y, z.

- Boy Scout Rule: Deixar o código sempre mais "limpo" do que você encontrou.

- Do not Live With Broken Windows: é uma metáfora que diz que janelas quebradas em um prédio abandonado levam a mais vandalismo e descuido.
    - Sugere que pequenos problemas não resolvidos no código podem gerar mais problemas.

# Técnicas de depuração

Depuração é o processo de identificar a causa raíz de um erro e corrigi-la.

- Depuração x testes: depurar é encontrar a causa raíz dos erros apontados nos testes.

## Metodologia de depuração

- Estabilize o erro (saiba como reproduzir)
- Localize a fonte do erro (a causa)
    - Colete dados relacionados ao erro
    - Analise os dados e crie "hipóteses" sobre a causa
    - Determine como comprovar (ou rejeitar) as hipóteses
    - Comprove ou rejeite as hipóteses
- Corrija o defeito
    - Implemente a correção
    - Teste a correção
    - Procure por erros similares

# #

- Não anotei nada

# Métricas de código

Os sistemas de software têm ficado cada vez mais complexos. Logo, é difícil garantir a qualidade do produto.

- Técnicas como revisão de código são custosas ou baseadas em amostragem.

- Prazos apertados inibem a peocupação com a qualidade.

- Para mitigar esses problemas, usamos coleta e interpretação de métricas de código.

## Métricas de complexidade

Complexidade é o grau de dificuldade de entendimento do código. QUanto maior a complexidade de um software, maior a dificuldade de utilizar, compreender e dar manutenção.

- Source Line of Code (SLOC): Contar o número de linhas lógicas (sem contar comentários) de código de um programa.
    - Pontos fortes: Fácil de coletar
    - Pontos fracos: Muito aberta a interpretações muito diferentes.

- Cyclomatic Complexity Number (CCN): Mede a complexidade estrutural de um método, de uma classe ou de qualquer unidade lógica que possa ser encontrada em um sistema de software. Faz isso avaliando os caminhos de execução possiveis: quanto mais caminhos possíveis, pior.

- Hasteald Metric: É determinado através da contagem de operadores e operandos do programa. Operandos são chaves e variáveis e Operadores são funções.

- Fan-in Fan-out: Pega um função e tenta avaliar o fluxo de informações calculando quantas vezes ela é chamada e quantas vezes ela chama outras funções. Complexidade de uma função = Length × (Fanin × Fanout)² 

- Maintanability Index: O MI é calculado a partir da correlação entre: SLOC, Métrica de Halstead e Complexidade ciclomática.

## Métricas de Orientação a Objetos

#### Métricas de dependência

- Acoplamento Aferente: Número de dependências que entram (responsabilidades)
- Acoplamento Eferente: Número de depenências que saem (dependência)

- Instabilidade (I) = CE / (CE + CA)

#### Métricas de extensibilidade

- Abstração: A = Entidades abstrtas / Total de entidades do sistema.

#### Relação entre instabilidade e abstração

Em um gráfico onde o eixo x = nível de estabilidade e o eixo y é o nível de abstração, dizemos que: quanto mais perto das extemidades (0,0) e (1,1), pior o código.
    - O ideal é que o código esteja na reta y = 1 - x
    - No ponto (0,0): Tenho um design muito rígido, o meu sistema é muito concreto e muitas coisas dependem dele: ou seja, vou ter muito problemas para fazer mudança nesse sistema.
    - No ponto (1,1): Tenho um código extremamente abstrato que não é chamado por ninguém!

#### Coesão

O seu calculo e baseado na não similaridade dos métodos com base na utilizacao dos atribuitos da classe.

- Valores baixos indicam boa subdivisão da classe analisada e implica em simplicidade do código.

# Análise estática de código

É a arte de analisar o texto do código em tempo de escrita, sem necessidade de executar o programa. Tem como objetivo:

- Compreender melhor o código.
- Identificar potenciais problemas de forma prematura.
- Acompanhar a qualidade do código produzido.
- Verificar o cumprimento de regras preestabelecidas.

## Tipos de AEC

- Verificação por estilo
- Verificação de boas práticas
- Verificação por bugs

## Ferramentas indicadas

- Checkstyle: Verifica o código Java é compatível com regras de codificação especificadas. Algumas dessas são: Comentários Javadoc para as classes, Convenções de nomenclaturas, práticas de construção de classes e mais!

- Snyk: Plataforma de segurança do desenvolvedor para proteger o código. Pode ser usado em várias linguagens.

- Spot bugs: Busca bugs em programas java, procurando por instâncias de "padrões de bugs" (códigos que provavelmente são erros). A ferramenta verifica mais de 400 padrões de bugs.

- PMD: Busca falhas de programação comuns. Além disso, inclui CPD, um detector de copy-and-paste.
