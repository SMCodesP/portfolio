<p align="center"><img width="128" src="https://www.spetacularnetwork.xyz/barrier.png" /></p>

# **Plugin Name**

## Description

Esse plugin tem a função de (função), para (motivo).

## Integrações

### Dependências

- Vault

### Opcionais

- Holographic Displays
- System
- DDL-Tagss

## Config

### Permissions

- ddl.smcodes.[permission] (Essa permissão serve para o player ter acesso a {função})

### Customization

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