![Icone](https://spetacularnetwork.xyz/furnace.png)


# **DDL-Furnace**

## Description

Esse plugin tem a função da criação de uma fornalha personalizada, esse plugin tem como objetivo dificultar a alcançe dis jogadores ao seus proprios objetivos, ou seja ele faz com que os players tem uma maior participação dentro do jogo e uma integração a momentos difíceis sobre sua economia.

## Integrações

### Dependências

- Vault

### Opcionais

- DDL-Tags

# Config

## Permissions

### General permission

- ddl.smcodes.furnace.general (Essa permissão deixa o player com permissões básicas, podendo ser burlada usando outras permissões, ele deixa o player executar os seguintes comandos e funções » {

    - **/furnaces** (Esse comando tem como função fazer um display de dashboard as estatísticas diante a seus eventos, como quantos minerioes já foram esquentado usando sua conta, quantas fornalhas estão construídas atualmente mostrando as coordenadas da própria, temos como objetivo fazer um sistema de amizades e gerenciamento quantos amigos o jogador pode dar acesso a suas fornalhas, porém isso será apenas em breve);

    - ***Criação de fornalha*** (O player tem acesso a criar fornalhas com o sistema básico de placas);
    
    - ***Remover fornalha*** (Com isso o jogador pode remover apenas suas próprias fornalhas). Isso apenas deixa retirar a fornalha porém não faz o drop da fornalha.
  
  }).


- ddl.smcodes.furnace.admin (Essa permissão da acesso ao player comandos e eventos restritos como » ({

    - **/furnace remove {player} {furnace_id/all}** (Com esse comando o admin pode destruir uma fornalha específica ou todas de um jogador);

    - **/furnaces {player}** (Com isso o admin pode listar as fornalhas de um player específico);

    - **/furnace forcesave** (Esse comando é bem auto descritível, com ele o admin pode forcar um save no banco de dados, ou seja ele força com que todos os dados que estão sendo gerenciados em cache são reservados diretamente no banco de dados de forma física, acabando com um rísco de dados perdidos, porém esse comando pode gerar um pouco de lag, e como todos os sistemas tem ríscos, esse comando pode concluir em dados duplicados, estamos corrigindo esse "bug" o mais rapido possível, porém não é nosso sistema que causa o bug, o responsável por esse bug são influênciadores ao nosso próprio plugin, ou seja estamos construíndo nossas próprias e fazendo construbuições aos criadores desses sistemas, como bases para corrigir esse tipo de bug, para mais informações estamos abertos para providênciar esse tipo de suporte).

  }))

### **Permissões exclusiva**

**Membro**

- ddl.smcodes.furnace.view (Essa permissão deixa o player visualizar suas estatísticas);

- ddl.smcodes.furnace.other (Com essa permissão o player pode visualizar as estatísticas de outros jogadores);

- ddl.smcodes.furnace.create (Usando essa permissão o player pode criar fornalhas de forma livre);

**Admin**

- ddl.smcodes.furnace.remove (Com essa permissão o admin pode remover a(s) de um jogador);

- ddl.smcodes.furnace.forcesave (O admin com essa permissão pode forçar o salvamento de dados do plugin).

## Customization

Esse plugin em específico não tem muitas customizações, esse plugin tem um objetivo bem nichado, ou seja tem um público bem específico, caso você queira uma configuração mais avançada pode contatar a nossa equipe.

- Você pode configurar a quantidade necessária de bloco de cobblestone para a construção de uma fornalha.
    ```yaml
    Blocos: 200.0
    ```


Copyright © 2020 [Samuel Pereira da Silva](https://github.com/SMCodesP)
