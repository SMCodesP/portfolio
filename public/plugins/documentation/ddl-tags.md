![Icone](https://spetacularnetwork.xyz/name_tag.png)


# **DDL-Tags**

## Description

Esse plugin tem algumas funções bem básicas, porém com algumas integrações a mais sobre o mesmo, além de uso comum como tags no Tab & Chat contém sistema de configuração único na web contendo preview de tags e interface de configuração modular.

## Integrações

### Dependências

- Vault
- LegendChat/UltimateChat

### Opcionais

- DDL-Furnace
- DDL-Web

# Config

## Permissions

### General permission

- ddl.smcodes.tags.all (Essa permissão da acesso ao player comandos e eventos restritos como » ({

    - **/tag set {player} {tag_name/tag_id}** (Usando esse comando com essa permissão o player pode trocar a tag de outro independente qual seja, não recomendamos usar apenas esse tipo de permissão);

    - **/tag create {tag_name} {tag_priority} {tag_display}** (Além dos parâmetros passado ao executar o comando, ele requer com que o player esteja com um bloco em sua mão para representatividade gráfica dessa tag);

    - **/tag remove {tag_name/tag_id}** (Com esse comando o player pode excluir uma tag);

    - **/tag change {tag_name/tag_id} {new_tag_display}** (Ao usar esse comando o staffer pode trocar o display da tag usada);

  }))

### **Permissões exclusiva**

**Tag**

- ddl.smcodes.tags.{tag_name} (Essa permissão da ao player permissão para o uso automático de uma tag, ou seja o player que tiver essa permissão vai usar a tag com esse nome, caso ele tem duas permissões de tags diferentes vai ser usada a tag que tem uma prioridade maior);

**Membro**

- ddl.smcodes.tags.view (Mostra todas as tags disponíveis inclusive as descrições de cada uma, em forma de GUI, mostrando também todas as tags automatizadas com integrações);

**Admin**

- ddl.smcodes.tags.remove (Com essa permissão o admin pode deletar uma tag);

- ddl.smcodes.tags.create (O admin com essa permissão criar uma nova tag dentro do jogo);

- ddl.smcodes.tags.change (Essa permissão da ao staffer acesso a trocar o display de uma tag);

- ddl.smcodes.tags.set (Com essa permissão o staffer pode forçar um player a ter uma tag).

## Customization

Esse plugin é focado em tags ou seja ele não é muito customizado porém ao acessar os arquivos ou o site de configuração você pode idenficar um arquivo com as mensagens que são enviadas, elas são totalmente customizáveis, pedimos porfavor que salve o arquivo com seu enconding adequado, caso você não saiba oque é um enconding pedimos que salve como UTF-8 por padrão

- Você pode configurar as tags de integrações ao plugin.
    ```yaml
    # Integração ao vault
    Money_top: true
    Money_tag: "&2[Money TOP]"

    # Integração ao ddl-furnaces
    DDL_Furnaces: false
    DDL_Furnaces: "&8[Ferreiro]"

    # Integração ao ddl-web
    # Com ele você pode fazer a configuração online de uma forma "realtime", não necessáriamente realtime porém sempre será sincronizado ao reinicializar o plugin
    DDL_Web: false
    ```


Copyright © 2020 [Samuel Pereira da Silva](https://github.com/SMCodesP)
