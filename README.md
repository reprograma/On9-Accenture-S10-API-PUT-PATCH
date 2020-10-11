# -On9-Accenture-S10-API-PUT-PATCH


# Revisão 

Para uma interação eficaz entre clientes (aplicação) e servidores (computador), deve haver uma transferência eficiente de dados. É aqui que o HTTP se torna útil. Ele é projetado de forma a permitir que as informações sejam enviadas em um formato que possa ser entendido tanto pelo cliente quanto pelo servidor. O HTTP funciona como um protocolo de solicitação-resposta entre um navegador / aplicativo e um computador que hospeda um site. Chamar ou enviar várias solicitações HTTP pode ser feito usando vários métodos. As solicitações **PUT e PATCH** também fazem parte dos métodos HTTP.

# PUT 

PUT é um método de modificação de recursos onde o cliente envia dados que atualizam todo o recurso. É usado para definir as informações de uma entidade completamente. PUT é semelhante ao POST no sentido de que pode criar recursos, mas faz isso quando há um URI definido. PUT sobrescreve toda a entidade se ela já existir e cria um novo recurso se não existir.

Por exemplo, quando você deseja alterar o primeiro nome de uma pessoa em um banco de dados, você precisa enviar todo o recurso ao fazer uma solicitação PUT.

```
{“primeiroNome": "Jéssica", "sobrenome": "Osko”}
```
Para fazer uma solicitação PUT, você precisa enviar os dois parâmetros: o primeiro e o último nome.

# PATCH

Ao contrário do PUT, PATCH aplica uma atualização parcial ao recurso.

Isso significa que você só precisa enviar os dados que deseja atualizar e não afetará ou alterará mais nada. Portanto, se você deseja atualizar o primeiro nome, será necessário enviar apenas o primeiro parâmetro; o primeiro nome.

```
{“primeiroNome": "Jéssica"}
```


# Diferenças entre PUT e PATCH

A principal diferença é quando se trata de idempotência. HTTP PUT é considerado idempotente, pois sempre produz os mesmos resultados depois de fazer várias solicitações. Por outro lado, HTTP PATCH é basicamente considerado não idempotente. No entanto, ele pode ser idempotente com base em onde é implementado.



[Diferença do PUT para o POST](https://pt.stackoverflow.com/questions/92870/qual-%C3%A9-a-diferen%C3%A7a-entre-o-m%C3%A9todo-put-e-o-post#:~:text=PUT%20%C3%A9%20uma%20opera%C3%A7%C3%A3o%20idempotente,como%20voc%C3%AA%20enviou%2C%20independente%20do)

[Diferença de PUT para o PATCH](https://pt.stackoverflow.com/questions/217894/qual-%C3%A9-a-diferen%C3%A7a-entre-o-m%C3%A9todo-put-e-o-patch)

