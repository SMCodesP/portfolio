![Icone](https://smcodes.tk/gold.png)


# **DDL-Economy**

## Description

Esse plugin tem a função de criação de economia com integrações a dashboards, para um uso viável e inovador a players.

## Integrações

### Dependências

- Vault

### Opcionais

- DDL-Tags

# Config

## Permissions

### General permission

- ddl.smcodes.money.general (Essa permissão deixa o player com permissões básicas, podendo ser burlada usando outras permissões, ele deixa o player executar os seguintes comandos » {

    - ***money*** (Esse comando faz com que o player visualize seu próprio money);

    - ***money {player}*** (Esse comando tem a função de visualizar money de outros players);

    - ***money top*** (Visualizar o top 10 jogadores mais ricos);
    
    - ***money pay {player} {quantia}*** (Essa comando faz com que o player de uma quantia de seu money a outro)
  
  }).


- ddl.smcodes.money.admin (Essa permissão da acesso ao player comandos restritos comado » ({

    - ***money set {player} {quantia}*** (Esse comando serve para o player ter acesso a setar money a outros player)

    - ***money remove {player} {quantia}*** (Essa permissão serve para remover uma quantia de money a um player)

    - ***money add {player} {quantia}*** (Com esse comando pode-se adicionar uma quantia de money a outro player sem a perda de money em ambas partes)

    - ***money spy*** (Com esse comando o player pode esconder sua quantia de money, **Atenção**: caso o player execute esse comando não será visto no money top e nem pode obter tag)

  }))

### **Permissões exclusiva**

**Membro**

- ddl.smcodes.money.view (Essa permissão deixa o player visualizar seu money);

- ddl.smcodes.money.other (Com essa permissão o player pode visualizar o money de outros jogadores);

- ddl.smcodes.money.top (Usando essa permissão o player pode visualizar a quantia dos 10 jogadores mais ricos presentes no servidor);

- ddl.smcodes.money.pay (Essa permissão da acesso ao player pagar uma quantia de money a outros jogadores);

**Admin**

- ddl.smcodes.money.set (Ela da acesso ao player setar money a outros player);

- ddl.smcodes.money.remove (Com essa permissão pode remover uma quantia de money de outros players);

- ddl.smcodes.money.add (Essa permissão da acesso ao player adicionar uma quantia a outro player, sem remover de ambas partes);

- ddl.smcodes.money.spy (O player com essa permissão pode esconder o money que ele está)

## Customization

- O configurador pode trocar o nome da moeda, modificando de acordo com o desejável desse modo.
    ```yaml
    Name: "&cSafiras"
    ```
- O configurador pode trocar do player quer estiver com o maior nome.
    ```yaml
    Tag_top: "&8[Rico&8]"
    ```
- Também pode ser trocada a quantidade de money ao player entrar pela primeira vez.
    ```yaml
    InitialMoney: 200.0
    ```
- Recomandamos que só troque essa configuração se souber oque está fazendo, caso não for usar recursos avançados, como integrações de terceiros ou modificações não troque do padrão.
    
    Caso coloque **-1** a troca de cache vai ser real time, não recomendamos caso use uma hospedagem de baixa conexão, o padrão vem com 3 minutos de delay, não é recomendável para uma integração de dashboard.

    Para uma integração de dashboard recomendamos o uso de nossa API, caso por algum motivo nossa API estiver offline você pode fazer uma por conta própria ou usar alguma outra alternativa, você pode saber mais pedindo informações para nosso suporte, estaremos de braços aberto para recebe-lo.
    ```yaml
    Delay: 180000
    ```

### **Warn** » Nossa API citada está em manutenção, então caso queira fazer uma extensão ao plugin porfavor contate a um suporte



Copyright © 2020 [Samuel Pereira da Silva](https://github.com/SMCodesP)
