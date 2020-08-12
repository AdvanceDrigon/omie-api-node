<!-- prettier-ignore -->  
# Omie Node Api

Trying to encapsulate omie ERP API in a more easy to use interface with
promises.

## How to use

Instantiate the Omie class with your appKey and appSecret

```js
const Omie = require('omie-node-api');
const appSecret = 'YOUR_APP_SECRET';
const appKey = 'YOUR_APP_KEY';
const OmieClient = new Omie({ appSecret, appKey });
```

## Endpoints registration

You can register all endpoints by doing

```js
OmieClient.registerAll();
```

or just register the ones you need by passing their endpoints in an Array

```js
OmieClient.registerEndpoints(['geral/clientes', 'geral/paises']);
```

## Calling the API

After instantiating and registering all or some endpoints, you can call the API like this.

```js
/**
 * Calling the api when endpoint = 'geral/clientes'
 *
 * @param {Object} payload request payload
 * @param {(Object|undefined)} headers Extra headers (optional)
 **/
OmieClient.geral.clientes
  .IncluirCliente(payload, headers)
  .then((body) => {
    // do something
  })
  .catch((err) => {
    // fail and do something
  });
```

Visit the docs or check `/resources/resources.json` to check which methods are
available for each endpoint.

### Valid endpoints

`geral/clientetag` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/clientetag)  
`geral/clientes` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/clientes)  
`geral/projetos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/projetos)  
`geral/empresas` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/empresas)  
`geral/departamentos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/departamentos)  
`geral/categorias` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/categorias)  
`geral/parcelas` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/parcelas)  
`geral/tpativ` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/tpativ)  
`geral/cidades` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/cidades)  
`geral/paises` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/paises)  
`geral/contacorrente` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/contacorrente)  
`geral/bancos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/bancos)  
`geral/tiposdoc` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/tiposdoc)  
`geral/tipocc` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/tipocc)  
`geral/dre` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/dre)  
`geral/produtos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/produtos)  
`geral/prodcaract` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/prodcaract)  
`geral/malha` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/malha)  
`geral/familias` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/familias)  
`geral/unidade` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/unidade)  
`geral/cenarios` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/cenarios)  
`geral/vendedores` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/vendedores)  
`geral/caracteristicas` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/caracteristicas)  
`geral/meiospagamento` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/geral/meiospagamento)  
`produtos/cnae` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/cnae)  
`produtos/requisicaocompra` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/requisicaocompra)  
`produtos/pedidocompra` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/pedidocompra)  
`produtos/op` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/op)  
`produtos/formaspagcompras` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/formaspagcompras)  
`produtos/ncm` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/ncm)  
`produtos/cfop` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/cfop)  
`produtos/icmscst` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/icmscst)  
`produtos/icmscsosn` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/icmscsosn)  
`produtos/icmsorigem` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/icmsorigem)  
`produtos/piscst` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/piscst)  
`produtos/cofinscst` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/cofinscst)  
`produtos/ipicst` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/ipicst)  
`produtos/ipienq` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/ipienq)  
`produtos/tpcalc` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/tpcalc)  
`produtos/cest` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/cest)  
`produtos/pedido` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/pedido)  
`produtos/pedidovendaanexos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/pedidovendaanexos)  
`produtos/pedidovendafat` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/pedidovendafat)  
`produtos/pedidoetapas` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/pedidoetapas)  
`produtos/cte` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/cte)  
`produtos/remessa` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/remessa)  
`produtos/cupomfiscalincluir` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/cupomfiscalincluir)  
`produtos/cupomfiscal` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/cupomfiscal)  
`produtos/formaspagvendas` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/formaspagvendas)  
`produtos/tabelaprecos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/tabelaprecos)  
`produtos/etapafat` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/etapafat)  
`produtos/nfconsultar` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/nfconsultar)  
`produtos/notafiscalutil` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/produtos/notafiscalutil)  
`crm/contas` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/contas)  
`crm/contatos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/contatos)  
`crm/oportunidades` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/oportunidades)  
`crm/tarefas` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/tarefas)  
`crm/solucoes` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/solucoes)  
`crm/fases` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/fases)  
`crm/usuarios` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/usuarios)  
`crm/status` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/status)  
`crm/motivos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/motivos)  
`crm/tipos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/tipos)  
`crm/parceiros` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/parceiros)  
`crm/finders` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/finders)  
`crm/origens` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/origens)  
`crm/concorrentes` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/concorrentes)  
`crm/verticais` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/crm/verticais)  
`financas/contapagar` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/financas/contapagar)  
`financas/contareceber` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/financas/contareceber)  
`financas/contacorrentelancamentos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/financas/contacorrentelancamentos)  
`financas/extrato` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/financas/extrato)  
`financas/caixa` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/financas/caixa)  
`financas/pesquisartitulos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/financas/pesquisartitulos)  
`financas/mf` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/financas/mf)  
`financas/contapagaranexos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/financas/contapagaranexos)  
`financas/contareceberanexos` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/financas/contareceberanexos)  
`estoque/comprador` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/estoque/comprador)  
`estoque/produtofornecedor` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/estoque/produtofornecedor)  
`estoque/ajuste` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/estoque/ajuste)  
`estoque/consulta` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/estoque/consulta)  
`estoque/movestoque` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/estoque/movestoque)  
`servicos/servico` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/servico)  
`servicos/osp` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/osp)  
`servicos/os` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/os)  
`servicos/nfse` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/nfse)  
`servicos/listaservico` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/listaservico)  
`servicos/contrato` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/contrato)  
`servicos/tipotrib` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/tipotrib)  
`servicos/lc116` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/lc116)  
`servicos/nbs` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/nbs)  
`servicos/ibpt` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/ibpt)  
`servicos/contratotpfat` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/servicos/contratotpfat)  
`contador/xml` -> [Ver Documentaçao](https://app.omie.com.br/api/v1/contador/xml)

### This is not an official module

Still under development
