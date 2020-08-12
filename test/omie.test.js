describe('Omie', () => {
  'use strict';

  const expect = require('chai').expect;
  const common = require('./common');
  const Omie = require('..');
  const appSecret = common.appSecret;
  const appKey = common.appKey;

  it('exports the constructor', () => {
    expect(Omie).to.be.a('function');
  });

  it('throws an error when required options missing or invalid', () => {
    const msg = 'Missing or invalid options';

    expect(() => new Omie()).to.throw(Error, msg);
    expect(() => new Omie({})).to.throw(Error, msg);
    expect(() => new Omie({ appKey })).to.throw(Error, msg);
    expect(() => new Omie({ appSecret })).to.throw(Error, msg);
  });

  it('makes the new operator optional', () => {
    const omie = Omie({ appSecret, appKey });
    expect(omie).to.be.an.instanceof(Omie);
  });

  it('baseUrl is properly set', () => {
    const omie = new Omie({ appKey, appSecret });
    expect(omie.baseUrl).to.be.equal('https://app.omie.com.br/api/v1');
  });

  it('instantiates all resources', () => {
    const omie = new Omie({ appKey, appSecret });

    expect(omie.geral).to.undefined;
    expect(omie.produtos).to.undefined;
    expect(omie.crm).to.undefined;
    expect(omie.financas).to.undefined;
    expect(omie.estoque).to.undefined;
    expect(omie.servicos).to.undefined;
    expect(omie.contador).to.undefined;

    omie.registerAll();

    expect(omie.geral.clientes.IncluirCliente).to.be.a('function');
    expect(omie.produtos.pedido.IncluirPedido).to.be.a('function');
    expect(omie.crm.contas.IncluirConta).to.be.a('function');
    expect(omie.financas.contapagar.IncluirContaPagar).to.be.a('function');
    expect(omie.estoque.ajuste.IncluirAjusteEstoque).to.be.a('function');
    expect(omie.servicos.servico.IncluirCadastroServico).to.be.a('function');
    expect(omie.contador.xml.ListarDocumentos).to.be.a('function');
  });

  it('allows to instantiate specific resources', () => {
    const omie = new Omie({ appKey, appSecret });

    expect(omie.geral).to.undefined;
    expect(omie.produtos).to.undefined;
    expect(omie.crm).to.undefined;
    expect(omie.financas).to.undefined;
    expect(omie.estoque).to.undefined;
    expect(omie.servicos).to.undefined;
    expect(omie.contador).to.undefined;

    omie.registerEndpoints(['geral/clientes', 'produtos/pedido']);

    expect(omie.geral.clientes.AlterarCliente).to.be.a('function');
    expect(omie.geral.clientes.AssociarCodIntCliente).to.be.a('function');
    expect(omie.geral.clientes.ConsultarCliente).to.be.a('function');
    expect(omie.geral.clientes.ExcluirCliente).to.be.a('function');
    expect(omie.geral.clientes.IncluirCliente).to.be.a('function');
    expect(omie.geral.clientes.IncluirClientesPorLote).to.be.a('function');
    expect(omie.geral.clientes.ListarClientes).to.be.a('function');
    expect(omie.geral.clientes.ListarClientesResumido).to.be.a('function');
    expect(omie.geral.clientes.UpsertCliente).to.be.a('function');
    expect(omie.geral.clientes.IncluirCliente).to.be.a('function');

    expect(omie.produtos.pedido.AlterarPedidoVenda).to.be.a('function');
    expect(omie.produtos.pedido.ConsultarPedido).to.be.a('function');
    expect(omie.produtos.pedido.IncluirPedido).to.be.a('function');
    expect(omie.produtos.pedido.ListarPedidos).to.be.a('function');
    expect(omie.produtos.pedido.StatusPedido).to.be.a('function');
    expect(omie.produtos.pedido.TrocarEtapaPedido).to.be.a('function');

    expect(omie.crm).to.undefined;
    expect(omie.financas).to.undefined;
    expect(omie.estoque).to.undefined;
    expect(omie.servicos).to.undefined;
    expect(omie.contador).to.undefined;
  });
});
